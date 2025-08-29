import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
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
      transition={{ duration: 0.6 }}
    >
      <div className="header-container">
        <motion.a 
          href="#home" 
          className="logo"
          whileHover={{ scale: 1.05 }}
        >
          Rishu.
        </motion.a>

        <nav className="nav-desktop">
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="nav-link"
              whileHover={{ y: -2 }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        <div className="mobile-menu-btn">
          <button onClick={() => setMobileMenu(true)}>
            <HiMenu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className={`mobile-menu ${mobileMenu ? 'mobile-menu-open' : ''}`}
          initial={{ x: 300 }}
          animate={{ x: mobileMenu ? 0 : 300 }}
        >
          <div className="mobile-menu-content">
            <button onClick={() => setMobileMenu(false)} className="mobile-menu-close">
              <HiX size={24} />
            </button>
            <div className="mobile-nav">
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenu(false)}
                  whileHover={{ x: 10 }}
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
