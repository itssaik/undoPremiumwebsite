/*
 UNDO PRODUCT EDITOR
 Replace any image in assets/products/ with your real product photo.
 Keep the filename and the website updates automatically.
 You can also change name / price / description here.
*/
const PRODUCTS = [
  {id:"01", category:"Cakes & Desserts", name:"Jam Cake", size:"50g", price:"₹79", image:"assets/products/jam-cake.jpg"},
  {id:"02", category:"Cakes & Desserts", name:"Pineapple Pastry", size:"60g", price:"₹79", image:"assets/products/jam-cake.jpg"},
  {id:"03", category:"Cakes & Desserts", name:"Banana Cake w/ Banana Milk", size:"90g", price:"₹99", image:"assets/products/jam-cake.jpg"},
  {id:"04", category:"Cakes & Desserts", name:"Chocolate Cake w/ Milk Chocolate", size:"150g", price:"₹139", image:"assets/products/brownie-drench.jpg"},
  {id:"05", category:"Cakes & Desserts", name:"Chocolate Cake w/ Dark Chocolate", size:"150g", price:"₹139", image:"assets/products/brownie-drench.jpg"},
  {id:"06", category:"Cakes & Desserts", name:"Triple Chocolate Cake", size:"120g", price:"₹139", image:"assets/products/brownie-drench.jpg"},
  {id:"07", category:"Cakes & Desserts", name:"Milk Tres Leches", size:"180g", price:"₹169", image:"assets/products/large-cake.jpg"},
  {id:"08", category:"Cakes & Desserts", name:"Rosemilk Tres Leches", size:"180g", price:"₹169", image:"assets/products/rose-royale.jpg"},
  {id:"09", category:"Cakes & Desserts", name:"Khoa Cake w/ Dark Chocolate", size:"150g", price:"₹159", image:"assets/products/brownie-drench.jpg"},
  {id:"10", category:"Brownies", name:"Brownie Piece", size:"80g", price:"₹89", image:"assets/products/brownie-drench.jpg"},
  {id:"11", category:"Brownies", name:"Brownie w/ Milk Chocolate", size:"160g", price:"₹169", image:"assets/products/brownie-drench.jpg"},
  {id:"12", category:"Brownies", name:"Triple Chocolate Brownie", size:"180g", price:"₹169", image:"assets/products/brownie-drench.jpg"},
  {id:"13", category:"Shakes / Drinks", name:"Rose Royale", size:"180ml", price:"₹69", image:"assets/products/rose-royale.jpg"},
  {id:"14", category:"Shakes / Drinks", name:"Brownie Drench", size:"180ml", price:"₹99", image:"assets/products/brownie-drench.jpg"},
  {id:"15", category:"Shakes / Drinks", name:"Dark Desire", size:"180ml", price:"₹99", image:"assets/products/rose-royale.jpg"},
  {id:"16", category:"Buns & Specials", name:"Jam Infused Bun", size:"180g", price:"₹79", image:"assets/products/korean-cheese-bun.jpg"},
  {id:"17", category:"Buns & Specials", name:"Khoa Infused Bun", size:"180g", price:"₹99", image:"assets/products/korean-cheese-bun.jpg"},
  {id:"18", category:"Buns & Specials", name:"Korean Cheese Bun", size:"1 Medium", price:"₹149", image:"assets/products/korean-cheese-bun.jpg"},
  {id:"19", category:"Buns & Specials", name:"Mutta Mittai", size:"60g", price:"₹69", image:"assets/products/jam-cake.jpg"},
  {id:"20", category:"Buns & Specials", name:"Mutta Mittai", size:"180g", price:"₹169", image:"assets/products/jam-cake.jpg"},
  {id:"21", category:"Tubs & Blasts", name:"Triple Chocolate Tub", size:"190g", price:"₹189", image:"assets/products/triple-chocolate-tub.jpg"},
  {id:"22", category:"Tubs & Blasts", name:"Brownie Tub w/ Triple Chocolate", size:"190g", price:"₹239", image:"assets/products/triple-chocolate-tub.jpg"},
  {id:"23", category:"Tubs & Blasts", name:"Choco Cake Blast", size:"300g", price:"₹289", image:"assets/products/triple-chocolate-tub.jpg"},
  {id:"24", category:"Tubs & Blasts", name:"Brownie Blast", size:"300g", price:"₹349", image:"assets/products/brownie-drench.jpg"},
  {id:"25", category:"Large Cakes — 500g", name:"Golden Banana", size:"500g", price:"₹399", image:"assets/products/large-cake.jpg"},
  {id:"26", category:"Large Cakes — 500g", name:"Classic Rose Milk", size:"500g", price:"₹399", image:"assets/products/large-cake.jpg"},
  {id:"27", category:"Large Cakes — 500g", name:"Fruit Affair", size:"500g", price:"₹399", image:"assets/products/large-cake.jpg"},
  {id:"28", category:"Large Cakes — 500g", name:"Soft Chocolate", size:"500g", price:"₹429", image:"assets/products/large-cake.jpg"},
  {id:"29", category:"Large Cakes — 500g", name:"Khoa Classic", size:"500g", price:"₹449", image:"assets/products/large-cake.jpg"},
  {id:"30", category:"Large Cakes — 1kg", name:"Golden Banana", size:"1kg", price:"₹699", image:"assets/products/large-cake.jpg"},
  {id:"31", category:"Large Cakes — 1kg", name:"Classic Rose Milk", size:"1kg", price:"₹699", image:"assets/products/large-cake.jpg"},
  {id:"32", category:"Large Cakes — 1kg", name:"Fruit Affair", size:"1kg", price:"₹699", image:"assets/products/large-cake.jpg"},
  {id:"33", category:"Large Cakes — 1kg", name:"Soft Chocolate", size:"1kg", price:"₹729", image:"assets/products/large-cake.jpg"},
  {id:"34", category:"Large Cakes — 1kg", name:"Khoa Classic", size:"1kg", price:"₹749", image:"assets/products/large-cake.jpg"}
];
