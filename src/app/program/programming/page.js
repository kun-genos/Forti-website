'use client';

import Image from 'next/image';
import { useState } from 'react';

const ProgrammingClass = () => {
  const [activeTab, setActiveTab] = useState('web');

  const classes = [
    {
      id: 'web',
      title: "Web Development",
      image: "/images/program/programming/programming1.png",
      description: "Pelajari dasar-dasar hingga teknik lanjutan dalam pengembangan web modern. Kuasai HTML, CSS, JavaScript, dan framework populer seperti React dan Next.js.",
      topics: ["HTML5 & CSS3", "JavaScript ES6+", "React & Next.js", "Node.js & Express", "Database Integration"]
    },
    {
      id: 'mobile',
      title: "Mobile App Development",
      image: "/images/program/programming/programming2.png",
      description: "Kembangkan aplikasi mobile yang powerful untuk Android dan iOS menggunakan teknologi cross-platform. Fokus pada pengembangan aplikasi yang responsif dan user-friendly.",
      topics: ["Flutter & Dart", "React Native", "Mobile UI/UX Design", "State Management", "API Integration"]
    },
    {
      id: 'data',
      title: "Data Science & Machine Learning",
      image: "/images/program/programming/programming3.png",
      description: "Pelajari cara menganalisis data dan membangun model machine learning. Kuasai teknik-teknik data science untuk mengolah big data dan membuat prediksi.",
      topics: ["Python for Data Science", "Data Visualization", "Machine Learning Algorithms", "Deep Learning with TensorFlow", "Big Data Processing"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Programming Class FORTI</h1>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          {classes.map((cls) => (
            <button
              key={cls.id}
              onClick={() => setActiveTab(cls.id)}
              className={`px-6 py-3 font-medium text-sm rounded-full mx-2 transition-all duration-300 ${
                activeTab === cls.id
                  ? 'bg-[#293936] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cls.title}
            </button>
          ))}
        </div>

        {/* Content */}
        {classes.map((cls) => (
          <div
            key={cls.id}
            className={`transition-all duration-500 ${
              activeTab === cls.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'
            }`}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 relative">
                  <Image
                    src={cls.image}
                    alt={cls.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">{cls.title}</h2>
                  <p className="mt-2 text-gray-600">{cls.description}</p>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Yang akan Anda pelajari:</h3>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {cls.topics.map((topic, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
      </div>
    </div>
  );
};

export default ProgrammingClass;