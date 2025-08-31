// Header.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header 
      className={`header ${scroll ? 'header-scrolled' : 'header-normal'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header-container">
        <motion.a 
          href="#home" 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Rishu.
        </motion.a>

        <nav className="nav-desktop">
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className={`nav-link ${activeSection === item.href.substring(1) ? 'nav-link-active' : ''}`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {item.name}
              {activeSection === item.href.substring(1) && (
                <motion.div 
                  className="nav-link-underline"
                  layoutId="nav-underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </nav>

        <div className="mobile-menu-btn">
          <motion.button 
            onClick={() => setMobileMenu(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <HiMenu size={24} />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className={`mobile-menu ${mobileMenu ? 'mobile-menu-open' : ''}`}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: mobileMenu ? 0 : 300, opacity: mobileMenu ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="mobile-menu-content">
            <motion.button 
              onClick={() => setMobileMenu(false)} 
              className="mobile-menu-close"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiX size={24} />
            </motion.button>
            <div className="mobile-nav">
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenu(false)}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;