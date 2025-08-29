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
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4 gradient-text"
              variants={itemVariants}
            >
              Hi, I'm <span className="text-white">Rishu Kumar Singh</span>
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl text-gray-300 mb-6"
              variants={itemVariants}
            >
              MERN Stack Developer
            </motion.h2>
            <motion.p 
              className="text-gray-400 mb-8 max-w-lg"
              variants={itemVariants}
            >
              I build exceptional and accessible digital experiences for the web. Focused on creating intuitive and responsive user interfaces.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
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
              className="flex mt-8 space-x-4"
              variants={itemVariants}
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </motion.div>
          </div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-bold text-white">RS</div>
              </div>
              <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-ping-slow"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;