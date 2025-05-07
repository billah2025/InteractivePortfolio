import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiMaximize2 } from 'react-icons/fi'
import { Project } from '@/utils/data'

type ProjectCardProps = {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group bg-white dark:bg-dark-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-[4/3] relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-primary-500/70 to-purple-500/70 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-0" />
          
          <div className="h-full w-full bg-gray-200 dark:bg-dark-200 flex items-center justify-center">
            <span className="text-4xl font-bold text-gray-300 dark:text-gray-700">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </div>

          <motion.div 
            className="absolute inset-0 flex items-center justify-center gap-4 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {[
              { icon: <FiGithub />, url: project.githubUrl, label: "GitHub" },
              { icon: <FiExternalLink />, url: project.liveUrl, label: "Live Demo" },
              { icon: <FiMaximize2 />, action: () => setShowModal(true), label: "Details" }
            ].map((button, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {button.url ? (
                  <a
                    href={button.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white text-primary-500 flex items-center justify-center shadow-lg"
                    aria-label={button.label}
                  >
                    {button.icon}
                  </a>
                ) : (
                  <button
                    onClick={button.action}
                    className="w-10 h-10 rounded-full bg-white text-primary-500 flex items-center justify-center shadow-lg"
                    aria-label={button.label}
                  >
                    {button.icon}
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-xl">{project.title}</h3>
            <span className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full">
              {project.category}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span key={i} className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div 
            className="bg-white dark:bg-dark-100 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <div className="aspect-video bg-gray-200 dark:bg-dark-200 mb-6 rounded-lg flex items-center justify-center">
                <span className="text-6xl font-bold text-gray-300 dark:text-gray-700">
                  {project.title.slice(0, 2).toUpperCase()}
                </span>
              </div>

              <span className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full">
                {project.category}
              </span>

              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg flex items-center gap-2"
                  >
                    <FiGithub />
                    GitHub Repository
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg flex items-center gap-2"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}
