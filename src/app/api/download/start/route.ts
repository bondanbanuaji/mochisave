import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { detectPlatform, validateUrl } from '@/lib/utils/validators'
import { downloadMedia, scrapeMedia } from '@/lib/scrapers'
import { checkRateLimit } from '@/lib/utils/rateLimit'

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    const body = await request.json()
    const { url, quality, format } = body

    if (!url || !validateUrl(url)) {
      return NextResponse.json(
        { error: 'Invalid URL provided' },
        { status: 400 }
      )
    }

    const platform = detectPlatform(url)
    
    if (!platform) {
      return NextResponse.json(
        { error: 'Unsupported platform' },
        { status: 400 }
      )
    }

    // Check rate limit
    const identifier = session?.user?.id || request.ip || 'anonymous'
    const userRole = session?.user?.role || 'FREE'
    const rateLimitResult = await checkRateLimit(identifier, userRole)

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error: 'Rate limit exceeded',
          remaining: rateLimitResult.remaining,
          reset: rateLimitResult.reset,
        },
        { status: 429 }
      )
    }

    // Create download record
    const download = await prisma.download.create({
      data: {
        userId: session?.user?.id,
        platform: platform as any,
        url,
        quality,
        format,
        status: 'PENDING',
      },
    })

    // Process download in background
    processDownload(download.id, url, platform, quality || 'HD', format || 'MP4')

    return NextResponse.json({
      id: download.id,
      status: download.status,
      message: 'Download started successfully',
      remaining: rateLimitResult.remaining,
    })
  } catch (error) {
    console.error('Error starting download:', error)
    return NextResponse.json(
      { error: 'Failed to start download' },
      { status: 500 }
    )
  }
}

async function processDownload(
  downloadId: string,
  url: string,
  platform: string,
  quality: string,
  format: string
) {
  try {
    // Update status to processing
    await prisma.download.update({
      where: { id: downloadId },
      data: { status: 'PROCESSING' },
    })

    // Get media info
    const mediaInfo = await scrapeMedia(url, platform)

    // Download the file
    const fileUrl = await downloadMedia(url, platform, quality)

    // Update with completed status
    await prisma.download.update({
      where: { id: downloadId },
      data: {
        status: 'COMPLETED',
        title: mediaInfo.title,
        thumbnail: mediaInfo.thumbnail,
        fileUrl,
        metadata: mediaInfo,
      },
    })
  } catch (error) {
    console.error('Error processing download:', error)
    await prisma.download.update({
      where: { id: downloadId },
      data: {
        status: 'FAILED',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
    })
  }
}
