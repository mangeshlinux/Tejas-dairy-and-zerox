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

  /* ---- Amul Ice Cream ---- */
  {
    id: 'amul',
    name: 'Amul Ice Cream',
    category: 'ice_cream',
    emoji: '🍦',
    logo: '/brands/amul.png',
    products: [
      {
        name: '₹10 Cone / Cup',
        sizes: ['₹10'],
        note: 'Vanilla · Chocolate · Strawberry · Butterscotch · Mango · Pista',
      },
      {
        name: 'Cone',
        sizes: ['Regular'],
        note: 'Butterscotch · Choco Crunch · Two-in-One · Black Currant · Choco Vanilla · Pista Badam',
      },
      {
        name: 'Cup',
        sizes: ['Regular'],
        note: 'Vanilla · Chocolate · Butterscotch · Rajbhog · Kesar Pista · American Nuts · Choco Chips · Strawberry',
      },
      {
        name: 'Tub',
        sizes: ['1 Litre'],
        note: 'Rajbhog · Roasted Almond · Moroccan Dry Fruit · King Alphonso · Chocolate Brownie · Fruit N Nut · Choco Chips',
      },
      {
        name: '1+1 / Combo',
        sizes: ['Special Pack'],
        note: 'Choco Chips · Creamy Almond · Kesar Pista · Strawberry · Tutti Frutti · Spanish Saffron & Cream',
      },
    ],
  },

  /* ---- Natural Milk (Dairy Natural Ice Cream) ---- */
  {
    id: 'natural_milk',
    name: 'Dairy Natural',
    category: 'milk',
    emoji: '🥛',
    logo: '/brands/natural_milk.png',
    products: [
      {
        name: 'Natural Healthy',
        sizes: ['170 ml'],
        note: 'Crate: 11.90 Litre',
      },
      {
        name: 'Toned Milk Fresh',
        sizes: ['200 ml'],
        note: 'Crate: 12 Litre',
      },
      {
        name: 'Std Milk Shudha 4.5',
        sizes: ['1000 ml'],
        note: 'Crate: 12 Litre',
      },
      {
        name: 'Pasteurized Buffalo Milk',
        sizes: ['450 ml'],
        note: 'Crate: 11.70 Litre',
      },
      {
        name: 'Toned Milk Healthy',
        sizes: ['150 ml'],
        note: 'Crate: 12 Litre',
      },
      {
        name: 'Toned Milk Fresh',
        sizes: ['500 ml'],
        note: 'Crate: 12 Litre',
      },
      {
        name: 'Toned Milk Healthy',
        sizes: ['200 ml'],
        note: 'Crate: 12 Litre',
      },
      {
        name: 'Toned Milk Healthy 3.0',
        sizes: ['500 ml'],
        note: 'Crate: 12 Litre',
      },
      {
        name: 'Std Milk Shudha 4.5',
        sizes: ['500 ml'],
        note: 'Crate: 12 Litre',
      },
      {
        name: 'Full Cream Milk Amrut',
        sizes: ['500 ml'],
        note: 'Crate: 12 Litre',
      },
      {
        name: 'Toned Milk Healthy 3.5',
        sizes: ['1000 ml'],
        note: 'Crate: 12 Litre',
      },
      {
        name: 'Toned Milk Healthy 3.5',
        sizes: ['500 ml'],
        note: 'Crate: 12 Litre',
      },
      {
        name: 'Toned Milk Satvik 1.5 Fat',
        sizes: ['200 ml'],
        note: 'Crate: 12 Litre',
      },
      {
        name: 'Toned Milk Satvik 1.5 Fat',
        sizes: ['500 ml'],
        note: 'Crate: 12 Litre',
      },

      /* ── BI-PRODUCT ORDER ── */
      { name: 'Bi-Product Order', divider: true },

      /* Amrakhand */
      { name: 'Amrakhand', sizes: ['250 gm'], note: 'Box: 6 KG' },
      { name: 'Amrakhand', sizes: ['100 gm'], note: 'Box: 4 KG' },
      { name: 'Amrakhand', sizes: ['450 gm'], note: 'Box: 5.4 KG' },
      { name: 'Amrakhand Bulk Pack', sizes: ['10 KG'], note: 'Bulk' },

      /* Basundi */
      { name: 'Basundi', sizes: ['500 gm'], note: 'Box: 2 KG' },
      { name: 'Basundi', sizes: ['250 gm'], note: 'Box: 2 KG' },
      { name: 'Basundi', sizes: ['100 gm'], note: 'Box: 2 KG' },

      /* Dahi */
      { name: 'Dahi', sizes: ['500 gm'], note: 'Crate: 12 KG' },
      { name: 'Dahi', sizes: ['200 gm'], note: 'Crate: 12 KG' },
      { name: 'Dahi', sizes: ['1000 gm'], note: 'Crate: 12 KG' },
      { name: 'Bucket Dahi', sizes: ['5 KG'], note: 'Bulk' },

      /* Ghee – CM */
      { name: 'Ghee (CM)', sizes: ['100 ml'], note: 'Box: 6 Litre' },
      { name: 'Ghee (CM)', sizes: ['200 ml'], note: 'Box: 6 Litre' },
      { name: 'Ghee (CM)', sizes: ['500 ml'], note: 'Box: 6 Litre' },
      { name: 'Ghee (CM)', sizes: ['1000 ml'], note: 'Box: 6 Litre' },
      { name: 'Ghee CM – 5 Litre Jar', sizes: ['5 Litre'], note: 'Jar' },
      { name: 'Ghee CM – Tin', sizes: ['15 KG'], note: 'Tin' },

      /* Ghee – BM */
      { name: 'Ghee (BM)', sizes: ['200 ml'], note: 'Box: 6 Litre' },
      { name: 'Ghee (BM)', sizes: ['500 ml'], note: 'Box: 6 Litre' },
      { name: 'Ghee (BM)', sizes: ['1000 ml'], note: 'Box: 6 Litre' },
      { name: 'Ghee BM – 5 Litre Jar', sizes: ['5 Litre'], note: 'Jar' },
      { name: 'Ghee BM – Tin', sizes: ['15 KG'], note: 'Tin' },

      /* Desi Cow Ghee */
      { name: 'Desi Cow Ghee', sizes: ['200 ml'], note: 'Box: 6 Litre' },
      { name: 'Desi Cow Ghee', sizes: ['500 ml'], note: 'Box: 6 Litre' },
      { name: 'Desi Cow Ghee', sizes: ['1000 ml'], note: 'Box: 6 Litre' },
      { name: 'Desi Cow Ghee – Tin', sizes: ['15 KG'], note: 'Tin' },

      /* Khava */
      { name: 'Khava', sizes: ['10 KG'], note: 'Bulk' },
      { name: 'Cow Milk Khava', sizes: ['10 KG'], note: 'Bulk' },

      /* Lassi */
      { name: 'Vanilla Lassi Cup', sizes: ['200 ml'], note: 'Box: 4 Litre' },
      { name: 'Rose Lassi Cup', sizes: ['200 ml'], note: 'Box: 4 Litre' },
      { name: 'Mango Lassi Cup', sizes: ['200 ml'], note: 'Box: 4 Litre' },
      { name: 'Guava Lassi Cup', sizes: ['200 ml'], note: 'Box: 4 Litre' },
      { name: 'Thandai Lassi', sizes: ['12 Litre'], note: 'Bag' },

      /* Paneer */
      { name: 'Paneer', sizes: ['500 gm'], note: 'Box: 4 KG' },
      { name: 'Malai Paneer', sizes: ['200 gm'], note: 'Box: 4 KG' },
      { name: 'Malai Paneer', sizes: ['100 gm'], note: 'Box: 4 KG' },
      { name: 'Fresh Paneer Pack', sizes: ['1 KG'], note: 'Bulk' },
      { name: 'Fresh Paneer Pack', sizes: ['5 KG'], note: 'Bulk' },

      /* Pedha */
      { name: 'Pedha 500 gm', sizes: ['1 KG Box'], note: 'Box: 1 KG' },
      { name: 'Pedha 250 gm', sizes: ['1 KG Box'], note: 'Box: 1 KG' },

      /* Shrikhand */
      { name: 'Shrikhand', sizes: ['50 gm'], note: 'Box: 4 KG' },
      { name: 'Shrikhand', sizes: ['100 gm'], note: 'Box: 4 KG' },
      { name: 'Shrikhand', sizes: ['250 gm'], note: 'Box: 6 KG' },
      { name: 'Shrikhand', sizes: ['450 gm'], note: 'Box: 5.4 KG' },
      { name: 'Shrikhand Bulk Pack', sizes: ['10 KG'], note: 'Bulk' },

      /* Flavoured Milk */
      { name: 'Strawberry Flavour Milk', sizes: ['180 ml'], note: 'Box: 4.32 Litre' },
      { name: 'Pista Flavour Milk', sizes: ['180 ml'], note: 'Box: 4.32 Litre' },
      { name: 'Chocolate Flavour Milk', sizes: ['180 ml'], note: 'Box: 4.32 Litre' },
      { name: 'Butterscotch Flavour Milk', sizes: ['180 ml'], note: 'Box: 4.32 Litre' },
      { name: 'Badam Flavour Milk', sizes: ['180 ml'], note: 'Box: 4.32 Litre' },

      /* Tak (Buttermilk) */
      { name: 'Tak', sizes: ['200 ml'], note: 'Bag: 12 Litre' },
      { name: 'Masala Tak', sizes: ['200 ml'], note: 'Bag: 12 Litre' },
      { name: 'Natural Tak', sizes: ['500 ml'], note: 'Crate: 12 Litre' },

      /* Gulab Jamun */
      { name: 'Gulab Jamun – Tin Pack', sizes: ['500 gm'], note: 'Box: 4 KG' },
      { name: 'Gulab Jamun – Tin Pack', sizes: ['1000 gm'], note: 'Box: 4 KG' },
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
      /* — Dairy Natural ice cream range (transferred) — */
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
    ],
  },
];
