import Head from 'next/head'
import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import { fadeInUp } from '@/utils/animation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Creative Developer</title>
        <meta name="description" content="Personal portfolio showcasing my projects and skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="overflow-hidden">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={fadeInUp}
        >
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </motion.div>
      </main>
    </>
  )
}
