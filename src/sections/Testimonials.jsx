// Testimonials.jsx
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jane Doe',
      feedback: 'Great developer! Delivered everything on time and exceeded expectations.'
    },
    {
      name: 'John Smith',
      feedback: 'Highly professional and easy to work with. Would definitely hire again.'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-800 to-black text-white px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500">Testimonials</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gradient-to-br from-black to-gray-800 p-6 rounded-md shadow-md border border-gray-700">
              <p className="text-gray-300 mb-4">"{t.feedback}"</p>
              <h4 className="text-lg font-semibold text-gray-400">- {t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
