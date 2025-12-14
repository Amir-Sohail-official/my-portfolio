const BackendExperience = () => {
  return (
    <section id="backend-experience" className="section-container bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Backend Experience</h2>
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-lg mb-6">
              While I haven't deployed backend projects to production yet, I've gained 
              substantial hands-on experience through practice projects and dedicated learning. 
              My backend knowledge is built on a solid foundation of understanding core concepts 
              and implementing them in real-world scenarios.
            </p>
            
            <div className="mb-6 p-4 rounded-lg bg-primary-50 border-l-4 border-primary-600 hover:bg-primary-100 transition-colors duration-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                REST API Development
              </h3>
              <p className="text-lg mb-4">
                I've built RESTful APIs using Node.js and Express.js, implementing various 
                HTTP methods (GET, POST, PUT, DELETE) to handle CRUD operations. I understand 
                API design principles, request/response handling, middleware usage, and error 
                handling patterns.
              </p>
            </div>

            <div className="mb-6 p-4 rounded-lg bg-primary-50 border-l-4 border-primary-600 hover:bg-primary-100 transition-colors duration-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                Database Handling
              </h3>
              <p className="text-lg mb-4">
                I'm proficient in working with MongoDB, including schema design, creating 
                collections, performing CRUD operations, and understanding relationships 
                between documents. I've practiced data modeling and query optimization 
                techniques.
              </p>
            </div>

            <div className="mb-6 p-4 rounded-lg bg-primary-50 border-l-4 border-primary-600 hover:bg-primary-100 transition-colors duration-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                Authentication Basics
              </h3>
              <p className="text-lg mb-4">
                I've implemented basic authentication systems using JWT (JSON Web Tokens), 
                password hashing with bcrypt, and session management. I understand the 
                concepts of secure authentication and authorization in web applications.
              </p>
            </div>

            <p className="text-lg">
              My approach to backend development focuses on writing clean, maintainable code 
              and following best practices. I'm eager to apply these skills in a professional 
              environment and continue learning from experienced developers. I believe in 
              building a strong foundation through practice, and I'm ready to take on 
              real-world backend challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BackendExperience

