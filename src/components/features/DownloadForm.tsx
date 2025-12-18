'use client'

import { useState } from 'react'
import { detectPlatform, validateUrl } from '@/lib/utils/validators'
import { FiDownload, FiAlertCircle } from 'react-icons/fi'

export default function DownloadForm() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [platform, setPlatform] = useState<string | null>(null)

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setUrl(value)
    setError('')
    
    if (value) {
      const detected = detectPlatform(value)
      setPlatform(detected)
    } else {
      setPlatform(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateUrl(url)) {
      setError('Please enter a valid URL')
      return
    }

    if (!platform) {
      setError('Platform not supported. Please check the URL.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/download/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      })

      if (!response.ok) {
        throw new Error('Failed to analyze URL')
      }

      const data = await response.json()
      console.log('Media info:', data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={url}
            onChange={handleUrlChange}
            placeholder="Paste your link here (Facebook, Instagram, TikTok, YouTube, Twitter)..."
            className="input input-bordered w-full h-14 pr-32 text-lg"
            disabled={loading}
          />
          {platform && (
            <div className="absolute right-32 top-1/2 -translate-y-1/2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
              {platform}
            </div>
          )}
          <button
            type="submit"
            disabled={loading || !url}
            className="btn btn-primary absolute right-2 top-1/2 -translate-y-1/2 h-10"
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              <>
                <FiDownload className="mr-2" />
                Download
              </>
            )}
          </button>
        </div>

        {error && (
          <div className="alert alert-error">
            <FiAlertCircle />
            <span>{error}</span>
          </div>
        )}
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        <p>Supported platforms: Facebook, Instagram, TikTok, YouTube, Twitter/X</p>
        <p className="mt-1">Free users: 10 downloads per day • Premium: Unlimited</p>
      </div>
    </div>
  )
}
