import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4">Amir Sohail</h3>
            <p className="text-gray-400 mb-4">
              MERN Stack Full-Stack Developer passionate about building amazing web experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Amir-Sohail-official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/amir-khan-5a48a5279"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="mailto:amirkhan46509@gmail.com"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="Email"
              >
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-primary-400" />
                <a href="mailto:amirkhan46509@gmail.com" className="hover:text-primary-400 transition-colors">
                  amirkhan46509@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaLinkedin className="text-primary-400" />
                <a href="https://www.linkedin.com/in/amir-khan-5a48a5279" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                  LinkedIn Profile
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaGithub className="text-primary-400" />
                <a href="https://github.com/Amir-Sohail-official" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                  GitHub Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Amir Sohail. Made with <FaHeart className="inline text-red-500 mx-1" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

