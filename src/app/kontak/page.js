'use client';

import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, Send, MapPin, Mail, Phone } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      {/* Hero Section */}
      <div className="bg-[#293936] text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Jangan ragu untuk menghubungi kami jika ada pertanyaan atau ingin berkolaborasi
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Location */}
          <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Lokasi</h3>
            <p className="text-gray-600">Gedung D, Politeknik Harapan Bersama</p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
            <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
              <Mail className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600">forti@example.com</p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
            <div className="inline-block p-3 bg-purple-100 rounded-full mb-4">
              <Phone className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Telepon</h3>
            <p className="text-gray-600">+62 8123 4567 890</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#293936] focus:border-transparent outline-none transition-colors"
                placeholder="Masukkan nama lengkap"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#293936] focus:border-transparent outline-none transition-colors"
                placeholder="Masukkan alamat email"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#293936] focus:border-transparent outline-none transition-colors"
                placeholder="Tulis pesan Anda di sini..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#293936] text-white py-3 px-6 rounded-lg hover:bg-[#293936]/90 transition-colors flex items-center justify-center space-x-2 group"
            >
              <span>Kirim Pesan</span>
              <Send className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">Ikuti Kami</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/forti"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-pink-100 rounded-full hover:bg-pink-200 transition-colors group"
            >
              <Instagram className="h-6 w-6 text-pink-600 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://facebook.com/forti"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors group"
            >
              <Facebook className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://twitter.com/forti"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-sky-100 rounded-full hover:bg-sky-200 transition-colors group"
            >
              <Twitter className="h-6 w-6 text-sky-600 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;