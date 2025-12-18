import { FiCheck, FiX } from 'react-icons/fi'
import Link from 'next/link'

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for casual users',
      features: [
        { text: '10 downloads per day', included: true },
        { text: 'Standard quality', included: true },
        { text: 'All platforms supported', included: true },
        { text: 'Download history (7 days)', included: true },
        { text: 'Ads supported', included: true },
        { text: 'HD/4K quality', included: false },
        { text: 'Batch download', included: false },
        { text: 'Priority support', included: false },
      ],
      cta: 'Get Started',
      href: '/',
      highlighted: false,
    },
    {
      name: 'Premium',
      price: '$9',
      period: 'per month',
      description: 'For power users',
      features: [
        { text: 'Unlimited downloads', included: true },
        { text: 'HD/4K quality', included: true },
        { text: 'All platforms supported', included: true },
        { text: 'Download history (forever)', included: true },
        { text: 'No ads', included: true },
        { text: 'Batch download (50 links)', included: true },
        { text: 'Priority processing', included: true },
        { text: 'Email support', included: true },
      ],
      cta: 'Go Premium',
      href: '#',
      highlighted: true,
    },
    {
      name: 'Pro',
      price: '$29',
      period: 'per month',
      description: 'For professionals & businesses',
      features: [
        { text: 'Everything in Premium', included: true },
        { text: 'API access', included: true },
        { text: 'Batch download (unlimited)', included: true },
        { text: 'White-label option', included: true },
        { text: 'Custom branding', included: true },
        { text: 'Priority support', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: 'SLA guarantee', included: true },
      ],
      cta: 'Contact Sales',
      href: '#',
      highlighted: false,
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card bg-white shadow-xl ${
                plan.highlighted
                  ? 'ring-4 ring-primary transform scale-105'
                  : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="badge badge-primary badge-lg">Most Popular</span>
                </div>
              )}
              
              <div className="card-body">
                <h3 className="card-title text-2xl justify-center">{plan.name}</h3>
                <div className="text-center my-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/ {plan.period}</span>
                </div>
                <p className="text-center text-gray-600 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      {feature.included ? (
                        <FiCheck className="text-success flex-shrink-0 mt-1" size={20} />
                      ) : (
                        <FiX className="text-error flex-shrink-0 mt-1" size={20} />
                      )}
                      <span className={feature.included ? '' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`btn btn-block ${
                    plan.highlighted ? 'btn-primary' : 'btn-outline'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="collapse collapse-plus bg-white">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                Can I cancel my subscription anytime?
              </div>
              <div className="collapse-content">
                <p>Yes! You can cancel your subscription at any time. Your access will continue until the end of your billing period.</p>
              </div>
            </div>
            
            <div className="collapse collapse-plus bg-white">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                What payment methods do you accept?
              </div>
              <div className="collapse-content">
                <p>We accept all major credit cards (Visa, MasterCard, American Express) through Stripe.</p>
              </div>
            </div>
            
            <div className="collapse collapse-plus bg-white">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                Is there a free trial?
              </div>
              <div className="collapse-content">
                <p>The Free plan is available forever with no credit card required. Premium features can be tried with our 7-day money-back guarantee.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
