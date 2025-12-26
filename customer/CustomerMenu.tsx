
import React, { useState } from 'react';
import { ShoppingBag, Star, Info, ChevronRight, LayoutDashboard, Phone, MapPin, Clock, ArrowRight, Instagram, Facebook } from 'lucide-react';
import { MOCK_MENU, CATEGORIES } from '../constants';
import { Category, CustomerSubView } from '../types';
import FoodCard from './FoodCard';
import SpecialItems from './SpecialItems';
import CategoryTabs from '../components/CategoryTabs';

interface CustomerMenuProps {
  onAdminClick: () => void;
}

const CustomerMenu: React.FC<CustomerMenuProps> = ({ onAdminClick }) => {
  const [activeTab, setActiveTab] = useState<CustomerSubView>('home');
  const [activeCategory, setActiveCategory] = useState<Category>(Category.SPECIALS);

  const filteredItems = MOCK_MENU.filter(item => item.category === activeCategory);
  const specials = MOCK_MENU.filter(item => item.isSpecial);

  const HomeView = () => (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200" 
          className="absolute inset-0 w-full h-full object-cover scale-105"
          alt="Sharavanaa's Delight"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent"></div>
        <div className="relative z-10 text-center px-6">
          <div className="inline-flex items-center gap-2 bg-amber/90 text-charcoal px-4 py-1.5 rounded-full text-xs font-bold mb-4 shadow-xl">
            <Star size={14} fill="currentColor" />
            4.1 RATED (2,512+ REVIEWS)
          </div>
          <h1 className="text-4xl font-extrabold mb-2 tracking-tight">SHARAVANAA’s Delight</h1>
          <p className="text-amber text-lg font-medium mb-8">Delicious Flavours for the Whole Family</p>
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => { setActiveTab('menu'); setActiveCategory(Category.BIRYANI); }}
              className="bg-amber text-charcoal px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform"
            >
              View Full Menu <ArrowRight size={18} />
            </button>
            <a 
              href="tel:+916262565677"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all"
            >
              Call to Order
            </a>
          </div>
        </div>
      </section>

      {/* Quick Info Grid */}
      <section className="p-6 grid grid-cols-2 gap-4 -mt-10 relative z-20">
        <div className="bg-white p-4 rounded-3xl shadow-xl border border-cream">
          <div className="bg-blue-50 w-10 h-10 rounded-2xl flex items-center justify-center text-blue-500 mb-3">
            <Clock size={20} />
          </div>
          <h4 className="font-bold text-sm">Open Now</h4>
          <p className="text-[11px] text-gray-400">11:00 AM – 11:00 PM</p>
        </div>
        <div className="bg-white p-4 rounded-3xl shadow-xl border border-cream">
          <div className="bg-green-50 w-10 h-10 rounded-2xl flex items-center justify-center text-green-500 mb-3">
            <MapPin size={20} />
          </div>
          <h4 className="font-bold text-sm">Palakollu</h4>
          <p className="text-[11px] text-gray-400">Weekly Market Locality</p>
        </div>
      </section>

      {/* Featured Items */}
      <section className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-black text-charcoal tracking-tight">Chef's Signature</h2>
          <button 
            onClick={() => setActiveTab('menu')}
            className="text-amber text-sm font-bold flex items-center gap-1"
          >
            See All <ChevronRight size={16} />
          </button>
        </div>
        <SpecialItems items={specials.slice(0, 3)} />
      </section>
    </div>
  );

  const ContactView = () => (
    <div className="p-8 animate-in slide-in-from-bottom duration-500">
      <h2 className="text-3xl font-black text-charcoal mb-2">Visit Us</h2>
      <p className="text-gray-500 mb-8">Serving authentic North Indian, Mughlai & Chinese since 2018.</p>

      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="bg-amber/10 p-3 rounded-2xl text-amber h-fit">
            <MapPin size={24} />
          </div>
          <div>
            <h4 className="font-bold text-charcoal">Address</h4>
            <p className="text-gray-500 text-sm mt-1 leading-relaxed">
              47-1-10/1, Weekly Market,<br />
              Palakollu Locality, Palakollu
            </p>
            <button className="text-amber text-xs font-bold mt-2 uppercase tracking-widest border-b border-amber/30 pb-1">Get Directions</button>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="bg-amber/10 p-3 rounded-2xl text-amber h-fit">
            <Phone size={24} />
          </div>
          <div>
            <h4 className="font-bold text-charcoal">Reservations</h4>
            <p className="text-gray-500 text-sm mt-1 leading-relaxed">
              +91 62625 65677
            </p>
            <p className="text-[10px] text-gray-400 mt-1 italic">Best to call 30 mins in advance for takeaways</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="bg-amber/10 p-3 rounded-2xl text-amber h-fit">
            <Info size={24} />
          </div>
          <div>
            <h4 className="font-bold text-charcoal">Taxes & Fees</h4>
            <p className="text-gray-500 text-sm mt-1 leading-relaxed">
              GST: 5% extra<br />
              Container Charges: 5% extra for takeaway
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-12 border-t border-cream flex justify-center gap-6 text-gray-400">
        <Instagram size={24} className="hover:text-amber cursor-pointer transition-colors" />
        <Facebook size={24} className="hover:text-amber cursor-pointer transition-colors" />
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto bg-cream min-h-screen relative pb-32 overflow-x-hidden">
      {/* Compact Header for non-home views */}
      {activeTab !== 'home' && (
        <header className="bg-charcoal text-white p-6 sticky top-0 z-50">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-xl font-bold text-amber">SHARAVANAA</h1>
            <button 
              onClick={onAdminClick}
              className="text-white/40 hover:text-amber transition-colors"
            >
              <LayoutDashboard size={20} />
            </button>
          </div>
          <div className="text-[10px] text-amber uppercase font-black tracking-widest opacity-80">
            {activeTab === 'menu' ? `Exploring ${activeCategory}` : 'Reach Us'}
          </div>
        </header>
      )}

      {/* Main Content Areas */}
      {activeTab === 'home' && <HomeView />}
      {activeTab === 'contact' && <ContactView />}
      
      {activeTab === 'menu' && (
        <div className="animate-in fade-in duration-300">
          <nav className="sticky top-0 bg-white z-40 shadow-sm border-b border-cream">
            <CategoryTabs 
              categories={CATEGORIES} 
              activeCategory={activeCategory} 
              onSelect={setActiveCategory} 
            />
          </nav>

          <main className="p-4 space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-gray-200/50">
              <h3 className="font-bold text-charcoal flex items-center gap-2">
                {activeCategory}
                <span className="text-xs font-normal text-gray-400">({filteredItems.length} items)</span>
              </h3>
              <div className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">Spice Route Approved</div>
            </div>
            
            <div className="grid gap-4">
              {filteredItems.map(item => (
                <FoodCard key={item.id} item={item} />
              ))}
            </div>
          </main>
        </div>
      )}

      {/* Premium Tab Bar Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-xl border-t border-cream px-6 py-4 flex justify-between items-center z-[60] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] rounded-t-[40px]">
        <button 
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'home' ? 'text-amber scale-110' : 'text-gray-300'}`}
        >
          <div className={`p-2 rounded-2xl ${activeTab === 'home' ? 'bg-amber/10' : ''}`}>
            <Star size={20} fill={activeTab === 'home' ? 'currentColor' : 'none'} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Home</span>
        </button>

        <button 
          onClick={() => { setActiveTab('menu'); setActiveCategory(Category.SPECIALS); }}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'menu' ? 'text-amber scale-110' : 'text-gray-300'}`}
        >
          <div className={`p-2 rounded-2xl ${activeTab === 'menu' ? 'bg-amber/10' : ''}`}>
            <ShoppingBag size={20} fill={activeTab === 'menu' ? 'currentColor' : 'none'} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Menu</span>
        </button>

        <button 
          onClick={() => setActiveTab('contact')}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'contact' ? 'text-amber scale-110' : 'text-gray-300'}`}
        >
          <div className={`p-2 rounded-2xl ${activeTab === 'contact' ? 'bg-amber/10' : ''}`}>
            <Phone size={20} fill={activeTab === 'contact' ? 'currentColor' : 'none'} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Contact</span>
        </button>

        {activeTab === 'menu' && (
          <div className="absolute -top-16 left-0 right-0 px-4">
            <button className="w-full bg-charcoal text-white rounded-3xl p-4 shadow-2xl flex items-center justify-between border border-amber/30 animate-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-3">
                <div className="bg-amber text-charcoal text-[10px] font-black px-2 py-0.5 rounded-lg">3 ITEMS</div>
                <p className="text-sm font-bold">₹640 + GST</p>
              </div>
              <ChevronRight size={20} className="text-amber" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerMenu;
