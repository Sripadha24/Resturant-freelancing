
import React from 'react';
import { LayoutDashboard, UtensilsCrossed, Settings, LogOut, Layers, MessageSquare, PieChart } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange, onLogout }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'menu', label: 'Menu Items', icon: UtensilsCrossed },
    { id: 'categories', label: 'Categories', icon: Layers },
    { id: 'analytics', label: 'Analytics', icon: PieChart },
    { id: 'feedback', label: 'Feedbacks', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-72 bg-charcoal text-white flex flex-col h-screen sticky top-0">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-amber rounded-xl flex items-center justify-center text-charcoal shadow-lg shadow-amber/20">
            <UtensilsCrossed size={22} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Spice Route</h1>
            <p className="text-[10px] text-amber uppercase font-bold tracking-widest leading-none mt-1">Management</p>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 ${
                activeTab === item.id 
                  ? 'bg-amber text-charcoal font-bold shadow-lg shadow-amber/10 translate-x-1' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon size={20} />
              <span className="text-sm">{item.label}</span>
              {item.id === 'feedback' && (
                <span className="ml-auto bg-amber text-charcoal text-[10px] px-1.5 py-0.5 rounded-md font-black">2</span>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-8 border-t border-white/5">
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-red-400 hover:bg-red-400/10 hover:text-red-300 transition-all font-bold"
        >
          <LogOut size={20} />
          <span className="text-sm">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
