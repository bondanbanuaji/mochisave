import DownloadForm from '@/components/features/DownloadForm'
import { FiDownload, FiCheck, FiMusic } from 'react-icons/fi'

export default function TikTokDownloaderPage() {
  const features = [
    'Download TikTok videos without watermark',
    'Extract audio from TikTok videos (MP3)',
    'HD quality downloads',
    'Save TikTok slideshows',
    'Download with original sound',
    'Fast processing speed',
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎵</div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
            TikTok Video Downloader
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Download TikTok videos without watermark and extract audio for free
          </p>
        </div>

        <div className="mb-16">
          <DownloadForm />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <FiDownload className="text-5xl text-primary mb-4" />
              <h3 className="card-title">No Watermark</h3>
              <p className="text-gray-600">
                Download videos without the TikTok watermark for clean content
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <FiMusic className="text-5xl text-secondary mb-4" />
              <h3 className="card-title">Audio Extraction</h3>
              <p className="text-gray-600">
                Extract and download audio from any TikTok video as MP3
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <FiCheck className="text-5xl text-success mb-4" />
              <h3 className="card-title">HD Quality</h3>
              <p className="text-gray-600">
                Get the highest quality available from TikTok servers
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Our TikTok Downloader?</h2>
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
            <h2 className="text-3xl font-bold mb-6">Quick Guide</h2>
            <div className="prose">
              <p className="text-gray-600 mb-4">
                <strong>Step 1:</strong> Open TikTok app and find the video you want to download
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Step 2:</strong> Tap the Share button and select &quot;Copy Link&quot;
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Step 3:</strong> Paste the link in the form above
              </p>
              <p className="text-gray-600">
                <strong>Step 4:</strong> Choose &quot;No Watermark&quot; or &quot;Audio Only&quot; and download!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
