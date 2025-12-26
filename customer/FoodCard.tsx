
import React from 'react';
import { Plus, Flame, Heart, Leaf, Skull } from 'lucide-react';
import { MenuItem } from '../types';

interface FoodCardProps {
  item: MenuItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  return (
    <div className="flex gap-4 p-4 rounded-3xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 group">
      <div className="relative w-28 h-28 flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover rounded-[24px] shadow-md group-hover:scale-105 transition-transform duration-500"
        />
        {item.isPopular && (
          <div className="absolute -top-2 -left-2 bg-red-500 text-white p-1.5 rounded-xl shadow-lg animate-pulse">
            <Flame size={14} fill="white" />
          </div>
        )}
        <div className={`absolute -bottom-1 -right-1 p-1 rounded-md border bg-white shadow-sm`}>
          <div className={`w-2.5 h-2.5 rounded-full ${item.isNonVeg ? 'bg-red-500' : 'bg-green-500'}`} />
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-between py-1">
        <div>
          <div className="flex justify-between items-start">
            <h4 className="font-bold text-charcoal text-base leading-tight">{item.name}</h4>
            <Heart size={16} className="text-gray-200 hover:text-red-400 cursor-pointer transition-colors" />
          </div>
          <p className="text-gray-400 text-xs mt-1.5 leading-relaxed line-clamp-2 italic">
            {item.description}
          </p>
        </div>
        
        <div className="flex justify-between items-center mt-3">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Price</span>
            <span className="font-black text-charcoal text-lg">₹{item.price}</span>
          </div>
          <button className="flex items-center gap-1.5 bg-amber text-charcoal px-5 py-2.5 rounded-2xl font-black text-xs shadow-md shadow-amber/10 active:scale-90 transition-all hover:bg-amber/90">
            <Plus size={16} strokeWidth={3} />
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
