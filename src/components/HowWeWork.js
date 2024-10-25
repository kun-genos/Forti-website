// src/components/HowWeWork.js
'use client';
import { useState } from 'react';
import Image from 'next/image';

const HowWeWork = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const studyDetails = [
    {
      image: '/pertemuan1.png',
      title: 'Pembelajaran Tatap Muka',
      description: 'Pertemuan dilaksanakan secara rutin di Ruang Lab Teknik Informatika yang nyaman dan dilengkapi dengan fasilitas modern. Anggota dapat berinteraksi langsung dengan mentor dan sesama peserta, menciptakan lingkungan belajar yang kolaboratif dan efektif.',
      details: [
        'Ruang belajar ber-AC dan proyektor',
        'Akses internet berkecepatan tinggi',
        'Workstation dengan spesifikasi memadai',
        'Kapasitas ruangan hingga 30 peserta'
      ]
    },
    {
      image: '/pertemuan2.png',
      title: 'Jadwal Pertemuan Fleksibel',
      description: 'FORTI mengadakan pertemuan 1-2 kali dalam seminggu, dengan durasi 4-5 jam per sesi. Jadwal ditentukan berdasarkan kesepakatan bersama untuk mengakomodasi kesibukan akademik anggota.',
      details: [
        'Pertemuan regular setiap Sabtu',
        'Sesi tambahan di hari Minggu (opsional)',
        'Durasi pembelajaran 4-5 jam per sesi',
        'Konsultasi project di luar jam pertemuan'
      ]
    },
    {
      image: '/pertemuan3.png',
      title: 'Metode Pembelajaran',
      description: 'Menggunakan pendekatan pembelajaran berbasis project dan riset, anggota FORTI tidak hanya belajar teori tetapi juga praktik langsung. Setiap pertemuan dirancang untuk memaksimalkan pemahaman dan skill development.',
      details: [
        'Project-based learning',
        'Hands-on practice',
        'Research & development',
        'Team collaboration projects'
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#293936] mb-4">
            Bagaimana Kami Belajar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bergabung dengan FORTI berarti menjadi bagian dari komunitas pembelajaran yang dinamis dan berorientasi pada pengembangan skill teknologi informasi.
          </p>
        </div>

        <div className="space-y-20">
          {studyDetails.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Container */}
              <div className="w-full md:w-1/2 relative">
                <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Decorative Element */}
                <div className="absolute -z-10 top-4 -left-4 w-full h-full bg-[#293936] rounded-xl opacity-10"></div>
              </div>

              {/* Content Container */}
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-2xl font-bold text-[#293936]">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <svg 
                        className="h-6 w-6 text-[#293936] mt-0.5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;