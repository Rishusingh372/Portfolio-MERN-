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
    <section id="experience" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-1 bg-gradient-to-b from-indigo-600 to-purple-600 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-indigo-600 transform -translate-x-1/2 z-10"></div>
                
                <div className="ml-12 md:ml-0 md:w-1/2 mb-4 md:mb-0"></div>
                
                <div className="ml-12 md:mx-auto md:w-5/6">
                  <div className="card">
                    <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                    <h4 className="text-lg text-indigo-400 mb-2">{exp.company}</h4>
                    <p className="text-gray-400 mb-4">{exp.period} | {exp.location}</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
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