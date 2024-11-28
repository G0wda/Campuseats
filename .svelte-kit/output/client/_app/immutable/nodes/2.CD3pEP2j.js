import{s as L,n as j,a as O,d as Q}from"../chunks/scheduler.I_uqlSKq.js";import{S as P,i as W,e as x,s as I,c as b,a as $,x as T,f as E,d as y,m,g as D,h as f,t as U,b as X,j as Y,k as z,l as G,n as J,p as V,q,r as R,u as F}from"../chunks/index.Dnod5cps.js";import{e as H,u as Z,d as ee}from"../chunks/cartStore.Df5Pd-qO.js";import{F as te}from"../chunks/FoodCard.dCOzts_P.js";const se=!0,ge=Object.freeze(Object.defineProperty({__proto__:null,prerender:se},Symbol.toStringTag,{value:"Module"})),ae=[{id:"chats",name:"Chats & Snacks",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950"},{id:"meals",name:"Meals",image:"https://images.unsplash.com/photo-1512058564366-18510be2db19"},{id:"beverages",name:"Juices & Beverages",image:"https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38"},{id:"ice-cream",name:"Ice Creams",image:"https://images.unsplash.com/photo-1501443762994-82bd5dace89a"},{id:"bakery",name:"Bakery & Cakes",image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587"},{id:"chinese",name:"Chinese",image:"https://images.unsplash.com/photo-1585032226651-759b368d7246"}],oe=[{id:"1",name:"Masala Dosa",price:60,category:"South Indian",image:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc",description:"Crispy dosa served with potato masala, coconut chutney, and sambar"},{id:"2",name:"Butter Chicken",price:180,category:"North Indian",image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",description:"Tender chicken in rich tomato and butter gravy"},{id:"3",name:"Veg Fried Rice",price:90,category:"Chinese",image:"https://images.unsplash.com/photo-1603133872878-684f208fb84b",description:"Wok-tossed rice with fresh vegetables and soy sauce"}];function B(g,s,t){const a=g.slice();return a[1]=s[t],a}function A(g,s){let t,a,h,u,l,e,p,_=s[1].name+"",v,o,c;return{key:g,first:null,c(){t=x("a"),a=x("img"),l=I(),e=x("div"),p=x("h3"),v=U(_),o=I(),this.h()},l(r){t=b(r,"A",{href:!0,class:!0});var i=$(t);a=b(i,"IMG",{src:!0,alt:!0,class:!0}),l=E(i),e=b(i,"DIV",{class:!0});var k=$(e);p=b(k,"H3",{class:!0});var w=$(p);v=X(w,_),w.forEach(y),k.forEach(y),o=E(i),i.forEach(y),this.h()},h(){O(a.src,h=s[1].image)||m(a,"src",h),m(a,"alt",u=s[1].name),m(a,"class","w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"),m(p,"class","text-white text-xl font-semibold p-4 w-full text-center"),m(e,"class","absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end"),m(t,"href",c=`/category/${s[1].id}`),m(t,"class","group relative overflow-hidden rounded-lg shadow-md aspect-square hover:shadow-xl transition-shadow duration-300"),this.first=t},m(r,i){D(r,t,i),f(t,a),f(t,l),f(t,e),f(e,p),f(p,v),f(t,o)},p(r,i){s=r,i&1&&!O(a.src,h=s[1].image)&&m(a,"src",h),i&1&&u!==(u=s[1].name)&&m(a,"alt",u),i&1&&_!==(_=s[1].name+"")&&Y(v,_),i&1&&c!==(c=`/category/${s[1].id}`)&&m(t,"href",c)},d(r){r&&y(t)}}}function le(g){let s,t,a,h="Food Categories",u,l,e=[],p=new Map,_=H(g[0]);const v=o=>o[1].id;for(let o=0;o<_.length;o+=1){let c=B(g,_,o),r=v(c);p.set(r,e[o]=A(r,c))}return{c(){s=x("section"),t=x("div"),a=x("h2"),a.textContent=h,u=I(),l=x("div");for(let o=0;o<e.length;o+=1)e[o].c();this.h()},l(o){s=b(o,"SECTION",{class:!0});var c=$(s);t=b(c,"DIV",{class:!0});var r=$(t);a=b(r,"H2",{class:!0,"data-svelte-h":!0}),T(a)!=="svelte-vuqqjk"&&(a.textContent=h),u=E(r),l=b(r,"DIV",{class:!0});var i=$(l);for(let k=0;k<e.length;k+=1)e[k].l(i);i.forEach(y),r.forEach(y),c.forEach(y),this.h()},h(){m(a,"class","text-3xl font-bold text-gray-800 mb-8 text-center"),m(l,"class","grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"),m(t,"class","max-w-7xl mx-auto px-4"),m(s,"class","py-12 bg-gray-50")},m(o,c){D(o,s,c),f(s,t),f(t,a),f(t,u),f(t,l);for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(l,null)},p(o,[c]){c&1&&(_=H(o[0]),e=Z(e,c,v,1,o,_,p,l,ee,A,null,B))},i:j,o:j,d(o){o&&y(s);for(let c=0;c<e.length;c+=1)e[c].d()}}}function re(g,s,t){let{categories:a}=s;return g.$$set=h=>{"categories"in h&&t(0,a=h.categories)},[a]}class ie extends P{constructor(s){super(),W(this,s,re,le,L,{categories:0})}}function ne(g,s,t){const a=g.slice();return a[0]=s[t],a}function ce(g,s){let t,a,h;const u=[s[0]];let l={};for(let e=0;e<u.length;e+=1)l=Q(l,u[e]);return a=new te({props:l}),{key:g,first:null,c(){t=F(),z(a.$$.fragment),this.h()},l(e){t=F(),G(a.$$.fragment,e),this.h()},h(){this.first=t},m(e,p){D(e,t,p),J(a,e,p),h=!0},p(e,p){const _={};a.$set(_)},i(e){h||(V(a.$$.fragment,e),h=!0)},o(e){q(a.$$.fragment,e),h=!1},d(e){e&&y(t),R(a,e)}}}function de(g){let s,t,a='<div class="absolute inset-0"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="Hero" class="w-full h-full object-cover"/> <div class="absolute inset-0 bg-black/50"></div></div> <div class="relative text-center text-white"><h1 class="text-4xl md:text-6xl font-bold mb-4">Welcome to Campuseats</h1> <p class="text-xl md:text-2xl">Delicious food at your fingertips</p></div>',h,u,l,e,p="New Arrivals",_,v,o=[],c=new Map,r,i,k,w=H(oe);const K=d=>d[0].id;for(let d=0;d<w.length;d+=1){let n=ne(g,w,d),C=K(n);c.set(C,o[d]=ce(C,n))}return i=new ie({props:{categories:ae}}),{c(){s=x("div"),t=x("section"),t.innerHTML=a,h=I(),u=x("section"),l=x("div"),e=x("h2"),e.textContent=p,_=I(),v=x("div");for(let d=0;d<o.length;d+=1)o[d].c();r=I(),z(i.$$.fragment),this.h()},l(d){s=b(d,"DIV",{});var n=$(s);t=b(n,"SECTION",{class:!0,"data-svelte-h":!0}),T(t)!=="svelte-4hwong"&&(t.innerHTML=a),h=E(n),u=b(n,"SECTION",{class:!0});var C=$(u);l=b(C,"DIV",{class:!0});var S=$(l);e=b(S,"H2",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-19e50xn"&&(e.textContent=p),_=E(S),v=b(S,"DIV",{class:!0});var N=$(v);for(let M=0;M<o.length;M+=1)o[M].l(N);N.forEach(y),S.forEach(y),C.forEach(y),r=E(n),G(i.$$.fragment,n),n.forEach(y),this.h()},h(){m(t,"class","relative h-[60vh] flex items-center justify-center"),m(e,"class","text-3xl font-bold text-gray-800 mb-8"),m(v,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"),m(l,"class","max-w-7xl mx-auto px-4"),m(u,"class","py-12")},m(d,n){D(d,s,n),f(s,t),f(s,h),f(s,u),f(u,l),f(l,e),f(l,_),f(l,v);for(let C=0;C<o.length;C+=1)o[C]&&o[C].m(v,null);f(s,r),J(i,s,null),k=!0},p:j,i(d){if(!k){for(let n=0;n<w.length;n+=1)V(o[n]);V(i.$$.fragment,d),k=!0}},o(d){for(let n=0;n<o.length;n+=1)q(o[n]);q(i.$$.fragment,d),k=!1},d(d){d&&y(s);for(let n=0;n<o.length;n+=1)o[n].d();R(i)}}}class pe extends P{constructor(s){super(),W(this,s,null,de,L,{})}}export{pe as component,ge as universal};
