/* eslint-env node */
import Contact from '../models/Contact.js';

/**
 * POST /api/contact
 * Saves a new contact form submission
 */
export const submitContact = async (req, res) => {
  const { name, email, message } = req.body;
  
  try {
    const newContact = new Contact({ name, email, message });
    const savedContact = await newContact.save();
    res.status(201).json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      data: savedContact
    });
  } catch (err) {
    console.error('Contact form submission error:', err);
    res.status(400).json({ 
      success: false, 
      message: err.message 
    });
  }
};

/**
 * GET /api/contact
 * Returns all contact form submissions (admin only)
 */
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    console.error('Error fetching contacts:', err);
    res.status(500).json({ 
      success: false, 
      message: err.message 
    });
  }
};
