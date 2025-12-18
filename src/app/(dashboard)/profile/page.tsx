'use client'

import { useSession } from 'next-auth/react'
import { FiUser, FiMail, FiCalendar, FiAward, FiDownload } from 'react-icons/fi'
import Link from 'next/link'

export default function ProfilePage() {
  const { data: session, status } = useSession()

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
            You need to sign in to view your profile
          </p>
          <Link href="/" className="btn btn-primary">
            Go to Homepage
          </Link>
        </div>
      </div>
    )
  }

  const stats = [
    { label: 'Total Downloads', value: '0', icon: FiDownload },
    { label: 'Member Since', value: 'Jan 2024', icon: FiCalendar },
    { label: 'Plan', value: session.user.role || 'FREE', icon: FiAward },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Profile</h1>

        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <div className="flex items-center space-x-6">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  {session.user.image ? (
                    <img src={session.user.image} alt={session.user.name || 'User'} />
                  ) : (
                    <div className="bg-primary text-white flex items-center justify-center text-3xl">
                      <FiUser />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{session.user.name}</h2>
                <div className="flex items-center space-x-2 text-gray-600">
                  <FiMail size={16} />
                  <span>{session.user.email}</span>
                </div>
                <div className="mt-3">
                  <span className={`badge ${
                    session.user.role === 'PREMIUM' ? 'badge-primary' :
                    session.user.role === 'ADMIN' ? 'badge-secondary' :
                    'badge-ghost'
                  } badge-lg`}>
                    {session.user.role || 'FREE'} PLAN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <stat.icon className="text-4xl text-primary mb-2" />
                <h3 className="text-3xl font-bold">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {session.user.role === 'FREE' && (
          <div className="card bg-gradient-to-r from-primary to-secondary text-white shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl">Upgrade to Premium</h2>
              <p className="opacity-90">
                Get unlimited downloads, HD quality, batch downloads, and more!
              </p>
              <div className="card-actions justify-end mt-4">
                <Link href="/pricing" className="btn bg-white text-primary hover:bg-gray-100">
                  View Plans
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Account Settings</h3>
              <div className="space-y-3">
                <Link href="/history" className="btn btn-outline btn-block justify-start">
                  <FiDownload className="mr-2" />
                  Download History
                </Link>
                <button className="btn btn-outline btn-block justify-start" disabled>
                  <FiUser className="mr-2" />
                  Edit Profile (Coming Soon)
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Subscription</h3>
              <div className="space-y-3">
                <Link href="/pricing" className="btn btn-primary btn-block">
                  Manage Subscription
                </Link>
                <p className="text-sm text-gray-600">
                  {session.user.role === 'FREE' 
                    ? 'You are currently on the Free plan. Upgrade to unlock more features.'
                    : 'Manage your premium subscription and billing details.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
