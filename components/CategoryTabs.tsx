
import React from 'react';
import { Category } from '../types';

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: Category;
  onSelect: (category: Category) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, activeCategory, onSelect }) => {
  return (
    <div className="flex overflow-x-auto no-scrollbar gap-2 px-4 py-3 border-b border-cream shadow-sm">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`whitespace-nowrap px-6 py-2 rounded-full text-xs font-bold transition-all ${
            activeCategory === cat
              ? 'bg-amber text-charcoal shadow-md scale-105'
              : 'bg-cream/30 text-gray-500 hover:bg-cream/50'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
