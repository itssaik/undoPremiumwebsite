/*
  UNDO EASY PRODUCT EDITOR
  ========================
  To change a picture: replace the matching file in assets/products/.
  To change a name/price/description: edit this file only.
*/
const PRODUCTS = [
 {id:"01",category:"Cakes & Desserts",name:"Jam Cake",size:"50g",price:"₹79",image:"assets/products/jam-cake.jpg"},
 {id:"02",category:"Cakes & Desserts",name:"Pineapple Pastry",size:"60g",price:"₹79",image:"assets/products/pineapple-pastry.jpg"},
 {id:"03",category:"Cakes & Desserts",name:"Banana Cake w/ Banana Milk",size:"90g",price:"₹99",image:"assets/products/banana-cake.jpg"},
 {id:"04",category:"Brownies",name:"Brownie Piece",size:"80g",price:"₹89",image:"assets/products/brownie-piece.jpg"},
 {id:"05",category:"Shakes / Drinks",name:"Rose Royale",size:"180ml",price:"₹69",image:"assets/products/rose-royale.jpg"},
 {id:"06",category:"Shakes / Drinks",name:"Brownie Drench",size:"180ml",price:"₹99",image:"assets/products/brownie-drench.jpg"},
 {id:"07",category:"Buns & Specials",name:"Korean Cheese Bun",size:"1 Medium",price:"₹149",image:"assets/products/korean-cheese-bun.jpg"},
 {id:"08",category:"Cakes & Desserts",name:"Milk Tres Leches",size:"180g",price:"₹169",image:"assets/products/milk-tres-leches.jpg"},
 {id:"09",category:"Cakes & Desserts",name:"Rosemilk Tres Leches",size:"180g",price:"₹169",image:"assets/products/rosemilk-tres-leches.jpg"},
 {id:"10",category:"Tubs & Blasts",name:"Triple Chocolate Tub",size:"190g",price:"₹189",image:"assets/products/triple-chocolate-tub.jpg"},
 {id:"11",category:"Tubs & Blasts",name:"Brownie Blast",size:"300g",price:"₹349",image:"assets/products/brownie-blast.jpg"},
 {id:"12",category:"Large Cakes",name:"Golden Banana",size:"500g",price:"₹399",image:"assets/products/golden-banana.jpg"}
];

const FULL_MENU = [
 ["Cakes & Desserts",[
 ["Jam Cake","50g","₹79"],["Pineapple Pastry","60g","₹79"],["Banana Cake w/ Banana Milk","90g","₹99"],
 ["Chocolate Cake w/ Milk Chocolate","150g","₹139"],["Chocolate Cake w/ Dark Chocolate","150g","₹139"],
 ["Triple Chocolate Cake","120g","₹139"],["Milk Tres Leches","180g","₹169"],["Rosemilk Tres Leches","180g","₹169"],
 ["Khoa Cake w/ Dark Chocolate","150g","₹159"]]],
 ["Brownies",[["Brownie Piece","80g","₹89"],["Brownie w/ Milk Chocolate","160g","₹169"],["Triple Chocolate Brownie","180g","₹169"]]],
 ["Shakes / Drinks",[["Rose Royale","180ml","₹69"],["Brownie Drench","180ml","₹99"],["Dark Desire","180ml","₹99"]]],
 ["Buns & Specials",[["Jam Infused Bun","180g","₹79"],["Khoa Infused Bun","180g","₹99"],["Korean Cheese Bun","1 Medium","₹149"],["Mutta Mittai","60g","₹69"],["Mutta Mittai","180g","₹169"]]],
 ["Tubs & Blasts",[["Triple Chocolate Tub","190g","₹189"],["Brownie Tub w/ Triple Chocolate","190g","₹239"],["Choco Cake Blast","300g","₹289"],["Brownie Blast","300g","₹349"]]],
 ["Large Cakes — 500g",[["Golden Banana","500g","₹399"],["Classic Rose Milk","500g","₹399"],["Fruit Affair","500g","₹399"],["Soft Chocolate","500g","₹429"],["Khoa Classic","500g","₹449"]]],
 ["Large Cakes — 1kg",[["Golden Banana","1kg","₹699"],["Classic Rose Milk","1kg","₹699"],["Fruit Affair","1kg","₹699"],["Soft Chocolate","1kg","₹729"],["Khoa Classic","1kg","₹749"]]]
];
