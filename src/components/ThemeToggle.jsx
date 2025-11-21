import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle = () => {
  const { theme, changeTheme } = useTheme()

  return (
    <div className="relative inline-flex items-center bg-gray-200 dark:bg-gray-800 rounded-lg p-1 border border-gray-300 dark:border-gray-700">
      <button
        onClick={() => changeTheme('light')}
        className={`px-3 py-1.5 text-xs font-mono rounded transition-all ${
          theme === 'light'
            ? 'bg-yellow-500 dark:bg-yellow-600 text-gray-900 dark:text-gray-900 shadow-md'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
        }`}
        title="Light Mode"
      >
        0
      </button>
      <button
        onClick={() => changeTheme('dark')}
        className={`px-3 py-1.5 text-xs font-mono rounded transition-all ${
          theme === 'dark'
            ? 'bg-yellow-500 dark:bg-yellow-600 text-gray-900 dark:text-gray-900 shadow-md'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
        }`}
        title="Dark Mode"
      >
        1
      </button>
      <button
        onClick={() => changeTheme('system')}
        className={`px-3 py-1.5 text-xs font-mono rounded transition-all ${
          theme === 'system'
            ? 'bg-yellow-500 dark:bg-yellow-600 text-gray-900 dark:text-gray-900 shadow-md'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
        }`}
        title="System Mode"
      >
        SYS
      </button>
    </div>
  )
}

export default ThemeToggle

