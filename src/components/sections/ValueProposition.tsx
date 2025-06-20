import { Brain, Home, Users, Baby, BookOpen, Lightbulb, Briefcase } from 'lucide-react'

const ValueProposition = () => {
  const benefits = [
    {
      icon: Briefcase,
      title: 'Workplace Wellness',
      description: 'Apps that help teams collaborate better and professionals manage workplace stress naturally',
      color: 'from-purple-400 to-indigo-500'
    },
    {
      icon: Home,
      title: 'Human-Centered Design',
      description: 'Tools designed for modern families navigating daily challenges and decisions together',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: Users,
      title: 'Behavioral Support',
      description: 'Mental clarity first guidance for better decision-making in work, relationships, and life',
      color: 'from-indigo-400 to-blue-500'
    }
  ]

  const differentiators = [
    {
      problem: 'Traditional Wellness Apps',
      solution: 'psyt.ai Behavioral Apps',
      issues: [
        'Generic advice that doesn\'t fit your life',
        'Overwhelming clinical or corporate language',
        'One-size-fits-all approaches',
        'No behavioral science foundation'
      ],
      benefits: [
        'Personalized to your work and life dynamics',
        'Approachable, helpful guidance for real situations',
        'Adapts to your unique professional and personal context',
        'Built on decades of behavioral psychology research'
      ]
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700/50 rounded-full px-4 py-2">
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
            <span className="text-sm font-medium text-purple-800 dark:text-purple-300">
              Human-Experience Informed Apps
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Apps that understand{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              your life
            </span>
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Every situation is unique. That's why we create applications informed by authentic human experiences 
            that adapt to your professional and personal context, helping you make better decisions at work 
            and at home—naturally and without stigma.
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="group relative">
                <div className="relative p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{benefit.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{benefit.description}</p>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-900/20 dark:to-gray-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Comparison */}
        <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            The Difference is Clear
          </h3>

          {differentiators.map((diff, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-8">
              {/* Traditional Approach */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 dark:text-red-400 font-bold text-sm">✗</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-700 dark:text-slate-300">{diff.problem}</h4>
                </div>

                <div className="space-y-3">
                  {diff.issues.map((issue, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="text-slate-600 dark:text-slate-400">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Approach */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">✓</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-700 dark:text-slate-300">{diff.solution}</h4>
                </div>

                <div className="space-y-3">
                  {diff.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="text-slate-600 dark:text-slate-400">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="text-center mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Briefcase className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              <Home className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <Lightbulb className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            </div>

            <blockquote className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 italic leading-relaxed">
              "What if thriving at work and home was as simple as using the apps 
              you already love?"
            </blockquote>

            <div className="mt-8">
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto"></div>
              <p className="text-slate-500 dark:text-slate-400 mt-4">This is the vision behind psyt.ai for life and work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValueProposition
