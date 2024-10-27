import React from 'react';
import { Users, GraduationCap, Brain, Trophy, Target } from 'lucide-react';

const MembersPage = () => {
  const stats = {
    activeMembers: 54,
    alumni: 86,
    competitions: 25,
    projects: 40
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      {/* Hero Section */}
      <div className="bg-[#293936] text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Anggota FORTI</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Gabungan mahasiswa yang passionate dalam pengembangan teknologi informasi
              dan riset di bidang IT
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Active Members Stats */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">{stats.activeMembers}+</p>
                <p className="text-sm text-gray-600">Anggota Aktif</p>
              </div>
            </div>
          </div>

          {/* Alumni Stats */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <GraduationCap className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">{stats.alumni}+</p>
                <p className="text-sm text-gray-600">Alumni</p>
              </div>
            </div>
          </div>

          {/* Competition Stats */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 rounded-xl">
                <Trophy className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">{stats.competitions}+</p>
                <p className="text-sm text-gray-600">Kompetisi Diikuti</p>
              </div>
            </div>
          </div>

          {/* Projects Stats */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-orange-100 rounded-xl">
                <Target className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600">{stats.projects}+</p>
                <p className="text-sm text-gray-600">Proyek Selesai</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Member Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Active Members Card */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1 p-8">
            <div className="text-center mb-6">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Anggota Aktif</h2>
              <p className="text-gray-600 mb-4">
                Mahasiswa aktif yang berkontribusi dalam pengembangan teknologi dan riset
              </p>
              <div className="text-4xl font-bold text-blue-600 mb-4">{stats.activeMembers}+</div>
              <ul className="text-left text-gray-600 space-y-2 mb-6">
                <li className="flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-blue-600" />
                  Aktif dalam riset dan pengembangan
                </li>
                <li className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-blue-600" />
                  Berpartisipasi dalam kompetisi
                </li>
                <li className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-blue-600" />
                  Mengerjakan proyek inovatif
                </li>
              </ul>
            </div>
          </div>

          {/* Alumni Card */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1 p-8">
            <div className="text-center mb-6">
              <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
                <GraduationCap className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Alumni</h2>
              <p className="text-gray-600 mb-4">
                Para alumni yang telah berkontribusi dan menginspirasi generasi berikutnya
              </p>
              <div className="text-4xl font-bold text-purple-600 mb-4">{stats.alumni}+</div>
              <ul className="text-left text-gray-600 space-y-2 mb-6">
                <li className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-purple-600" />
                  Bekerja di perusahaan teknologi terkemuka
                </li>
                <li className="flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-purple-600" />
                  Mengembangkan startup inovatif
                </li>
                <li className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-purple-600" />
                  Berkontribusi pada komunitas IT
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;