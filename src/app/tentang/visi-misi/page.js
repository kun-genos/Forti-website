'use client';
import { useState } from 'react';
import { Target, Flag, Award, Users, Code, BookOpen } from 'lucide-react';

export default function VisiMisi() {
  const [activeTab, setActiveTab] = useState('visi');

  const misiList = [
    {
      icon: <Code className="h-8 w-8" />,
      text: "Menyelenggarakan pelatihan pemrograman berkualitas untuk mengembangkan hard skill dan soft skill anggota dalam bidang teknologi informasi"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      text: "Melakukan riset dan pengembangan dalam bidang teknologi informasi yang inovatif dan bermanfaat bagi masyarakat"
    },
    {
      icon: <Award className="h-8 w-8" />,
      text: "Berpartisipasi aktif dalam kompetisi IT tingkat nasional dan internasional untuk mengasah kemampuan dan mengharumkan nama institusi"
    },
    {
      icon: <Users className="h-8 w-8" />,
      text: "Membangun kolaborasi dengan komunitas IT dan industri untuk memperluas network dan peluang karir anggota"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#293936] opacity-90"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Visi & Misi</h1>
          <p className="text-lg md:text-xl text-gray-200">Forum Riset Teknologi Informasi</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tab Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setActiveTab('visi')}
            className={`px-8 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'visi'
                ? 'bg-[#293936] text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Visi
          </button>
          <button
            onClick={() => setActiveTab('misi')}
            className={`px-8 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'misi'
                ? 'bg-[#293936] text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Misi
          </button>
        </div>

        {/* Content */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className={`transition-opacity duration-300 ${
              activeTab === 'visi' ? 'opacity-100' : 'opacity-0 hidden'
            }`}>
              <div className="text-center">
                <div className="inline-block p-4 rounded-full bg-[#293936] mb-8">
                  <Target className="h-12 w-12" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Visi FORTI</h2>
                <p className="text-xl leading-relaxed text-gray-300">
                  "Menjadi forum riset teknologi informasi terkemuka yang menghasilkan 
                  inovator-inovator handal dalam pengembangan teknologi, serta menjadi 
                  wadah kolaborasi dan pembelajaran yang berkontribusi pada kemajuan 
                  teknologi informasi di Indonesia."
                </p>
              </div>
            </div>

            <div className={`transition-opacity duration-300 ${
              activeTab === 'misi' ? 'opacity-100' : 'opacity-0 hidden'
            }`}>
              <div className="text-center mb-12">
                <div className="inline-block p-4 rounded-full bg-[#293936] mb-8">
                  <Flag className="h-12 w-12" />
                </div>
                <h2 className="text-3xl font-bold">Misi FORTI</h2>
              </div>
              <div className="space-y-8">
                {misiList.map((misi, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-6 bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="p-3 bg-[#293936] rounded-lg shrink-0">
                      {misi.icon}
                    </div>
                    <p className="text-lg leading-relaxed text-gray-300 mt-2">
                      {misi.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}