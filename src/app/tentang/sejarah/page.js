import React from 'react';
import Image from 'next/image';

const Sejarah = () => {
  const founders = [
    { id: 1, name: "Irfan Triadi Saputra", role: "Ketua Pertama FORTI", image: "/images/founders/irfan.jpeg" },
    { id: 2, name: "Muhammad Zaim Zamzami", role: "Pendiri", image: "/images/founders/zaim.png" },
    { id: 3, name: "Susi Nurindahsari", role: "Pendiri", image: "/images/founders/susi.jpeg" },
    { id: 4, name: "Syahrul Adi Mustofa", role: "Pendiri", image: "/images/founders/adi.jpeg" },
  ];

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#293936] mb-16">Sejarah FORTI</h1>
        
        {/* Pembina */}
        <div className="flex flex-col items-center mb-16">
          <div className="relative w-48 h-48 mb-4">
            <Image
              src="/images/founders/buIntan.jpeg"
              alt="Ibu Intan Dwi Af'idah"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-[#293936]"
            />
          </div>
          <h2 className="text-2xl font-semibold text-[#293936]">Ibu Intan Dwi Af'idah</h2>
          <p className="text-lg text-gray-600">Pembina FORTI</p>
        </div>

        {/* Garis Penghubung */}
        <div className="w-1 h-16 bg-[#293936] mx-auto"></div>

        {/* Pendiri */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {founders.map((founder) => (
            <div key={founder.id} className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-2 border-[#293936]"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#293936] text-center">{founder.name}</h3>
              <p className="text-gray-600 text-center">{founder.role}</p>
            </div>
          ))}
        </div>

        {/* Latar Belakang */}
        <div className="bg-gray-100 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-[#293936] mb-6">Latar Belakang FORTI</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Forum Riset Teknologi Informasi (FORTI) dibentuk pada tahun 2021 sebagai wadah bagi mahasiswa Teknik Informatika di Politeknik Harapan Bersama Tegal untuk mengembangkan kemampuan dalam bidang riset teknologi dan pemrograman.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Berawal dari kebutuhan akan komunitas yang fokus pada pengembangan skill praktis dan riset di bidang IT, sekelompok mahasiswa yang dipimpin oleh Irfan Triadi Saputra berinisiatif untuk membentuk FORTI. Tujuan utamanya adalah menciptakan lingkungan belajar yang kolaboratif, inovatif, dan berorientasi pada proyek nyata.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dengan bimbingan dari Ibu Intan Dwi Af'idah sebagai pembina, FORTI berkembang menjadi komunitas yang aktif dalam mengadakan workshop, kompetisi internal, dan proyek kolaboratif. Fokus utama FORTI mencakup pengembangan web, mobile app, kecerdasan buatan, dan riset terapan di bidang IT.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Sejak pembentukannya, FORTI telah berhasil menginspirasi banyak mahasiswa untuk terjun ke dunia riset dan pengembangan teknologi, menghasilkan berbagai prestasi di tingkat regional dan nasional, serta menjadi mitra bagi industri lokal dalam pengembangan solusi teknologi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sejarah;