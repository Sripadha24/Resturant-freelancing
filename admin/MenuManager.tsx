
import React, { useState } from 'react';
import { Edit2, Trash2, Eye, EyeOff, Plus, Filter, LayoutGrid, List } from 'lucide-react';
import { MOCK_MENU, CATEGORIES } from '../constants';
import ItemModal from './ItemModal';

const MenuManager: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [items, setItems] = useState(MOCK_MENU);

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-8 border-b border-gray-100 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">Menu Items</h2>
          <p className="text-xs text-gray-400 mt-1">Manage food items, prices, and availability</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-gray-50 p-1 rounded-xl">
            <button className="p-2 bg-white rounded-lg shadow-sm text-amber"><LayoutGrid size={18} /></button>
            <button className="p-2 text-gray-400"><List size={18} /></button>
          </div>
          <button className="flex items-center gap-2 bg-gray-50 text-gray-500 px-4 py-2 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors">
            <Filter size={16} />
            Filter
          </button>
          <button 
            onClick={handleAdd}
            className="flex items-center gap-2 bg-amber text-charcoal px-6 py-2 rounded-xl text-sm font-bold hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            <Plus size={18} />
            Add New Item
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Item</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Category</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Price</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
              <th className="px-8 py-4 text-right text-[10px] font-bold text-gray-400 uppercase tracking-widest">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50/30 transition-colors">
                <td className="px-8 py-4">
                  <div className="flex items-center gap-4">
                    <img src={item.image} className="w-12 h-12 rounded-xl object-cover" alt="" />
                    <div>
                      <p className="font-bold text-sm text-charcoal">{item.name}</p>
                      {item.isSpecial && <span className="text-[10px] bg-amber/20 text-amber font-bold px-2 py-0.5 rounded-full">SPECIAL</span>}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-lg">{item.category}</span>
                </td>
                <td className="px-6 py-4">
                  <p className="font-bold text-charcoal text-sm">₹{item.price}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${item.isAvailable ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    <span className="text-xs font-medium">{item.isAvailable ? 'Available' : 'Disabled'}</span>
                  </div>
                </td>
                <td className="px-8 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      onClick={() => handleEdit(item)}
                      className="p-2 text-gray-400 hover:text-amber hover:bg-amber-50 rounded-lg transition-all"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                      <Trash2 size={16} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-charcoal hover:bg-gray-100 rounded-lg transition-all">
                      {item.isAvailable ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-6 bg-gray-50/50 text-center">
        <p className="text-xs text-gray-400 font-medium tracking-wide">Showing all {items.length} dishes</p>
      </div>

      {isModalOpen && (
        <ItemModal 
          item={editingItem} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default MenuManager;
