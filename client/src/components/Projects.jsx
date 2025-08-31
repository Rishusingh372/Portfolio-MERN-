// Projects.jsx
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Projects
        </motion.h2>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="project-image">
                <div className="project-placeholder">
                  <div className="project-initial">{project.title.charAt(0)}</div>
                </div>
                <motion.div 
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                    whileHover={{ scale: 1.1, backgroundColor: "#6366f1", color: "white" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt size={18} />
                  </motion.a>
                  <motion.a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                    whileHover={{ scale: 1.1, backgroundColor: "#6366f1", color: "white" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub size={18} />
                  </motion.a>
                </motion.div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <motion.span 
                    key={i} 
                    className="project-tech-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;