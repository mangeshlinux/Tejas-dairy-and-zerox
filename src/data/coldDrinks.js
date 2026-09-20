/* ============================================================
   SHOP PRODUCT BRANDS — Tejesh Dairy & Xerox Parlour
   Includes cold drink brands + ice cream brands.
   category: 'cold_drink' | 'ice_cream'
   products[].sizes  → pack sizes available
   products[].note   → key flavors (optional, shown as sub-text)
   ============================================================ */

export const COLD_DRINK_SIZES = ['250/300 ml', '500/600 ml', '1.25 L', '2.25 L'];

export const COLD_DRINK_BRANDS = [
  /* ---- Pepsi ---- */
  {
    id: 'pepsi',
    name: 'Pepsi',
    category: 'cold_drink',
    emoji: '🥤',
    logo: '/brands/pepsi.png',
    products: [
      { name: 'Pepsi',         sizes: ['250/300 ml', '500/600 ml', '1.25 L', '2.25 L'] },
      { name: 'Pepsi Black',   sizes: ['250/300 ml', '500/600 ml', '1.25 L', '2.25 L'] },
      { name: '7UP',           sizes: ['250/300 ml', '500/600 ml', '1.25 L', '2.25 L'] },
      { name: 'Mirinda',       sizes: ['250/300 ml', '500/600 ml', '1.25 L', '2.25 L'] },
      { name: 'Mountain Dew',  sizes: ['250/300 ml', '500/600 ml', '1.25 L', '2.25 L'] },
      { name: 'Sting',         sizes: ['250/300 ml', '500/600 ml'] },
      { name: 'Nimbooz',       sizes: ['250/300 ml', '500/600 ml'] },
      { name: 'Slice',         sizes: ['250/300 ml', '500/600 ml', '1.25 L', '2.25 L'] },
      { name: 'Gatorade',      sizes: ['500/600 ml'] },
    ],
  },

  /* ---- Coca-Cola ---- */
  {
    id: 'cocacola',
    name: 'Coca-Cola',
    category: 'cold_drink',
    emoji: '🥤',
    logo: '/brands/cocacola.png',
    products: [
      { name: 'Coca-Cola',            sizes: ['250/300 ml', '500/600 ml', '1.25 L', '2.25 L'] },
      { name: 'Coca-Cola Zero Sugar',  sizes: ['250/300 ml', '500/600 ml', '1.25 L'] },
      { name: 'Thums Up',             sizes: ['250/300 ml', '500/600 ml', '1.25 L', '2.25 L'] },
      { name: 'Sprite',               sizes: ['250/300 ml', '500/600 ml', '1.25 L', '2.25 L'] },
      { name: 'Fanta',                sizes: ['250/300 ml', '500/600 ml', '1.25 L', '2.25 L'] },
      { name: 'Limca',                sizes: ['250/300 ml', '500/600 ml', '1.25 L', '2.25 L'] },
      { name: 'Maaza',                sizes: ['250/300 ml', '500/600 ml'] },
      { name: 'Kinley Soda',          sizes: ['500/600 ml', '1.25 L', '2.25 L'] },
      { name: 'Kinley Water',         sizes: ['500/600 ml', '1.25 L', '2.25 L'] },
      { name: 'Monster Energy',       sizes: ['250/300 ml', '500/600 ml'] },
    ],
  },

  /* ---- Campa ---- */
  {
    id: 'campa',
    name: 'Campa',
    category: 'cold_drink',
    emoji: '🥤',
    logo: '/brands/campa.jpg',
    products: [
      { name: 'Campa Cola',            sizes: ['250/300 ml', '500/600 ml', '1.25 L', '2.25 L'] },
      { name: 'Campa Orange',          sizes: ['250/300 ml', '500/600 ml', '1.25 L', '2.25 L'] },
      { name: 'Campa Lemon',           sizes: ['250/300 ml', '500/600 ml', '1.25 L', '2.25 L'] },
      { name: 'Campa Cola Zero Sugar', sizes: ['250/300 ml', '500/600 ml', '1.25 L'] },
      { name: 'Campa Energy',          sizes: ['250/300 ml', '500/600 ml'] },
    ],
  },

  /* ---- Parle Agro ---- */
  {
    id: 'parleagro',
    name: 'Parle Agro',
    category: 'cold_drink',
    emoji: '🍹',
    logo: '/brands/parleagro.png',
    products: [
      { name: 'Frooti',         sizes: ['250/300 ml', '500/600 ml', '1.25 L', '2.25 L'] },
      { name: 'Appy Fizz',      sizes: ['250/300 ml', '500/600 ml', '1.25 L'] },
      { name: 'Appy Fizz Zero', sizes: ['250/300 ml', '500/600 ml'] },
      { name: 'Smoodh',         sizes: ['250/300 ml', '500/600 ml'] },
      { name: 'Bailley Water',  sizes: ['500/600 ml', '1.25 L', '2.25 L'] },
      { name: 'Bailley Soda',   sizes: ['500/600 ml', '1.25 L', '2.25 L'] },
    ],
  },

  /* ---- Aasav – Latur ---- */
  {
    id: 'aasav',
    name: 'Aasav – Latur',
    category: 'cold_drink',
    emoji: '🫧',
    logo: '/brands/aasav.png',
    products: [
      { name: 'Aasav Cola',        sizes: ['250/300 ml', '500/600 ml', '1.25 L', '2.25 L'] },
      { name: 'Aasav Lemon Soda',  sizes: ['250/300 ml', '500/600 ml', '1.25 L', '2.25 L'] },
      { name: 'Aasav Orange Soda', sizes: ['250/300 ml', '500/600 ml', '1.25 L', '2.25 L'] },
      { name: 'Aasav Jeera Soda',  sizes: ['250/300 ml', '500/600 ml', '1.25 L'] },
      { name: 'Aasav Club Soda',   sizes: ['500/600 ml', '1.25 L', '2.25 L'] },
    ],
  },

  /* ================================================================
     BAKERY BRANDS
     ================================================================ */

  /* ---- Chakote Group (Oven Basket) ---- */
  {
    id: 'chakote',
    name: 'Chakote Group',
    category: 'bakery',
    emoji: '🍞',
    logo: '/brands/chakote.png',
    products: [
      {
        name: 'Oven Basket Premium Milk Masti Bread',
        sizes: ['Purple Pack'],
        note: 'Soft premium milk bread — rich & fresh daily',
      },
      {
        name: 'Oven Basket Premium Rusk Cashew',
        sizes: ['Yellow Pack'],
        note: 'Crunchy rusk with real cashew — perfect with chai',
      },
      {
        name: 'Oven Basket Milk Toast',
        sizes: ['Orange Pack'],
        note: 'Classic milk toast — light, crispy & delicious',
      },
      {
        name: 'Oven Basket Premium Rusk Cardamom',
        sizes: ['Green Pack'],
        note: 'Elaichi-flavoured crunchy rusk — aromatic & traditional',
      },
      {
        name: 'Oven Basket Premium Rusk',
        sizes: ['Yellow Pack'],
        note: 'Original plain rusk — everday chai companion',
      },
    ],
  },

  /* ================================================================
     ICE CREAM BRANDS
     ================================================================ */


  /* ---- Natural Milk (Dairy Natural Ice Cream) ---- */
  {
    id: 'natural_milk',
    name: 'Dairy Natural',
    category: 'ice_cream',
    emoji: '🍦',
    logo: '/brands/natural_milk.png',
    products: [
      {
        name: 'Large Cup',
        sizes: ['65 ml'],
        note: 'Vanilla · Pista · Strawberry · Mango · Butter Scotch · Tender Coconut',
      },
      {
        name: 'King Cone',
        sizes: ['110 ml'],
        note: 'Choco Vanilla · Butterscotch · Belgium Chocolate · Dry Fruit Nutty Cone',
      },
      {
        name: 'Chocobar',
        sizes: ['60 ml'],
        note: 'Choco-Crunchi',
      },
      {
        name: 'Family Pack',
        sizes: ['700 ml'],
        note: 'Vanilla · Pista · Strawberry · Mango · Butter Scotch · Tender Coconut',
      },
      {
        name: 'Family Pack',
        sizes: ['1250 ml'],
        note: 'Vanilla · Pista · Strawberry · Mango · Butter Scotch · Tender Coconut',
      },
      {
        name: 'Premium Family Pack',
        sizes: ['700+700 ml (Buy 1 Get 1)'],
        note: 'Fruit Sitafal · Anjir · Tutty Fruity · Kaju Draksh · Peru · Rajbhog · American Nut',
      },
      {
        name: 'Basundi',
        sizes: ['Tub'],
        note: 'Flavored Basundi',
      },
      {
        name: 'Curd',
        sizes: ['1 kg Tub'],
        note: 'Fresh & Thick Taza Dahi',
      },
    ],
  },

  /* ---- Nutriko (by Natural Dairy) ---- */
  {
    id: 'nutriko',
    name: 'Nutriko',
    category: 'ice_cream',
    emoji: '🍨',
    logo: '/brands/nutriko.png',
    products: [
      {
        name: 'Small Cup',
        sizes: ['35 ml'],
        note: 'Vanilla · Pista · Strawberry · Mango · Butter Scotch',
      },
      {
        name: 'Large Cup',
        sizes: ['65 ml'],
        note: 'Vanilla · Pista · Strawberry · Mango · Butter Scotch',
      },
      {
        name: 'Mini Cone',
        sizes: ['50 ml'],
        note: 'Strawberry · Choco-Vanilla · Butter Scotch',
      },
      {
        name: 'Large Cone',
        sizes: ['80 ml'],
        note: 'Choco-Vanilla · Chocolate · Butter Scotch · Pista',
      },
      {
        name: 'Tall Cup',
        sizes: ['115 ml'],
        note: 'Chocolate Brownie · Guava · Kaju Draksh · Sitaphal',
      },
      {
        name: 'Chocobar',
        sizes: ['35 ml', '60 ml'],
        note: 'Choco-Vanilla · Chota-Crunchbar · Butter Scotch',
      },
      {
        name: 'Candy',
        sizes: ['60 ml'],
        note: 'Mango · Orange',
      },
      {
        name: 'Kulfi – Matka',
        sizes: ['100 ml'],
        note: 'Traditional Matka Kulfi',
      },
      {
        name: 'Kulfi – Cup / Stick',
        sizes: ['40 ml'],
        note: 'Malai · Pista · Gulkand · Pan',
      },
      {
        name: 'Sundae Tub',
        sizes: ['500 ml'],
        note: 'Mango Ripple · Raspberry · Jello Mello · Chocolate · Keshar Kamal',
      },
      {
        name: 'Swirl Sundae Cup',
        sizes: ['125 ml'],
        note: 'Fruit Ripple · Mango Ripple · Chocolate Ripple · Bubble Gum',
      },
      {
        name: 'Family Pack',
        sizes: ['500 ml', '700 ml', '1000 ml'],
        note: 'Vanilla · Strawberry · Pista · Mango · Butter Scotch · Chocolate Chocochips',
      },
      {
        name: 'Party Pack',
        sizes: ['2000 ml'],
        note: 'Vanilla · Strawberry · Pista · Mango · Butter Scotch',
      },
      {
        name: 'Bulk Pack',
        sizes: ['4000 ml'],
        note: 'Vanilla · Strawberry · Pista · Mango · Butter Scotch · Chocolate & more',
      },
    ],
  },
];
