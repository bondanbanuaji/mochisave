import { z } from 'zod'

export const urlSchema = z.string().url('Please enter a valid URL')

export const downloadSchema = z.object({
  url: z.string().url('Please enter a valid URL'),
  quality: z.string().optional(),
  format: z.string().optional(),
})

export function detectPlatform(url: string): string | null {
  const patterns = {
    FACEBOOK: /^https?:\/\/(www\.|m\.)?facebook\.com\/.*/,
    INSTAGRAM: /^https?:\/\/(www\.)?instagram\.com\/.*/,
    TIKTOK: /^https?:\/\/(www\.|vm\.)?tiktok\.com\/.*/,
    YOUTUBE: /^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\/.*/,
    TWITTER: /^https?:\/\/(www\.)?(twitter\.com|x\.com)\/.*/,
  }

  for (const [platform, pattern] of Object.entries(patterns)) {
    if (pattern.test(url)) {
      return platform
    }
  }

  return null
}

export function validateUrl(url: string): boolean {
  try {
    urlSchema.parse(url)
    return true
  } catch {
    return false
  }
}

export function sanitizeUrl(url: string): string {
  try {
    const parsed = new URL(url)
    return parsed.toString()
  } catch {
    return url
  }
}
