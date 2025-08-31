// Footer.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            Made with <motion.span 
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 500 }}
            ><FaHeart className="footer-heart" /></motion.span> by Rishu Kumar Singh
          </motion.p>
          
          <motion.div 
            className="footer-social"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={18} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin size={18} />
            </motion.a>
            <motion.button
              onClick={scrollToTop}
              className="footer-social-link"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <FaArrowUp size={18} />
            </motion.button>
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