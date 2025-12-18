import axios from 'axios'
import { MediaInfo } from '@/types'

export async function scrapeInstagramMedia(url: string): Promise<MediaInfo> {
  try {
    const mediaId = extractInstagramMediaId(url)
    const response = await simulateInstagramAPI(mediaId)
    
    return {
      platform: 'INSTAGRAM',
      url,
      title: response.caption || 'Instagram Media',
      description: response.caption,
      thumbnail: response.thumbnail,
      duration: response.duration,
      author: response.username,
      availableQualities: response.isVideo ? ['HD', 'SD'] : ['Original'],
      availableFormats: response.isVideo ? ['MP4'] : ['JPG'],
    }
  } catch (error) {
    throw new Error('Failed to scrape Instagram media')
  }
}

function extractInstagramMediaId(url: string): string {
  const patterns = [
    /instagram\.com\/p\/([a-zA-Z0-9_-]+)/,
    /instagram\.com\/reel\/([a-zA-Z0-9_-]+)/,
    /instagram\.com\/tv\/([a-zA-Z0-9_-]+)/,
  ]
  
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  
  throw new Error('Invalid Instagram URL')
}

async function simulateInstagramAPI(mediaId: string) {
  return {
    caption: 'Sample Instagram Post',
    thumbnail: 'https://via.placeholder.com/640x640',
    duration: 15,
    username: '@sampleuser',
    isVideo: true,
    downloadUrl: 'https://example.com/instagram-media.mp4',
  }
}

export async function downloadInstagramMedia(
  url: string,
  quality: string = 'HD'
): Promise<string> {
  const mediaInfo = await scrapeInstagramMedia(url)
  return 'https://example.com/downloaded-instagram.mp4'
}
