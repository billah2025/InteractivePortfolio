import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import AnimatedText from './AnimatedText'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden px-6 py-20 lg:py-0">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-primary-400/10 blur-3xl dark:bg-primary-600/10" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-400/10 blur-3xl dark:bg-purple-600/10" />
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:order-1"
        >
          <h2 className="text-lg md:text-xl font-medium text-primary-500 mb-2">
            <AnimatedText text="Hello, I'm" />
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <AnimatedText text="M.B.siam" delay={0.2} />
          </h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-400 mb-6">
            <AnimatedText text="Full Stack Developer" delay={0.4} />
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mb-8">
            <AnimatedText 
              text="I create engaging, user-friendly web experiences with modern technologies. Specialized in building creative and performant applications." 
              delay={0.6}
            />
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-full transition-colors shadow-lg shadow-primary-500/20 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Contact Me
            </motion.a>
            
            <div className="flex items-center gap-5 ml-2">
              {[
                { icon: <FiGithub />, url: "https://github.com", delay: 0.9 },
                { icon: <FiLinkedin />, url: "https://linkedin.com", delay: 1 },
                { icon: <FiTwitter />, url: "https://twitter.com", delay: 1.1 }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-500 text-xl transition-colors"
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: social.delay }}
                  aria-label={`Social link ${index + 1}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex justify-center lg:justify-end lg:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-400 to-purple-500 dark:from-primary-600 dark:to-purple-700 blur-md opacity-20"></div>
            <div className="absolute inset-2 rounded-full bg-white dark:bg-dark-100 flex items-center justify-center overflow-hidden shadow-xl">
              <div className="bg-gradient-to-tr from-primary-400 to-purple-500 dark:from-primary-500 dark:to-purple-600 h-full w-full opacity-90 flex items-center justify-center">
                <span className="text-white text-9xl font-bold">MB</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="text-sm font-medium mb-2 text-gray-600 dark:text-gray-400">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FiArrowDown className="text-primary-500 text-xl" />
        </motion.div>
      </motion.div>
    </section>
  )
}
