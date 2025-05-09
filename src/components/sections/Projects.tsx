import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment processing.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, task assignments, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'An interactive weather dashboard that displays current and forecasted weather data using external APIs.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b',
    tags: ['JavaScript', 'APIs', 'CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: 4,
    title: 'Blog Platform',
    description: 'A content management system for blogs with rich text editing, commenting, and user management features.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
    tags: ['Next.js', 'PostgreSQL', 'Auth0'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    description: 'A mobile-friendly fitness tracking application to monitor workouts, nutrition, and progress over time.',
    image: 'https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0',
    tags: ['React Native', 'GraphQL', 'AWS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'A real-time chat application with private messaging, group chats, and file sharing capabilities.',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a',
    tags: ['Socket.io', 'Express', 'React'],
    githubUrl: 'https://github.com',
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
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:text-indigo-600 transition-colors"
                    aria-label="View live project"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
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