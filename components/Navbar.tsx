import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import useScrollSpy from '@/hooks/useScrollSpy'
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiBriefcase, FiMail } from 'react-icons/fi'

type NavbarProps = {
  theme: string;
  toggleTheme: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home', icon: <FiHome /> },
  { name: 'About', href: '#about', icon: <FiUser /> },
  { name: 'Skills', href: '#skills', icon: <FiCode /> },
  { name: 'Projects', href: '#projects', icon: <FiBriefcase /> },
  { name: 'Contact', href: '#contact', icon: <FiMail /> },
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
      ${isScrolled 
        ? 'bg-white/95 dark:bg-dark-200/95 backdrop-blur-md py-3 shadow-md' 
        : 'bg-transparent py-4 sm:py-5'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <Link href="#home">
            <motion.div
              className="font-bold text-xl sm:text-2xl font-mono cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary-500">{'<'}</span>
              <span className="text-gray-800 dark:text-white">M.B.siam</span>
              <span className="text-primary-500">{'/>'}</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <ul className="flex space-x-5 lg:space-x-7">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span 
                      className={`hover:text-primary-500 transition-colors relative cursor-pointer text-sm lg:text-base font-medium flex items-center gap-1.5 
                      ${activeSection === link.href.substring(1) 
                        ? 'text-primary-500' 
                        : 'text-gray-700 dark:text-gray-300'
                      }`}
                      onClick={handleNavClick}
                    >
                      {link.name}
                      {activeSection === link.href.substring(1) && (
                        <motion.div 
                          className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-primary-500"
                          layoutId="activeSection"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-1"></div>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={toggleMenu}
              className="ml-3 p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-dark-100 transition-all"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu - Using AnimatePresence for smoother animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-b from-white/98 to-blue-50/95 dark:from-dark-200/98 dark:to-dark-300/95 backdrop-blur-md z-40 pt-16 overflow-y-auto"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Mobile Close Button (Fixed Position) */}
            <button
              onClick={toggleMenu}
              className="fixed top-4 right-4 p-2.5 rounded-full bg-white dark:bg-dark-100 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500 transition-all shadow-md"
              aria-label="Close Menu"
            >
              <FiX size={20} />
            </button>
            
            <div className="min-h-[100vh] py-12 flex items-center justify-center">
              <ul className="flex flex-col items-center gap-6 px-4 py-8 max-w-sm mx-auto">
                {navLinks.map((link) => (
                  <motion.li 
                    key={link.name}
                    className="w-full"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link href={link.href}>
                      <div 
                        className={`text-center py-4 text-xl font-medium hover:text-primary-500 transition-all flex flex-col items-center gap-1
                        ${activeSection === link.href.substring(1) 
                          ? 'text-primary-500 scale-110' 
                          : 'text-gray-700 dark:text-gray-300'
                        }`}
                        onClick={handleNavClick}
                      >
                        <span className="text-2xl mb-1">{link.icon}</span>
                        {link.name}
                        {activeSection === link.href.substring(1) && (
                          <motion.div 
                            className="h-1 w-8 bg-primary-500 rounded-full mt-1"
                            layoutId="activeMobileSection"
                          />
                        )}
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}