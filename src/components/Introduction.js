'use client';
import Image from 'next/image';

const Introduction = () => {
  return (
    <section className="relative">
      
      {/* Main content */}
      <div className="bg-white text-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Text Content */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#293936]">
              Welcome to <span className="text-[#4a5c58]">FORTI</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Forum Riset Teknologi Informasi (FORTI) adalah study club yang berfokus pada riset teknologi 
              dan pemrograman di Politeknik Harapan Bersama, Kota Tegal.
            </p>
            <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-600">
              Dibentuk pada tahun 2021, FORTI menjadi wadah bagi mahasiswa Teknik Informatika
              untuk mengembangkan kemampuan dalam bidang riset teknologi dan programming.
            </p>
          </div>

          {/* Icons/Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Icon 1 */}
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src="/introduce1.png"
                  alt="Research Icon"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#293936]">Research Excellence</h3>
              <p className="text-gray-600">
                Mengembangkan kemampuan riset dalam bidang teknologi informasi
              </p>
            </div>

            {/* Icon 2 */}
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src="/introduce2.png"
                  alt="Programming Icon"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#293936]">Programming Skills</h3>
              <p className="text-gray-600">
                Meningkatkan keahlian dalam berbagai bahasa pemrograman
              </p>
            </div>

            {/* Icon 3 */}
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src="/introduce3.png"
                  alt="Community Icon"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#293936]">Community Growth</h3>
              <p className="text-gray-600">
                Membangun komunitas teknologi yang solid dan kolaboratif
              </p>
            </div>
          </div>

          {/* Location Badge */}
          <div className="mt-16 text-center">
            <span className="inline-flex items-center px-6 py-2 rounded-full border-2 border-[#293936] text-[#293936]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Politeknik Harapan Bersama, Tegal - Prodi Teknik Informatika
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;