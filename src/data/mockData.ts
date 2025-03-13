import { Product, Review } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and premium sound.',
    fullDescription: `Experience music like never before with our Premium Wireless Headphones. These headphones feature advanced noise cancellation technology that blocks out ambient noise, allowing you to focus on your music or calls.

    The premium sound quality delivers deep bass, clear mids, and crisp highs for an immersive audio experience. With Bluetooth 5.0 connectivity, you can enjoy stable wireless connections up to 33 feet away from your device.

    The built-in microphone allows for clear calls, and the intuitive touch controls make it easy to adjust volume, skip tracks, or answer calls. The headphones are designed for comfort with memory foam ear cushions and an adjustable headband, perfect for long listening sessions.

    With up to 30 hours of battery life on a single charge and fast charging capability, these headphones are perfect for travel, commuting, or everyday use.`,
    price: 249.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.7,
    reviewCount: 128,
    sku: 'WH-1000XM4',
    colors: ['#000000', '#FFFFFF', '#0047AB'],
    specifications: [
      { name: 'Battery Life', value: 'Up to 30 hours' },
      { name: 'Bluetooth Version', value: '5.0' },
      { name: 'Noise Cancellation', value: 'Active' },
      { name: 'Weight', value: '254g' },
      { name: 'Charging Time', value: '3 hours' },
      { name: 'Quick Charge', value: '5 hours playback from 10 minutes charge' }
    ]
  },
  {
    id: '2',
    name: 'Smart Fitness Tracker',
    description: 'Track your fitness goals with this waterproof smart fitness tracker with heart rate monitoring.',
    fullDescription: `Stay on top of your fitness goals with our Smart Fitness Tracker. This sleek and lightweight device is designed to help you monitor your daily activity and improve your overall health.

    The tracker features 24/7 heart rate monitoring, sleep tracking, and step counting to give you a comprehensive view of your health metrics. It's water-resistant up to 50 meters, making it perfect for swimming and other water activities.

    With a built-in GPS, you can accurately track your outdoor workouts without needing to carry your phone. The color touchscreen display is easy to read even in bright sunlight, and the intuitive interface makes navigating through features a breeze.

    The tracker syncs wirelessly with our mobile app, allowing you to view detailed statistics, set goals, and share your achievements with friends. The long-lasting battery provides up to 7 days of use on a single charge, so you can focus on your fitness without worrying about recharging.`,
    price: 99.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.5,
    reviewCount: 89,
    sku: 'FT-HR100',
    colors: ['#000000', '#FF0000', '#4169E1'],
    specifications: [
      { name: 'Battery Life', value: 'Up to 7 days' },
      { name: 'Water Resistance', value: '50 meters' },
      { name: 'Display', value: '1.3" AMOLED' },
      { name: 'Sensors', value: 'Heart rate, accelerometer, gyroscope' },
      { name: 'Connectivity', value: 'Bluetooth 5.0, GPS' },
      { name: 'Compatibility', value: 'iOS 10.0+, Android 5.0+' }
    ]
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and eco-friendly organic cotton t-shirt available in multiple colors.',
    fullDescription: `Our Organic Cotton T-Shirt combines comfort, style, and sustainability. Made from 100% organic cotton that's grown without harmful pesticides or synthetic fertilizers, this t-shirt is as kind to your skin as it is to the environment.

    The fabric is soft, breathable, and pre-shrunk, ensuring a comfortable fit that lasts wash after wash. The classic cut features a crew neck and short sleeves, making it a versatile addition to any wardrobe.

    Available in a range of colors, this t-shirt can be dressed up with a blazer or kept casual with jeans or shorts. The minimalist design includes subtle branding, allowing for versatile styling options.

    Each t-shirt is ethically manufactured in facilities that ensure fair wages and safe working conditions. By choosing our organic cotton t-shirt, you're not only getting a high-quality garment but also supporting sustainable and ethical fashion practices.`,
    price: 29.99,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.2,
    reviewCount: 56,
    sku: 'OCT-2023',
    colors: ['#FFFFFF', '#000000', '#808080', '#0000FF'],
    specifications: [
      { name: 'Material', value: '100% Organic Cotton' },
      { name: 'Fit', value: 'Regular' },
      { name: 'Neck Style', value: 'Crew Neck' },
      { name: 'Sleeve Length', value: 'Short Sleeve' },
      { name: 'Care Instructions', value: 'Machine wash cold, tumble dry low' },
      { name: 'Certification', value: 'GOTS Certified Organic' }
    ]
  },
  {
    id: '4',
    name: 'Professional Chef Knife',
    description: 'High-carbon stainless steel chef knife with ergonomic handle for professional cooking.',
    fullDescription: `Elevate your culinary experience with our Professional Chef Knife. Crafted from high-carbon stainless steel, this knife offers exceptional sharpness, durability, and stain resistance.

    The 8-inch blade is precision-forged and hand-sharpened to a 15-degree angle on each side, providing the perfect balance between sharpness and durability. The full-tang construction extends through the handle, ensuring optimal balance and control during use.

    The ergonomic handle is designed to fit comfortably in your hand, reducing fatigue during extended food preparation. Made from premium pakkawood, the handle is not only beautiful but also resistant to heat, moisture, and wear.

    This versatile knife is perfect for chopping, slicing, dicing, and mincing a wide variety of ingredients. The bolster provides additional weight and ensures your fingers won't slip onto the blade during use.

    Each knife comes with a protective sheath for safe storage and is backed by our lifetime warranty against manufacturing defects.`,
    price: 79.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1593618998160-e34014e67546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566454419290-57a0589c9b17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1608877907149-a206d75ba011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.8,
    reviewCount: 112,
    sku: 'CK-PRO-8',
    colors: ['#C0C0C0'],
    specifications: [
      { name: 'Blade Length', value: '8 inches' },
      { name: 'Blade Material', value: 'High-Carbon Stainless Steel' },
      { name: 'Handle Material', value: 'Pakkawood' },
      { name: 'Edge Angle', value: '15 degrees (each side)' },
      { name: 'Weight', value: '8 oz' },
      { name: 'Construction', value: 'Full Tang' }
    ]
  },
  {
    id: '5',
    name: 'Natural Face Serum',
    description: 'Hydrating face serum with vitamin C and hyaluronic acid for all skin types.',
    fullDescription: `Revitalize your skin with our Natural Face Serum. This lightweight, fast-absorbing formula is packed with powerful ingredients to hydrate, brighten, and rejuvenate your complexion.

    The serum features 15% vitamin C, a potent antioxidant that helps brighten skin tone, reduce hyperpigmentation, and protect against environmental damage. Hyaluronic acid provides deep hydration by attracting and retaining moisture, resulting in plumper, more supple skin.

    We've also included niacinamide to strengthen the skin barrier, minimize pores, and improve texture, along with vitamin E for its healing and protective properties. The formula is free from parabens, sulfates, phthalates, and artificial fragrances, making it suitable for all skin types, including sensitive skin.

    Our serum is cruelty-free and vegan, developed without animal testing or animal-derived ingredients. The glass bottle with dropper applicator ensures precise dispensing and helps preserve the potency of the active ingredients.

    For best results, apply 3-5 drops to clean, dry skin morning and evening before moisturizer.`,
    price: 34.99,
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4d8a609?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1570194065650-d99fb4d8a609?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.6,
    reviewCount: 78,
    sku: 'FS-VC-30',
    colors: [],
    specifications: [
      { name: 'Size', value: '30ml / 1 fl oz' },
      { name: 'Key Ingredients', value: 'Vitamin C, Hyaluronic Acid, Niacinamide, Vitamin E' },
      { name: 'Skin Type', value: 'All Skin Types' },
      { name: 'Free From', value: 'Parabens, Sulfates, Phthalates, Artificial Fragrances' },
      { name: 'Application', value: 'Morning and Evening' },
      { name: 'Shelf Life', value: '12 months (unopened), 6 months (after opening)' }
    ]
  },
  {
    id: '6',
    name: 'Wireless Bluetooth Speaker',
    description: 'Portable waterproof Bluetooth speaker with 20-hour battery life and rich sound.',
    fullDescription: `Take your music anywhere with our Wireless Bluetooth Speaker. This compact yet powerful speaker delivers impressive sound quality in a portable, durable package.

    Featuring dual 10W drivers and passive bass radiators, this speaker produces rich, room-filling sound with deep bass and clear highs. The advanced Bluetooth 5.0 technology ensures a stable connection up to 100 feet away from your device.

    With an IPX7 waterproof rating, this speaker can be submerged in water up to 3 feet deep for 30 minutes, making it perfect for pool parties, beach trips, or even shower use. The rugged, drop-resistant design can withstand the rigors of outdoor adventures.

    The rechargeable battery provides up to 20 hours of playtime at moderate volume levels, and the built-in power bank feature allows you to charge your phone or other devices on the go. The speaker also includes a built-in microphone for hands-free calling and voice assistant access.

    Multiple connectivity options include Bluetooth, AUX input, and SD card slot, giving you flexibility in how you play your music.`,
    price: 69.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.4,
    reviewCount: 95,
    sku: 'BS-20W',
    colors: ['#000000', '#0000FF', '#FF0000'],
    specifications: [
      { name: 'Output Power', value: '20W (2 x 10W)' },
      { name: 'Battery Life', value: 'Up to 20 hours' },
      { name: 'Bluetooth Version', value: '5.0' },
      { name: 'Waterproof Rating', value: 'IPX7' },
      { name: 'Dimensions', value: '7.2 x 2.8 x 2.8 inches' },
      { name: 'Weight', value: '1.5 lbs' }
    ]
  },
  {
    id: '7',
    name: 'Ergonomic Office Chair',
    description: 'Adjustable office chair with lumbar support and breathable mesh back for comfort.',
    fullDescription: `Transform your workspace with our Ergonomic Office Chair. Designed with comfort and proper posture in mind, this chair helps reduce fatigue and discomfort during long work sessions.

    The breathable mesh back allows for air circulation, keeping you cool throughout the day, while the contoured seat cushion with high-density foam provides comfortable support. The adjustable lumbar support can be positioned to fit your specific needs, promoting proper spinal alignment.

    Multiple adjustment options include seat height, armrest height and width, backrest tilt, and tilt tension, allowing you to customize the chair to your body and preferences. The smooth-rolling casters and 360-degree swivel provide easy mobility and access to your workspace.

    Built with durability in mind, the chair features a sturdy nylon frame and base that supports up to 300 pounds. The high-quality materials ensure this chair will provide comfort and support for years to come.

    Assembly is straightforward with the included tools and instructions, and the chair is backed by our 5-year warranty.`,
    price: 199.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1589384267710-7a170981ca78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.3,
    reviewCount: 67,
    sku: 'EC-300',
    colors: ['#000000', '#808080'],
    specifications: [
      { name: 'Weight Capacity', value: '300 lbs' },
      { name: 'Seat Height', value: 'Adjustable: 17-21 inches' },
      { name: 'Back Material', value: 'Breathable Mesh' },
      { name: 'Seat Material', value: 'High-Density Foam with Mesh Fabric' },
      { name: 'Armrests', value: '3D Adjustable (Height, Width, Angle)' },
      { name: 'Warranty', value: '5 Years' }
    ]
  },
  {
    id: '8',
    name: 'Leather Wallet',
    description: 'Genuine leather bifold wallet with RFID blocking technology and multiple card slots.',
    fullDescription: `Carry your essentials in style with our Genuine Leather Wallet. Crafted from premium full-grain leather, this wallet combines classic design with modern functionality.

    The bifold design features 8 card slots, 2 hidden pockets, a full-length bill compartment, and an ID window with a thumb cutout for easy access. The wallet is designed to be slim yet spacious, fitting comfortably in your front or back pocket without bulging.

    Built-in RFID blocking technology protects your credit cards, debit cards, and ID from unauthorized scanning and electronic theft. The high-quality stitching and durable construction ensure this wallet will last for years, developing a rich patina over time.

    Each wallet is handcrafted by skilled artisans, with attention to detail evident in every stitch. The leather is treated with a water-resistant coating to help protect your valuables from accidental spills or light rain.

    Available in multiple colors, this wallet makes a perfect gift for yourself or someone special, and comes in an elegant gift box.`,
    price: 49.99,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1606503825008-909a67e63c3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1620758535256-57b2d9d8c9c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.5,
    reviewCount: 42,
    sku: 'LW-RFID',
    colors: ['#8B4513', '#000000', '#A52A2A'],
    specifications: [
      { name: 'Material', value: 'Full-Grain Leather' },
      { name: 'Dimensions', value: '4.5 x 3.5 x 0.5 inches' },
      { name: 'Card Slots', value: '8' },
      { name: 'Bill Compartments', value: '1 Full-Length' },
      { name: 'RFID Protection', value: 'Yes' },
      { name: 'Warranty', value: '1 Year' }
    ]
  }
];

export const mockReviews: Review[] = [
  {
    id: '101',
    productId: '1',
    userName: 'Michael Johnson',
    rating: 5,
    title: "Best headphones I've ever owned",
    content: "These headphones are absolutely amazing! The sound quality is crystal clear, and the noise cancellation works perfectly even in noisy environments. Battery life is impressive - I've been using them for a week on a single charge. The comfort level is also great, I can wear them for hours without any discomfort. Highly recommend to anyone looking for premium wireless headphones.",
    date: '2023-05-15T14:30:00Z',
    helpfulCount: 24,
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: '102',
    productId: '1',
    userName: 'Sarah Williams',
    rating: 4,
    title: 'Great sound, minor comfort issues',
    content: "The sound quality of these headphones is exceptional, and the noise cancellation works very well. My only complaint is that after wearing them for more than 2 hours, they start to feel a bit tight on my ears. Battery life is as advertised, and the Bluetooth connection is stable. Overall, I'm happy with my purchase but wish they were a bit more comfortable for long listening sessions.",
    date: '2023-04-22T09:15:00Z',
    helpfulCount: 18,
    images: []
  },
  {
    id: '103',
    productId: '1',
    userName: 'David Chen',
    rating: 5,
    title: 'Worth every penny',
    content: "After researching headphones for months, I finally decided on these and couldn't be happier. The sound is balanced and detailed, with just the right amount of bass. Noise cancellation is effective without causing pressure on the ears. The build quality is excellent, and they look premium. The app provides useful customization options. I use them daily for work calls and music, and the battery easily lasts the whole week.",
    date: '2023-06-05T16:45:00Z',
    helpfulCount: 12,
    images: [
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: '104',
    productId: '2',
    userName: 'Emily Rodriguez',
    rating: 4,
    title: 'Great fitness companion',
    content: "This fitness tracker has become an essential part of my daily routine. The step counting and heart rate monitoring seem accurate, and I love being able to track my sleep patterns. The app is intuitive and provides helpful insights. The only reason I'm not giving 5 stars is that the GPS can sometimes take a while to connect. Battery life is good - I charge it about once a week. Overall, great value for the price!",
    date: '2023-05-30T11:20:00Z',
    helpfulCount: 9,
    images: []
  },
  {
    id: '105',
    productId: '2',
    userName: 'James Wilson',
    rating: 5,
    title: 'Exceeded my expectations',
    content: "I've tried several fitness trackers over the years, and this one is by far the best. The tracking is accurate, the display is bright and easy to read even in sunlight, and the battery lasts longer than advertised. I particularly appreciate the swimming tracking feature as I swim 3 times a week. The notifications from my phone are also useful. The band is comfortable and doesn't irritate my skin like previous trackers I've owned.",
    date: '2023-04-18T08:30:00Z',
    helpfulCount: 15,
    images: [
      'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: '106',
    productId: '3',
    userName: 'Olivia Martinez',
    rating: 5,
    title: 'Best t-shirt in my wardrobe',
    content: "This organic cotton t-shirt is incredibly soft and comfortable. I've washed it multiple times, and it still looks brand new - no shrinking or fading. The fit is perfect, not too tight or too loose. I appreciate the company's commitment to sustainability and ethical manufacturing. I've already ordered two more in different colors!",
    date: '2023-06-10T13:45:00Z',
    helpfulCount: 7,
    images: []
  }
  // {
  //   id: '107',
  //   productId: '4',
  //   userName: 'Robert Thompson',
  //   rating: 5,
  //   title: 'Professional quality at a reasonable price',
  //   content: "As a culinary student, I needed a good quality chef knife without breaking the bank, and this knife delivers. The balance is perfect, and it came razor-sharp out of the box. It handles everything from delicate herb mincing to cutting through tough vegetables with ease. The handle is comfortable even during long prep sessions. I'm impressed with the quality for this price point and would highly recommend it to both home cooks and professionals.",
  //   date: '2023-05-05T19:20:00Z',
  //   helpfulCount: 21,
  //   images: [
  //     'https://images.unsplash.com/photo-1566454419290-57a0589c9b17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  //     'https://images.unsplash.com/photo-1567336273898-ebbf9eb3c3bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA <boltArtifact id="product-review-platform-continued" title="Product Review Platform (Continued)"
  //   ]
  // }
]