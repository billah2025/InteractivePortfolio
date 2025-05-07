import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import SectionHeading from './SectionHeading'
import { fadeIn, fadeInUp, staggerContainer } from '@/utils/animation'
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulating form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form data:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email",
      value: "john@example.com",
      link: "mailto:john@example.com"
    },
    {
      icon: <FiPhone />,
      title: "Phone",
      value: "+1 (123) 456-7890",
      link: "tel:+11234567890"
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      value: "New York, USA",
      link: "https://maps.google.com"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-dark-300 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary-100 dark:bg-primary-900/20 blur-3xl opacity-50"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-purple-100 dark:bg-purple-900/20 blur-3xl opacity-50"></div>

      <div className="container mx-auto">
        <SectionHeading title="Contact Me" subtitle="Get in Touch" />

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-16 mt-16"
        >
          <motion.div variants={fadeIn}>
            <h3 className="text-2xl font-semibold mb-6">Let's Talk About Your Project</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I'm interested in freelance opportunities – especially ambitious or large projects.
              However, if you have other requests or questions, don't hesitate to contact me.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.title === "Location" ? "_blank" : undefined}
                  rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 group"
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-500 mt-1 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-dark-100'} focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:bg-dark-200`}
                    placeholder="John Doe"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <p className="mt-1 text-red-500 text-xs">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-dark-100'} focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:bg-dark-200`}
                    placeholder="john@example.com"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-dark-100'} focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:bg-dark-200`}
                  placeholder="Project Inquiry"
                  {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && <p className="mt-1 text-red-500 text-xs">{errors.subject.message}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-dark-100'} focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:bg-dark-200`}
                  placeholder="Hello, I'm interested in..."
                  {...register('message', { required: 'Message is required' })}
                />
                {errors.message && <p className="mt-1 text-red-500 text-xs">{errors.message.message}</p>}
              </div>
              
              <div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg shadow-lg shadow-primary-500/20 w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </motion.button>
                
                {isSubmitted && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-center text-green-500 font-medium"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
