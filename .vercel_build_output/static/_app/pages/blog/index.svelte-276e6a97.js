import{S as se,i as ae,s as re,e as _,t as M,k as y,H as K,c as v,a as u,h as V,d as o,m as L,I as Q,b as a,g as B,L as n,j as R,x as le,y as ne,z as oe,r as ie,p as ce,C as de,_ as fe,n as he}from"../../chunks/index-5561fe64.js";import{b as ue}from"../../chunks/env-6d58f0dd.js";import{H as pe}from"../../chunks/Header-350f0c07.js";import{i as me}from"../../chunks/farmbay-bg-01-9737d217.js";function Z(d,t,r){const s=d.slice();return s[1]=t[r],s}function _e(d){let t,r;return{c(){t=_("span"),r=M("BLOG"),this.h()},l(s){t=v(s,"SPAN",{class:!0});var l=u(t);r=V(l,"BLOG"),l.forEach(o),this.h()},h(){a(t,"class","text-white")},m(s,l){B(s,t,l),n(t,r)},p:he,d(s){s&&o(t)}}}function ee(d){let t,r,s,l,p,k=d[1]._embedded["wp:term"][0][0].name+"",w,i,e,f=d[1].date+"",m,c,h,I,S=d[1].title.rendered+"",C,T,$,N=d[1].excerpt.rendered+"",G,b,q,g,D,H,A,z;return{c(){t=_("div"),r=_("div"),s=_("div"),l=_("div"),p=_("span"),w=M(k),i=y(),e=_("span"),m=M(f),c=y(),h=_("div"),I=_("h2"),C=M(S),T=y(),$=_("p"),G=y(),b=_("a"),q=M(`Learn More\r
                `),g=K("svg"),D=K("path"),H=K("path"),z=y(),this.h()},l(x){t=v(x,"DIV",{class:!0});var E=u(t);r=v(E,"DIV",{class:!0});var U=u(r);s=v(U,"DIV",{class:!0});var O=u(s);l=v(O,"DIV",{class:!0});var P=u(l);p=v(P,"SPAN",{class:!0});var W=u(p);w=V(W,k),W.forEach(o),i=L(P),e=v(P,"SPAN",{class:!0});var X=u(e);m=V(X,f),X.forEach(o),P.forEach(o),c=L(O),h=v(O,"DIV",{class:!0});var j=u(h);I=v(j,"H2",{class:!0});var Y=u(I);C=V(Y,S),Y.forEach(o),T=L(j),$=v(j,"P",{class:!0});var te=u($);te.forEach(o),G=L(j),b=v(j,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var F=u(b);q=V(F,`Learn More\r
                `),g=Q(F,"svg",{class:!0,viewBox:!0,stroke:!0,"stroke-width":!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0});var J=u(g);D=Q(J,"path",{d:!0}),u(D).forEach(o),H=Q(J,"path",{d:!0}),u(H).forEach(o),J.forEach(o),F.forEach(o),j.forEach(o),O.forEach(o),U.forEach(o),z=L(E),E.forEach(o),this.h()},h(){a(p,"class","font-semibold title-font text-gray-700"),a(e,"class","text-sm text-gray-500"),a(l,"class","md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"),a(I,"class","text-2xl font-medium text-gray-900 title-font mb-2"),a($,"class","leading-relaxed"),a(D,"d","M5 12h14"),a(H,"d","M12 5l7 7-7 7"),a(g,"class","w-4 h-4 ml-2"),a(g,"viewBox","0 0 24 24"),a(g,"stroke","currentColor"),a(g,"stroke-width","2"),a(g,"fill","none"),a(g,"stroke-linecap","round"),a(g,"stroke-linejoin","round"),a(b,"class","text-indigo-500 inline-flex items-center mt-4"),a(b,"sveltekit:prefetch",""),a(b,"href",A="/blog/"+d[1].slug),a(h,"class","md:flex-grow"),a(s,"class","py-8 flex flex-wrap md:flex-nowrap"),a(r,"class","-my-8 divide-y-2 divide-gray-100"),a(t,"class","container px-5 py-24 mx-auto")},m(x,E){B(x,t,E),n(t,r),n(r,s),n(s,l),n(l,p),n(p,w),n(l,i),n(l,e),n(e,m),n(s,c),n(s,h),n(h,I),n(I,C),n(h,T),n(h,$),$.innerHTML=N,n(h,G),n(h,b),n(b,q),n(b,g),n(g,D),n(g,H),n(t,z)},p(x,E){E&1&&k!==(k=x[1]._embedded["wp:term"][0][0].name+"")&&R(w,k),E&1&&f!==(f=x[1].date+"")&&R(m,f),E&1&&S!==(S=x[1].title.rendered+"")&&R(C,S),E&1&&N!==(N=x[1].excerpt.rendered+"")&&($.innerHTML=N),E&1&&A!==(A="/blog/"+x[1].slug)&&a(b,"href",A)},d(x){x&&o(t)}}}function ve(d){let t,r,s,l,p,k;r=new pe({props:{background:me,$$slots:{default:[_e]},$$scope:{ctx:d}}});let w=d[0],i=[];for(let e=0;e<w.length;e+=1)i[e]=ee(Z(d,w,e));return{c(){t=_("section"),le(r.$$.fragment),s=y(),l=_("section"),p=_("div");for(let e=0;e<i.length;e+=1)i[e].c();this.h()},l(e){t=v(e,"SECTION",{class:!0});var f=u(t);ne(r.$$.fragment,f),f.forEach(o),s=L(e),l=v(e,"SECTION",{class:!0});var m=u(l);p=v(m,"DIV",{class:!0});var c=u(p);for(let h=0;h<i.length;h+=1)i[h].l(c);c.forEach(o),m.forEach(o),this.h()},h(){a(t,"class","w-full"),a(p,"class","container mx-auto"),a(l,"class","w-full")},m(e,f){B(e,t,f),oe(r,t,null),B(e,s,f),B(e,l,f),n(l,p);for(let m=0;m<i.length;m+=1)i[m].m(p,null);k=!0},p(e,[f]){const m={};if(f&16&&(m.$$scope={dirty:f,ctx:e}),r.$set(m),f&1){w=e[0];let c;for(c=0;c<w.length;c+=1){const h=Z(e,w,c);i[c]?i[c].p(h,f):(i[c]=ee(h),i[c].c(),i[c].m(p,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=w.length}},i(e){k||(ie(r.$$.fragment,e),k=!0)},o(e){ce(r.$$.fragment,e),k=!1},d(e){e&&o(t),de(r),e&&o(s),e&&o(l),fe(i,e)}}}const be=!0,$e=ue,Ie=async({fetch:d})=>{//! This should be the name of the route, in this case  it's 'blog'
const t=await d("/blog.json");console.log(t);const r=await t.json();if(t.ok)return{props:{posts:r}};const{message:s}=await t.json();return{error:new Error(s)}};function ge(d,t,r){let{posts:s}=t;return d.$$set=l=>{"posts"in l&&r(0,s=l.posts)},[s]}class je extends se{constructor(t){super(),ae(this,t,ge,ve,re,{posts:0})}}export{je as default,Ie as load,be as prerender,$e as router};
