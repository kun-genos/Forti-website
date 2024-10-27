'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Calendar, Users, Lightbulb, MapPin } from 'lucide-react';

const WorkshopAndEvents = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const tabs = [
    { id: 'upcoming', label: 'Upcoming', icon: Calendar },
    { id: 'past', label: 'Past Events', icon: Users },
  ];

  const eventsInfo = {
    upcoming: [
      {
        title: "AI in Industry",
        date: "15 November 2024",
        mentor: "Sharfina Febbi Handayani M.Kom",
        description: "Eksplorasi penerapan AI dalam revolusi industri 4.0 dan peluangnya di masa depan.",
        location: "Ruang RnD"
      },
      {
        title: "Game Development Workshop",
        date: "3 Desember 2024",
        mentor: "Arif Hidayah,S.Tr.Kom,M.Tr.Kom",
        description: "Workshop hands-on tentang pengembangan game menggunakan Unity dan best practices terkini.",
        location: "Ruang RnD"
      }
    ],
    past: [
      {
        title: "Machine Learning",
        date: "5-7 September 2023",
        mentor: "Dwi Intan Af'idah S.T,M.Kom",
        description: "Bootcamp intensif 3 hari tentang dasar-dasar machine learning dan implementasinya.",
        location: "Ruang RnD"
      },
      {
        title: "Web Development with Laravel",
        date: "20 Oktober 2023",
        mentor: "Mirza Alim Mutasodirin, S.Kom,M.Kom",
        description: "Workshop pengembangan web modern menggunakan Laravel dan best practices terkini.",
        location: "Ruang RnD"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#293936] mb-12">Workshop & Events FORTI</h1>
        
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
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <Image
              src="/images/program/events/event1.jpg"
              alt="FORTI Workshop"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#293936] mb-4">Meningkatkan Pengetahuan dan Pengalaman</h2>
              <p className="text-gray-600 mb-4">
                FORTI berkomitmen untuk mengadakan workshop dan event berkualitas tinggi dengan mengundang mentor 
                berpengalaman dari berbagai bidang teknologi informasi. Kegiatan ini dirancang untuk meningkatkan 
                pengetahuan, keterampilan, dan pengalaman anggota kami dalam menghadapi tantangan industri IT yang 
                terus berkembang.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <Lightbulb className="h-5 w-5 text-[#293936] mr-2" />
                  Pembelajaran dari praktisi industri
                </li>
                <li className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 text-[#293936] mr-2" />
                  Networking dengan profesional IT
                </li>
                <li className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 text-[#293936] mr-2" />
                  Update teknologi terkini
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#293936] mb-6">
                {activeTab === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
              </h2>
              <div className="space-y-6">
                {eventsInfo[activeTab].map((event, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                    <h3 className="text-xl font-semibold text-[#293936]">{event.title}</h3>
                    <p className="text-gray-600 mb-2">{event.date}</p>
                    <p className="text-gray-800 font-medium">Mentor: {event.mentor}</p>
                    <p className="text-gray-600 mb-2">{event.description}</p>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 text-[#293936] mr-2" />
                      {event.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src="/images/program/events/event2.jpg"
              alt="FORTI Event"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-[#293936] mb-4">Bergabunglah dengan Kami!</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jangan lewatkan kesempatan untuk meningkatkan skill dan memperluas jaringan Anda. 
            Ikuti workshop dan event FORTI untuk pengalaman pembelajaran yang tak terl
          </p>
          <button className="mt-6 px-8 py-3 bg-[#293936] text-white font-medium rounded-full hover:bg-[#3a4a46] transition-colors duration-300">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkshopAndEvents;