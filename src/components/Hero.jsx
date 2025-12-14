import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary-500/20 backdrop-blur-sm text-primary-200 rounded-full text-sm font-semibold mb-4 animate-fade-in border border-primary-400/30">
                  👋 Welcome to My Portfolio
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                Hi, I'm <span className="text-primary-400">Amir Sohail</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-gray-300 animate-fade-in">
                MERN  Full-Stack Developer
              </h2>
              <p className="text-base md:text-lg mb-8 text-gray-300 leading-relaxed animate-fade-in">
                Passionate about building scalable web applications with expertise in both frontend and backend development. 
                Experienced in creating responsive user interfaces and robust server-side solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:from-primary-600 hover:to-primary-700 hover:scale-105 transition-all duration-300 border border-primary-400/20"
                >
                  View Projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300"
                >
                  Get In Touch
                </button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in">
                <a
                  href="https://github.com/Amir-Sohail-official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-primary-400 hover:scale-125 transition-all duration-200 text-gray-300"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/amir-khan-5a48a5279"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-primary-400 hover:scale-125 transition-all duration-200 text-gray-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:amirkhan46509@gmail.com"
                  className="text-3xl hover:text-primary-400 hover:scale-125 transition-all duration-200 text-gray-300"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                {/* Animated Background Circle */}
                <div className="absolute inset-0 bg-primary-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                
                {/* Image Container with Border */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  {/* Outer Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 p-1 animate-spin-slow">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-600 to-primary-800"></div>
                  </div>
                  
                  {/* Image */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <img
                      src="/profile-image.jpg"
                      alt="Amir Khan - MERN Stack Developer"
                      className="w-full h-full object-cover"
                      loading="eager"
                      onError={(e) => {
                        console.error('Hero image failed to load:', e.target.src)
                        // Fallback to a placeholder if image doesn't exist
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23e0f2fe' width='400' height='400'/%3E%3Ctext fill='%230ea5e9' font-family='sans-serif' font-size='24' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EAmir Khan%3C/text%3E%3C/svg%3E"
                      }}
                      onLoad={() => console.log('Hero image loaded successfully')}
                    />
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full shadow-xl font-semibold text-sm whitespace-nowrap border border-primary-400/30">
                    Available for Hire
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

