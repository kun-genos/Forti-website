import React from 'react';
import { Camera } from 'lucide-react';

const GalleryPage = () => {
  // Array of gallery images
  const galleryImages = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    src: '/api/placeholder/800/600', // Menggunakan placeholder image untuk demo
    alt: `Gallery Image ${i + 1}`,
  }));

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      {/* Hero Section */}
      <div className="bg-[#293936] text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Camera className="h-12 w-12" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Galeri FORTI</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Kumpulan momen berharga dan pencapaian kami dalam berbagai kegiatan, 
              workshop, kompetisi, dan acara komunitas IT
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="group relative bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative w-full pt-[75%]"> {/* Aspect ratio 4:3 */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute top-0 left-0 w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      Kegiatan FORTI
                    </p>
                    <p className="text-xs text-gray-300 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {`Photo ${image.id}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;