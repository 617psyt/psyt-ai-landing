import { Briefcase, Brain, GraduationCap, Home, Users, Shield } from 'lucide-react'

const UseCases = () => {
  const useCases = [
    {
      icon: Briefcase,
      title: 'Professional Wellness',
      description: 'Workplace mental health support for high-stress careers',
      scenarios: [
        'Healthcare workers managing burnout through wellness-integrated scheduling apps',
        'Tech professionals using productivity tools where all AI is powered by humans in the loop to prevent overwork',
        'Managers accessing leadership apps with built-in emotional intelligence training',
        'Remote workers staying connected through wellness-first collaboration platforms'
      ],
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-purple-50',
      image: '/images/research-analytics.jpg'
    },
    {
      icon: Brain,
      title: 'Personal Growth',
      description: 'Individual mental wellness and emotional development',
      scenarios: [
        'Young adults building emotional resilience through gamified wellness experiences',
        'Individuals recovering from trauma using gentle, progressive healing apps',
        'People with anxiety finding calm through adaptive meditation and mindfulness tools',
        'Anyone seeking better emotional regulation through personalized wellness journeys'
      ],
      color: 'from-purple-500 to-blue-600',
      bgColor: 'bg-purple-50',
      image: '/images/people-connecting.jpg'
    },
    {
      icon: GraduationCap,
      title: 'Student Support',
      description: 'Academic mental health and learning optimization',
      scenarios: [
        'College students managing academic stress through wellness-integrated study apps',
        'Graduate students preventing research burnout with temporal analytics',
        'High school students building healthy digital habits during formative years',
        'Adult learners balancing education with work-life wellness'
      ],
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      image: '/images/mindmap-visualization.jpg'
    },
    {
      icon: Home,
      title: 'Family Wellness',
      description: 'Household mental health and relationship harmony',
      scenarios: [
        'Parents using family planning apps with built-in stress management features',
        'Families improving communication through wellness-powered messaging platforms',
        'Caregivers managing their own wellness while supporting loved ones',
        'Households creating healthier digital environments for all family members'
      ],
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      image: '/images/consultation.jpg'
    }
  ]

  const industries = [
    {
      icon: Shield,
      name: 'Healthcare',
      apps: ['Nurse scheduling with burnout prevention', 'Patient care apps with provider wellness', 'Medical decision support with stress reduction']
    },
    {
      icon: GraduationCap,
      name: 'Education',
      apps: ['Student wellness platforms', 'Teacher stress management tools', 'Campus mental health resources']
    },
    {
      icon: Briefcase,
      name: 'Corporate',
      apps: ['Employee wellness programs', 'Leadership development tools', 'Workplace stress monitoring']
    },
    {
      icon: Users,
      name: 'Consumer',
      apps: ['Personal wellness apps', 'Social connection platforms', 'Daily habit builders']
    }
  ]

  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-2">
            <Users className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-800">
              Real-World Applications
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Mental wellness for{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              every context
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            psyt.ai powers apps across industries and use cases, bringing mental wellness support 
            to every aspect of digital life—from work and study to relationships and personal growth.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            
            return (
              <div key={index} className="group relative">
                <div className="relative p-8 bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{useCase.title}</h3>
                      <p className="text-slate-500 text-sm">{useCase.description}</p>
                    </div>
                  </div>

                  {/* Scenarios */}
                  <div className="space-y-4">
                    {useCase.scenarios.map((scenario, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${useCase.color} rounded-full mt-2.5 flex-shrink-0`}></div>
                        <p className="text-slate-600 text-sm leading-relaxed">{scenario}</p>
                      </div>
                    ))}
                  </div>

                  {/* Visual Element */}
                  <div className="mt-6">
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-32 object-cover rounded-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${useCase.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Industries Section */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Transforming Industries
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <div key={index} className="text-center space-y-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <Icon className="h-8 w-8 text-slate-600" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-slate-900">{industry.name}</h4>
                  
                  <div className="space-y-2">
                    {industry.apps.map((app, i) => (
                      <div key={i} className="text-sm text-slate-600 bg-white rounded-lg px-3 py-2 border border-slate-200">
                        {app}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">89%</div>
            <div className="text-slate-600 text-sm">Report improved wellbeing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">76%</div>
            <div className="text-slate-600 text-sm">Reduced stress levels</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">94%</div>
            <div className="text-slate-600 text-sm">Continue using long-term</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">82%</div>
            <div className="text-slate-600 text-sm">Recommend to others</div>
          </div>
        </div>

        {/* Success Story */}
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-medium text-slate-700 italic leading-relaxed mb-8">
              "I've been using psyt.ai-powered apps for six months now. What started as simple 
              journaling and task management has quietly transformed my relationship with stress. 
              I feel more resilient, more aware of my patterns, and genuinely happier—and I barely 
              noticed it happening."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">SK</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900">Sarah K.</div>
                <div className="text-slate-500 text-sm">Product Manager, Early Access User</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to transform your apps?
            </h3>
            <p className="text-slate-600 mb-8">
              Whether you're a developer, business, or individual user, discover how 
              psyt.ai can bring mental wellness to your digital experiences.
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
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UseCases
