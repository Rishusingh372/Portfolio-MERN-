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
      className={`fixed w-full z-50 transition-all duration-300 ${scroll ? 'py-3 bg-black/80 backdrop-blur-md' : 'py-5'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="text-2xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          Rishu.
        </motion.a>

        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setMobileMenu(true)} className="text-white p-2">
            <HiMenu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className={`fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-md z-50 transform ${mobileMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden`}
          initial={{ x: 300 }}
          animate={{ x: mobileMenu ? 0 : 300 }}
        >
          <div className="p-5">
            <button onClick={() => setMobileMenu(false)} className="text-white p-2 float-right">
              <HiX size={24} />
            </button>
            <div className="clear-both mt-16 flex flex-col space-y-6">
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="text-gray-300 hover:text-white text-lg py-2 transition-colors"
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