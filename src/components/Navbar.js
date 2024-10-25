'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Monitor } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigation = {
    beranda: { path: '/' },
    'tentang kami': {
      items: [
        { name: 'Sejarah', path: '/tentang/sejarah' },
        { name: 'Visi & Misi', path: '/tentang/visi-misi' },
        { name: 'Struktur Organisasi', path: '/tentang/struktur' },
      ]
    },
    program: {
      items: [
        { name: 'Programming Class', path: '/program/programming' },
        { name: 'Research Club', path: '/program/research' },
        { name: 'Competition Team', path: '/program/competition' },
        { name: 'Workshop & Events', path: '/program/events' },
      ]
    },
    anggota: {
      items: [
        { name: 'Daftar Anggota', path: '/anggota/daftar' },
        { name: 'Alumni', path: '/anggota/alumni' },
        { name: 'Prestasi', path: '/anggota/prestasi' },
      ]
    },
    galeri: { path: '/galeri' },
    'artikel': {
      items: [
        { name: 'Tutorial', path: '/blog/tutorial' },
        { name: 'Tech News', path: '/blog/news' },
        { name: 'Project Showcase', path: '/blog/projects' },
      ]
    },
    kontak: { path: '/kontak' },
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleDropdown = (key) => {
    if (activeDropdown === key) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(key);
    }
  };

  return (
    <nav className="bg-white border-b shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Name with Computer Icon */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex flex-col items-start hover:opacity-90 transition-opacity"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              <div className="flex items-center">
                <span className="text-[#293936] text-2xl font-extrabold tracking-tight">FORTI</span>
                <Monitor className="h-6 w-6 text-[#293936] ml-2" strokeWidth={2.5} />
              </div>
              <span className="text-xs font-medium bg-[#293936] text-white px-2 py-0.5 rounded-full mt-1">
                Forum Riset TI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {Object.entries(navigation).map(([key, value]) => (
              <div key={key} className="relative group px-2">
                {key === 'kontak' ? (
                  <Link
                    href={value.path}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-[#293936] text-white font-medium hover:bg-[#293936]/90 transition-all transform hover:scale-105 shadow-sm"
                  >
                    {key}
                  </Link>
                ) : value.items ? (
                  <button
                    className="text-black hover:text-[#293936] inline-flex items-center px-3 py-2 text-[15px] font-medium capitalize transition-colors hover:bg-gray-50 rounded-lg"
                    onClick={() => handleDropdown(key)}
                  >
                    {key}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                  </button>
                ) : (
                  <Link
                    href={value.path}
                    className="text-black hover:text-[#293936] px-3 py-2 text-[15px] font-medium capitalize transition-colors hover:bg-gray-50 rounded-lg"
                  >
                    {key}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {value.items && (
                  <div className={`absolute left-0 mt-2 w-56 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${activeDropdown === key ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="py-2 px-1" role="menu">
                      {value.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.path}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#293936] hover:text-white rounded-lg transition-colors mx-1"
                          role="menuitem"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-black hover:text-[#293936] hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
          {Object.entries(navigation).map(([key, value]) => (
            <div key={key}>
              {key === 'kontak' ? (
                <Link
                  href={value.path}
                  className="block mx-2 my-2 px-4 py-2 text-center rounded-full bg-[#293936] text-white font-medium hover:bg-[#293936]/90 transition-all"
                >
                  {key}
                </Link>
              ) : value.items ? (
                <div>
                  <button
                    onClick={() => handleDropdown(key)}
                    className="w-full text-left px-4 py-2.5 text-base font-medium text-black hover:text-[#293936] hover:bg-gray-50 rounded-lg capitalize flex items-center justify-between transition-colors"
                  >
                    {key}
                    <ChevronDown className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${activeDropdown === key ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`ml-4 ${activeDropdown === key ? 'block' : 'hidden'}`}>
                    {value.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#293936] hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={value.path}
                  className="block px-4 py-2.5 text-base font-medium text-black hover:text-[#293936] hover:bg-gray-50 rounded-lg capitalize transition-colors"
                >
                  {key}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;