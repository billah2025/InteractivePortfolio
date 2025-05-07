import { motion } from 'framer-motion';

type AnimatedTextProps = {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
};

export default function AnimatedText({ 
  text, 
  delay = 0, 
  duration = 0.05, 
  className = ''
}: AnimatedTextProps) {
  // Split text into an array of characters
  const chars = text.split('');

  // Animation configuration for each character
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay * i }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {chars.map((char, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
