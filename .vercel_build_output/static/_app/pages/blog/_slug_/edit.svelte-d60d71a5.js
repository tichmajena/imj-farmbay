import{_ as A}from"../../../chunks/preload-helper-e4860ae8.js";import{S as G,i as K,s as Q,e as f,x as W,k as j,t as z,c as _,a as h,y as X,d,m as N,h as F,b as v,g as H,z as Y,L as a,N as U,M as V,r as Z,p as x,C as tt,O as et,w as nt}from"../../../chunks/index-5561fe64.js";import"../../../chunks/navigation-d566aa24.js";import{b as ot}from"../../../chunks/env-6d58f0dd.js";import{H as st}from"../../../chunks/Header-350f0c07.js";import"../../../chunks/singletons-d1fb5791.js";function at(r){let i,o,s,c,n,m,l,T,u,y,E,I,e,p,$,k,P,w,C,D,L,J;return o=new st({props:{background:r[0].fimg_url}}),{c(){i=f("section"),W(o.$$.fragment),s=j(),c=f("section"),n=f("div"),m=f("div"),l=f("input"),T=j(),u=f("input"),y=j(),E=f("div"),I=j(),e=f("div"),p=f("button"),$=z("Create"),k=j(),P=f("div"),w=f("button"),C=z("Update"),this.h()},l(t){i=_(t,"SECTION",{});var g=h(i);X(o.$$.fragment,g),g.forEach(d),s=N(t),c=_(t,"SECTION",{class:!0});var O=h(c);n=_(O,"DIV",{class:!0});var b=h(n);m=_(b,"DIV",{});var S=h(m);l=_(S,"INPUT",{class:!0,type:!0}),T=N(S),u=_(S,"INPUT",{class:!0,type:!0}),S.forEach(d),y=N(b),E=_(b,"DIV",{id:!0}),h(E).forEach(d),I=N(b),e=_(b,"DIV",{});var R=h(e);p=_(R,"BUTTON",{class:!0});var B=h(p);$=F(B,"Create"),B.forEach(d),R.forEach(d),k=N(b),P=_(b,"DIV",{});var M=h(P);w=_(M,"BUTTON",{class:!0});var q=h(w);C=F(q,"Update"),q.forEach(d),M.forEach(d),b.forEach(d),O.forEach(d),this.h()},h(){v(l,"class","bg-brandgold"),v(l,"type","text"),v(u,"class","bg-brandgold"),v(u,"type","text"),v(E,"id","editorjs"),v(p,"class","bg-brandgold"),v(w,"class","bg-brandgold"),v(n,"class","pt-20 container "),v(c,"class","w-full")},m(t,g){H(t,i,g),Y(o,i,null),H(t,s,g),H(t,c,g),a(c,n),a(n,m),a(m,l),U(l,r[0].title.rendered),a(m,T),a(m,u),U(u,r[0].content.rendered),a(n,y),a(n,E),a(n,I),a(n,e),a(e,p),a(p,$),a(n,k),a(n,P),a(P,w),a(w,C),D=!0,L||(J=[V(l,"input",r[3]),V(u,"input",r[4]),V(p,"click",r[1]),V(w,"click",r[2])],L=!0)},p(t,[g]){const O={};g&1&&(O.background=t[0].fimg_url),o.$set(O),g&1&&l.value!==t[0].title.rendered&&U(l,t[0].title.rendered),g&1&&u.value!==t[0].content.rendered&&U(u,t[0].content.rendered)},i(t){D||(Z(o.$$.fragment,t),D=!0)},o(t){x(o.$$.fragment,t),D=!1},d(t){t&&d(i),tt(o),t&&d(s),t&&d(c),L=!1,et(J)}}}const ft=!0,_t=ot,mt=async({page:r,fetch:i})=>{console.log(r.params.slug);const o=await i(`/blog/${r.params.slug}.json`);if(o.ok){console.log("res is ok");const n=await(await o.json())[0];return console.log(n),{props:{post:n}}}const{message:s}=await o.json();return{error:new Error(s)}};function rt(r,i,o){getPosts();let{post:s}=i;console.log(s);let c,n,m;const l={title:"",content:"",status:"",author:""},T=l;nt(async()=>{c=(await A(()=>import("../../../chunks/editor-9795eba8.js").then(function(e){return e.e}),["chunks/editor-9795eba8.js","chunks/_commonjsHelpers-1337bd3f.js"])).default,n=(await A(()=>import("../../../chunks/bundle-d0e05167.js").then(function(e){return e.b}),["chunks/bundle-d0e05167.js","chunks/_commonjsHelpers-1337bd3f.js"])).default,m=(await A(()=>import("../../../chunks/bundle-0d1e390f.js").then(function(e){return e.b}),["chunks/bundle-0d1e390f.js","chunks/_commonjsHelpers-1337bd3f.js"])).default,new c({holder:"editorjs",tools:{header:{class:n,inlineToolbar:!0},image:{class:m,inlineToolbar:!0}},data:s.content.rendered})});async function u(){const e=await fetch(`/blog/${page.params.slug}.json`,{body:JSON.stringify(l),method:"PUT"}),p=await e.json();console.log(e),console.log(p)}async function y(){const e=await fetch(`/blog/${page.params.slug}.json`,{body:JSON.stringify(T),method:"PUT"}),p=await e.json();console.log(e),console.log(p)}function E(){s.title.rendered=this.value,o(0,s)}function I(){s.content.rendered=this.value,o(0,s)}return r.$$set=e=>{"post"in e&&o(0,s=e.post)},[s,u,y,E,I]}class gt extends G{constructor(i){super(),K(this,i,rt,at,Q,{post:0})}}export{gt as default,mt as load,ft as prerender,_t as router};
