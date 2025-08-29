import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Express.js', level: 80 },
    { name: 'HTML/CSS', level: 95 },
  ];

  return (
<section id="about" className="about-section">
  <div className="container about-grid">
    <motion.h2 
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      About Me
    </motion.h2>
    
    <div className="about-grid">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h3>Who I Am</h3>
        <p className="about-text">
          I'm a passionate MERN Stack Developer with experience in building complex single-page applications for dynamic user experiences. I enjoy turning complex problems into simple, beautiful and intuitive solutions.
        </p>
        <p className="about-text">
          When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing my knowledge through blog posts and tutorials.
        </p>
        <div className="info-grid">
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
        </div>
      </motion.div>
      
      <motion.div
        className="skills-container"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h3>My Skills</h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div 
                  className="skill-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
</section>
  );
};

export default About;