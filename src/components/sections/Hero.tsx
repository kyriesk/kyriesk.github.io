import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative bg-white overflow-hidden">
      {/* Background elements - decorative */}
      <div className="absolute inset-0 overflow-hidden opacity-10 z-0">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-indigo-600 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <span className="text-lg md:text-xl text-indigo-600 font-medium mb-2">👋 Hello there! I'm</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Full Stack</span> Developer
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              I build exceptional and accessible digital experiences for the web. Focused on creating intuitive and high-performing applications.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                Get in touch
              </a>
              <a href="#projects" className="border border-gray-300 hover:border-indigo-600 hover:text-indigo-600 font-medium px-6 py-3 rounded-lg transition-colors">
                View projects
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="https://github.com/kyriesk" target="_blank" rel="noopener noreferrer" 
                className="text-xl hover:text-indigo-600 transition-colors" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/nox-zhao-a10a18317/" target="_blank" rel="noopener noreferrer" 
                className="text-xl hover:text-indigo-600 transition-colors" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            {/* You can replace this with an actual image or illustration */}
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-500 opacity-20 rounded-full"></div>
              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                <span className="text-6xl">👩‍💻</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-gray-500 mb-2">Scroll down</span>
          <FaArrowDown className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;