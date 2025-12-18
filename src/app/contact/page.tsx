'use client'

import { useState } from 'react'
import { FiMail, FiMessageSquare, FiUser, FiSend } from 'react-icons/fi'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, send to API
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            Have a question? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Whether you have a question, feedback, or need support, our team is here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white p-3 rounded-lg">
                  <FiMail size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-gray-600">support@mochisave.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary text-white p-3 rounded-lg">
                  <FiMessageSquare size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Live Chat</h3>
                  <p className="text-gray-600">Available 24/7 for premium users</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent text-white p-3 rounded-lg">
                  <FiUser size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Social Media</h3>
                  <p className="text-gray-600">Follow us @mochisave</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
              <h3 className="font-bold mb-2">⚡ Quick Response</h3>
              <p className="text-sm text-gray-600">
                We typically respond within 24 hours on weekdays. Premium users get priority support with responses within 4 hours.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Send us a Message</h2>
              
              {submitted && (
                <div className="alert alert-success mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Message sent successfully!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Subject</span>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="select select-bordered"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="feature">Feature Request</option>
                    <option value="bug">Bug Report</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    className="textarea textarea-bordered h-32"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  <FiSend className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-lg">How fast do you respond?</h3>
                <p className="text-gray-600">
                  We aim to respond within 24 hours on weekdays. Premium users get priority support.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-lg">Do you offer phone support?</h3>
                <p className="text-gray-600">
                  Currently, we offer email and chat support. Phone support is available for enterprise plans.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-lg">Can I request a new feature?</h3>
                <p className="text-gray-600">
                  Absolutely! We love hearing from users. Select "Feature Request" in the form above.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-lg">How do I report a bug?</h3>
                <p className="text-gray-600">
                  Use the form above and select "Bug Report". Include as much detail as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
