'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Trophy, Search, Users, MessageSquare } from 'lucide-react';

const CompetitionTeam = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Trophy },
    { id: 'process', label: 'Proses', icon: Search },
    { id: 'achievements', label: 'Prestasi', icon: Users },
  ];

  const competitionInfo = {
    overview: {
      title: "Competition Team FORTI",
      description: "Program Competition Team FORTI adalah inisiatif untuk mendorong anggota kami berpartisipasi dalam berbagai kompetisi teknologi dan karya ilmiah. Kami mempersiapkan tim-tim terbaik untuk bersaing di tingkat nasional maupun internasional.",
      keyPoints: [
        "Pengembangan soft skills dan hard skills",
        "Exposure terhadap industri teknologi terkini",
        "Networking dengan profesional dan akademisi",
        "Peluang mendapatkan penghargaan dan pengakuan"
      ]
    },
    process: {
      title: "Proses Kompetisi",
      steps: [
        { title: "Pencarian Informasi Lomba", description: "Divisi kompetisi kami secara aktif mencari dan mengumpulkan informasi tentang berbagai kompetisi yang relevan." },
        { title: "Pembentukan Tim", description: "Kami memilih dan membentuk tim berdasarkan keahlian dan minat anggota yang sesuai dengan jenis kompetisi." },
        { title: "Bimbingan Intensif", description: "Tim mendapatkan bimbingan intensif dari mentor untuk mempersiapkan karya terbaik." },
        { title: "Komunikasi dengan Prodi", description: "Kami berkoordinasi erat dengan program studi untuk dukungan akademis dan administratif." },
        { title: "Pengembangan Karya", description: "Tim bekerja sama mengembangkan karya ilmiah atau software inovatif untuk kompetisi." },
        { title: "Persiapan Presentasi", description: "Pelatihan khusus untuk meningkatkan kemampuan presentasi dan pitching tim." },
        { title: "Evaluasi dan Feedback", description: "Setelah kompetisi, kami melakukan evaluasi menyeluruh untuk pembelajaran berkelanjutan." }
      ]
    },
    achievements: {
      title: "Prestasi Kami",
      list: [
        "Juara 1 Hackathon Nasional 2023",
        "Finalis Imagine Cup Southeast Asia 2022",
        "Best Paper Award di International Conference on Computer Science 2023",
        "Runner-up Kompetisi Data Science Indonesia 2022",
        "Top 10 di ASEAN Innovation Challenge 2023"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#293936] mb-12">Competition Team FORTI</h1>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 font-medium text-sm rounded-full mx-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#293936] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-semibold text-[#293936] mb-4">{competitionInfo.overview.title}</h2>
                  <p className="text-gray-600 mb-6">{competitionInfo.overview.description}</p>
                  <h3 className="text-xl font-semibold text-[#293936] mb-3">Keunggulan Program:</h3>
                  <ul className="space-y-2">
                    {competitionInfo.overview.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <Trophy className="h-5 w-5 text-[#293936] mr-2" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'process' && (
                <div>
                  <h2 className="text-2xl font-semibold text-[#293936] mb-6">{competitionInfo.process.title}</h2>
                  <div className="space-y-4">
                    {competitionInfo.process.steps.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#293936] text-white font-bold mr-4 flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#293936]">{step.title}</h4>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 'achievements' && (
                <div>
                  <h2 className="text-2xl font-semibold text-[#293936] mb-6">{competitionInfo.achievements.title}</h2>
                  <ul className="space-y-3">
                    {competitionInfo.achievements.list.map((achievement, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <Trophy className="h-6 w-6 text-yellow-500 mr-3" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="md:w-1/2 relative h-[400px] md:h-auto">
              <Image
                src={activeTab === 'overview' ? "/images/program/competition/competition.jpg" : "/images/program/competition/competition.jpg"}
                alt="Competition Team FORTI"
                layout="fill"
                objectFit="cover"
                className="rounded-r-xl"
              />
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Search className="h-10 w-10 text-] mb-4" />
            <h3 className="text-xl font-semibold text-[#293936] mb-2">Pencarian Lomba</h3>
            <p className="text-gray-600">Tim kami selalu update dengan berbagai kompetisi terbaru di bidang teknologi dan karya ilmiah.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Users className="h-10 w-10 text-[#293936] mb-4" />
            <h3 className="text-xl font-semibold text-[#293936] mb-2">Pembimbingan</h3>
            <p className="text-gray-600">Mentor akan membimbing tim dalam persiapan kompetisi untuk hasil terbaik.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <MessageSquare className="h-10 w-10 text-[#293936] mb-4" />
            <h3 className="text-xl font-semibold text-[#293936] mb-2">Koordinasi Prodi</h3>
            <p className="text-gray-600">Kami berkoordinasi erat dengan program studi untuk mendapatkan dukungan penuh dalam setiap kompetisi.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionTeam;