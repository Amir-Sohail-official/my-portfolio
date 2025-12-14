import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Dry Fruit Detection & Information System',
      type: 'Frontend (React)',
      description:
        'A frontend web application that displays dry fruit information including origin, nutritional benefits, and details with a clean and responsive UI. Built with React.js, this project showcases modern frontend development practices and user experience design.',
      liveDemo: 'https://dry-fruit-system.vercel.app/',
      github: 'https://github.com',
      technologies: ['React.js', 'JavaScript', 'CSS3', 'Responsive Design'],
    },
    {
      title: 'CV Screener / Reviewer',
      type: 'Frontend (React)',
      description:
        'A React-based application that allows users to review CVs through an interactive and user-friendly interface. This project demonstrates state management, component reusability, and modern React patterns for building efficient web applications.',
      liveDemo: 'https://cv-reviewer-kappa.vercel.app/',
      github: 'https://github.com',
      technologies: ['React.js', 'JavaScript', 'CSS3', 'State Management'],
    },
  ]

  return (
    <section id="projects" className="section-container bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold group-hover:bg-primary-200 transition-colors duration-300">
                      {project.type}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white text-gray-700 rounded-md text-sm border border-gray-200 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-all duration-200 hover:scale-105"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-semibold transition-all duration-200 hover:scale-105"
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

