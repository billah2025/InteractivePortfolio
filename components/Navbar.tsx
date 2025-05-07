import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import useScrollSpy from '@/hooks/useScrollSpy'
import { FiMenu, FiX } from 'react-icons/fi'

type NavbarProps = {
  theme: string;
  toggleTheme: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useScrollSpy()

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  // Disable scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleNavClick = () => {
    if (isOpen) setIsOpen(false)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled ? 'bg-white/90 dark:bg-dark-200/90 backdrop-blur-sm py-3 shadow-sm' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <Link href="#home">
            <motion.div
              className="font-bold text-xl sm:text-2xl font-mono cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary-500">{'<'}</span>
              Portfolio
              <span className="text-primary-500">{'/>'}</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span 
                      className={`hover:text-primary-500 transition-colors relative cursor-pointer ${
                        activeSection === link.href.substring(1) ? 'text-primary-500' : 'text-gray-700 dark:text-gray-300'
                      }`}
                      onClick={handleNavClick}
                    >
                      {link.name}
                      {activeSection === link.href.substring(1) && (
                        <motion.div 
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-500"
                          layoutId="activeSection"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={toggleMenu}
              className="ml-4 p-1 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-dark-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu - Using AnimatePresence for smoother animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-dark-200 z-40 pt-20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Mobile Close Button (Fixed Position) */}
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-dark-100 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500 transition-colors"
              aria-label="Close Menu"
            >
              <FiX size={24} />
            </button>
            
            <motion.ul 
              className="flex flex-col items-center pt-10"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
            >
              {navLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  className="w-full border-b border-gray-100 dark:border-dark-100"
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -10 }
                  }}
                >
                  <Link href={link.href}>
                    <div 
                      className={`text-center py-5 text-xl font-medium hover:text-primary-500 transition-colors ${
                        activeSection === link.href.substring(1) ? 'text-primary-500' : 'text-gray-700 dark:text-gray-300'
                      }`}
                      onClick={handleNavClick}
                    >
                      {link.name}
                    </div>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
