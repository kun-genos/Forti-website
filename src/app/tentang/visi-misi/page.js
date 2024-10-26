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
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: '#293835', opacity: 0.9 }}></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Visi & Misi</h1>
          <p className="text-lg md:text-xl text-green-100">Forum Riset Teknologi Informasi</p>
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
                ? 'text-white'
                : 'bg-white text-[#293835] hover:bg-[#e6e6e6]'
            }`}
            style={{ backgroundColor: activeTab === 'visi' ? '#293835' : 'white' }}
          >
            Visi
          </button>
          <button
            onClick={() => setActiveTab('misi')}
            className={`px-8 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'misi'
                ? 'text-white'
                : 'bg-white text-[#293835] hover:bg-[#e6e6e6]'
            }`}
            style={{ backgroundColor: activeTab === 'misi' ? '#293835' : 'white' }}
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
                <div className="inline-block p-4 rounded-full" style={{ backgroundColor: '#293835', color: 'white' }}>
                  <Target className="h-12 w-12" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#293835]">Visi FORTI</h2>
                <p className="text-xl leading-relaxed text-gray-700">
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
                <div className="inline-block p-4 rounded-full" style={{ backgroundColor: '#293835', color: 'white' }}>
                  <Flag className="h-12 w-12" />
                </div>
                <h2 className="text-3xl font-bold text-[#293835]">Misi FORTI</h2>
              </div>
              <div className="space-y-8">
                {misiList.map((misi, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-6 bg-white p-6 rounded-xl hover:bg-[#f0f0f0] transition-all duration-300 transform hover:-translate-y-1 shadow-md"
                  >
                    <div className="p-3 rounded-lg shrink-0 text-white" style={{ backgroundColor: '#293835' }}>
                      {misi.icon}
                    </div>
                    <p className="text-lg leading-relaxed text-gray-700 mt-2">
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