import { useState, useEffect } from 'react'
import { ChevronRight, Users, BookOpen, Home } from 'lucide-react'
import { MentalClarityIcon } from '../icons/MentalClarityIcon'
import { SophisticatedNeuralNetwork } from '../icons/NeuralNetworkHeart'

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['teams', 'families', 'professionals', 'children', 'leaders', 'parents', 'workplaces', 'relationships']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSignup = () => {
    const element = document.querySelector('#signup')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTheBrain = () => {
    const element = document.querySelector('#the-brain')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-purple-50 dark:from-black dark:to-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700/50 rounded-full px-4 py-2">
              {/* Sophisticated Neural Network Icon */}
              <SophisticatedNeuralNetwork 
                className="h-4 w-4 text-purple-600 dark:text-purple-400" 
                size={16} 
              />
              <span className="text-sm font-medium text-purple-800 dark:text-purple-300">
                Therapeutic AI • Psychology-Trained Models
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Neural wellness<br />
                that help{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {words[currentWord]}
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transform scale-x-0 animate-pulse"></span>
                </span>
                <br />thrive
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                Introducing "The Brain"—a specialized therapeutic AI system trained in psychology and therapy. 
                Using our Gemma-based foundation model with domain-specific knowledge bases, we power multiple 
                mental health applications through one intelligent backend. All AI insights are guided by humans 
                in the loop, delivering grounded mental wellness technology.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span className="text-slate-700 dark:text-slate-300">Work & life-focused</span>
              </div>
              <div className="flex items-center space-x-3">
                <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-slate-700 dark:text-slate-300">Research-backed</span>
              </div>
              <div className="flex items-center space-x-3">
                <Home className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span className="text-slate-700 dark:text-slate-300">Accessible to all</span>
              </div>
              <div className="flex items-center space-x-3">
                <MentalClarityIcon className="h-5 w-5 text-purple-600 dark:text-purple-400" size={20} />
                <span className="text-slate-700 dark:text-slate-300">Genuinely helpful</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToSignup}
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Join Beta Waitlist
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={scrollToTheBrain}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:border-purple-600 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
              >
                Learn About The Brain
              </button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/hero-brain-connections.jpg"
                alt="Family-Focused Behavioral Science Platform"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Nuanced understanding</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Human-insights</span>
                </div>
              </div>

              <div className="absolute top-1/2 -left-4 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 transform -translate-y-1/2">
                <div className="flex items-center space-x-2">
                  {/* Neural Network Brain Icon */}
                  <svg className="h-4 w-4 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none">
                    {/* Brain outline */}
                    <path
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      fill="none"
                    />
                    {/* Neural network nodes */}
                    <circle cx="8" cy="8" r="1" fill="currentColor" opacity="0.7" />
                    <circle cx="16" cy="8" r="1" fill="currentColor" opacity="0.7" />
                    <circle cx="12" cy="10" r="1" fill="currentColor" opacity="0.7" />
                    <circle cx="10" cy="14" r="1" fill="currentColor" opacity="0.7" />
                    <circle cx="14" cy="14" r="1" fill="currentColor" opacity="0.7" />
                    <circle cx="12" cy="17" r="1" fill="currentColor" opacity="0.7" />
                    {/* Neural network connections */}
                    <line x1="8" y1="8" x2="12" y2="10" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                    <line x1="16" y1="8" x2="12" y2="10" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                    <line x1="12" y1="10" x2="10" y2="14" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                    <line x1="12" y1="10" x2="14" y2="14" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                    <line x1="10" y1="14" x2="12" y2="17" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                    <line x1="14" y1="14" x2="12" y2="17" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                    <line x1="8" y1="8" x2="10" y2="14" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                    <line x1="16" y1="8" x2="14" y2="14" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                  </svg>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">The Brain</span>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-gray-900/20 dark:to-gray-800/20 rounded-2xl transform rotate-3 -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl transform -rotate-3 -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
