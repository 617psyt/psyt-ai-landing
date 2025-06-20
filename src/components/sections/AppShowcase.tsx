import { useState } from 'react'
import { Home, Baby, BookOpen, Users, Brain, MessageCircle, Target, Gamepad2 } from 'lucide-react'

const AppShowcase = () => {
  const [selectedApp, setSelectedApp] = useState(0)

  const apps = [
    {
      icon: Home,
      name: 'Family Harmony',
      category: 'Family Communication',
      description: 'Communication app that helps families navigate daily decisions and conflicts with behavioral science insights',
      features: [
        'Conflict resolution guidance',
        'Family decision-making tools',
        'Communication pattern analysis',
        'Relationship strengthening activities'
      ],
      color: 'from-purple-500 to-blue-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      image: '/images/people-connecting.jpg'
    },
    {
      icon: Baby,
      name: 'Little Learners',
      category: 'Child Development',
      description: 'Interactive app that helps children build emotional intelligence through age-appropriate games and activities',
      features: [
        'Emotional skill building games',
        'Age-appropriate challenges',
        'Parent progress insights',
        'Social skill development'
      ],
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50 dark:bg-gray-900/20',
      image: '/images/consultation.jpg'
    },
    {
      icon: BookOpen,
      name: 'Parent Navigator',
      category: 'Parenting Support',
      description: 'Guidance app that provides research-backed advice for common parenting challenges and decisions',
      features: [
        'Personalized parenting tips',
        'Developmental milestone tracking',
        'Behavioral guidance tools',
        'Expert advice library'
      ],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      image: '/images/research-analytics.jpg'
    },
    {
      icon: Users,
      name: 'Family Time',
      category: 'Quality Time',
      description: 'Activity planner that suggests meaningful family activities based on everyone\'s interests and emotional needs',
      features: [
        'Personalized activity suggestions',
        'Family bonding assessments',
        'Stress-reducing activities',
        'Shared goal tracking'
      ],
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
      image: '/images/mindmap-visualization.jpg'
    }
  ]

  const selectedAppData = apps[selectedApp]
  const Icon = selectedAppData.icon

  return (
    <section id="app-showcase" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700/50 rounded-full px-4 py-2">
            <Brain className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-800 dark:text-purple-300">
              Real-World Behavioral Applications
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Intelligent apps for{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              every context
            </span>
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            See how The Brain powers real-world applications across all aspects of life. 
            Each app is designed with ethnographic insights to naturally support wellbeing.
          </p>
        </div>

        {/* App Selection Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {apps.map((app, index) => {
            const AppIcon = app.icon
            const isSelected = selectedApp === index
            
            return (
              <button
                key={index}
                onClick={() => setSelectedApp(index)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                  isSelected 
                    ? `${app.bgColor} border-opacity-50 border-slate-400 dark:border-slate-600 shadow-lg` 
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md'
                }`}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${app.color} rounded-xl flex items-center justify-center mb-4 ${
                  isSelected ? 'scale-110' : ''
                } transition-transform duration-300`}>
                  <AppIcon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{app.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{app.category}</p>
              </button>
            )
          })}
        </div>

        {/* Selected App Detail */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* App Description */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${selectedAppData.color} rounded-2xl flex items-center justify-center`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{selectedAppData.name}</h3>
                  <p className="text-slate-500">{selectedAppData.category}</p>
                </div>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                {selectedAppData.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Wellness Features</h4>
              <div className="space-y-3">
                {selectedAppData.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${selectedAppData.color} rounded-full mt-2.5 flex-shrink-0`}></div>
                    <span className="text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Family Impact */}
            <div className={`p-6 ${selectedAppData.bgColor} rounded-2xl border border-slate-200 dark:border-slate-700`}>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Family Impact</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                The Brain analyzes family interactions to provide personalized guidance that strengthens 
                relationships, supports child development, and helps families navigate challenges together 
                with research-backed insights.
              </p>
            </div>
          </div>

          {/* App Visual */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={selectedAppData.image}
                alt={selectedAppData.name}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Family Indicators */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Family Active</span>
                </div>
              </div>

              <div className="absolute top-1/2 -left-4 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 transform -translate-y-1/2">
                <div className="flex items-center space-x-2">
                  <Icon className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Brain Powered</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Adapting</span>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className={`absolute inset-0 bg-gradient-to-r ${selectedAppData.color} rounded-2xl transform rotate-3 -z-10 opacity-20`}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl transform -rotate-3 -z-20"></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to help your family thrive?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Join our beta testing program to be among the first families to experience The Brain-powered applications.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#signup')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join Beta Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppShowcase
