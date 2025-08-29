import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
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

  return (
<section id="contact" className="contact-section">
  <div className="container">
    <motion.h2 
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Get In Touch
    </motion.h2>
    
    <div className="contact-grid">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h3>Let's Talk</h3>
        <p className="contact-text">
          I'm currently available for freelance work and open to new opportunities. If you have a project that you want to get started or think you need my help with something, then get in touch.
        </p>
        
        <div className="contact-info">
          <div className="contact-info-item">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <div className="contact-info-text">
              <h4>Phone</h4>
              <p>+91-9341897481</p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div className="contact-info-text">
              <h4>Email</h4>
              <p>singhrishukumar008@gmail.com</p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="contact-info-text">
              <h4>Location</h4>
              <p>Bioqal, India</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-form-group">
            <label htmlFor="name" className="contact-label">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className="contact-input"
              required 
            />
          </div>
          
          <div className="contact-form-group">
            <label htmlFor="email" className="contact-label">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className="contact-input"
              required 
            />
          </div>
          
          <div className="contact-form-group">
            <label htmlFor="message" className="contact-label">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="contact-textarea"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="contact-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {submitMessage && (
            <div className={`mt-4 p-3 rounded-lg ${submitMessage.includes('Error') ? 'bg-red-900/30 text-red-300' : 'bg-green-900/30 text-green-300'}`}>
              {submitMessage}
            </div>
          )}
        </form>
      </motion.div>
    </div>
  </div>
</section>
  );
};

export default Contact;