'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Import React Quill untuk rich text editor dengan dynamic import
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

export default function CreateArticle() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    author: '',
    category: 'tutorial',
    image: null,
    publishedAt: '',
    status: 'draft'
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = new FormData();
      Object.keys(formData).forEach(key => {
        if (key === 'image') {
          if (formData[key]) {
            form.append(key, formData[key]);
          }
        } else {
          form.append(key, formData[key]);
        }
      });

      const res = await fetch('/api/articles', {
        method: 'POST',
        body: form
      });

      if (res.ok) {
        router.push('/admin/dashboard/artikel');
        router.refresh();
      } else {
        throw new Error('Failed to create article');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Gagal membuat artikel. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/admin/dashboard/artikel"
          className="text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">Buat Artikel Baru</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Judul */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Judul
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#293936] focus:border-transparent"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
        </div>

        {/* Gambar */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gambar
          </label>
          <div className="border-2 border-dashed rounded-lg p-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="cursor-pointer flex flex-col items-center gap-2"
            >
              {imagePreview ? (
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="max-h-48 object-contain mb-2"
                />
              ) : (
                <>
                  <Upload className="w-8 h-8 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    Klik untuk upload atau drag and drop
                  </span>
                </>
              )}
            </label>
          </div>
        </div>

        {/* Deskripsi Singkat */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Deskripsi Singkat
          </label>
          <textarea
            required
            rows={3}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#293936] focus:border-transparent"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />
        </div>

        {/* Konten */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Konten
          </label>
          <ReactQuill
            theme="snow"
            value={formData.content}
            onChange={(value) => setFormData({...formData, content: value})}
            className="h-64 mb-12"
          />
        </div>

        {/* Penulis */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Penulis
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#293936] focus:border-transparent"
            value={formData.author}
            onChange={(e) => setFormData({...formData, author: e.target.value})}
          />
        </div>

        {/* Kategori */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Kategori
          </label>
          <select
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#293936] focus:border-transparent"
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
          >
            <option value="tutorial">Tutorial</option>
            <option value="tech">Tech News</option>
            <option value="project">Project Showcase</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Status
          </label>
          <select
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#293936] focus:border-transparent"
            value={formData.status}
            onChange={(e) => setFormData({...formData, status: e.target.value})}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        {/* Tanggal Publish */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tanggal Publish
          </label>
          <input
            type="datetime-local"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#293936] focus:border-transparent"
            value={formData.publishedAt}
            onChange={(e) => setFormData({...formData, publishedAt: e.target.value})}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#293936] text-white py-2 px-4 rounded-lg hover:bg-[#293936]/90 transition-colors flex items-center justify-center gap-2"
        >
          {loading ? 'Menyimpan...' : (
            <>
              <Save className="w-4 h-4" />
              Simpan Artikel
            </>
          )}
        </button>
      </form>
    </div>
  );
}
