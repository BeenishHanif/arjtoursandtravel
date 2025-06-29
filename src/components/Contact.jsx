import React, { useState } from 'react';
import image1 from '/public/images/slider-one.jpg';
import { MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
  <div className="px-4 py-16 lg:px-12 bg-gradient-to-br from-gray-50 to-gray-100">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
    
    {/* Left Side - Image & Info */}
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl flex">
      <img
        src={image1}
        alt="ARJ Office"
        className="w-full object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] bg-opacity-60 p-6 flex flex-col justify-end text-white">
        <h2 className="text-2xl font-bold mb-2">ARJ TRAVEL AND TOURS</h2>
        <p className="text-sm">
          87-C, 11th Commercial Street,<br />
          Suite 2/2, Phase II Extension,<br />
          DHA, Karachi-Pakistan
        </p>
        <div className="mt-4 space-y-1 text-sm">
          <a href="tel:+922135804268" className="hover:text-blue-300">+9221-35804268</a><br />
          <a href="tel:+922135894268" className="hover:text-blue-300">+9221-35894268</a><br />
          <a href="tel:+922137220480" className="hover:text-blue-300">+9221-37220480</a><br />
          <a
            href="https://wa.me/923333204268"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            +92-333-3204268 (WhatsApp)
          </a>
        </div>
      </div>
    </div>

    {/* Right Side - Contact Form */}
    <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-between h-full">
      <div>
        <h3 className="subtitle !text-[#023f82] mb-4">We'd love to hear from you</h3>
        <p className=" mb-8">Have a question or want to plan a trip? Fill out the form and we’ll get back to you soon.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023f82] focus:border-transparent transition"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023f82] focus:border-transparent transition"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023f82] focus:border-transparent transition resize-none"
            placeholder="Tell us about your travel needs..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#023f82] text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 cursor-pointer transform transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  </div>
</div>

  );
};

export default Contact;
