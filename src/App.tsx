import LandingPage from './components/LandingPage'
import { DarkModeProvider } from './hooks/useDarkMode'
import './App.css'

function App() {
  return (
    <DarkModeProvider>
      <LandingPage />
    </DarkModeProvider>
  )
}

export default App
