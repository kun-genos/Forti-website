import React from 'react';
import Image from 'next/image';

const PositionCard = ({ name, position, imageSrc, isLeader = false }) => (
  <div className={`w-48 ${isLeader ? 'bg-[#1d2b27] text-white' : 'bg-white'} rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-lg`}>
    <div className="text-center">
      <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden relative">
        <Image
          src={imageSrc || '/images/pengurus.jpg'} // Default image path if none provided
          alt={name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
      <h3 className={`font-bold ${isLeader ? 'text-white' : 'text-[#293936]'}`}>
        {name}
      </h3>
      <p className={`text-sm ${isLeader ? 'text-gray-300' : 'text-gray-600'} mt-1`}>
        {position}
      </p>
    </div>
  </div>
);

const ConnectorLine = ({ className }) => (
  <div className={`bg-[#293936] ${className}`} />
);

const StrukturOrganisasi = () => {
  const struktur = {
    kepemimpinan: [
      { 
        name: "Teguh", 
        position: "Ketua",
        imageSrc: "/images/pengurus/pengurus.jpg" // Sesuaikan path gambar
      },
      { 
        name: "Desi", 
        position: "Wakil Ketua",
        imageSrc: "/images/pengurus/pengurus.jpg"
      },
    ],
    divisi: [
      {
        title: "Divisi HRD",
        members: [
          { 
            name: "Humam", 
            position: "Divisi HRD",
            imageSrc: "/images/pengurus/pengurus.jpg"
          },
          { 
            name: "Fathur", 
            position: "Divisi HRD",
            imageSrc: "/images/pengurus/pengurus.jpg"
          },
        ],
      },
      {
        title: "Divisi Kompetisi",
        members: [
          { 
            name: "Karel", 
            position: "Divisi Kompetisi",
            imageSrc: "/images/pengurus/pengurus.jpg"
          },
          { 
            name: "Fadli", 
            position: "Divisi Kompetisi",
            imageSrc: "/images/pengurus/pengurus.jpg"
          },
        ],
      },
      {
        title: "Divisi Humas & Kreatif",
        members: [
          { 
            name: "Budi", 
            position: "Divisi Humas & Kreatif",
            imageSrc: "/images/pengurus/pengurus.jpg"
          },
          { 
            name: "Berlin", 
            position: "Divisi Humas & Kreatif",
            imageSrc: "/images/pengurus/pengurus.jpg"
          },
        ],
      },
      {
        title: "Divisi Programming",
        members: [
          { 
            name: "Arda", 
            position: "Divisi Programming",
            imageSrc: "/images/pengurus/pengurus.jpg"
          },
          { 
            name: "Surya", 
            position: "Divisi Programming",
            imageSrc: "/images/pengurus/pengurus.jpg"
          },
          { 
            name: "Hafidz", 
            position: "Divisi Programming",
            imageSrc: "/images/pengurus/pengurus.jpg"
          },
        ],
      },
      {
        title: "Divisi Riset",
        members: [
          { 
            name: "Tengku", 
            position: "Divisi Riset",
            imageSrc: "/images/pengurus/pengurus.jpg"
          },
          { 
            name: "Iqbal", 
            position: "Divisi Riset",
            imageSrc: "/images/pengurus/pengurus.jpg"
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#293936] mb-16">
          Struktur Pengurus FORTI 2024 - 2025
        </h1>

        <div className="relative">
          {/* Kepemimpinan Section */}
          <div className="flex justify-center gap-8 mb-24">
            {struktur.kepemimpinan.map((member, index) => (
              <div key={index} className="relative">
                <PositionCard
                  name={member.name}
                  position={member.position}
                  imageSrc={member.imageSrc}
                  isLeader={true}
                />
                {/* Vertical line below leadership */}
                <ConnectorLine className="absolute left-1/2 -translate-x-1/2 w-0.5 h-16 -bottom-16" />
              </div>
            ))}
          </div>

          {/* Horizontal line connecting all divisions */}
          <ConnectorLine className="absolute left-1/2 -translate-x-1/2 w-4/5 h-0.5 -mt-8 mx-auto" />

          {/* Divisi Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 relative pt-16">
            {struktur.divisi.map((divisi, index) => (
              <div key={index} className="relative">
                {/* Vertical line above each division */}
                <ConnectorLine className="absolute left-1/2 -translate-x-1/2 w-0.5 h-8 -top-16" />
                
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-center text-[#293936] mb-4 pb-2 border-b-2 border-[#293936]">
                    {divisi.title}
                  </h3>
                  <div className="flex flex-col items-center gap-4">
                    {divisi.members.map((member, memberIndex) => (
                      <div key={memberIndex} className="relative">
                        <PositionCard
                          name={member.name}
                          position={member.position}
                          imageSrc={member.imageSrc}
                        />
                        {memberIndex < divisi.members.length - 1 && (
                          <ConnectorLine className="absolute left-1/2 -translate-x-1/2 w-0.5 h-4 -bottom-4" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrukturOrganisasi;