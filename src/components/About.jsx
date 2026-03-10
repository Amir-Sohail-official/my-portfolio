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
                    console.error("About image failed to load:", e.target.src);
                    e.target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23e0f2fe' width='400' height='400'/%3E%3Ctext fill='%230ea5e9' font-family='sans-serif' font-size='24' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EAmir Khan%3C/text%3E%3C/svg%3E";
                  }}
                  onLoad={() => console.log("About image loaded successfully")}
                />
              </div>
            </div>
          </div>

          {/* Text Content - Right Side on Desktop */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg mb-6">
                Hi, I’m Amir Khan, a{" "}
                <span className="font-semibold text-primary-600">
                  Full Stack Developer (Next.js | MERN Stack)
                </span>{" "}
                I specialize in building high-performance, scalable web
                applications. With a BS in Software Engineering from NUML
                University, I combine strong technical skills with a focus on
                clean, efficient code.
              </p>
              <p className="text-lg mb-6">
                💡 Core Expertise: <br />
                 <span className="font-semibold text-primary-600">
                 Frontend:
                </span>{" "} Next.js, React.js, Redux,
                JavaScript (ES6+), HTML5, CSS3 <br />
                <span className="font-semibold text-primary-600">
                 Backend:
                </span>{" "}  Node.js, Express.js,
                RESTful APIs <br />
                <span className="font-semibold text-primary-600">
                 Databases:
                </span>{" "} MongoDB, SQL DevOps: Render, Vercel,
                Git, Apache UI/UX <br />
                <span className="font-semibold text-primary-600">
                 Awareness:
                </span>{" "} Designing intuitive, user-centric
                experiences
              </p>
              <p className="text-lg mb-6">
                I thrive in developing modern web apps, from dynamic frontends to scalable backends, and have a keen interest in real-time applications and distributed systems. My approach blends clean coding practices, performance optimization, and continuous learning to deliver impactful solutions.
              </p>
              <p className="text-lg">
                🔍 Looking For:
 Opportunities to contribute as a Full Stack Developer in innovative environments where I can leverage my Next.js and MERN Stack expertise to build products that make a difference.
<br />
<br />
<br />
Let’s connect and create something amazing! 🌟
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
