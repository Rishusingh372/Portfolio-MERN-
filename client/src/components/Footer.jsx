import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
<footer className="footer">
  <div className="container">
    <div className="footer-container">
      <motion.p 
        className="footer-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Made with <FaHeart className="footer-heart" /> by Rishu Kumar Singh
      </motion.p>
      
      <motion.div 
        className="footer-social"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
          <FaGithub size={18} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
          <FaLinkedin size={18} />
        </a>
      </motion.div>
      
      <motion.p 
        className="footer-copyright"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} All Rights Reserved
      </motion.p>
    </div>
  </div>
</footer>
  );
};

export default Footer;