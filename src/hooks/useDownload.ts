import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { MediaInfo } from '@/types'

export function useDownload() {
  const [mediaInfo, setMediaInfo] = useState<MediaInfo | null>(null)

  const analyzeMutation = useMutation({
    mutationFn: async (url: string) => {
      const response = await fetch('/api/download/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      })
      
      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to analyze URL')
      }
      
      return response.json()
    },
    onSuccess: (data) => {
      setMediaInfo(data)
    },
  })

  const downloadMutation = useMutation({
    mutationFn: async ({ url, quality, format }: { url: string; quality?: string; format?: string }) => {
      const response = await fetch('/api/download/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, quality, format }),
      })
      
      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to start download')
      }
      
      return response.json()
    },
  })

  return {
    mediaInfo,
    analyze: analyzeMutation.mutate,
    isAnalyzing: analyzeMutation.isPending,
    analyzeError: analyzeMutation.error,
    download: downloadMutation.mutate,
    isDownloading: downloadMutation.isPending,
    downloadError: downloadMutation.error,
    downloadData: downloadMutation.data,
  }
}
