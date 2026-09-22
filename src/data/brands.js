/* Brands data — kept in a separate file so BrandsSection.jsx
   only exports a React component (required for Fast Refresh). */

export const BRANDS = [
  {
    id: 'amul',
    name: 'Amul',
    descEn: 'Ice Cream, Milk & Dairy',
    descMr: 'आईस्क्रीम, दूध व दुग्धजन्य पदार्थ',
    logo: '/brands/amul.png',
    coldDrinkId: 'amul',
  },
  {
    id: 'natural_milk',
    name: 'Natural Milk',
    descEn: 'Dairy Natural Ice Cream',
    descMr: 'डेअरी नॅचरल आईस्क्रीम',
    logo: '/brands/natural_milk.png',
    coldDrinkId: 'natural_milk',
  },
  {
    id: 'nutriko',
    name: 'Nutriko',
    descEn: 'Ice Cream & Dairy',
    descMr: 'आईस्क्रीम आणि डेअरी',
    logo: '/brands/nutriko.png',
    coldDrinkId: 'nutriko',
  },
  {
    id: 'pepsi',
    name: 'Pepsi',
    descEn: 'Cold Drinks & Beverages',
    descMr: 'थंड पेये आणि ड्रिंक्स',
    logo: '/brands/pepsi.png',
    coldDrinkId: 'pepsi',
  },
  {
    id: 'cocacola',
    name: 'Coca-Cola',
    descEn: 'Cold Drinks & Beverages',
    descMr: 'थंड पेये आणि ड्रिंक्स',
    logo: '/brands/cocacola.png',
    coldDrinkId: 'cocacola',
  },
  {
    id: 'campa',
    name: 'Campa',
    descEn: 'Cold Drinks & Beverages',
    descMr: 'थंड पेये आणि ड्रिंक्स',
    logo: '/brands/campa.jpg',
    coldDrinkId: 'campa',
  },
  {
    id: 'parleagro',
    name: 'Parlé Agro',
    descEn: 'Frooti, Appy Fizz & More',
    descMr: 'फ्रूटी, अॅपी फिझ आणि अधिक',
    logo: '/brands/parleagro.png',
    coldDrinkId: 'parleagro',
  },
  {
    id: 'aasav',
    name: 'Aasav – Latur',
    descEn: 'Local Soda Brand',
    descMr: 'स्थानिक सोडा ब्रँड',
    logo: '/brands/aasav.png',
    coldDrinkId: 'aasav',
  },
  {
    id: 'monster',
    name: 'Monster Energy',
    descEn: 'Chilled Energy Drink',
    descMr: 'थंडगार एनर्जी ड्रिंक',
    logo: '/brands/monster.png',
    coldDrinkId: null,
  },
  {
    id: 'redbull',
    name: 'Red Bull',
    descEn: 'Energy Drink & Vitalizer',
    descMr: 'एनर्जी ड्रिंक व व्हिटॅलाईझर',
    logo: '/brands/redbull.png',
    coldDrinkId: null,
  },
  {
    id: 'sting',
    name: 'Sting Energy',
    descEn: 'Power Energy Refreshment',
    descMr: 'स्टिंग एनर्जी ड्रिंक',
    logo: '/brands/sting.png',
    coldDrinkId: null,
  },
  {
    id: 'chakote',
    name: 'Chakote Group',
    descEn: 'Oven Basket Bakery',
    descMr: 'ओव्हन बास्केट बेकरी',
    logo: '/brands/chakote.png',
    coldDrinkId: 'chakote',
  },
];

/* Emoji fallback for brands without a logo file */
export const BRAND_EMOJI = {
  nutriko: '🍨',
};
