export type Platform = 'FACEBOOK' | 'INSTAGRAM' | 'TIKTOK' | 'YOUTUBE' | 'TWITTER'

export type DownloadStatus = 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED'

export type UserRole = 'FREE' | 'PREMIUM' | 'ADMIN'

export interface DownloadRequest {
  url: string
  quality?: string
  format?: string
}

export interface DownloadResponse {
  id: string
  platform: Platform
  title?: string
  thumbnail?: string
  fileUrl?: string
  fileSize?: number
  quality?: string
  format?: string
  status: DownloadStatus
  error?: string
  createdAt: Date
}

export interface MediaInfo {
  platform: Platform
  url: string
  title?: string
  description?: string
  thumbnail?: string
  duration?: number
  author?: string
  availableQualities?: string[]
  availableFormats?: string[]
}

export interface PlatformConfig {
  name: string
  slug: string
  icon: string
  color: string
  supported: string[]
  enabled: boolean
}
