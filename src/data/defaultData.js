export const SHOP_INFO = {
  nameEn: "TEJESH XEROX, MILK & ICE CREAM PARLOUR",
  nameMr: "तेजेश झेरॉक्स, मिल्क & आईस्क्रीम पार्लर",
  ownerEn: "Ganesh Usture",
  ownerMr: "गणेश उस्तुरे",
  phonePrimary: "9420965100",
  phoneSecondary: "(02473) 265501",
  phoneTertiary: "8149400144",
  mapUrl: "https://www.google.com/maps/place/Tejesh+zerox+killari/@18.0732238,76.5931985,17.34z/data=!4m6!3m5!1s0x3bcf6599c2605b0f:0x5d21371500424a60!8m2!3d18.0733342!4d76.5932256!16s%2Fg%2F11rv1sbjyr!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D",
  timingEn: "7:00 AM to 10:00 PM (Open Daily)",
  timingMr: "सकाळी ७:०० ते रात्री १०:०० (दररोज उघडे)",
};

export const INITIAL_ADVERTISEMENTS = [
  {
    id: "ad-1",
    titleEn: "Ganpati Festival Special Mega Offer & Discounts!",
    titleMr: "गणेशोत्सव व सण विशेष महासवलत!",
    tagEn: "FESTIVAL SPECIAL SALE",
    tagMr: "सण विशेष ऑफर",
    discountEn: "Up to 50% OFF",
    discountMr: "खास सवलत उपलब्ध",
    descriptionEn: "Huge discounts on all Amul Ice Creams, Shrikhand, Amrakhand, Fresh Natural Milk & Dairy products for festival season!",
    descriptionMr: "सर्व प्रकारच्या अमूल आईस्क्रीम, श्रीखंड, आम्रखंड, ताजे दूध व दुग्धजन्य पदार्थांवर भरघोस सवलत!",
    imageUrl: "/banner_festival.jpg",
    validTillEn: "Valid Till 30th Sept",
    validTillMr: "३० सप्टेंबर पर्यंत लागू",
    isActive: true,
    isPreset: true,
    createdDate: "2026-08-31",
  },
  {
    id: "ad-2",
    titleEn: "Fresh Natural Milk & Amul Ice Cream Weekly Special",
    titleMr: "ताजे नॅचुरल दूध व अमूल आईस्क्रीम वीकली ऑफर",
    tagEn: "WEEKLY OFFER",
    tagMr: "वीकली ऑफर",
    discountEn: "Best Price Guarantee",
    discountMr: "२०% पर्यंत सूट",
    descriptionEn: "Daily fresh Natural Milk, Paneer, Pure Ghee, Basundi and all Amul Ice Cream flavours at wholesale rates.",
    descriptionMr: "दररोज ताजे नॅचुरल दूध, पनीर, तूप, बासुंदी आणि अमूलच्या सर्व फ्लॅवर्सचे आईस्क्रीम वाजवी दरात उपलब्ध.",
    imageUrl: "/banner_amul.jpg",
    validTillEn: "Valid This Week",
    validTillMr: "या आठवड्यासाठी",
    isActive: true,
    isPreset: true,
    createdDate: "2026-08-31",
  }
];

export const SHOP_SERVICES = [
  {
    categoryEn: "Tejesh Xerox & Online Services",
    categoryMr: "तेजेश झेरॉक्स व ऑनलाईन सेवा",
    subtitleEn: "Fast, Reliable Document & Govt Form Filling Hub",
    subtitleMr: "वेगवान व विश्वासार्ह ऑनलाईन सेवा केंद्र",
    icon: "Printer",
    items: [
      { nameEn: "High-Speed Xerox (B&W & Color)", nameMr: "हाय-स्पीड झेरॉक्स (B&W व Color)", descEn: "Clear & crisp document copying at affordable rates", badge: "Fast Service" },
      { nameEn: "Document Lamination", nameMr: "डॉक्युमेंट लॅमिनेशन (Lamination)", descEn: "All document sizes protected with high quality lamination", badge: "Protection" },
      { nameEn: "All Govt & Online Form Filling", nameMr: "सर्व सरकारी व ऑनलाईन फॉर्म्स", descEn: "Government schemes, job applications & recruitment forms", badge: "Govt Services" },
      { nameEn: "College Admission & Exam Forms", nameMr: "कॉलेज प्रवेश व परीक्षा फॉर्म्स", descEn: "Online admissions, hall tickets & scholarship forms", badge: "Student Special" },
      { nameEn: "Urgent Passport Photo & Printouts", nameMr: "अर्ज्युंट पासपोर्ट साईझ फोटो व प्रिंट", descEn: "Instant digital photo printing and document printing", badge: "Instant Print" },
    ]
  },
  {
    categoryEn: "Amul & Natural Dairy Parlour",
    categoryMr: "अमूल व नॅचुरल दुग्धजन्य पदार्थ",
    subtitleEn: "100% Pure Fresh Milk, Sweets & Ice Cream",
    subtitleMr: "१००% ताजे, शुद्ध व दर्जेदार दुग्धजन्य उत्पादने",
    icon: "Milk",
    items: [
      { nameEn: "Amul Ice Cream (All Flavours)", nameMr: "अमुल आईस्क्रीम (सर्व फ्लेव्हर्स)", descEn: "Cups, Cones, Tubs & Family Packs", badge: "Amul Authorized" },
      { nameEn: "Fresh Natural Milk", nameMr: "ताजे नॅचुरल दूध (Natural Milk)", descEn: "100% pure & healthy daily fresh milk", badge: "Natural Dairy" },
      { nameEn: "Shrikhand & Amrakhand", nameMr: "श्रीखंड व आम्रखंड", descEn: "Delicious authentic sweet shrikhand", badge: "Top Seller" },
      { nameEn: "Fresh Basundi & Cold Lassi", nameMr: "ताजी बासुंदी व थंड लस्सी", descEn: "Rich basundi & refreshing chilled lassi", badge: "Cool Special" },
      { nameEn: "Fresh Paneer & Cheese", nameMr: "ताजे पनीर व चीज", descEn: "Soft, rich paneer for cooking", badge: "Fresh Daily" },
      { nameEn: "Pure Saajuk Ghee & Fresh Dahi", nameMr: "शुद्ध साजूक तूप व घट्ट दही", descEn: "Traditional pure ghee & fresh curd", badge: "100% Pure" },
    ]
  }
];
