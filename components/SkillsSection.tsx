import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { fadeIn, fadeInUp, staggerContainer } from '@/utils/animation'
import { FiCode, FiDatabase, FiLayout, FiServer, FiTool } from 'react-icons/fi'

type SkillCategory = {
  icon: JSX.Element;
  name: string;
  skills: { name: string; proficiency: number }[];
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories: SkillCategory[] = [
    {
      icon: <FiCode />,
      name: "Frontend",
      skills: [
        { name: "HTML/CSS", proficiency: 90 },
        { name: "JavaScript", proficiency: 85 },
        { name: "React", proficiency: 85 },
        { name: "TypeScript", proficiency: 80 },
        { name: "Next.js", proficiency: 75 }
      ]
    },
    {
      icon: <FiServer />,
      name: "Backend",
      skills: [
        { name: "Node.js", proficiency: 80 },
        { name: "Express", proficiency: 80 },
        { name: "Python", proficiency: 75 },
        { name: "Django", proficiency: 70 },
        { name: "PHP", proficiency: 65 }
      ]
    },
    {
      icon: <FiDatabase />,
      name: "Database",
      skills: [
        { name: "MongoDB", proficiency: 85 },
        { name: "MySQL", proficiency: 80 },
        { name: "PostgreSQL", proficiency: 75 },
        { name: "Firebase", proficiency: 70 },
        { name: "Redis", proficiency: 60 }
      ]
    },
    {
      icon: <FiTool />,
      name: "Tools",
      skills: [
        { name: "Git", proficiency: 90 },
        { name: "Docker", proficiency: 75 },
        { name: "AWS", proficiency: 70 },
        { name: "CI/CD", proficiency: 65 },
        { name: "Webpack", proficiency: 70 }
      ]
    },
    {
      icon: <FiLayout />,
      name: "Design",
      skills: [
        { name: "Figma", proficiency: 85 },
        { name: "Tailwind", proficiency: 90 },
        { name: "Sass", proficiency: 80 },
        { name: "UI/UX", proficiency: 75 },
        { name: "Responsive Design", proficiency: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-dark-300">
      <div className="container mx-auto">
        <SectionHeading title="Skills" subtitle="My Technical Level" />

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16"
        >
          <motion.div 
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {skillCategories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all
                  ${activeCategory === index
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                    : 'bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-200'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-dark-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-lg">{skill.name}</h3>
                  <span className="text-primary-500 font-medium">{skill.proficiency}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-dark-100 rounded-full h-2.5">
                  <motion.div
                    className="bg-primary-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
