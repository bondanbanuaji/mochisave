'use client'

import { useSession } from 'next-auth/react'
import { useQuery } from '@tanstack/react-query'
import { formatDate, formatFileSize } from '@/lib/utils/formatters'
import { FiDownload, FiClock, FiCheck, FiX, FiLoader } from 'react-icons/fi'
import Link from 'next/link'

export default function HistoryPage() {
  const { data: session, status } = useSession()

  const { data: downloads, isLoading } = useQuery({
    queryKey: ['history'],
    queryFn: async () => {
      const response = await fetch('/api/history')
      if (!response.ok) throw new Error('Failed to fetch history')
      return response.json()
    },
    enabled: !!session,
  })

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold mb-4">Sign In Required</h1>
          <p className="text-gray-600 mb-8">
            You need to sign in to view your download history
          </p>
          <Link href="/" className="btn btn-primary">
            Go to Homepage
          </Link>
        </div>
      </div>
    )
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return <FiCheck className="text-success" />
      case 'FAILED':
        return <FiX className="text-error" />
      case 'PROCESSING':
        return <FiLoader className="text-primary animate-spin" />
      default:
        return <FiClock className="text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return 'badge-success'
      case 'FAILED':
        return 'badge-error'
      case 'PROCESSING':
        return 'badge-primary'
      default:
        return 'badge-ghost'
    }
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Download History</h1>
          <p className="text-gray-600">Track and manage all your downloads</p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : !downloads || downloads.length === 0 ? (
          <div className="text-center py-20">
            <FiDownload className="mx-auto text-6xl text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold mb-2">No Downloads Yet</h2>
            <p className="text-gray-600 mb-8">
              Start downloading your favorite content to see your history here
            </p>
            <Link href="/" className="btn btn-primary">
              Start Downloading
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {downloads.map((download: any) => (
              <div key={download.id} className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        {getStatusIcon(download.status)}
                        <h3 className="font-bold text-lg line-clamp-1">
                          {download.title || 'Untitled'}
                        </h3>
                        <span className={`badge ${getStatusColor(download.status)}`}>
                          {download.status}
                        </span>
                      </div>
                      
                      <div className="text-sm text-gray-600 space-y-1">
                        <p className="line-clamp-1">{download.url}</p>
                        <div className="flex items-center space-x-4">
                          <span className="badge badge-outline">{download.platform}</span>
                          {download.quality && (
                            <span className="badge badge-outline">{download.quality}</span>
                          )}
                          {download.fileSize && (
                            <span>{formatFileSize(download.fileSize)}</span>
                          )}
                          <span>{formatDate(download.createdAt)}</span>
                        </div>
                      </div>
                    </div>

                    {download.status === 'COMPLETED' && download.fileUrl && (
                      <a
                        href={download.fileUrl}
                        download
                        className="btn btn-primary btn-sm"
                      >
                        <FiDownload className="mr-2" />
                        Download
                      </a>
                    )}
                  </div>

                  {download.error && (
                    <div className="alert alert-error mt-2">
                      <span className="text-sm">{download.error}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
