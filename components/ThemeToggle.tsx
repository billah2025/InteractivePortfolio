import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'

type ThemeToggleProps = {
  theme: string;
  toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gray-200 dark:bg-dark-100 transition-colors duration-300"
      aria-label="Toggle Theme"
    >
      <div className="relative">
        <motion.div
          initial={false}
          animate={{ 
            rotate: theme === 'dark' ? 0 : 180,
            opacity: theme === 'dark' ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <FiMoon className="text-primary-400 w-5 h-5" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{ 
            rotate: theme === 'light' ? 0 : -180,
            opacity: theme === 'light' ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center"
        >
          <FiSun className="text-yellow-500 w-5 h-5" />
        </motion.div>
      </div>
    </motion.button>
  )
}
