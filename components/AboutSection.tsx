import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { fadeIn, fadeInUp, staggerContainer } from '@/utils/animation'
import { FiUser, FiCalendar, FiMap, FiMail, FiCode } from 'react-icons/fi'

export default function AboutSection() {
  const aboutItems = [
    { icon: <FiUser />, label: 'Name', value: 'John Developer' },
    { icon: <FiCalendar />, label: 'Experience', value: '5+ Years' },
    { icon: <FiMap />, label: 'Location', value: 'New York, USA' },
    { icon: <FiMail />, label: 'Email', value: 'john@example.com' },
    { icon: <FiCode />, label: 'Specialization', value: 'Frontend & Backend' }
  ]

  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-dark-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary-100 dark:bg-primary-900/20 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-purple-100 dark:bg-purple-900/20 blur-3xl opacity-50"></div>

      <div className="container mx-auto">
        <SectionHeading title="About Me" subtitle="My Introduction" />

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 mt-16 items-center"
        >
          <motion.div variants={fadeIn} className="flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-purple-500 opacity-90 flex items-center justify-center">
                <span className="text-white text-9xl font-bold">JD</span>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            >
              I'm a passionate Full Stack Developer with extensive experience in building 
              web applications. I specialize in JavaScript, React, Node.js, and modern web technologies. 
              My journey in tech began 5 years ago, and I've been creating innovative solutions ever since.
            </motion.p>

            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            >
              I love solving complex problems and turning ideas into reality through clean, 
              efficient code. My approach combines technical expertise with creative thinking 
              to deliver exceptional user experiences.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            >
              {aboutItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-500">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <a 
                href="#" 
                download 
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-full transition-colors shadow-lg shadow-primary-500/20"
              >
                Download CV
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
