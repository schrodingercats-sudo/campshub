
import React, { useState } from 'react';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Here you would typically send the data to a backend or email service
    alert('Thank you for your request! We will get back to you shortly.');
    setFormData({ name: '', email: '', course: '', description: '' });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to <span className="text-[#00F5D4]">Elevate Your Grades?</span>
        </h2>
        <p className="text-gray-300 mb-8">
          Let's talk about your project. Fill out the form below, and we'll get back to you with a free, no-obligation quote.
        </p>
        <form onSubmit={handleSubmit} className="w-full text-left space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full bg-[#1e1e38]/50 border border-gray-600 rounded-md p-3 focus:ring-2 focus:ring-[#00F5D4] focus:border-[#00F5D4] outline-none transition-all" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full bg-[#1e1e38]/50 border border-gray-600 rounded-md p-3 focus:ring-2 focus:ring-[#00F5D4] focus:border-[#00F5D4] outline-none transition-all" />
            </div>
          </div>
          <div>
            <label htmlFor="course" className="block text-sm font-medium text-gray-400 mb-2">Course/Major</label>
            <input type="text" name="course" id="course" value={formData.course} onChange={handleChange} className="w-full bg-[#1e1e38]/50 border border-gray-600 rounded-md p-3 focus:ring-2 focus:ring-[#00F5D4] focus:border-[#00F5D4] outline-none transition-all" />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-2">Project Description</label>
            <textarea name="description" id="description" rows={5} value={formData.description} onChange={handleChange} required className="w-full bg-[#1e1e38]/50 border border-gray-600 rounded-md p-3 focus:ring-2 focus:ring-[#00F5D4] focus:border-[#00F5D4] outline-none transition-all"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-[#00F5D4] text-[#1A1A2E] font-bold py-3 px-10 rounded-full text-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_#00F5D4]">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
