'use client';

import Image from 'next/image';
import { useState } from 'react';

const ResearchClub = () => {
  const [activeTab, setActiveTab] = useState('research');

  const researchAreas = [
    {
      id: 'research',
      title: "Research Teknologi",
      image: "/images/program/research/research1.png",
      description: "Mengembangkan penelitian di bidang teknologi informasi dengan fokus pada inovasi dan solusi teknologi terkini. Anggota akan dibimbing untuk mengidentifikasi masalah, melakukan riset, dan mengembangkan solusi teknologi.",
      topics: [
        "Identifikasi Masalah Teknologi",
        "Analisis Kebutuhan Sistem",
        "Pengembangan Prototype",
        "Testing & Evaluasi",
        "Dokumentasi Penelitian"
      ]
    },
    {
      id: 'karya-ilmiah',
      title: "Penulisan Karya Ilmiah",
      image: "/images/program/research/research2.png",
      description: "Pembelajaran sistematis tentang penulisan karya ilmiah yang baik dan benar. Mulai dari penyusunan proposal penelitian hingga penulisan paper ilmiah yang siap dipublikasikan.",
      topics: [
        "Teknik Penulisan Proposal",
        "Struktur Paper Ilmiah",
        "Metode Penelitian IT",
        "Teknik Sitasi & Referensi",
        "Review & Editing Paper"
      ]
    },
    {
      id: 'publikasi',
      title: "Publikasi & Konferensi",
      image: "/images/program/research/research3.png",
      description: "Pembimbingan proses publikasi karya ilmiah di jurnal atau konferensi. Memahami proses submit paper, review, dan presentasi hasil penelitian di forum ilmiah.",
      topics: [
        "Pemilihan Jurnal/Konferensi",
        "Proses Submission Paper",
        "Teknik Presentasi Ilmiah",
        "Handling Review & Revisi",
        "Networking Akademis"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Research Club FORTI</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Wadah pengembangan riset teknologi dan penulisan karya ilmiah bagi mahasiswa 
            yang ingin berkontribusi dalam kemajuan teknologi informasi melalui penelitian yang berkualitas.
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 gap-4">
          {researchAreas.map((area) => (
            <button
              key={area.id}
              onClick={() => setActiveTab(area.id)}
              className={`px-6 py-3 font-medium text-sm rounded-full transition-all duration-300 ${
                activeTab === area.id
                  ? 'bg-[#293936] text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-200 hover:scale-102'
              }`}
            >
              {area.title}
            </button>
          ))}
        </div>

        {/* Content */}
        {researchAreas.map((area) => (
          <div
            key={area.id}
            className={`transition-all duration-500 ${
              activeTab === area.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'
            }`}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image
                    src={area.image}
                    alt={area.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">{area.title}</h2>
                  <p className="mt-2 text-gray-600 leading-relaxed">{area.description}</p>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Yang Akan Dipelajari:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
                      {area.topics.map((topic, index) => (
                        <li key={index} className="flex items-center text-gray-600 bg-gray-50 p-2 rounded-lg">
                          <svg className="h-5 w-5 text-[#293936] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Achievement Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Pencapaian Research Club FORTI
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="text-[#293936] text-4xl font-bold mb-2">20+</div>
              <p className="text-gray-600">Paper Terpublikasi</p>
            </div>
            <div className="text-center p-4">
              <div className="text-[#293936] text-4xl font-bold mb-2">15+</div>
              <p className="text-gray-600">Konferensi Diikuti</p>
            </div>
            <div className="text-center p-4">
              <div className="text-[#293936] text-4xl font-bold mb-2">10+</div>
              <p className="text-gray-600">Penghargaan Penelitian</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchClub;