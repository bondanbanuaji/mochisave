import DownloadForm from '@/components/features/DownloadForm'
import { FiDownload, FiCheck } from 'react-icons/fi'

export default function TwitterDownloaderPage() {
  const features = [
    'Download Twitter/X videos in HD',
    'Save Twitter GIFs',
    'Download images from tweets',
    'Support for video threads',
    'Fast and secure downloads',
    'No login required',
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🐦</div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Twitter / X Downloader
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Download videos, GIFs, and images from Twitter/X in high quality
          </p>
        </div>

        <div className="mb-16">
          <DownloadForm />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">What Can You Download?</h2>
            <div className="space-y-4">
              <div className="card bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg">
                <div className="card-body">
                  <h3 className="font-bold text-lg">📹 Videos</h3>
                  <p className="text-sm text-gray-600">
                    Download videos from tweets in the best available quality
                  </p>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-cyan-50 to-blue-50 shadow-lg">
                <div className="card-body">
                  <h3 className="font-bold text-lg">🖼️ Images</h3>
                  <p className="text-sm text-gray-600">
                    Save images from tweets in original resolution
                  </p>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg">
                <div className="card-body">
                  <h3 className="font-bold text-lg">🎬 GIFs</h3>
                  <p className="text-sm text-gray-600">
                    Download animated GIFs as MP4 video files
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Features</h2>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <FiCheck className="text-success flex-shrink-0 mt-1" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">How to Download</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Find the tweet with the media you want</li>
                  <li>Click the share icon and copy link</li>
                  <li>Paste the link in the form above</li>
                  <li>Click download and save your file</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="alert alert-warning">
          <FiDownload />
          <div>
            <h3 className="font-bold">Important</h3>
            <p>
              Only public tweets can be downloaded. Private accounts require you to be a follower.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
