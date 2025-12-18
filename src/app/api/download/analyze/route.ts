import { NextRequest, NextResponse } from 'next/server'
import { detectPlatform, validateUrl } from '@/lib/utils/validators'
import { scrapeMedia } from '@/lib/scrapers'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { url } = body

    if (!url || !validateUrl(url)) {
      return NextResponse.json(
        { error: 'Invalid URL provided' },
        { status: 400 }
      )
    }

    const platform = detectPlatform(url)
    
    if (!platform) {
      return NextResponse.json(
        { error: 'Unsupported platform. Please check the URL.' },
        { status: 400 }
      )
    }

    // Use actual scraper
    const mediaInfo = await scrapeMedia(url, platform)

    return NextResponse.json(mediaInfo)
  } catch (error) {
    console.error('Error analyzing URL:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to analyze URL' },
      { status: 500 }
    )
  }
}
