import { useState } from 'react'
import { Brain, Shield, Zap, Users, Target, TrendingUp, Sparkles } from 'lucide-react'

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: Brain,
      title: 'Psychometric Intelligence',
      subtitle: 'Deep personality understanding',
      description: 'Advanced AI trained in multiple psychological disciplines analyzes behavioral patterns to understand your unique psychological profile.',
      benefits: [
        'Validates personality through behavioral analysis',
        'Understands cognitive and emotional patterns',
        'Adapts to individual psychological needs',
        'Provides personalized wellness strategies'
      ],
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
      image: '/images/personality-analysis.png'
    },
    {
      icon: Zap,
      title: 'Temporal Analytics',
      subtitle: 'Time-aware wellness support',
      description: 'Sophisticated tracking of your wellness patterns over time, predicting and preventing mental health challenges before they arise.',
      benefits: [
        'Tracks wellness trends over time',
        'Predicts potential stress periods',
        'Identifies optimal intervention timing',
        'Prevents mental health crises'
      ],
      color: 'from-purple-500 to-blue-600',
      bgColor: 'bg-purple-50',
      image: '/images/research-analytics.jpg'
    },
    {
      icon: Brain,
      title: 'Stealth Integration',
      subtitle: 'Invisible wellness support',
      description: 'Mental health support seamlessly woven into everyday app experiences without feeling clinical or intrusive.',
      benefits: [
        'No stigma or intimidation',
        'Natural app experiences',
        'Subconscious wellness building',
        'Sustainable long-term habits'
      ],
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
      image: '/images/people-connecting.jpg'
    },
    {
      icon: Shield,
      title: 'Privacy-First Design',
      subtitle: 'Your data stays yours',
      description: 'Advanced privacy protection with local processing and anonymized learning ensures your personal information remains secure.',
      benefits: [
        'Local data processing',
        'Anonymized pattern learning',
        'No personal data sharing',
        'GDPR and HIPAA compliant'
      ],
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-purple-50',
      image: '/images/consultation.jpg'
    }
  ]

  const platformCapabilities = [
    {
      icon: Users,
      title: 'Multi-App Ecosystem',
      description: 'Single AI brain powers multiple app types for comprehensive wellness coverage'
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Interventions precisely timed and personalized for maximum wellness impact'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'Platform intelligence grows smarter with every user interaction'
    },
    {
      icon: Sparkles,
      title: 'Adaptive Experiences',
      description: 'App experiences that evolve and adapt to your changing wellness needs'
    }
  ]

  const activeFeatureData = features[activeFeature]
  const ActiveIcon = activeFeatureData.icon

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-2">
            <Sparkles className="h-4 w-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-800">
              Advanced Platform Features
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Sophisticated technology,{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              simple experience
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            psyt.ai combines real-world behavioral insights with cutting-edge AI research and human-centered design 
            to create the most advanced mental wellness platform ever built.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isActive = activeFeature === index
            
            return (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                  isActive 
                    ? `${feature.bgColor} border-opacity-50 border-slate-400 shadow-lg` 
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 ${
                  isActive ? 'scale-110' : ''
                } transition-transform duration-300`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-slate-500">{feature.subtitle}</p>
              </button>
            )
          })}
        </div>

        {/* Active Feature Detail */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Feature Description */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${activeFeatureData.color} rounded-2xl flex items-center justify-center`}>
                  <ActiveIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{activeFeatureData.title}</h3>
                  <p className="text-slate-500">{activeFeatureData.subtitle}</p>
                </div>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                {activeFeatureData.description}
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Benefits</h4>
              <div className="space-y-3">
                {activeFeatureData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${activeFeatureData.color} rounded-full mt-2.5 flex-shrink-0`}></div>
                    <span className="text-slate-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Note */}
            <div className={`p-6 ${activeFeatureData.bgColor} rounded-2xl border border-slate-200`}>
              <h4 className="font-semibold text-slate-900 mb-2">Technical Excellence</h4>
              <p className="text-slate-600 text-sm">
                Built on peer-reviewed research and validated through extensive testing with 
                mental health professionals and cognitive scientists.
              </p>
            </div>
          </div>

          {/* Feature Visual */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={activeFeatureData.image}
                alt={activeFeatureData.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Dynamic Indicators */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700">Active</span>
                </div>
              </div>

              <div className="absolute top-1/2 -left-4 bg-white p-3 rounded-xl shadow-lg border border-slate-200 transform -translate-y-1/2">
                <div className="flex items-center space-x-2">
                  <ActiveIcon className="h-4 w-4 text-slate-600" />
                  <span className="text-xs font-medium text-slate-700">AI Powered</span>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className={`absolute inset-0 bg-gradient-to-r ${activeFeatureData.color} rounded-2xl transform rotate-3 -z-10 opacity-20`}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl transform -rotate-3 -z-20"></div>
          </div>
        </div>

        {/* Platform Capabilities */}
        <div className="bg-white rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Platform Capabilities
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformCapabilities.map((capability, index) => {
              const Icon = capability.icon
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto">
                    <Icon className="h-8 w-8 text-slate-600" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-slate-900">{capability.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{capability.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Research Foundation */}
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Built on Scientific Research
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">50K+</div>
                <div className="text-slate-600 text-sm">Research Papers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">7+</div>
                <div className="text-slate-600 text-sm">Psychology Disciplines</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">99.2%</div>
                <div className="text-slate-600 text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-slate-600 text-sm">Learning System</div>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Every feature is validated through peer-reviewed research and tested with mental health 
              professionals to ensure both efficacy and safety in mental wellness applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
