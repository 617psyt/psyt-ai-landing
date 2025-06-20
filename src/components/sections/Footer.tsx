import { Mail, MapPin, Shield, Home, Github, Twitter, Linkedin } from 'lucide-react'
import { MentalClarityIcon } from '../icons/MentalClarityIcon'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    platform: [
      { label: 'Psyt', href: '#psyt' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Apps', href: '#app-showcase' },
      { label: 'About', href: '#about' },
      { label: 'Beta Access', href: '#signup' }
    ]
  }

  // Social links removed - no active accounts yet

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <MentalClarityIcon className="h-8 w-8 text-purple-400" size={32} />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                psyt.ai
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed">
              Building mental clarity first applications that help modern life and work thrive through 
              real-world behavioral insights designed for everyday situations.
            </p>

            {/* Social links removed - keeping it real */}

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-slate-300">hello@psyt.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-slate-300">Global, Remote-First</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div className="lg:col-span-3">
            <div>
              <h3 className="font-semibold text-white mb-4">Platform</h3>
              <ul className="flex flex-wrap gap-x-8 gap-y-3">
                {footerLinks.platform.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Simple Bottom Border */}
        <div className="border-t border-slate-800 dark:border-slate-700 pt-8 mt-12">
          <div className="text-center">
            <p className="text-slate-400 text-sm">
              © 2025 psyt.ai • Mental clarity first • Currently in beta development
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>© {currentYear} psyt.ai. All rights reserved.</span>
              <div className="flex items-center space-x-2">
                <MentalClarityIcon className="h-4 w-4 text-purple-400" size={16} />
                <span>Built with care for real life</span>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-purple-400" />
                <span>Privacy First</span>
              </div>
              <div className="flex items-center space-x-2">
                <Home className="h-4 w-4 text-blue-400" />
                <span>Human Focused</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-white transform rotate-180"></div>
        </div>
      </button>
    </footer>
  )
}

export default Footer
