'use client';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-black min-h-screen relative overflow-hidden flex items-center">
      {/* Decorative Blob */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 transform">
        <svg 
          width="800" 
          height="800" 
          viewBox="0 0 800 800" 
          className="opacity-10 animate-blob"
        >
          <path
            d="M400,30C521.8,30,620.8,129,620.8,250.8C620.8,372.6,521.8,471.6,400,471.6C278.2,471.6,179.2,372.6,179.2,250.8C179.2,129,278.2,30,400,30Z"
            fill="#293936"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative z-10 animate-fadeIn">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src="/coding.png"
                alt="Coding Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white z-10 animate-fadeIn animation-delay-200">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slideUp animation-delay-400">
              Bangun Masa Depan <br/>
              <span className="text-[#293936]">Digital</span> Bersama FORTI
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg animate-slideUp animation-delay-600">
              Forum Riset Teknologi Informasi - Tempat di mana inovasi bertemu passion, 
              mengembangkan skill programming, riset, dan berkompetisi dalam dunia IT.
            </p>

            <div className="flex gap-4 animate-slideUp animation-delay-800">
              <button className="bg-[#293936] text-white px-8 py-3 rounded-full hover:bg-[#293936]/90 transition-colors">
                Bergabung Sekarang
              </button>
              <button className="border-2 border-[#293936] text-[#293936] px-8 py-3 rounded-full hover:bg-[#293936] hover:text-white transition-colors">
                Pelajari Lebih Lanjut
              </button>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 animate-slideUp animation-delay-1000">
              <div>
                <h3 className="text-3xl font-bold text-[#293936]">50+</h3>
                <p className="text-gray-400">Anggota Aktif</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#293936]">20+</h3>
                <p className="text-gray-400">Project Selesai</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#293936]">15+</h3>
                <p className="text-gray-400">Prestasi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;