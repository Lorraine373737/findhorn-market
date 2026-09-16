export const vendors = [
  {
    id: 'highland-orchards',
    name: 'Highland Orchards',
    location: 'Tomatin',
    description: 'Fresh Scottish apples, pears, and seasonal fruits grown in the heart of the Highlands.',
    longDescription: 'For over three generations, Highland Orchards has cultivated the finest fruit in the Scottish Highlands. Our orchards sit at the perfect elevation where cool nights and warm days create the sweetest, crispest apples you\'ll ever taste. We practice sustainable farming and pick everything by hand.',
    image: import.meta.env.BASE_URL + 'catalog/109a84bd694e.jpg',
    heroImage: import.meta.env.BASE_URL + 'catalog/dda1696c5ba3.jpg',
    available: true,
    products: [
      { id: 'ho-1', name: 'Cairngorm Crisp Apples', price: 4.50, unit: 'per kg', image: import.meta.env.BASE_URL + 'catalog/76d06f4c3c75.jpg', available: true },
      { id: 'ho-2', name: 'Highland Honey Pears', price: 5.20, unit: 'per kg', image: import.meta.env.BASE_URL + 'catalog/66222230da92.jpg', available: true },
      { id: 'ho-3', name: 'Fresh Apple Juice', price: 6.00, unit: 'per litre', image: import.meta.env.BASE_URL + 'catalog/8d291857b429.jpg', available: true },
      { id: 'ho-4', name: 'Bramley Cooking Apples', price: 3.80, unit: 'per kg', image: import.meta.env.BASE_URL + 'catalog/bramley-apples.jpg', available: false },
      { id: 'ho-5', name: 'Apple & Pear Preserves', price: 7.50, unit: 'per jar', image: import.meta.env.BASE_URL + 'catalog/78579ac51387.jpg', available: true },
      { id: 'ho-6', name: 'Dried Apple Rings', price: 4.00, unit: 'per pack', image: import.meta.env.BASE_URL + 'catalog/dried-apple-rings.jpg', available: true }
    ]
  },
  {
    id: 'findhorn-apiaries',
    name: 'Findhorn Apiaries',
    location: 'Mundole',
    description: 'Pure heather honey and artisan bee products from the banks of the River Findhorn.',
    longDescription: 'Our bees forage the wild heather moorlands and ancient woodlands along the River Findhorn. Each jar of honey captures the essence of the Highland landscape - from the delicate spring blossom honey to the rich, amber heather honey gathered in late summer. We also create natural beeswax products and propolis.',
    image: import.meta.env.BASE_URL + 'honey.png',
    heroImage: import.meta.env.BASE_URL + 'honey.png',
    available: true,
    products: [
      { id: 'fa-1', name: 'Wild Heather Honey', price: 12.00, unit: 'per 340g jar', image: import.meta.env.BASE_URL + 'catalog/961e25bdd414.jpg', available: true },
      { id: 'fa-2', name: 'Spring Blossom Honey', price: 9.50, unit: 'per 340g jar', image: import.meta.env.BASE_URL + 'catalog/b5651f75866f.jpg', available: true },
      { id: 'fa-3', name: 'Honeycomb Section', price: 15.00, unit: 'per piece', image: import.meta.env.BASE_URL + 'catalog/honeycomb.jpg', available: true },
      { id: 'fa-4', name: 'Beeswax Candles (set of 3)', price: 18.00, unit: 'per set', image: import.meta.env.BASE_URL + 'catalog/c683668371da.jpg', available: true },
      { id: 'fa-5', name: 'Propolis Tincture', price: 14.00, unit: 'per 30ml bottle', image: import.meta.env.BASE_URL + 'catalog/propolis.jpg', available: false },
      { id: 'fa-6', name: 'Honey & Oat Gift Box', price: 25.00, unit: 'per box', image: import.meta.env.BASE_URL + 'catalog/742362e1aa41.jpg', available: true }
    ]
  },
  {
    id: 'tomatin-distillery-shop',
    name: 'Tomatin Distillery Shop',
    location: 'Tomatin',
    description: 'Award-winning Highland single malt whisky and exclusive distillery merchandise.',
    longDescription: 'Tomatin Distillery has been crafting fine Highland whisky since 1897. Nestled in the beautiful Monadhliath Mountains, our water comes from the Alt-na-Frith burn, creating whiskies of exceptional smoothness. Visit our market stall for exclusive bottlings and distillery merchandise.',
    image: import.meta.env.BASE_URL + 'whisky.png',
    heroImage: import.meta.env.BASE_URL + 'whisky.png',
    available: true,
    products: [
      { id: 'td-1', name: 'Tomatin 12 Year Old', price: 38.00, unit: 'per 70cl', image: import.meta.env.BASE_URL + 'catalog/ae8ae5e19f3b.jpg', available: true },
      { id: 'td-2', name: 'Tomatin Legacy', price: 28.00, unit: 'per 70cl', image: import.meta.env.BASE_URL + 'catalog/f4208533223d.jpg', available: true },
      { id: 'td-3', name: 'Cù Bòcan Peated Malt', price: 45.00, unit: 'per 70cl', image: import.meta.env.BASE_URL + 'catalog/d681c1560468.jpg', available: false },
      { id: 'td-4', name: 'Whisky Tasting Set', price: 25.00, unit: 'set of 4 miniatures', image: import.meta.env.BASE_URL + 'catalog/cd6f45594b11.jpg', available: true },
      { id: 'td-5', name: 'Glencairn Whisky Glass', price: 8.00, unit: 'each', image: import.meta.env.BASE_URL + 'catalog/5f89bac8b83e.jpg', available: true },
      { id: 'td-6', name: 'Distillery Tea Towel', price: 12.00, unit: 'each', image: import.meta.env.BASE_URL + 'catalog/0b07275d120e.jpg', available: true }
    ]
  },
  {
    id: 'strathdearn-bakehouse',
    name: 'Strathdearn Bakehouse',
    location: 'Findhorn Bridge',
    description: 'Artisan sourdough breads, traditional Scottish baking, and freshly baked treats.',
    longDescription: 'We bake the old-fashioned way using stone-ground flours, wild yeasts, and time-honoured techniques. Our breads are slow-fermented for 24 hours, developing deep flavour and perfect texture. From crusty sourdough to buttery shortbread, everything is made fresh each market day.',
    image: import.meta.env.BASE_URL + 'catalog/a43e9f6e6431.jpg',
    heroImage: import.meta.env.BASE_URL + 'catalog/08aed731404e.jpg',
    available: true,
    products: [
      { id: 'sb-1', name: 'Highland Sourdough Loaf', price: 5.50, unit: 'per loaf', image: import.meta.env.BASE_URL + 'catalog/7a1019ddd068.jpg', available: true },
      { id: 'sb-2', name: 'Oatmeal Bannocks', price: 4.00, unit: 'pack of 4', image: import.meta.env.BASE_URL + 'catalog/76e3d4dfce1a.jpg', available: true },
      { id: 'sb-3', name: 'Petticoat Tails Shortbread', price: 6.50, unit: 'per tin', image: import.meta.env.BASE_URL + 'catalog/ac7c19b66b63.jpg', available: true },
      { id: 'sb-4', name: 'Rye & Caraway Loaf', price: 6.00, unit: 'per loaf', image: import.meta.env.BASE_URL + 'catalog/281657991124.jpg', available: false },
      { id: 'sb-5', name: 'Empire Biscuits', price: 3.50, unit: 'pack of 6', image: import.meta.env.BASE_URL + 'catalog/e9b2e3242e6d.jpg', available: true },
      { id: 'sb-6', name: 'Fruit Scones', price: 4.50, unit: 'pack of 4', image: import.meta.env.BASE_URL + 'catalog/fruit-scones.jpg', available: true }
    ]
  },
  {
    id: 'glen-farm-dairy',
    name: 'Glen Farm Dairy',
    location: 'Moy',
    description: 'Traditional Scottish cheeses, fresh milk, and creamy butter from grass-fed Highland cattle.',
    longDescription: 'Our herd of native Highland cattle and Ayrshire cows graze the lush pastures of Glen Farm. We produce traditional Scottish cheeses using recipes passed down through generations, along with rich unpasteurised milk and hand-churned butter. Taste the difference that happy cows make!',
    image: import.meta.env.BASE_URL + 'catalog/1953c23ba6a8.jpg',
    heroImage: import.meta.env.BASE_URL + 'catalog/ffd5db0fca13.jpg',
    available: false,
    products: [
      { id: 'gf-1', name: 'Aged Highland Cheddar', price: 8.50, unit: 'per 200g', image: import.meta.env.BASE_URL + 'catalog/ac6933c9c21f.jpg', available: false },
      { id: 'gf-2', name: 'Crowdie Fresh Cheese', price: 5.00, unit: 'per 150g', image: import.meta.env.BASE_URL + 'catalog/335c74f8b6b9.jpg', available: false },
      { id: 'gf-3', name: 'Farm Fresh Milk', price: 2.50, unit: 'per litre', image: import.meta.env.BASE_URL + 'catalog/52734072fe40.jpg', available: false },
      { id: 'gf-4', name: 'Hand-Churned Butter', price: 4.50, unit: 'per 250g', image: import.meta.env.BASE_URL + 'catalog/cd190201b248.jpg', available: false },
      { id: 'gf-5', name: 'Clotted Cream', price: 6.00, unit: 'per 200g', image: import.meta.env.BASE_URL + 'catalog/0d2735265e04.jpg', available: false },
      { id: 'gf-6', name: 'Cheese Selection Box', price: 22.00, unit: 'per box', image: import.meta.env.BASE_URL + 'catalog/99bd54b27c6b.jpg', available: false }
    ]
  },
  {
    id: 'wild-highland-foragers',
    name: 'Wild Highland Foragers',
    location: 'Dulsie Bridge',
    description: 'Wild mushrooms, berries, herbs and seasonal foraged goods from the Highland forests.',
    longDescription: 'We are passionate foragers who explore the ancient Caledonian forests and Highland glens to bring you nature\'s hidden treasures. From chanterelles to wild garlic, juniper berries to elderflower, everything is sustainably harvested and delivered fresh to our market stall.',
    image: import.meta.env.BASE_URL + 'catalog/fe1970ab14a8.jpg',
    heroImage: import.meta.env.BASE_URL + 'catalog/f3ce5f582ee2.jpg',
    available: true,
    products: [
      { id: 'wh-1', name: 'Wild Chanterelles', price: 18.00, unit: 'per 250g', image: import.meta.env.BASE_URL + 'catalog/20071dae9371.jpg', available: true },
      { id: 'wh-2', name: 'Mixed Wild Mushrooms', price: 14.00, unit: 'per 250g', image: import.meta.env.BASE_URL + 'catalog/mixed-mushrooms.jpg', available: true },
      { id: 'wh-3', name: 'Dried Porcini', price: 12.00, unit: 'per 50g', image: import.meta.env.BASE_URL + 'catalog/dried-porcini.jpg', available: true },
      { id: 'wh-4', name: 'Wild Garlic Pesto', price: 8.50, unit: 'per 190g jar', image: import.meta.env.BASE_URL + 'catalog/c91a117a4273.jpg', available: false },
      { id: 'wh-5', name: 'Elderflower Cordial', price: 7.00, unit: 'per 500ml', image: import.meta.env.BASE_URL + 'catalog/c567e506549b.jpg', available: true },
      { id: 'wh-6', name: 'Juniper Berries', price: 6.00, unit: 'per 100g', image: import.meta.env.BASE_URL + 'catalog/1ffd50e7e10a.jpg', available: true }
    ]
  },
  {
    id: 'river-fish-smokery',
    name: 'River Fish Smokery',
    location: 'Ferness',
    description: 'Oak-smoked salmon, trout, and traditional fish preparations from local waters.',
    longDescription: 'Using traditional smoking methods passed down through generations, we transform the finest Scottish salmon and trout into succulent smoked delicacies. Our oak chips come from local woodlands, and we cold-smoke for up to 24 hours to achieve the perfect texture and flavour.',
    image: import.meta.env.BASE_URL + 'catalog/32e85a123ba3.jpg',
    heroImage: import.meta.env.BASE_URL + 'catalog/1324a6ce9242.jpg',
    available: true,
    products: [
      { id: 'rf-1', name: 'Oak-Smoked Salmon', price: 24.00, unit: 'per 200g', image: import.meta.env.BASE_URL + 'catalog/cf26d0d4b6a3.jpg', available: true },
      { id: 'rf-2', name: 'Hot-Smoked Trout', price: 12.00, unit: 'per fish', image: import.meta.env.BASE_URL + 'catalog/20071dae9371.jpg', available: true },
      { id: 'rf-3', name: 'Smoked Salmon Pâté', price: 8.00, unit: 'per 150g', image: import.meta.env.BASE_URL + 'catalog/891a0fab94ec.jpg', available: true },
      { id: 'rf-4', name: 'Gravadlax', price: 22.00, unit: 'per 200g', image: import.meta.env.BASE_URL + 'catalog/34bf814d726d.jpg', available: false },
      { id: 'rf-5', name: 'Smoked Mackerel', price: 9.00, unit: 'per fish', image: import.meta.env.BASE_URL + 'catalog/cedaa145c1f2.jpg', available: true },
      { id: 'rf-6', name: 'Salmon Gift Box', price: 35.00, unit: 'per box', image: import.meta.env.BASE_URL + 'catalog/3288bcb303eb.jpg', available: true }
    ]
  },
  {
    id: 'highland-herbs',
    name: 'Highland Herbs & Botanicals',
    location: 'Carrbridge',
    description: 'Organic herbs, herbal teas, and natural remedies grown in the Scottish Highlands.',
    longDescription: 'Our organic herb garden flourishes in the pure Highland air. We grow over 50 varieties of culinary and medicinal herbs, creating our own blends of herbal teas, natural remedies, and kitchen seasonings. Everything is hand-picked, air-dried, and packed with care.',
    image: import.meta.env.BASE_URL + 'herbs.png',
    heroImage: import.meta.env.BASE_URL + 'herbs.png',
    available: false,
    products: [
      { id: 'hh-1', name: 'Highland Calm Tea Blend', price: 8.00, unit: 'per 50g tin', image: import.meta.env.BASE_URL + 'catalog/1ef04a514cda.jpg', available: false },
      { id: 'hh-2', name: 'Fresh Herb Bouquet', price: 4.00, unit: 'per bunch', image: import.meta.env.BASE_URL + 'catalog/5e81b0bb8d5c.jpg', available: false },
      { id: 'hh-3', name: 'Dried Lavender Bundle', price: 6.00, unit: 'per bundle', image: import.meta.env.BASE_URL + 'catalog/1480e24a058f.jpg', available: false },
      { id: 'hh-4', name: 'Scottish Seasoning Mix', price: 7.50, unit: 'per jar', image: import.meta.env.BASE_URL + 'catalog/6d8f23c23dfe.jpg', available: false },
      { id: 'hh-5', name: 'Herbal Sleep Pillow', price: 15.00, unit: 'each', image: import.meta.env.BASE_URL + 'catalog/c07fdb70820f.jpg', available: false },
      { id: 'hh-6', name: 'Mint & Nettle Tea', price: 7.00, unit: 'per 40g tin', image: import.meta.env.BASE_URL + 'catalog/588ef72833d4.jpg', available: false }
    ]
  }
]

export const marketInfo = {
  name: 'Findhorn River Farmers Market',
  tagline: 'Fresh from the Highlands to Your Table',
  about: `The Findhorn River Farmers Market brings together the finest local producers from Mundole to Tomatin, celebrating the rich agricultural heritage of the Scottish Highlands. On the first two Saturdays of each month, our vibrant market offers fresh produce, artisan foods, and handcrafted goods directly from the people who make them.

We believe in supporting our local community, sustainable farming practices, and preserving traditional Scottish food culture. Whether you're a local resident stocking up for the week or a visitor discovering Highland flavours, you'll find something special at our market.`,
  locations: [
    { name: 'Green Acres', address: 'Mundole, Forres, IV36 2RS' },
    { name: 'The Strathdearn', address: 'Tomatin, IV13 7YT' }
  ],
  hours: [
    { day: '1st Saturday', time: '10:00 AM - 3:00 PM', location: 'Green Acres (Mundole)' },
    { day: '2nd Saturday', time: '10:00 AM - 3:00 PM', location: 'The Strathdearn (Tomatin)' }
  ]
}

