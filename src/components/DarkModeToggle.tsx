import { Moon, Sun } from 'lucide-react'
import { useDarkMode } from '../hooks/useDarkMode'

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-500 transition-transform duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-slate-600 transition-transform duration-300" />
      )}
    </button>
  )
}

export default DarkModeToggle
