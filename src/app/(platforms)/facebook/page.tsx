import DownloadForm from '@/components/features/DownloadForm'
import { FiDownload, FiCheck } from 'react-icons/fi'

export default function FacebookDownloaderPage() {
  const features = [
    'Download Facebook videos in HD quality',
    'Save Facebook Reels without watermark',
    'Download Facebook Stories before they expire',
    'Extract photos from Facebook posts',
    'Support for public and accessible content',
    'Fast and secure downloads',
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📘</div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
            Facebook Video Downloader
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Download Facebook videos, reels, and photos in high quality for free
          </p>
        </div>

        <div className="mb-16">
          <DownloadForm />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Use Our Facebook Downloader?</h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <FiCheck className="text-success flex-shrink-0 mt-1" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">How to Download</h2>
            <div className="space-y-6">
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="badge badge-primary">Step 1</div>
                  <h3 className="font-bold">Copy Facebook URL</h3>
                  <p className="text-sm text-gray-600">
                    Go to Facebook and copy the video or post URL from your browser
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="badge badge-secondary">Step 2</div>
                  <h3 className="font-bold">Paste Link</h3>
                  <p className="text-sm text-gray-600">
                    Paste the URL into the download form above
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="badge badge-accent">Step 3</div>
                  <h3 className="font-bold">Download</h3>
                  <p className="text-sm text-gray-600">
                    Click download and save your video in seconds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="alert alert-info">
          <FiDownload />
          <div>
            <h3 className="font-bold">Note</h3>
            <p>Only publicly accessible content can be downloaded. Private videos require appropriate permissions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
