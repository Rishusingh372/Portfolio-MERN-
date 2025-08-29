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
<section id="projects" className="projects-section">
  <div className="container">
    <motion.h2 
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Projects
    </motion.h2>
    
    <div className="projects-grid">
      {projects.map((project, index) => (
        <motion.div 
          key={index}
          className="project-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
        >
          <div className="project-image">
            <div className="project-placeholder">
              <div className="project-initial">{project.title.charAt(0)}</div>
            </div>
            <div className="project-overlay">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                <FaExternalLinkAlt size={18} />
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub size={18} />
              </a>
            </div>
          </div>
          
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          
          <div className="project-technologies">
            {project.technologies.map((tech, i) => (
              <span key={i} className="project-tech-tag">
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