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
      opacity: 1
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
          Hi, I'm <span>Rishu Kumar Singh</span>
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
          <a href="#contact" className="btn">
            <HiMail className="inline mr-2" /> Get In Touch
          </a>
          <a href="/resume.pdf" download className="btn bg-transparent border border-indigo-600 text-white">
            <FaDownload className="inline mr-2" /> Download CV
          </a>
        </motion.div>
        <motion.div 
          className="hero-social"
          variants={itemVariants}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hero-social-link">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hero-social-link">
            <FaLinkedin size={20} />
          </a>
        </motion.div>
      </div>
      <motion.div 
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="profile-container">
          <div className="profile-gradient"></div>
          <div className="profile-initials">RS</div>
          <div className="profile-pulse"></div>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>
  );
};

export default Hero;