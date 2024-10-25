import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          {/* Map Section */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Lokasi Kami</h3>
            <div className="h-64 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.635618023991!2d109.1051847!3d-6.8686026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb9e2805c1c1b%3A0xe3e61e1ae59106ff!2sPoliteknik%20Harapan%20Bersama%20Tegal!5e0!3m2!1sen!2sid!4v1635134366629!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          
          {/* Social Media Section */}
          <div className="w-full md:w-1/2 md:text-right">
            <h3 className="text-xl font-bold mb-4">Ikuti Kami</h3>
            <div className="flex justify-end space-x-4">
              <a href="https://instagram.com/forti" target="_blank" rel="noopener noreferrer" aria-label="Instagram FORTI" className="flex flex-col items-center hover:text-gray-400">
                <FaInstagram size={24} className="mb-2" />
                <span>Instagram</span>
              </a>
              <a href="https://twitter.com/forti" target="_blank" rel="noopener noreferrer" aria-label="Twitter FORTI" className="flex flex-col items-center hover:text-gray-400">
                <FaTwitter size={24} className="mb-2" />
                <span>Twitter</span>
              </a>
              <a href="https://facebook.com/forti" target="_blank" rel="noopener noreferrer" aria-label="Facebook FORTI" className="flex flex-col items-center hover:text-gray-400">
                <FaFacebook size={24} className="mb-2" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <hr className="my-6 border-gray-700" />
        
        {/* Copyright */}
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} FORTI. Dibuat oleh <strong>Riky Raharjo</strong>.</p>
          <p>Forum Riset Teknologi Informasi - Politeknik Harapan Bersama Tegal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;