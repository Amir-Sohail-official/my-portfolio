const About = () => {
  return (
    <section id="about" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Profile Image - Left Side on Desktop */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-300 rounded-2xl transform -rotate-6"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/portfolio-image2.jpeg"
                  alt="Amir Khan"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    console.error('About image failed to load:', e.target.src)
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23e0f2fe' width='400' height='400'/%3E%3Ctext fill='%230ea5e9' font-family='sans-serif' font-size='24' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EAmir Khan%3C/text%3E%3C/svg%3E"
                  }}
                  onLoad={() => console.log('About image loaded successfully')}
                />
              </div>
            </div>
          </div>

          {/* Text Content - Right Side on Desktop */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg mb-6">
              I am a passionate <span className="font-semibold text-primary-600">MERN Stack Full-Stack Developer</span> with strong project-based experience, 
              actively seeking an entry-level opportunity to apply my skills in a
               professional environment. As a fresher, I have focused on building 
               complete, real-world applications that demonstrate my 
               understanding of both frontend and backend development.
              </p>
              <p className="text-lg mb-6">
              I have hands-on experience developing responsive user interfaces using
               React.js and building scalable backend APIs with Node.js, Express.js,
                and MongoDB. I enjoy working across the full development lifecycle—from 
                designing data models and implementing authentication to deploying
                applications.
              </p>
              <p className="text-lg mb-6">
              What sets me apart is my practical learning approach. Instead of relying 
              only on tutorials, I build projects from scratch, emphasizing clean, 
              maintainable code and best practices. I am eager to contribute to 
              meaningful projects, learn from experienced teams, and grow as a 
              professional full-stack developer.
              </p>
              <p className="text-lg">
                I'm particularly excited about opportunities where I can contribute to meaningful 
                projects while continuing to grow as a developer. I believe in writing clean, 
                maintainable code and am always eager to learn new technologies and best practices 
                from experienced developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

