import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, 
  FaDocker, FaDatabase, FaPython, FaFigma,
  FaCloud
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb } from 'react-icons/si';
import type { JSX } from 'react/jsx-runtime';

interface Skill {
  name: string;
  icon: JSX.Element;
  level: number; // 1-10
  color: string;
  category: 'frontend' | 'backend' | 'tools';
}

const skillsData: Skill[] = [
  { name: 'React', icon: <FaReact />, level: 9, color: '#61DAFB', category: 'frontend' },
  { name: 'TypeScript', icon: <SiTypescript />, level: 8, color: '#3178C6', category: 'frontend' },
  { name: 'JavaScript', icon: <FaJs />, level: 8, color: '#F7DF1E', category: 'frontend' },
  { name: 'HTML5', icon: <FaHtml5 />, level: 10, color: '#E34F26', category: 'frontend' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 10, color: '#1572B6', category: 'frontend' },
  { name: 'Next.js', icon: <SiNextdotjs />, level: 7, color: '#000000', category: 'frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 8, color: '#06B6D4', category: 'frontend' },
  
  { name: 'Node.js', icon: <FaNodeJs />, level: 8, color: '#339933', category: 'backend' },
  { name: 'MongoDB', icon: <SiMongodb />, level: 7, color: '#47A248', category: 'backend' },
  { name: 'PostgreSQL', icon: <FaDatabase />, level: 7, color: '#336791', category: 'backend' },
  { name: 'SQL', icon: <FaDatabase />, level: 8, color: '#336791', category: 'backend' },
  { name: 'Python', icon: <FaPython />, level: 8, color: '#3776AB', category: 'backend' },
  
  { name: 'Git', icon: <FaGitAlt />, level: 9, color: '#F05032', category: 'tools' },
  { name: 'Docker', icon: <FaDocker />, level: 7, color: '#2496ED', category: 'tools' },
  { name: 'Azure', icon: <FaCloud />, level: 6, color: '#007FFF', category: 'tools' },
  { name: 'Figma', icon: <FaFigma />, level: 7, color: '#F24E1E', category: 'tools' },
];

const Skills = () => {
  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools & Others' }
  ];
  
  return (
    <section id="skills" className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Here are the technologies and tools I work with regularly.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.id}>
              <h3 className="text-2xl font-bold mb-6">{category.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skillsData
                  .filter(skill => skill.category === category.id)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <span className="text-3xl mb-2" style={{ color: skill.color }}>
                        {skill.icon}
                      </span>
                      <h4 className="font-bold mb-2">{skill.name}</h4>
                      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-indigo-600 h-full rounded-full"
                          style={{ width: `${skill.level * 10}%` }}
                        ></div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;