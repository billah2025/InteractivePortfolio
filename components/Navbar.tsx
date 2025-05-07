import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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
      ${isScrolled ? 'bg-white/80 dark:bg-dark-200/80 backdrop-blur-sm py-3 shadow-sm' : 'bg-transparent py-5'}`}
    >
      <nav className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="#home">
          <motion.div
            className="font-bold text-2xl font-mono cursor-pointer"
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
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} legacyBehavior>
                  <a 
                    className={`hover:text-primary-500 transition-colors relative ${
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
                  </a>
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
            className="ml-4 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 bg-white dark:bg-dark-200 z-40 flex flex-col items-center justify-center ${
          isOpen ? 'block' : 'hidden'
        } md:hidden`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} legacyBehavior>
                <a 
                  className={`text-xl hover:text-primary-500 transition-colors ${
                    activeSection === link.href.substring(1) ? 'text-primary-500' : 'text-gray-700 dark:text-gray-300'
                  }`}
                  onClick={handleNavClick}
                >
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  )
}
