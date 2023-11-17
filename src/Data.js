
import React from 'react';

let Data = [
  { 
    id: 301, 
    url: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08155976.png?imwidth=270&imdensity=1', 
    name: 'HP Pavilion', 
    brand: 'HP', 
    price: 899.99,
    description: 'The HP Pavilion is a stylish and powerful laptop designed for everyday use. It features a sleek design, high-performance hardware, and a vibrant display.',
  },
  { 
    id: 302, 
    url: 'https://p1-ofp.static.pub/medias/bWFzdGVyfGltYWdlc3wzMzI5MzB8aW1hZ2UvcG5nfGltYWdlcy9oMzcvaGQ1LzE0NDQ3MTMxNjIzNDU0LnBuZ3w3YWZkZGYwMDU3Njc3ZGZlMWMzY2QzNTdlMzI5YWIyODEwNjQ5ODYzNTYyZmI5MDNjOTc1OTdhZGQ1MGRhYWRh/lenovo-laptop-thinkpad-p51-hero.png', 
    name: 'Lenovo ThinkPad', 
    brand: 'Lenovo', 
    price: 1099.99,
    description: 'The Lenovo ThinkPad is a reliable and business-oriented laptop known for its durability and robust performance. It is a favorite among professionals.',
  },
  { 
    id: 303, 
    url: 'https://www.asus.com/media/global/gallery/eubj2pxfxjdxapyl_setting_xxx_0_90_end_2000.png', 
    name: 'Asus ZenBook', 
    brand: 'Asus', 
    price: 1299.99,
    description: 'The Asus ZenBook is an ultra-slim and high-performance laptop that combines style with functionality. It is perfect for users seeking both portability and power.',
  },
  { 
    id: 304, 
    url: 'https://www.notebookcheck.net/uploads/tx_nbc2/4zu3_Acer_Swift3_SF314_42.jpg', 
    name: 'Acer Swift', 
    brand: 'Acer', 
    price: 999.99,
    description: 'The Acer Swift is a lightweight and affordable laptop designed for users who need a balance between performance and budget. It is  ideal for everyday tasks.',
  },
  { 
    id: 305, 
    url: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08155976.png?imwidth=270&imdensity=1', 
    name: 'HP Pavilion', 
    brand: 'HP', 
    price: 899.99,
    description: 'The HP Pavilion is a stylish and powerful laptop designed for everyday use. It features a sleek design, high-performance hardware, and a vibrant display.',
  },
  { 
    id: 306, 
    url: 'https://p1-ofp.static.pub/medias/bWFzdGVyfGltYWdlc3wzMzI5MzB8aW1hZ2UvcG5nfGltYWdlcy9oMzcvaGQ1LzE0NDQ3MTMxNjIzNDU0LnBuZ3w3YWZkZGYwMDU3Njc3ZGZlMWMzY2QzNTdlMzI5YWIyODEwNjQ5ODYzNTYyZmI5MDNjOTc1OTdhZGQ1MGRhYWRh/lenovo-laptop-thinkpad-p51-hero.png', 
    name: 'Lenovo ThinkPad', 
    brand: 'Lenovo', 
    price: 1099.99,
    description: 'The Lenovo ThinkPad is a reliable and business-oriented laptop known for its durability and robust performance. It is a favorite among professionals.',
  },
  { 
    id: 307, 
    url: 'https://www.asus.com/media/global/gallery/eubj2pxfxjdxapyl_setting_xxx_0_90_end_2000.png', 
    name: 'Asus ZenBook', 
    brand: 'Asus', 
    price: 1299.99,
    description: 'The Asus ZenBook is an ultra-slim and high-performance laptop that combines style with functionality. It is perfect for users seeking both portability and power.',
  },
  { 
    id: 308, 
    url: 'https://www.notebookcheck.net/uploads/tx_nbc2/4zu3_Acer_Swift3_SF314_42.jpg', 
    name: 'Acer Swift', 
    brand: 'Acer', 
    price: 999.99,
    description: 'The Acer Swift is a lightweight and affordable laptop designed for users who need a balance between performance and budget. It is  ideal for everyday tasks.',
  },
  { 
    id: 309, 
    url: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08155976.png?imwidth=270&imdensity=1', 
    name: 'HP Pavilion', 
    brand: 'HP', 
    price: 899.99,
    description: 'The HP Pavilion is a stylish and powerful laptop designed for everyday use. It features a sleek design, high-performance hardware, and a vibrant display.',
  },
  { 
    id: 310, 
    url: 'https://p1-ofp.static.pub/medias/bWFzdGVyfGltYWdlc3wzMzI5MzB8aW1hZ2UvcG5nfGltYWdlcy9oMzcvaGQ1LzE0NDQ3MTMxNjIzNDU0LnBuZ3w3YWZkZGYwMDU3Njc3ZGZlMWMzY2QzNTdlMzI5YWIyODEwNjQ5ODYzNTYyZmI5MDNjOTc1OTdhZGQ1MGRhYWRh/lenovo-laptop-thinkpad-p51-hero.png', 
    name: 'Lenovo ThinkPad', 
    brand: 'Lenovo', 
    price: 1099.99,
    description: 'The Lenovo ThinkPad is a reliable and business-oriented laptop known for its durability and robust performance. It is a favorite among professionals.',
  },
  { 
    id: 311, 
    url: 'https://www.asus.com/media/global/gallery/eubj2pxfxjdxapyl_setting_xxx_0_90_end_2000.png', 
    name: 'Asus ZenBook', 
    brand: 'Asus', 
    price: 1299.99,
    description: 'The Asus ZenBook is an ultra-slim and high-performance laptop that combines style with functionality. It is perfect for users seeking both portability and power.',
  },
  { 
    id: 312, 
    url: 'https://www.notebookcheck.net/uploads/tx_nbc2/4zu3_Acer_Swift3_SF314_42.jpg', 
    name: 'Acer Swift', 
    brand: 'Acer', 
    price: 999.99,
    description: 'The Acer Swift is a lightweight and affordable laptop designed for users who need a balance between performance and budget. It is  ideal for everyday tasks.',
  },
];


export default Data;