import { scrapeFacebookVideo, downloadFacebookVideo } from './facebook'
import { scrapeInstagramMedia, downloadInstagramMedia } from './instagram'
import { scrapeTikTokVideo, downloadTikTokVideo } from './tiktok'
import { scrapeYouTubeVideo, downloadYouTubeVideo } from './youtube'
import { scrapeTwitterMedia, downloadTwitterMedia } from './twitter'
import { MediaInfo } from '@/types'

export async function scrapeMedia(url: string, platform: string): Promise<MediaInfo> {
  switch (platform) {
    case 'FACEBOOK':
      return scrapeFacebookVideo(url)
    case 'INSTAGRAM':
      return scrapeInstagramMedia(url)
    case 'TIKTOK':
      return scrapeTikTokVideo(url)
    case 'YOUTUBE':
      return scrapeYouTubeVideo(url)
    case 'TWITTER':
      return scrapeTwitterMedia(url)
    default:
      throw new Error('Unsupported platform')
  }
}

export async function downloadMedia(
  url: string,
  platform: string,
  quality: string
): Promise<string> {
  switch (platform) {
    case 'FACEBOOK':
      return downloadFacebookVideo(url, quality)
    case 'INSTAGRAM':
      return downloadInstagramMedia(url, quality)
    case 'TIKTOK':
      return downloadTikTokVideo(url, quality)
    case 'YOUTUBE':
      return downloadYouTubeVideo(url, quality)
    case 'TWITTER':
      return downloadTwitterMedia(url, quality)
    default:
      throw new Error('Unsupported platform')
  }
}
