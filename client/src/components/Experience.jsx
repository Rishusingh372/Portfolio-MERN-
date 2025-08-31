// Experience.jsx
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Technical Intern",
      company: "AdvertisEasy – 360 Digital Marketing Agency",
      period: "Mar 2025 – Present",
      location: "Bioqal, India",
      responsibilities: [
        "Designed and developed responsive front-end applications and landing pages using React.js, HTML5, CSS3, JavaScript, Bootstrap, and WordPress",
        "Ensured mobile responsiveness, cross-browser compatibility, and SEO-friendly design for marketing-driven websites",
        "Collaborated on live projects like advertiseasy.com and projectiondesign, focusing on modern UI/UX, smooth animations, and brand consistency"
      ]
    },
    {
      title: "Frontend Developer Intern",
      company: "Edunet Foundation",
      period: "June 2023 – July 2023",
      location: "Virtual",
      responsibilities: [
        "Collaborated with the development team to complete assigned tasks efficiently",
        "Built and maintained dynamic user interfaces using ReactJS, enhancing responsiveness and usability",
        "Created reusable components and optimized code for scalability"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Experience
        </motion.h2>
        
        <motion.div 
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Timeline line */}
          <div className="timeline-line"></div>
          
          <div className="experience-items">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="experience-item"
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="timeline-dot"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
                
                <div className="experience-content">
                  <motion.div 
                    className="experience-card"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(99, 102, 241, 0.15)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="experience-title">{exp.title}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                    <p className="experience-details">{exp.period} | {exp.location}</p>
                    <ul className="experience-list">
                      {exp.responsibilities.map((item, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 + 0.3 }}
                          viewport={{ once: true }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;