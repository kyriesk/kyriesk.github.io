import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DevPortfolio</h3>
            <p className="text-gray-300">
              A modern portfolio showcasing my skills, projects, and experience as a developer.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-opacity">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-opacity">About</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition-opacity">Projects</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-white transition-opacity">Skills</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-opacity">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-indigo-400 transition-colors">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-indigo-400 transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-indigo-400 transition-colors">
                <FaTwitter />
              </a>
              <a href="mailto:contact@example.com" className="text-xl hover:text-indigo-400 transition-colors">
                <FaEnvelope />
              </a>
            </div>
            <div className="mt-4">
              <a href="mailto:contact@example.com" className="text-gray-300 hover:text-white transition-opacity">
                contact@example.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">© {currentYear} DevPortfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;