import { Target, Brain, Lightbulb, Users } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-purple-600/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Brain className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">The Mind Behind Psyt</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About the Founder
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Understanding human behavior through the lens of nested patterns and psychological nuance
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                My name is Steve, and I'm a self-professed data junkie. But what drives me isn't the mechanics 
                of data systems; it's the <em>why</em> behind how people think, decide, and connect in ways both 
                beautiful and complex.
              </p>
              
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                While most data scientists were studying datasets, I was out there studying actual people. I'd be 
                out in social scenes, fascinated by how certain personalities would align, walking away from 
                conversations thinking, "How do these people get along?" or "How do these two people cohabitate?" 
                These questions have always been at the top of my mind.
              </p>
              
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                I'm constantly mining for what I call "nested grace notes"—those subtle psychological patterns 
                that most people miss but that reveal profound truths about human nature. These social observations 
                became the foundation for understanding deeper insights that connect individual psychology to 
                broader behavioral trends.
              </p>
              
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                This isn't academic psychology. This is ethnographic observation—studying people as they really 
                are, not in controlled laboratory settings. I'm drawn to understanding the subtle contradictions 
                and beautiful complexities that make us human, and how technology can honor rather than exploit 
                these truths.
              </p>
            </div>
          </div>

          {/* Visual/Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800">
                <Target className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-3" />
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Pattern Recognition</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Identifying behavioral nuance others miss
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                <Lightbulb className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Systems Thinking</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Connecting individual psychology to broader trends
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800 col-span-2">
                <Users className="h-8 w-8 text-green-600 dark:text-green-400 mb-3" />
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Ethnographic Approach</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Understanding people in their natural environments, not laboratory settings
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-gradient-to-r from-slate-50 to-purple-50 dark:from-slate-900 dark:to-purple-900/50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            The Philosophy Behind Psyt
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Beyond Surface Interactions</h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Most technology treats human psychology as simple input-output. I believe we're far more 
                complex and beautiful than that. Real insight comes from understanding the layered nuances 
                of how we think, feel, and make decisions in the real world.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Honoring Human Complexity</h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Psyt exists because I believe technology should celebrate rather than oversimplify human 
                nature. Every feature is designed to recognize the sophisticated psychological patterns 
                that make us uniquely human.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-slate-600 dark:text-slate-400 italic">
              "True insight isn't found in the obvious patterns, but in the nested grace notes of human behavior 
              that reveal who we really are when we think no one is watching."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About