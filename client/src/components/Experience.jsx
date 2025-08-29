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

  return (
<section id="experience" className="experience-section">
  <div className="container">
    <motion.h2 
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Experience
    </motion.h2>
    
    <div className="experience-timeline">
      {/* Timeline line */}
      <div className="timeline-line"></div>
      
      <div className="experience-items">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="experience-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Timeline dot */}
            <div className="timeline-dot"></div>
            
            <div className="experience-content">
              <div className="experience-card">
                <h3 className="experience-title">{exp.title}</h3>
                <h4 className="experience-company">{exp.company}</h4>
                <p className="experience-details">{exp.period} | {exp.location}</p>
                <ul className="experience-list">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
};

export default Experience;