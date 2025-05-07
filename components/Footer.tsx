import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com" },
    { icon: <FiLinkedin />, url: "https://linkedin.com" },
    { icon: <FiTwitter />, url: "https://twitter.com" },
    { icon: <FiInstagram />, url: "https://instagram.com" }
  ];

  return (
    <footer className="py-8 px-6 bg-gray-50 dark:bg-dark-200">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-bold text-xl font-mono">
              <span className="text-primary-500">{'<'}</span>
              M.B.siam
              <span className="text-primary-500">{'/>'}</span>
            </div>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-500 text-lg transition-colors"
                aria-label={`Social link ${index + 1}`}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-right">
            <p className="flex items-center justify-center md:justify-end gap-1">
              Made with <FiHeart className="text-red-500" /> by Motasim Billah siam
            </p>
            <p>© {currentYear} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
