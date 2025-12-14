import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const contactLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-3xl" />,
      href: 'https://www.linkedin.com/in/amir-khan-5a48a5279',
      text: 'Connect on LinkedIn',
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="text-3xl" />,
      href: 'https://github.com/Amir-Sohail-official',
      text: 'View my GitHub',
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="text-3xl" />,
      href: 'mailto:amirkhan46509@gmail.com',
      text: 'amirkhan46509@gmail.com',
    },
  ]

  return (
    <section id="contact" className="section-container bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or 
          just having a conversation about web development. Feel free to reach out!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.name === 'Email' ? undefined : '_blank'}
              rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 hover:from-primary-50 hover:to-primary-100 hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-primary-200 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 rounded-full bg-primary-100 group-hover:bg-primary-200 transition-all duration-300 group-hover:scale-110">
                  <div className="text-primary-600 group-hover:text-primary-700 transition-colors">
                    {link.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                  {link.name}
                </h3>
                <p className="text-gray-600 group-hover:text-primary-600 transition-colors font-medium">
                  {link.text}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            Looking forward to connecting with you!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact

