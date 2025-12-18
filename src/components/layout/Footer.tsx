import Link from 'next/link'
import { FiDownload, FiGithub, FiTwitter, FiMail } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const platforms = [
    { name: 'Facebook', href: '/facebook' },
    { name: 'Instagram', href: '/instagram' },
    { name: 'TikTok', href: '/tiktok' },
    { name: 'YouTube', href: '/youtube' },
    { name: 'Twitter/X', href: '/twitter' },
  ]

  const company = [
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ]

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <FiDownload className="text-3xl text-primary" />
              <span className="text-2xl font-bold">MochiSave</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Download videos, photos, and audio from your favorite social media platforms in seconds!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FiGithub size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FiMail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Platforms</h3>
            <ul className="space-y-2">
              {platforms.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} MochiSave. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ by the MochiSave Team</p>
        </div>
      </div>
    </footer>
  )
}
