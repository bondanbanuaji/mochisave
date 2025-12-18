import DownloadForm from '@/components/features/DownloadForm'
import { FiDownload, FiZap, FiShield, FiStar, FiTrendingUp, FiAward } from 'react-icons/fi'
import Link from 'next/link'

export default function HomePage() {
  const features = [
    {
      icon: <FiZap className="text-4xl text-primary" />,
      title: 'Lightning Fast',
      description: 'Download your favorite content in seconds with our optimized servers',
    },
    {
      icon: <FiShield className="text-4xl text-secondary" />,
      title: 'Secure & Private',
      description: 'Your data is encrypted and we never store your downloaded content',
    },
    {
      icon: <FiStar className="text-4xl text-accent" />,
      title: 'High Quality',
      description: 'Get the best quality available including HD, 4K, and audio-only options',
    },
    {
      icon: <FiTrendingUp className="text-4xl text-success" />,
      title: 'Multi-Platform',
      description: 'Support for Facebook, Instagram, TikTok, YouTube, and Twitter/X',
    },
    {
      icon: <FiDownload className="text-4xl text-primary" />,
      title: 'No Watermarks',
      description: 'Download TikTok videos without watermarks and get clean content',
    },
    {
      icon: <FiAward className="text-4xl text-secondary" />,
      title: 'Batch Download',
      description: 'Premium users can download multiple files at once',
    },
  ]

  const platforms = [
    {
      name: 'Facebook',
      icon: '📘',
      color: 'from-blue-500 to-blue-600',
      href: '/facebook',
      features: ['Videos', 'Photos', 'Reels', 'Stories'],
    },
    {
      name: 'Instagram',
      icon: '📷',
      color: 'from-pink-500 to-purple-600',
      href: '/instagram',
      features: ['Posts', 'Reels', 'Stories', 'IGTV'],
    },
    {
      name: 'TikTok',
      icon: '🎵',
      color: 'from-black to-gray-800',
      href: '/tiktok',
      features: ['Videos', 'Audio', 'No Watermark'],
    },
    {
      name: 'YouTube',
      icon: '🎬',
      color: 'from-red-500 to-red-600',
      href: '/youtube',
      features: ['Videos', 'Audio', 'Thumbnails'],
    },
    {
      name: 'Twitter/X',
      icon: '🐦',
      color: 'from-blue-400 to-blue-500',
      href: '/twitter',
      features: ['Videos', 'Photos', 'GIFs'],
    },
  ]

  const steps = [
    {
      number: '1',
      title: 'Paste Link',
      description: 'Copy the URL from your social media platform and paste it here',
    },
    {
      number: '2',
      title: 'Choose Quality',
      description: 'Select your preferred quality and format options',
    },
    {
      number: '3',
      title: 'Download',
      description: 'Click download and save your content instantly',
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
              Universal Social Media Downloader
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Download videos, photos, and audio from your favorite platforms in seconds! 🚀
            </p>
          </div>

          <DownloadForm />

          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center space-x-2">
              <FiStar className="text-accent" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiDownload className="text-primary" />
              <span>1M+ Downloads</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiShield className="text-success" />
              <span>100% Secure</span>
            </div>
          </div>
        </div>
      </section>

      <section id="platforms" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Supported Platforms</h2>
            <p className="text-xl text-gray-600">Download from your favorite social media sites</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <Link
                key={platform.name}
                href={platform.href}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 duration-300"
              >
                <div className="card-body">
                  <div className={`text-6xl mb-4 bg-gradient-to-r ${platform.color} w-20 h-20 rounded-2xl flex items-center justify-center`}>
                    {platform.icon}
                  </div>
                  <h3 className="card-title text-2xl">{platform.name}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {platform.features.map((feature) => (
                      <span key={feature} className="badge badge-outline">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary btn-sm">
                      Download Now →
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose MochiSave?</h2>
            <p className="text-xl text-gray-600">The best features for your download needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card bg-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
              >
                <div className="card-body items-center text-center">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="card-title text-xl">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Three simple steps to download</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Downloading?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who trust MochiSave for their download needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#" className="btn btn-lg bg-white text-primary hover:bg-gray-100 border-0">
              Start Free
            </Link>
            <Link href="/pricing" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-primary">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
