window.addEventListener("load",()=>{document.body.classList.add("loaded");renderCategories();renderMenu();});

const nav=document.querySelector(".nav");
const progress=document.querySelector(".progress");
const hero=document.querySelector(".hero");
const heroBg=document.querySelector(".hero-bg img");
const storyImg=document.querySelector(".story-photo img");
const showImg=document.querySelector(".showcase-image img");
const orderImg=document.querySelector(".order-image img");

function clamp(v,a=0,b=1){return Math.max(a,Math.min(b,v))}
function effects(){
 const max=document.documentElement.scrollHeight-innerHeight;
 progress.style.width=(scrollY/max*100)+"%";
 nav.classList.toggle("scrolled",scrollY>innerHeight*.45);
 const hr=hero.getBoundingClientRect();
 const hp=clamp(-hr.top/(hr.height-innerHeight));
 heroBg.style.transform=`scale(${1.08+hp*.13}) translateY(${hp*-45}px)`;
 const sr=document.querySelector(".story-photo").getBoundingClientRect();
 const sp=clamp((innerHeight-sr.top)/(innerHeight+sr.height));
 storyImg.style.transform=`scale(${1.08+sp*.09}) translateY(${(sp-.5)*-35}px)`;
 const xr=document.querySelector(".showcase-image").getBoundingClientRect();
 const xp=clamp((innerHeight-xr.top)/(innerHeight+xr.height));
 showImg.style.transform=`scale(${1.08+xp*.08}) translateY(${(xp-.5)*-40}px)`;
 const or=document.querySelector(".order").getBoundingClientRect();
 const op=clamp((innerHeight-or.top)/(innerHeight+or.height));
 orderImg.style.transform=`scale(${1.12+op*.06}) translateY(${(op-.5)*-35}px)`;
}
window.addEventListener("scroll",effects,{passive:true});window.addEventListener("resize",effects);effects();

const categories=[
 ["Cakes & Desserts","assets/products/large-cake.jpg"],
 ["Brownies","assets/products/brownie-drench.jpg"],
 ["Shakes / Drinks","assets/products/rose-royale.jpg"],
 ["Buns & Specials","assets/products/korean-cheese-bun.jpg"],
 ["Tubs & Blasts","assets/products/triple-chocolate-tub.jpg"],
 ["Large Cakes","assets/products/large-cake.jpg"]
];
function renderCategories(){
 document.querySelector("#categoryRail").innerHTML=categories.map((c,i)=>`<a class="category" href="#full-menu"><img src="${c[1]}" alt="${c[0]}"><div class="category-copy"><small>0${i+1}</small><strong>${c[0]}</strong><span>↗</span></div></a>`).join("");
}
function renderMenu(){
 const el=document.querySelector("#menuList");
 const cats={};
 PRODUCTS.forEach(p=>(cats[p.category]??=[]).push(p));
 el.innerHTML=Object.entries(cats).map(([cat,items])=>`<section class="menu-group"><h3>${cat.toUpperCase()}</h3>${items.map(p=>`<div class="menu-line"><span>${p.name}</span><span>${p.size}</span><b>${p.price}</b></div>`).join("")}</section>`).join("");
}

const ham=document.querySelector(".hamb"), mobile=document.querySelector(".mobile-nav");
ham.addEventListener("click",()=>mobile.classList.toggle("open"));
mobile.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>mobile.classList.remove("open")));
