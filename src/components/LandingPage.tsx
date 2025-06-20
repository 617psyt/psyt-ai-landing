import { useState, useEffect } from 'react'
import Hero from './sections/Hero'
import ValueProposition from './sections/ValueProposition'
import TheBrain from './sections/TheBrain'
import HowItWorks from './sections/HowItWorks'
import Features from './sections/Features'
import AppShowcase from './sections/AppShowcase'
import UseCases from './sections/UseCases'
import About from './sections/About'
import Signup from './sections/Signup'
import Footer from './sections/Footer'
import Navigation from './sections/Navigation'

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <Hero />
      <ValueProposition />
      <TheBrain />
      <HowItWorks />
      <Features />
      <AppShowcase />
      <UseCases />
      <About />
      <Signup />
      <Footer />
    </div>
  )
}

export default LandingPage
