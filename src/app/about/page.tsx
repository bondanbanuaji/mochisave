import { FiDownload, FiUsers, FiZap, FiShield } from 'react-icons/fi'

export default function AboutPage() {
  const stats = [
    { icon: FiDownload, value: '1M+', label: 'Downloads' },
    { icon: FiUsers, value: '100K+', label: 'Active Users' },
    { icon: FiZap, value: '99.9%', label: 'Uptime' },
    { icon: FiShield, value: '100%', label: 'Secure' },
  ]

  const team = [
    { name: 'John Doe', role: 'Founder & CEO', avatar: '👨‍💼' },
    { name: 'Jane Smith', role: 'CTO', avatar: '👩‍💻' },
    { name: 'Mike Johnson', role: 'Lead Developer', avatar: '👨‍🔧' },
    { name: 'Sarah Williams', role: 'Product Manager', avatar: '👩‍💼' },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About MochiSave
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re on a mission to make social media content accessible to everyone, everywhere.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                MochiSave was born out of a simple need: to easily download and save content from social media platforms. We noticed that existing solutions were either complicated, unsafe, or riddled with ads.
              </p>
              <p>
                So we built MochiSave - a clean, fast, and secure platform that puts users first. No unnecessary steps, no hidden fees, just straightforward downloading that works.
              </p>
              <p>
                Today, we serve millions of users worldwide, helping them save memories, share content offline, and enjoy their favorite media anytime, anywhere.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="space-y-6">
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">🎯 User First</h3>
                  <p className="text-gray-600">
                    Every decision we make prioritizes the user experience.
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">🔒 Privacy & Security</h3>
                  <p className="text-gray-600">
                    Your data is encrypted and never stored longer than necessary.
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">⚡ Speed & Reliability</h3>
                  <p className="text-gray-600">
                    Fast downloads with 99.9% uptime guarantee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl opacity-90 mb-8">
            Be part of millions of users who trust MochiSave
          </p>
          <button className="btn btn-lg bg-white text-primary hover:bg-gray-100 border-0">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  )
}
