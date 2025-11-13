import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            I'm passionate about creating beautiful, functional, and user-friendly digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* can replace this with an actual image */}
            <div className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden">
              <div className="absolute w-32 h-32 bg-indigo-600 opacity-10 rounded-full -top-10 -left-10"></div>
              <div className="absolute w-32 h-32 bg-blue-500 opacity-10 rounded-full -bottom-10 -right-10"></div>
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-6xl">👩‍💻</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">Who I Am</h3>
              <p className="text-gray-600">
                I'm a Final-year Master of Information Technology student at Deakin University majoring in Software Engineering, with hands-on experience in full-stack web development and AI-driven programming. 
                Led backend team for the Melbourne Open Data Playground project.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">What I Do</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <span className="text-indigo-600 text-2xl mb-2">
                    <FaLaptopCode />
                  </span>
                  <h4 className="font-bold mb-1">Frontend</h4>
                  <p className="text-sm text-gray-500">Creating responsive and interactive UI with modern frameworks</p>
                </div>

                <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <span className="text-indigo-600 text-2xl mb-2">
                    <FaServer />
                  </span>
                  <h4 className="font-bold mb-1">Backend</h4>
                  <p className="text-sm text-gray-500">Building robust APIs and server-side logic</p>
                </div>

                <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <span className="text-indigo-600 text-2xl mb-2">
                    <FaCode />
                  </span>
                  <h4 className="font-bold mb-1">DevOps</h4>
                  <p className="text-sm text-gray-500">Setting up CI/CD pipelines and deployments</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">View Projects</a>
              <a href="/NoxZhao_resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-gray-300 hover:border-indigo-600 hover:text-indigo-600 font-medium px-6 py-3 rounded-lg transition-colors">Download Resume</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;