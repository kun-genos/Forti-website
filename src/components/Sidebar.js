'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  BarChart2, 
  Settings, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { 
      icon: LayoutDashboard, 
      label: 'Dashboard', 
      href: '/admin/dashboard' 
    },
    { 
      icon: FileText, 
      label: 'Artikel', 
      href: '/admin/dashboard/artikel' 
    },
    { 
      icon: Users, 
      label: 'Anggota', 
      href: '/admin/anggota' 
    },
    { 
      icon: BarChart2, 
      label: 'Laporan', 
      href: '/admin/laporan' 
    },
    { 
      icon: Settings, 
      label: 'Pengaturan', 
      href: '/admin/pengaturan' 
    }
  ];

  return (
    <div 
      className={`bg-[#293936] text-white h-screen fixed left-0 top-0 z-40 transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      } shadow-xl flex flex-col`}
    >
      {/* Logo and Collapse Button */}
      <div className="flex items-center justify-between p-4 border-b border-[#3A4F4C] pt-24">
        {!collapsed && (
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-tight">FORTI</span>
            <span className="text-xs bg-white text-[#293936] px-2 py-0.5 rounded-full ml-2">
              Admin
            </span>
          </div>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="hover:bg-[#3A4F4C] p-2 rounded-full transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="h-6 w-6" />
          ) : (
            <ChevronLeft className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 py-4 overflow-y-auto">
        {menuItems.map((item) => (
          <Link 
            key={item.href}
            href={item.href}
            className={`
              flex items-center p-3 mx-2 rounded-lg transition-all duration-200
              ${pathname === item.href 
                ? 'bg-[#3A4F4C] text-white' 
                : 'hover:bg-[#3A4F4C] text-gray-300 hover:text-white'
              }
            `}
          >
            <item.icon className={`h-5 w-5 ${collapsed ? 'mx-auto' : 'mr-3'}`} />
            {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;