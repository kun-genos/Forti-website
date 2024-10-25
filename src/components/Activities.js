import Image from 'next/image';

const ActivityCard = ({ title, description, icon: Icon }) => (
  <div className="p-4 hover:bg-white rounded-xl transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1 cursor-pointer">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="p-3 rounded-xl bg-[#293936] text-white shadow-md">
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-[#293936] mb-2">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default function Activities() {
  const activities = [
    {
      title: "Mobile Development",
      description: "Mempelajari pengembangan aplikasi mobile dengan Flutter dan React Native untuk menciptakan solusi digital yang inovatif.",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
    },
    {
      title: "Web Development",
      description: "Mengembangkan website modern dengan teknologi terkini seperti React, Next.js, dan Node.js untuk membangun aplikasi web yang powerful.",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      description: "Mempelajari prinsip desain dan user experience untuk menciptakan antarmuka yang intuitif dan menarik secara visual.",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      ),
    },
    {
      title: "Algoritma dan Struktur Data",
      description: "Memperdalam pemahaman tentang algoritma dan struktur data untuk membangun fondasi yang kuat dalam pemrograman.",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M2 20h20" />
          <path d="M5 20V8h4v12" />
          <path d="M10 20V4h4v16" />
          <path d="M15 20v-6h4v6" />
        </svg>
      ),
    },
    {
      title: "Machine Learning",
      description: "Eksplorasi dunia AI dan machine learning untuk mengembangkan solusi cerdas berbasis data dan automasi.",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M4.93 4.93l2.83 2.83" />
          <path d="M16.24 16.24l2.83 2.83" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="M4.93 19.07l2.83-2.83" />
          <path d="M16.24 7.76l2.83-2.83" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative Element */}
        <div className="flex items-center mb-12">
          <div className="w-16 h-1 bg-[#293936] rounded-full"></div>
          <div className="w-4 h-1 bg-[#293936] rounded-full ml-2 opacity-60"></div>
          <div className="w-2 h-1 bg-[#293936] rounded-full ml-2 opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[#293936] leading-tight">
                Yang Kami Lakukan
                <span className="block text-xl font-normal text-gray-600 mt-2">
                  Mengembangkan Talenta Digital Masa Depan
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                Di FORTI, kami fokus mengembangkan kemampuan mahasiswa dalam berbagai bidang teknologi informasi melalui pembelajaran praktis dan riset yang inovatif.
              </p>
            </div>
            
            <div className="grid gap-4">
              {activities.map((activity, index) => (
                <ActivityCard
                  key={index}
                  title={activity.title}
                  description={activity.description}
                  icon={activity.icon}
                />
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-[#293936] rounded-2xl opacity-5 transform rotate-3"></div>
            <div className="relative w-full h-0 pb-[65%] rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 transition-transform hover:rotate-0 duration-500">
              <Image
                src="/pertemuan.png"
                alt="Kegiatan FORTI"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Decorative dots */}
            <div className="absolute -bottom-8 -right-8 w-16 h-16 grid grid-cols-2 gap-2">
              <div className="w-2 h-2 rounded-full bg-[#293936] opacity-20"></div>
              <div className="w-2 h-2 rounded-full bg-[#293936] opacity-40"></div>
              <div className="w-2 h-2 rounded-full bg-[#293936] opacity-60"></div>
              <div className="w-2 h-2 rounded-full bg-[#293936] opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}