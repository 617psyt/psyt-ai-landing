import { Smartphone, TrendingUp, Shield, Zap, Lightbulb, Target } from 'lucide-react'
import { MentalClarityIcon } from '../icons/MentalClarityIcon'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Smartphone,
      title: 'Use Apps Naturally',
      description: 'Download and use apps powered by psyt.ai just like any other app—journal, play games, plan your day, or meditate.',
      color: 'from-blue-500 to-indigo-600',
      features: ['No special setup required', 'Familiar app experiences', 'Works on any device']
    },
    {
      number: '02',
      icon: Lightbulb,
      title: 'The Brain Learns',
      description: 'Our AI engine quietly analyzes your interactions, learning your patterns, preferences, and emotional rhythms.',
      color: 'from-purple-500 to-violet-600',
      features: ['Privacy-first analysis', 'Continuous learning', 'Personalized insights']
    },
    {
      number: '03',
      icon: Target,
      title: 'Wellness Happens',
      description: 'Experience subtle but powerful wellness interventions woven seamlessly into your app usage—you feel better without thinking about it.',
      color: 'from-purple-500 to-blue-600',
      features: ['Invisible support', 'Natural interventions', 'Evidence-based methods']
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'You Thrive',
      description: 'Over time, build resilience, emotional intelligence, and mental wellness through consistent, gentle support integrated into your daily digital life.',
      color: 'from-orange-500 to-red-600',
      features: ['Long-term growth', 'Sustainable habits', 'Measurable progress']
    }
  ]

  const principles = [
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data is processed locally and anonymized. The Brain learns patterns, not personal details.',
      color: 'text-blue-600'
    },
    {
      icon: Shield,
      title: 'Wellness First',
      description: 'Every feature is designed with mental wellness as the primary outcome, not engagement or retention.',
      color: 'text-purple-600'
    },
    {
      icon: Zap,
      title: 'Science First',
      description: 'Built on validated psychological research and continuously tested with mental health professionals.',
      color: 'text-purple-600'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2">
            <MentalClarityIcon className="h-4 w-4 text-slate-600" size={16} />
            <span className="text-sm font-medium text-slate-700">
              Simple Yet Sophisticated
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            How{' '}
            <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
              it works
            </span>
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our therapeutic AI system integrates mental health insights into everyday applications. 
            Using psychology-trained models and RAG architecture, we're building the foundation for 
            mental clarity first technology—currently in beta development.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-16 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 1

            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-6 ${isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-slate-200">{step.number}</div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {step.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full`}></div>
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={`relative ${isEven ? 'lg:col-start-1' : ''}`}>
                  <div className="relative z-10">
                    <div className={`w-full h-80 bg-gradient-to-br ${step.color} rounded-2xl shadow-2xl flex items-center justify-center`}>
                      <Icon className="h-24 w-24 text-white/20" />
                      
                      {/* Step number overlay */}
                      <div className="absolute top-6 left-6 text-6xl font-bold text-white/10">
                        {step.number}
                      </div>
                      
                      {/* Animated elements */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <div className="absolute top-4 right-4 w-4 h-4 bg-white/30 rounded-full animate-ping"></div>
                        <div className="absolute bottom-8 left-8 w-3 h-3 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute top-1/2 right-8 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-slate-100 rounded-2xl transform rotate-3 -z-10"></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Connection line */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-96 w-px bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 -mt-80"></div>

        {/* Core Principles */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Our Core Principles
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon
              return (
                <div key={index} className="text-center space-y-4">
                  <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                    <Icon className={`h-8 w-8 ${principle.color}`} />
                  </div>
                  
                  <h4 className="text-xl font-bold text-slate-900">{principle.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{principle.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to experience the future of mental wellness?
            </h3>
            <p className="text-slate-600 mb-8">
              Be among the first to experience mental clarity first technology. Join our beta program and help shape the future of therapeutic AI applications.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#signup')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-900 text-white font-semibold rounded-xl hover:from-slate-800 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
