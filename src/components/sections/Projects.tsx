import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Shipment Tracker',
  description: 'A decentralized blockchain app for creating shipments, adding milestones, tracking progress, and verifying delivery with transparent, immutable records and no single point of failure.',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F-4pFI8psSI0%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=2f788cfb383c42ab8ec12de4eb39c310799279f64d251a3f4be335ba0d40a3c4',
    tags: ['Solidity', 'JavaScript', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/kyriesk/Shipment-Tracker',
    liveUrl: 'https://example.com'
  },
  {
    id: 2,
    title: 'Pet Pat',
  description: 'A pet grooming booking app with secure user authentication, pet profile management, service catalog, appointment scheduling and management, and a mobile-friendly Materialize CSS interface.',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.Ob3sSCeLBfgYYzaGhn9QeQHaE8%3Fpid%3DApi&f=1&ipt=f5e4dd8a5b33ac680cb35d9c84a2c9e00b79b3d9b1aa2d3fb2ecfb41d7436d87&ipo=images',
    tags: ['EJS', 'JavaScript', 'Materialize CSS', 'MongoDB', 'Node.js', 'Express.js'],
    githubUrl: 'https://github.com/kyriesk/pet-pat',
    liveUrl: 'https://example.com'
  },
  {
    id: 3,
    title: 'Melbourne OpenData Playground',
    description: "A educational platform and collaborative project with the City of Melbourne, seeks to enhance the utilization of Open Data by businesses, researchers, and software developers.",
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.KSKu6UqdUupwcxRpYPQGQAHaDt%3Fpid%3DApi&f=1&ipt=40a424933138550d804555f6ea91af75d5b89ecd0ddbb1fee5f5368c99b94374&ipo=images',
    tags: ['JavaScript', 'APIs', 'HTML', 'Tailwind CSS', 'React', 'Next.js', 'Node.js', 'Express.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/Chameleon-company/MOP-Code',
    liveUrl: 'https://example.com'
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<string>('All');

  const filters = ['All', 'React', 'Node.js', 'JavaScript', 'APIs'];
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Here are some of my recent projects. Each one is built with care and attention to detail.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map((item, index) => (
            <button
              key={index}
              onClick={() => setFilter(item)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === item
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * project.id }}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={`${project.image}?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3`} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-500 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:text-indigo-600 transition-colors"
                    aria-label="View GitHub repository"
                  >
                    <FaGithub /> Code
                  </a>
                  {/* <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:text-indigo-600 transition-colors"
                    aria-label="View live project"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;