import { useState } from 'react'
import { Mail, CheckCircle, AlertCircle, Brain, Home, Shield } from 'lucide-react'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Please enter your email address')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    try {
      // Submit to Formspree endpoint
      const response = await fetch('https://formspree.io/f/xanjdbke', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          source: 'psyt.ai beta waitlist',
          timestamp: new Date().toISOString()
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Clear the email field
        setEmail('')
      } else {
        throw new Error('Form submission failed')
      }
    } catch (err) {
      console.error('Form submission error:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const benefits = [
    {
      icon: Home,
      title: 'Early Beta Access',
      description: 'Be among the first to experience The Brain-powered applications'
    },
    {
      icon: Brain,
      title: 'Shape the Future',
      description: 'Help us build apps that truly support modern life and work'
    },
    {
      icon: Shield,
      title: 'Privacy Protected',
      description: 'Your privacy is our highest priority'
    }
  ]

  if (isSubmitted) {
    return (
      <section id="signup" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-black dark:to-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-2xl">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Welcome to the Community!
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Thank you for joining our beta program. We'll be in touch soon with 
              exclusive updates and early access to mental clarity first applications.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Product Updates</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Progress updates and insights</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Home className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Beta Access</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">First to try new apps</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Brain className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Exclusive Perks</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Special beta benefits</p>
              </div>
            </div>

            <div className="text-sm text-slate-500 dark:text-slate-400">
              Keep an eye on your inbox—exciting updates are coming soon!
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="signup" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-black dark:to-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700/50 rounded-full px-4 py-2">
              <Brain className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-purple-800 dark:text-purple-300">
                Beta Testing
              </span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                Help us build apps that{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  support real life
                </span>
              </h2>

              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Join our beta testing program and help shape the future of mental clarity first technology. 
                Experience The Brain-powered apps designed for modern life and work.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <Icon className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{benefit.title}</h4>
                      <p className="text-slate-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">250+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Families signed up</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">0</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Spam emails</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100%</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Privacy protected</div>
              </div>
            </div>
          </div>

          {/* Right Column - Signup Form */}
          <div className="relative">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative z-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Join Beta Waitlist
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Get early access to apps designed for modern families
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-4 py-4 border-2 rounded-xl text-slate-900 dark:text-white bg-white dark:bg-slate-700 placeholder-slate-400 dark:placeholder-slate-400 transition-colors duration-200 ${
                        error 
                          ? 'border-red-300 dark:border-red-600 focus:border-red-500 dark:focus:border-red-400' 
                          : 'border-slate-200 dark:border-slate-600 focus:border-purple-500 dark:focus:border-purple-400'
                      } focus:outline-none`}
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                    />
                    <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  </div>
                  {error && (
                    <div className="flex items-center space-x-2 mt-2">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-red-600 dark:text-red-400">{error}</span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-slate-300 dark:bg-slate-600 text-slate-500 dark:text-slate-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
                      <span>Joining...</span>
                    </div>
                  ) : (
                    'Join Beta Waitlist'
                  )}
                </button>

                <div className="text-center">
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    By signing up, you agree to receive updates about psyt.ai applications. 
                    We respect your privacy and will never share your information. 
                    Unsubscribe anytime.
                  </p>
                </div>
              </form>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-gray-900/20 dark:to-gray-800/20 rounded-3xl transform rotate-3 -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl transform -rotate-3 -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup
