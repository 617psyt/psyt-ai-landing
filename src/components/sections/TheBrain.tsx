import { Brain, Home, Users, BookOpen, Shield, Baby } from 'lucide-react'

const TheBrain = () => {
  const capabilities = [
    {
      icon: Home,
      title: 'Family Dynamics Analysis',
      description: 'Understanding how family members interact and supporting healthier relationships',
      color: 'text-purple-400'
    },
    {
      icon: Baby,
      title: 'Child Development Science',
      description: 'Age-appropriate interventions based on developmental psychology research',
      color: 'text-blue-400'
    },
    {
      icon: Users,
      title: 'Behavioral Adaptation',
      description: 'Learns each family member\'s unique patterns to provide personalized support',
      color: 'text-purple-400'
    },
    {
      icon: BookOpen,
      title: 'Research Integration',
      description: 'Applies decades of family psychology and behavioral science research',
      color: 'text-purple-400'
    }
  ]

  const stats = [
    { number: '25+', label: 'Years of Family Research' },
    { number: '12K+', label: 'Behavioral Studies Analyzed' },
    { number: '94%', label: 'Family Satisfaction Rate' },
    { number: '100%', label: 'Privacy Protected' }
  ]

  return (
    <section id="psyt" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-purple-900 dark:from-black dark:to-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-2">
            <Brain className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-200">
              Mental Clarity First Intelligence
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Meet{' '}
            <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              Psyt
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our therapeutic AI system featuring a specialized Gemma 3b/4b Brain Model trained in psychology and therapy. 
            Built with RAG architecture and domain-specific knowledge bases, one model intelligently serves multiple mental 
            health applications through different system prompts—a groundbreaking approach to mental health technology.
          </p>
        </div>

        {/* Main Visual */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img
              src="/images/ai-psychology.jpg"
              alt="The Brain AI Engine"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            
            {/* Animated Elements */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute top-4 left-4 w-4 h-4 bg-purple-400 rounded-full animate-ping"></div>
              <div className="absolute top-8 right-8 w-3 h-3 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-6 left-8 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Floating Info Cards */}
            <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/20">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-slate-700">Privacy First</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/20">
              <div className="flex items-center space-x-2">
                <Brain className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium text-slate-700">Wellness Optimized</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">
              How The Brain Works
            </h3>
            
            <div className="space-y-6">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon
                return (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className={`p-2 rounded-lg bg-white/10 ${capability.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{capability.title}</h4>
                      <p className="text-slate-300 text-sm">{capability.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-slate-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Why The Brain is Different for Families
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto">
                <Home className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white">Family-First Design</h4>
              <p className="text-slate-300">
                Every algorithm considers family dynamics, making recommendations that strengthen relationships and support everyone.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto">
                <Baby className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white">Child Development Focused</h4>
              <p className="text-slate-300">
                Age-appropriate guidance that grows with your children, supporting their emotional and behavioral development.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white">Research-Backed & Safe</h4>
              <p className="text-slate-300">
                Built on validated family psychology research with the highest privacy standards to protect your family's data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheBrain
