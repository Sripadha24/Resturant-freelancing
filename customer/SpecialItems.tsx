
import React from 'react';
import { MenuItem } from '../types';

interface SpecialItemsProps {
  items: MenuItem[];
}

const SpecialItems: React.FC<SpecialItemsProps> = ({ items }) => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
      {items.map((item) => (
        <div 
          key={item.id} 
          className="min-w-[280px] bg-white rounded-2xl overflow-hidden shadow-md border-2 border-amber relative flex-shrink-0"
        >
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-36 object-cover"
          />
          <div className="absolute top-2 right-2 bg-amber text-charcoal text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
            CHEF'S CHOICE
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-1">{item.name}</h3>
            <p className="text-gray-500 text-xs mb-3 line-clamp-1">{item.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-amber font-bold">₹{item.price}</span>
              <button className="bg-charcoal text-white text-xs px-4 py-2 rounded-lg font-bold active:scale-90 transition-transform">
                ADD TO ORDER
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialItems;
