// Contact.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setSubmitMessage(response.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitMessage('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.div
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="contact-content"
            variants={itemVariants}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's Talk
            </motion.h3>
            <motion.p 
              className="contact-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              I'm currently available for freelance work and open to new opportunities. If you have a project that you want to get started or think you need my help with something, then get in touch.
            </motion.p>
            
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="contact-info-item">
                <motion.div 
                  className="contact-icon"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaPhone />
                </motion.div>
                <div className="contact-info-text">
                  <h4>Phone</h4>
                  <p>+91-9341897481</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <motion.div 
                  className="contact-icon"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaEnvelope />
                </motion.div>
                <div className="contact-info-text">
                  <h4>Email</h4>
                  <p>singhrishukumar008@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <motion.div 
                  className="contact-icon"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaMapMarkerAlt />
                </motion.div>
                <div className="contact-info-text">
                  <h4>Location</h4>
                  <p>Bioqal, India</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="contact-form"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="contact-form-group">
                <label htmlFor="name" className="contact-label">Name</label>
                <motion.input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-input"
                  required 
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
              
              <div className="contact-form-group">
                <label htmlFor="email" className="contact-label">Email</label>
                <motion.input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-input"
                  required 
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
              
              <div className="contact-form-group">
                <label htmlFor="message" className="contact-label">Message</label>
                <motion.textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-textarea"
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                ></motion.textarea>
              </div>
              
              <motion.button 
                type="submit" 
                className="contact-button"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    style={{ display: 'inline-block' }}
                  >
                    <FaPaperPlane className="inline mr-2" />
                  </motion.div>
                ) : (
                  <FaPaperPlane className="inline mr-2" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              
              {submitMessage && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-3 rounded-lg ${submitMessage.includes('Error') ? 'bg-red-900/30 text-red-300' : 'bg-green-900/30 text-green-300'}`}
                >
                  {submitMessage}
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;