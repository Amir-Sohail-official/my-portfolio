import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa'
import { SiJavascript, SiMongodb, SiExpress, SiPostman } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FaReact className="text-4xl text-primary-600" />,
      skills: [
        { name: 'React.js', icon: <FaReact className="text-2xl" /> },
        { name: 'JavaScript (ES6+)', icon: <SiJavascript className="text-2xl" /> },
        { name: 'HTML5', icon: <FaHtml5 className="text-2xl" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-2xl" /> },
        { name: 'Responsive Design', icon: <FaCss3Alt className="text-2xl" /> },
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Backend',
      icon: <FaNodeJs className="text-4xl text-primary-600" />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-2xl" /> },
        { name: 'Express.js', icon: <SiExpress className="text-2xl" /> },
        { name: 'REST APIs', icon: <SiExpress className="text-2xl" /> },
        { name: 'MongoDB (CRUD)', icon: <SiMongodb className="text-2xl" /> },
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Tools & Other',
      icon: <FaGitAlt className="text-4xl text-primary-600" />,
      skills: [
        { name: 'Git & GitHub', icon: <FaGitAlt className="text-2xl" /> },
        { name: 'Postman / Thunder Client', icon: <SiPostman className="text-2xl" /> },
        { name: 'Vercel / Netlify', icon: <FaReact className="text-2xl" /> },
        { name: 'Basic API Testing', icon: <SiPostman className="text-2xl" /> },
      ],
      color: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <section id="skills" className="section-container bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="p-4 rounded-full bg-primary-50 group-hover:bg-primary-100 transition-colors duration-300">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center group-hover:text-primary-600 transition-colors duration-300">
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center space-x-3 text-gray-700 group/item hover:text-primary-600 transition-colors duration-200"
                    >
                      <span className="text-primary-600 group-hover/item:scale-125 transition-transform duration-200">
                        {skill.icon}
                      </span>
                      <span className="font-medium">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

