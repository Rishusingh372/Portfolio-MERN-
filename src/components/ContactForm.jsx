// ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        placeholder="Name"
        className="w-full px-4 py-2 bg-gray-700 rounded-md text-white"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
        placeholder="Email"
        className="w-full px-4 py-2 bg-gray-700 rounded-md text-white"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        rows="4"
        required
        placeholder="Message"
        className="w-full px-4 py-2 bg-gray-700 rounded-md text-white"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
      >
        Send Message
      </button>
      {submitted && <p className="text-green-400">Message sent!</p>}
    </form>
  );
};

export default ContactForm;
