import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Blog App",
      description: "Developed a responsive blogging platform enabling users to create, edit, and browse posts with secure authentication and RESTful API services.",
      technologies: ["ReactJS", "Tailwind CSS", "Express JS", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
      image: "/blog-app.jpg"
    },
    {
      title: "Wonder-Lust",
      description: "Built responsive Wanderlust website ensuring seamless experience across devices with integrated Map API for interactive travel experiences.",
      technologies: ["HTML", "CSS", "JS", "Node JS", "Express JS", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
      image: "/wonderlust.jpg"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="card group overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className="h-48 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                  <div className="text-4xl font-bold text-white/30">{project.title.charAt(0)}</div>
                </div>
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-black hover:bg-indigo-600 hover:text-white transition-colors">
                    <FaExternalLinkAlt size={18} />
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-black hover:bg-indigo-600 hover:text-white transition-colors">
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-indigo-900/30 text-indigo-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;