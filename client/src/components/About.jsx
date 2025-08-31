// About.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Express.js', level: 80 },
    { name: 'HTML/CSS', level: 95 },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          About Me
        </motion.h2>
        
        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="about-content"
            variants={itemVariants}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Who I Am
            </motion.h3>
            <motion.p 
              className="about-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              I'm a passionate MERN Stack Developer with experience in building complex single-page applications for dynamic user experiences. I enjoy turning complex problems into simple, beautiful and intuitive solutions.
            </motion.p>
            <motion.p 
              className="about-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing my knowledge through blog posts and tutorials.
            </motion.p>
            <motion.div 
              className="info-grid"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="info-item">
                <h4>Name:</h4>
                <p>Rishu Kumar Singh</p>
              </div>
              <div className="info-item">
                <h4>Email:</h4>
                <p>singhrishukumar008@gmail.com</p>
              </div>
              <div className="info-item">
                <h4>Phone:</h4>
                <p>+91-9341897481</p>
              </div>
              <div className="info-item">
                <h4>Location:</h4>
                <p>Bioqal, India</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="skills-container"
            variants={itemVariants}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              My Skills
            </motion.h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="skill-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;