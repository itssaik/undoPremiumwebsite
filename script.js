window.addEventListener("load",()=>{document.body.classList.add("loaded");renderTabs();renderProducts();renderFullMenu();});

const rail=document.querySelector("#productRail"), progress=document.querySelector(".progress"), hero=document.querySelector(".hero"), heroImg=document.querySelector(".hero-image"), heroImageEl=heroImg.querySelector("img"), heroLogo=document.querySelector(".hero-logo");

function clamp(v,a=0,b=1){return Math.max(a,Math.min(b,v))}
function effects(){
 const max=document.documentElement.scrollHeight-innerHeight;
 progress.style.width=(scrollY/max*100)+"%";
 const r=hero.getBoundingClientRect(), p=clamp(-r.top/(r.height-innerHeight));
 heroImg.style.transform=`rotate(${4+p*12}deg) translateY(${p*-100}px) scale(${1+p*.06})`;
 heroImageEl.style.transform=`scale(${1.08+p*.12}) translateY(${p*-30}px)`;
 heroLogo.style.transform=`translateY(${p*-70}px)`;
 heroLogo.style.opacity=1-p*.5;
}
window.addEventListener("scroll",effects,{passive:true}); window.addEventListener("resize",effects); effects();

function renderTabs(){
 const tabs=document.querySelector("#tabs");
 const cats=["All","Cakes & Desserts","Brownies","Shakes / Drinks","Buns & Specials","Tubs & Blasts","Large Cakes"];
 tabs.innerHTML=cats.map((c,i)=>`<button class="${i===0?"active":""}" data-cat="${c}">${c}</button>`).join("");
 tabs.addEventListener("click",e=>{
   if(!e.target.matches("button"))return;
   tabs.querySelectorAll("button").forEach(b=>b.classList.remove("active")); e.target.classList.add("active");
   renderProducts(e.target.dataset.cat);
 });
}
function renderProducts(cat="All"){
 const list=cat==="All"?PRODUCTS:PRODUCTS.filter(p=>p.category===cat);
 rail.innerHTML=list.map(p=>`<article class="product-card"><div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="product-number">${p.id} / 12</span></div><div class="product-copy"><div><h3>${p.name}</h3><p>${p.size} · ${p.category}</p></div><strong>${p.price}</strong></div></article>`).join("");
}
function renderFullMenu(){
 const el=document.querySelector("#fullMenu");
 el.innerHTML=FULL_MENU.map(([cat,items])=>`<section class="category"><h3>${cat.toUpperCase()}</h3>${items.map(i=>`<div class="menu-line"><span>${i[0]}</span><span>${i[1]}</span><b>${i[2]}</b></div>`).join("")}</section>`).join("");
}
let down=false,start=0,left=0;
rail.addEventListener("pointerdown",e=>{down=true;start=e.clientX;left=rail.scrollLeft;rail.classList.add("dragging");rail.setPointerCapture(e.pointerId)});
rail.addEventListener("pointermove",e=>{if(down)rail.scrollLeft=left-(e.clientX-start)});
["pointerup","pointercancel","pointerleave"].forEach(x=>rail.addEventListener(x,()=>{down=false;rail.classList.remove("dragging")}));

const hamb=document.querySelector(".hamb"), mobile=document.querySelector(".mobile-nav");
hamb.addEventListener("click",()=>mobile.classList.toggle("open"));
mobile.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>mobile.classList.remove("open")));
