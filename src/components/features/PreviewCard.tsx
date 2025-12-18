'use client'

import { MediaInfo } from '@/types'
import { formatDuration } from '@/lib/utils/formatters'
import { FiDownload, FiClock, FiUser } from 'react-icons/fi'
import { useState } from 'react'

interface PreviewCardProps {
  mediaInfo: MediaInfo
  onDownload: (quality: string, format: string) => void
}

export default function PreviewCard({ mediaInfo, onDownload }: PreviewCardProps) {
  const [selectedQuality, setSelectedQuality] = useState(
    mediaInfo.availableQualities?.[0] || 'HD'
  )
  const [selectedFormat, setSelectedFormat] = useState(
    mediaInfo.availableFormats?.[0] || 'MP4'
  )

  return (
    <div className="card bg-base-100 shadow-2xl max-w-3xl mx-auto">
      <figure className="relative aspect-video bg-gray-200">
        {mediaInfo.thumbnail ? (
          <img
            src={mediaInfo.thumbnail}
            alt={mediaInfo.title || 'Preview'}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FiDownload className="text-6xl text-gray-400" />
          </div>
        )}
        {mediaInfo.duration && (
          <div className="absolute bottom-2 right-2 badge badge-neutral">
            <FiClock className="mr-1" size={12} />
            {formatDuration(mediaInfo.duration)}
          </div>
        )}
      </figure>

      <div className="card-body">
        <h2 className="card-title text-2xl">
          {mediaInfo.title || 'Untitled Media'}
        </h2>

        {mediaInfo.author && (
          <div className="flex items-center space-x-2 text-gray-600">
            <FiUser size={16} />
            <span>{mediaInfo.author}</span>
          </div>
        )}

        {mediaInfo.description && (
          <p className="text-gray-600 line-clamp-2">{mediaInfo.description}</p>
        )}

        <div className="divider"></div>

        <div className="grid grid-cols-2 gap-4">
          {mediaInfo.availableQualities && mediaInfo.availableQualities.length > 0 && (
            <div>
              <label className="label">
                <span className="label-text font-semibold">Quality</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={selectedQuality}
                onChange={(e) => setSelectedQuality(e.target.value)}
              >
                {mediaInfo.availableQualities.map((quality) => (
                  <option key={quality} value={quality}>
                    {quality}
                  </option>
                ))}
              </select>
            </div>
          )}

          {mediaInfo.availableFormats && mediaInfo.availableFormats.length > 0 && (
            <div>
              <label className="label">
                <span className="label-text font-semibold">Format</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
              >
                {mediaInfo.availableFormats.map((format) => (
                  <option key={format} value={format}>
                    {format}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="card-actions justify-end mt-4">
          <button
            className="btn btn-primary btn-lg w-full"
            onClick={() => onDownload(selectedQuality, selectedFormat)}
          >
            <FiDownload className="mr-2" />
            Download {selectedQuality} {selectedFormat}
          </button>
        </div>

        <div className="alert alert-info mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span className="text-sm">
            Downloads are for personal use only. Please respect copyright laws.
          </span>
        </div>
      </div>
    </div>
  )
}
