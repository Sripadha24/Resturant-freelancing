
import { MenuItem, Category } from './types';

export const MOCK_MENU: MenuItem[] = [
  // FRIED RICE - VEG
  {
    id: 'fr1',
    name: 'Veg Fried Rice',
    description: 'Classic wok-tossed rice with fresh seasonal vegetables.',
    price: 180,
    category: Category.FRIED_RICE,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=400',
    isSpecial: false,
    isPopular: true,
    isAvailable: true,
    isNonVeg: false
  },
  {
    id: 'fr2',
    name: 'Mushroom Fried Rice',
    description: 'Savory mushrooms tossed with aromatic basmati rice.',
    price: 270,
    category: Category.FRIED_RICE,
    image: 'https://images.unsplash.com/photo-1512058560366-cd2429458630?auto=format&fit=crop&q=80&w=400',
    isSpecial: false,
    isPopular: false,
    isAvailable: true,
    isNonVeg: false
  },
  {
    id: 'fr3',
    name: 'Paneer Fried Rice',
    description: 'Rice tossed with golden paneer cubes and mild spices.',
    price: 280,
    category: Category.FRIED_RICE,
    image: 'https://images.unsplash.com/photo-1567184109191-378be2346830?auto=format&fit=crop&q=80&w=400',
    isSpecial: true,
    isPopular: true,
    isAvailable: true,
    isNonVeg: false
  },
  // FRIED RICE - NON VEG
  {
    id: 'fr4',
    name: 'Chicken Fried Rice',
    description: 'Classic Chinese style rice with tender chicken chunks.',
    price: 260,
    category: Category.FRIED_RICE,
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=400',
    isSpecial: false,
    isPopular: true,
    isAvailable: true,
    isNonVeg: true
  },
  {
    id: 'fr5',
    name: 'Special Chicken Fried Rice',
    description: 'Chef\'s special blend of spices and double-marinated chicken.',
    price: 300,
    category: Category.FRIED_RICE,
    image: 'https://images.unsplash.com/photo-1626082895617-2c6de3476481?auto=format&fit=crop&q=80&w=400',
    isSpecial: true,
    isPopular: true,
    isAvailable: true,
    isNonVeg: true
  },
  // BIRYANI
  {
    id: 'b1',
    name: 'Chicken Dum Biryani (Full)',
    description: 'Authentic slow-cooked basmati rice with succulent spices.',
    price: 270,
    category: Category.BIRYANI,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=400',
    isSpecial: false,
    isPopular: true,
    isAvailable: true,
    isNonVeg: true
  },
  {
    id: 'b2',
    name: 'Mini Mutton Biryani',
    description: 'Perfect portion of aromatic mutton biryani.',
    price: 220,
    category: Category.BIRYANI,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=400',
    isSpecial: false,
    isPopular: false,
    isAvailable: true,
    isNonVeg: true
  },
  // CURRIES
  {
    id: 'c1',
    name: 'Butter Chicken',
    description: 'Creamy tomato gravy with grilled chicken pieces.',
    price: 350,
    category: Category.CURRIES,
    image: 'https://images.unsplash.com/photo-1603894584202-933259bb799a?auto=format&fit=crop&q=80&w=400',
    isSpecial: true,
    isPopular: true,
    isAvailable: true,
    isNonVeg: true
  },
  {
    id: 'c2',
    name: 'Andhra Chicken Curry',
    description: 'Spicy and authentic regional chicken preparation.',
    price: 330,
    category: Category.CURRIES,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=400',
    isSpecial: false,
    isPopular: true,
    isAvailable: true,
    isNonVeg: true
  },
  // SPECIALS
  {
    id: 's1',
    name: 'Red Hot Chicken',
    description: 'Fiery, tangy, and absolutely addictive signature chicken.',
    price: 320,
    category: Category.SPECIALS,
    image: 'https://images.unsplash.com/photo-1562607311-283a240a0c44?auto=format&fit=crop&q=80&w=400',
    isSpecial: true,
    isPopular: true,
    isAvailable: true,
    isNonVeg: true
  },
  {
    id: 's2',
    name: 'Mutton Palnadu',
    description: 'Tender mutton slow-cooked in a robust Palnadu-style spice mix.',
    price: 380,
    category: Category.SPECIALS,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400',
    isSpecial: true,
    isPopular: true,
    isAvailable: true,
    isNonVeg: true
  },
  // DRINKS
  {
    id: 'd1',
    name: 'Red Bull',
    description: 'Energy drink to power your meal.',
    price: 115,
    category: Category.DRINKS,
    image: 'https://images.unsplash.com/photo-1622543953490-31745d32c42e?auto=format&fit=crop&q=80&w=400',
    isSpecial: false,
    isPopular: false,
    isAvailable: true,
    isNonVeg: false
  }
];

export const CATEGORIES = Object.values(Category);
