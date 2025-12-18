import DownloadForm from '@/components/features/DownloadForm'
import { FiDownload, FiCheck, FiVideo } from 'react-icons/fi'

export default function YouTubeDownloaderPage() {
  const features = [
    'Download YouTube videos in 4K, 1080p, 720p',
    'Extract audio as MP3 with high quality',
    'Download thumbnails in high resolution',
    'Support for playlists (Premium)',
    'Fast download speeds',
    'No software installation required',
  ]

  const qualities = [
    { name: '4K', resolution: '3840x2160', size: '~500MB' },
    { name: '1080p', resolution: '1920x1080', size: '~200MB' },
    { name: '720p', resolution: '1280x720', size: '~100MB' },
    { name: '480p', resolution: '854x480', size: '~50MB' },
    { name: 'Audio', resolution: 'MP3', size: '~5MB' },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎬</div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            YouTube Video Downloader
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Download YouTube videos in HD, 4K, or extract audio as MP3
          </p>
        </div>

        <div className="mb-16">
          <DownloadForm />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Available Qualities</h2>
            <div className="space-y-3">
              {qualities.map((quality, index) => (
                <div key={index} className="card bg-base-100 shadow-lg">
                  <div className="card-body py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{quality.name}</h3>
                        <p className="text-sm text-gray-600">{quality.resolution}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Avg Size</p>
                        <p className="font-semibold">{quality.size}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

            <div className="alert alert-info">
              <FiVideo />
              <div>
                <h3 className="font-bold">Note</h3>
                <p className="text-sm">
                  Please respect copyright and use downloads for personal use only.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">🚀 Premium Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold mb-2">Playlist Download</h3>
              <p className="opacity-90">Download entire playlists at once</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">No Limits</h3>
              <p className="opacity-90">Unlimited downloads per day</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Priority Speed</h3>
              <p className="opacity-90">Faster processing and downloads</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
