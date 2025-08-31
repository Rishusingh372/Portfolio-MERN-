// Hero.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <motion.div 
          className="hero-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-content">
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              Hi, I'm <motion.span
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ 
                  background: "linear-gradient(90deg, #6366f1, #8b5cf6, #6366f1)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >Rishu Kumar Singh</motion.span>
            </motion.h1>
            <motion.h2 
              className="hero-subtitle"
              variants={itemVariants}
            >
              MERN Stack Developer
            </motion.h2>
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              I build exceptional and accessible digital experiences for the web. Focused on creating intuitive and responsive user interfaces.
            </motion.p>
            <motion.div 
              className="hero-buttons"
              variants={itemVariants}
            >
              <motion.a 
                href="#contact" 
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <HiMail className="inline mr-2" /> Get In Touch
              </motion.a>
              <motion.a 
                href="/resume.pdf" 
                download 
                className="btn bg-transparent border border-indigo-600 text-white"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaDownload className="inline mr-2" /> Download CV
              </motion.a>
            </motion.div>
            <motion.div 
              className="hero-social"
              variants={itemVariants}
            >
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-social-link"
                whileHover={{ y: -5, scale: 1.1, backgroundColor: "#6366f1" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-social-link"
                whileHover={{ y: -5, scale: 1.1, backgroundColor: "#6366f1" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaLinkedin size={20} />
              </motion.a>
            </motion.div>
          </div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.7, type: "spring", stiffness: 100 }}
          >
            <motion.div 
              className="profile-container"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="profile-gradient"></div>
              <div className="profile-initials">RS</div>
              <motion.div 
                className="profile-pulse"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="profile-pulse"
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0, 0.3]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;