import axios from 'axios'
import { MediaInfo } from '@/types'

export async function scrapeTwitterMedia(url: string): Promise<MediaInfo> {
  try {
    const tweetId = extractTwitterTweetId(url)
    const response = await simulateTwitterAPI(tweetId)
    
    return {
      platform: 'TWITTER',
      url,
      title: response.text || 'Twitter Media',
      description: response.text,
      thumbnail: response.thumbnail,
      duration: response.duration,
      author: response.username,
      availableQualities: response.isVideo ? ['HD', 'SD'] : ['Original'],
      availableFormats: response.isVideo ? ['MP4'] : ['JPG'],
    }
  } catch (error) {
    throw new Error('Failed to scrape Twitter media')
  }
}

function extractTwitterTweetId(url: string): string {
  const patterns = [
    /twitter\.com\/[^/]+\/status\/(\d+)/,
    /x\.com\/[^/]+\/status\/(\d+)/,
  ]
  
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  
  throw new Error('Invalid Twitter URL')
}

async function simulateTwitterAPI(tweetId: string) {
  return {
    text: 'Sample tweet with media',
    thumbnail: 'https://via.placeholder.com/640x360',
    duration: 45,
    username: '@twitteruser',
    isVideo: true,
    downloadUrl: 'https://example.com/twitter-media.mp4',
  }
}

export async function downloadTwitterMedia(
  url: string,
  quality: string = 'HD'
): Promise<string> {
  const mediaInfo = await scrapeTwitterMedia(url)
  return 'https://example.com/downloaded-twitter.mp4'
}
