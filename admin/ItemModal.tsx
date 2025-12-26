
import React from 'react';
import { X, Upload, Check } from 'lucide-react';
import { CATEGORIES } from '../constants';

interface ItemModalProps {
  item?: any;
  onClose: () => void;
}

const ItemModal: React.FC<ItemModalProps> = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-charcoal">{item ? 'Edit Item' : 'Add New Item'}</h2>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-charcoal transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-8 overflow-y-auto space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Item Name</label>
              <input 
                type="text" 
                defaultValue={item?.name || ''}
                placeholder="e.g. Garlic Naan"
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Category</label>
              <select className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber/20">
                {CATEGORIES.map(cat => (
                  <option key={cat} selected={item?.category === cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Price (₹)</label>
              <input 
                type="number" 
                defaultValue={item?.price || ''}
                placeholder="0.00"
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber/20"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Description</label>
              <textarea 
                rows={3}
                defaultValue={item?.description || ''}
                placeholder="Describe the dish, ingredients, etc."
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber/20 resize-none"
              ></textarea>
            </div>

            <div className="col-span-2">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Item Image</label>
              <div className="border-2 border-dashed border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center text-gray-400 hover:border-amber/50 hover:bg-amber/5 transition-all cursor-pointer">
                {item?.image ? (
                  <div className="relative">
                    <img src={item.image} className="w-32 h-24 object-cover rounded-xl" alt="" />
                    <div className="absolute -top-2 -right-2 bg-amber rounded-full p-1 text-charcoal border-2 border-white">
                      <Check size={14} />
                    </div>
                  </div>
                ) : (
                  <>
                    <Upload size={32} className="mb-2" />
                    <p className="text-sm font-medium">Click to upload or drag & drop</p>
                    <p className="text-[10px] mt-1 uppercase tracking-widest">PNG, JPG, WEBP (Max 2MB)</p>
                  </>
                )}
              </div>
            </div>

            <div className="col-span-2 flex gap-6">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input type="checkbox" className="sr-only" defaultChecked={item?.isSpecial} />
                  <div className="w-10 h-6 bg-gray-200 rounded-full shadow-inner transition-colors group-has-[:checked]:bg-amber"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform group-has-[:checked]:translate-x-4"></div>
                </div>
                <span className="text-xs font-bold text-gray-500">Today's Special</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input type="checkbox" className="sr-only" defaultChecked={item?.isPopular} />
                  <div className="w-10 h-6 bg-gray-200 rounded-full shadow-inner transition-colors group-has-[:checked]:bg-amber"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform group-has-[:checked]:translate-x-4"></div>
                </div>
                <span className="text-xs font-bold text-gray-500">Mark as Popular</span>
              </label>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-6 py-3 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={onClose}
            className="bg-charcoal text-white px-8 py-3 rounded-xl text-sm font-bold shadow-lg hover:shadow-charcoal/20 transition-all active:scale-95"
          >
            {item ? 'Save Changes' : 'Create Item'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
