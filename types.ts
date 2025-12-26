
export enum Category {
  FRIED_RICE = 'Fried Rice',
  BIRYANI = 'Biryani',
  CURRIES = 'Main Course Curries',
  NOODLES = 'Noodles',
  RICE_BOWLS = 'Rice & Bowls',
  DRINKS = 'Soft Drinks',
  SPECIALS = 'Today\'s Specials'
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  isSpecial: boolean;
  isPopular: boolean;
  isAvailable: boolean;
  isNonVeg?: boolean;
}

export type View = 'customer' | 'admin_login' | 'admin_dashboard';
export type CustomerSubView = 'home' | 'menu' | 'contact';
