
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  UtensilsCrossed, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  Plus,
  ArrowUpRight,
  TrendingUp,
  Users,
  Layers
} from 'lucide-react';
import MenuManager from './MenuManager';
import Sidebar from '../components/Sidebar';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('menu');

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} onLogout={onLogout} />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-charcoal">
              {activeTab === 'dashboard' ? 'Overview' : 'Menu Management'}
            </h1>
            <p className="text-gray-400 text-sm">Welcome back, Admin</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input 
                type="text" 
                placeholder="Search..."
                className="bg-white border border-gray-100 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-amber/20 w-64"
              />
            </div>
            <button className="p-2 bg-white border border-gray-100 rounded-xl relative text-gray-400 hover:text-amber transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 ml-4 bg-white p-1 pr-4 rounded-xl border border-gray-100">
              <div className="w-10 h-10 bg-amber rounded-lg flex items-center justify-center font-bold text-charcoal">JD</div>
              <div>
                <p className="text-sm font-bold">John Doe</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Owner</p>
              </div>
            </div>
          </div>
        </header>

        {activeTab === 'dashboard' ? (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Total Sales', value: '₹42,850', icon: TrendingUp, color: 'text-green-500', bg: 'bg-green-50' },
                { label: 'Total Orders', value: '154', icon: Layers, color: 'text-blue-500', bg: 'bg-blue-50' },
                { label: 'Avg. Table Time', value: '42 min', icon: ArrowUpRight, color: 'text-amber', bg: 'bg-amber-50' },
                { label: 'Active Guests', value: '18', icon: Users, color: 'text-purple-500', bg: 'bg-purple-50' },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                      <stat.icon size={24} />
                    </div>
                    <span className="text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded-lg">+12%</span>
                  </div>
                  <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-charcoal mt-1">{stat.value}</h3>
                </div>
              ))}
            </div>

            {/* Recent Orders Placeholder */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-lg font-bold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border-b border-gray-50 last:border-0">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-300">
                        <UtensilsCrossed size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-bold">Table #{Math.floor(Math.random() * 20) + 1} ordered Paneer Butter Masala</p>
                        <p className="text-xs text-gray-400">2 minutes ago</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-charcoal">₹220</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <MenuManager />
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
