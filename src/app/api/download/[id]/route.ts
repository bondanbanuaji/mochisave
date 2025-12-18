import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const download = await prisma.download.findUnique({
      where: { id: params.id },
    })

    if (!download) {
      return NextResponse.json(
        { error: 'Download not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(download)
  } catch (error) {
    console.error('Error fetching download:', error)
    return NextResponse.json(
      { error: 'Failed to fetch download' },
      { status: 500 }
    )
  }
}
