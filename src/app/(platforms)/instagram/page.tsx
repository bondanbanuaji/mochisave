import DownloadForm from '@/components/features/DownloadForm'
import { FiDownload, FiCheck } from 'react-icons/fi'

export default function InstagramDownloaderPage() {
  const features = [
    'Download Instagram photos and videos',
    'Save Instagram Reels in HD quality',
    'Download Instagram Stories before they expire',
    'Extract IGTV videos',
    'Support for carousel posts',
    'No watermarks on downloads',
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📷</div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Instagram Downloader
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Download Instagram posts, reels, stories, and IGTV videos in high quality
          </p>
        </div>

        <div className="mb-16">
          <DownloadForm />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Features</h2>
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
              <div className="card bg-gradient-to-br from-pink-50 to-purple-50 shadow-lg">
                <div className="card-body">
                  <div className="badge badge-primary">Step 1</div>
                  <h3 className="font-bold">Open Instagram</h3>
                  <p className="text-sm text-gray-600">
                    Find the post, reel, or story you want to download
                  </p>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg">
                <div className="card-body">
                  <div className="badge badge-secondary">Step 2</div>
                  <h3 className="font-bold">Copy Link</h3>
                  <p className="text-sm text-gray-600">
                    Tap the three dots and select "Copy Link"
                  </p>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-pink-50 to-purple-50 shadow-lg">
                <div className="card-body">
                  <div className="badge badge-accent">Step 3</div>
                  <h3 className="font-bold">Download</h3>
                  <p className="text-sm text-gray-600">
                    Paste the link above and hit download
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">💡 Pro Tip</h2>
          <p className="text-lg opacity-90">
            Premium users can download entire Instagram profiles and batch download multiple posts at once!
          </p>
        </div>
      </div>
    </div>
  )
}
