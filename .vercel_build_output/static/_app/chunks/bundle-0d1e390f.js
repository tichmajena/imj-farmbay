import{g as N}from"./_commonjsHelpers-1337bd3f.js";function D(j,H){return H.forEach(function(g){g&&typeof g!="string"&&!Array.isArray(g)&&Object.keys(g).forEach(function(w){if(w!=="default"&&!(w in j)){var c=Object.getOwnPropertyDescriptor(g,w);Object.defineProperty(j,w,c.get?c:{enumerable:!0,get:function(){return g[w]}})}})}),Object.freeze(Object.defineProperty(j,Symbol.toStringTag,{value:"Module"}))}var E={exports:{}};(function(j,H){(function(g,w){j.exports=w()})(window,function(){return function(g){var w={};function c(t){if(w[t])return w[t].exports;var o=w[t]={i:t,l:!1,exports:{}};return g[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}return c.m=g,c.c=w,c.d=function(t,o,b){c.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:b})},c.r=function(t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,o){if(1&o&&(t=c(t)),8&o||4&o&&typeof t=="object"&&t&&t.__esModule)return t;var b=Object.create(null);if(c.r(b),Object.defineProperty(b,"default",{enumerable:!0,value:t}),2&o&&typeof t!="string")for(var y in t)c.d(b,y,function(u){return t[u]}.bind(null,y));return b},c.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(o,"a",o),o},c.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},c.p="/",c(c.s=0)}([function(g,w,c){function t(y){return function(u){if(Array.isArray(u)){for(var m=0,s=new Array(u.length);m<u.length;m++)s[m]=u[m];return s}}(y)||function(u){if(Symbol.iterator in Object(u)||Object.prototype.toString.call(u)==="[object Arguments]")return Array.from(u)}(y)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(y,u){for(var m=0;m<u.length;m++){var s=u[m];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(y,s.key,s)}}c(1).toString();var b=function(){function y(n){var a=n.data,f=(n.config,n.api),v=n.readOnly;(function(x,_){if(!(x instanceof _))throw new TypeError("Cannot call a class as a function")})(this,y),this.api=f,this.readOnly=v,this.blockIndex=this.api.blocks.getCurrentBlockIndex()+1,this.CSS={baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive,wrapper:"cdx-simple-image",imageHolder:"cdx-simple-image__picture",caption:"cdx-simple-image__caption"},this.nodes={wrapper:null,imageHolder:null,image:null,caption:null},this.data={url:a.url||"",caption:a.caption||"",withBorder:a.withBorder!==void 0&&a.withBorder,withBackground:a.withBackground!==void 0&&a.withBackground,stretched:a.stretched!==void 0&&a.stretched},this.settings=[{name:"withBorder",icon:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>'},{name:"stretched",icon:'<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"/></svg>'},{name:"withBackground",icon:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"/></svg>'}]}var u,m,s;return u=y,s=[{key:"sanitize",get:function(){return{url:{},withBorder:{},withBackground:{},stretched:{},caption:{br:!0}}}},{key:"isReadOnlySupported",get:function(){return!0}},{key:"pasteConfig",get:function(){return{patterns:{image:/https?:\/\/\S+\.(gif|jpe?g|tiff|png|webp)$/i},tags:["img"],files:{mimeTypes:["image/*"]}}}}],(m=[{key:"render",value:function(){var n=this,a=this._make("div",[this.CSS.baseClass,this.CSS.wrapper]),f=this._make("div",this.CSS.loading),v=this._make("div",this.CSS.imageHolder),x=this._make("img"),_=this._make("div",[this.CSS.input,this.CSS.caption],{contentEditable:!this.readOnly,innerHTML:this.data.caption||""});return _.dataset.placeholder="Enter a caption",a.appendChild(f),this.data.url&&(x.src=this.data.url),x.onload=function(){a.classList.remove(n.CSS.loading),v.appendChild(x),a.appendChild(v),a.appendChild(_),f.remove(),n._acceptTuneView()},x.onerror=function(O){console.log("Failed to load an image",O)},this.nodes.imageHolder=v,this.nodes.wrapper=a,this.nodes.image=x,this.nodes.caption=_,a}},{key:"save",value:function(n){var a=n.querySelector("img"),f=n.querySelector("."+this.CSS.input);return a?Object.assign(this.data,{url:a.src,caption:f.innerHTML}):this.data}},{key:"onDropHandler",value:function(n){var a=new FileReader;return a.readAsDataURL(n),new Promise(function(f){a.onload=function(v){f({url:v.target.result,caption:n.name})}})}},{key:"onPaste",value:function(n){var a=this;switch(n.type){case"tag":var f=n.detail.data;this.data={url:f.src};break;case"pattern":var v=n.detail.data;this.data={url:v};break;case"file":var x=n.detail.file;this.onDropHandler(x).then(function(_){a.data=_})}}},{key:"renderSettings",value:function(){var n=this,a=document.createElement("div");return this.settings.forEach(function(f){var v=document.createElement("div");v.classList.add(n.CSS.settingsButton),v.innerHTML=f.icon,v.addEventListener("click",function(){n._toggleTune(f.name),v.classList.toggle(n.CSS.settingsButtonActive)}),v.classList.toggle(n.CSS.settingsButtonActive,n.data[f.name]),a.appendChild(v)}),a}},{key:"_make",value:function(n){var a,f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},x=document.createElement(n);Array.isArray(f)?(a=x.classList).add.apply(a,t(f)):f&&x.classList.add(f);for(var _ in v)x[_]=v[_];return x}},{key:"_toggleTune",value:function(n){this.data[n]=!this.data[n],this._acceptTuneView()}},{key:"_acceptTuneView",value:function(){var n=this;this.settings.forEach(function(a){n.nodes.imageHolder.classList.toggle(n.CSS.imageHolder+"--"+a.name.replace(/([A-Z])/g,function(f){return"-".concat(f[0].toLowerCase())}),!!n.data[a.name]),a.name==="stretched"&&n.api.blocks.stretchBlock(n.blockIndex,!!n.data.stretched)})}},{key:"data",get:function(){return this._data},set:function(n){this._data=Object.assign({},this.data,n),this.nodes.image&&(this.nodes.image.src=this.data.url),this.nodes.caption&&(this.nodes.caption.innerHTML=this.data.caption)}}])&&o(u.prototype,m),s&&o(u,s),y}();g.exports=b},function(g,w,c){var t=c(2);typeof t=="string"&&(t=[[g.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};c(4)(t,o),t.locals&&(g.exports=t.locals)},function(g,w,c){(g.exports=c(3)(!1)).push([g.i,`.cdx-simple-image {}

.cdx-simple-image .cdx-loader {
  min-height: 200px;
}

.cdx-simple-image .cdx-input {
  margin-top: 10px;
}

.cdx-simple-image img {
  max-width: 100%;
  vertical-align: bottom;
}

.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty::before {
  position: absolute;
  content: attr(data-placeholder);
  color: #707684;
  font-weight: normal;
  opacity: 0;
 }

.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty::before {
  opacity: 1;
}

.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:focus::before {
  opacity: 0;
}


.cdx-simple-image__picture--with-background {
  background: #eff2f5;
  padding: 10px;
}

.cdx-simple-image__picture--with-background img {
  display: block;
  max-width: 60%;
  margin: 0 auto;
}

.cdx-simple-image__picture--with-border {
  border: 1px solid #e8e8eb;
  padding: 1px;
}

.cdx-simple-image__picture--stretched img {
  max-width: none;
  width: 100%;
}
`,""])},function(g,w){g.exports=function(c){var t=[];return t.toString=function(){return this.map(function(o){var b=function(y,u){var m=y[1]||"",s=y[3];if(!s)return m;if(u&&typeof btoa=="function"){var n=(f=s,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(f))))+" */"),a=s.sources.map(function(v){return"/*# sourceURL="+s.sourceRoot+v+" */"});return[m].concat(a).concat([n]).join(`
`)}var f;return[m].join(`
`)}(o,c);return o[2]?"@media "+o[2]+"{"+b+"}":b}).join("")},t.i=function(o,b){typeof o=="string"&&(o=[[null,o,""]]);for(var y={},u=0;u<this.length;u++){var m=this[u][0];typeof m=="number"&&(y[m]=!0)}for(u=0;u<o.length;u++){var s=o[u];typeof s[0]=="number"&&y[s[0]]||(b&&!s[2]?s[2]=b:b&&(s[2]="("+s[2]+") and ("+b+")"),t.push(s))}},t}},function(g,w,c){var t,o,b={},y=(t=function(){return window&&document&&document.all&&!window.atob},function(){return o===void 0&&(o=t.apply(this,arguments)),o}),u=function(r){var e={};return function(i){if(typeof i=="function")return i();if(e[i]===void 0){var l=function(h){return document.querySelector(h)}.call(this,i);if(window.HTMLIFrameElement&&l instanceof window.HTMLIFrameElement)try{l=l.contentDocument.head}catch{l=null}e[i]=l}return e[i]}}(),m=null,s=0,n=[],a=c(5);function f(r,e){for(var i=0;i<r.length;i++){var l=r[i],h=b[l.id];if(h){h.refs++;for(var p=0;p<h.parts.length;p++)h.parts[p](l.parts[p]);for(;p<l.parts.length;p++)h.parts.push(M(l.parts[p],e))}else{var S=[];for(p=0;p<l.parts.length;p++)S.push(M(l.parts[p],e));b[l.id]={id:l.id,refs:1,parts:S}}}}function v(r,e){for(var i=[],l={},h=0;h<r.length;h++){var p=r[h],S=e.base?p[0]+e.base:p[0],d={css:p[1],media:p[2],sourceMap:p[3]};l[S]?l[S].parts.push(d):i.push(l[S]={id:S,parts:[d]})}return i}function x(r,e){var i=u(r.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var l=n[n.length-1];if(r.insertAt==="top")l?l.nextSibling?i.insertBefore(e,l.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),n.push(e);else if(r.insertAt==="bottom")i.appendChild(e);else{if(typeof r.insertAt!="object"||!r.insertAt.before)throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);var h=u(r.insertInto+" "+r.insertAt.before);i.insertBefore(e,h)}}function _(r){if(r.parentNode===null)return!1;r.parentNode.removeChild(r);var e=n.indexOf(r);e>=0&&n.splice(e,1)}function O(r){var e=document.createElement("style");return r.attrs.type===void 0&&(r.attrs.type="text/css"),T(e,r.attrs),x(r,e),e}function T(r,e){Object.keys(e).forEach(function(i){r.setAttribute(i,e[i])})}function M(r,e){var i,l,h,p;if(e.transform&&r.css){if(!(p=e.transform(r.css)))return function(){};r.css=p}if(e.singleton){var S=s++;i=m||(m=O(e)),l=U.bind(null,i,S,!1),h=U.bind(null,i,S,!0)}else r.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(i=function(d){var k=document.createElement("link");return d.attrs.type===void 0&&(d.attrs.type="text/css"),d.attrs.rel="stylesheet",T(k,d.attrs),x(d,k),k}(e),l=function(d,k,L){var C=L.css,A=L.sourceMap,z=k.convertToAbsoluteUrls===void 0&&A;(k.convertToAbsoluteUrls||z)&&(C=a(C)),A&&(C+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(A))))+" */");var P=new Blob([C],{type:"text/css"}),R=d.href;d.href=URL.createObjectURL(P),R&&URL.revokeObjectURL(R)}.bind(null,i,e),h=function(){_(i),i.href&&URL.revokeObjectURL(i.href)}):(i=O(e),l=function(d,k){var L=k.css,C=k.media;if(C&&d.setAttribute("media",C),d.styleSheet)d.styleSheet.cssText=L;else{for(;d.firstChild;)d.removeChild(d.firstChild);d.appendChild(document.createTextNode(L))}}.bind(null,i),h=function(){_(i)});return l(r),function(d){if(d){if(d.css===r.css&&d.media===r.media&&d.sourceMap===r.sourceMap)return;l(r=d)}else h()}}g.exports=function(r,e){if(typeof DEBUG!="undefined"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs=typeof e.attrs=="object"?e.attrs:{},e.singleton||typeof e.singleton=="boolean"||(e.singleton=y()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var i=v(r,e);return f(i,e),function(l){for(var h=[],p=0;p<i.length;p++){var S=i[p];(d=b[S.id]).refs--,h.push(d)}for(l&&f(v(l,e),e),p=0;p<h.length;p++){var d;if((d=h[p]).refs===0){for(var k=0;k<d.parts.length;k++)d.parts[k]();delete b[d.id]}}}};var B,I=(B=[],function(r,e){return B[r]=e,B.filter(Boolean).join(`
`)});function U(r,e,i,l){var h=i?"":l.css;if(r.styleSheet)r.styleSheet.cssText=I(e,h);else{var p=document.createTextNode(h),S=r.childNodes;S[e]&&r.removeChild(S[e]),S.length?r.insertBefore(p,S[e]):r.appendChild(p)}}},function(g,w){g.exports=function(c){var t=typeof window!="undefined"&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!c||typeof c!="string")return c;var o=t.protocol+"//"+t.host,b=o+t.pathname.replace(/\/[^\/]*$/,"/");return c.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(y,u){var m,s=u.trim().replace(/^"(.*)"$/,function(n,a){return a}).replace(/^'(.*)'$/,function(n,a){return a});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?y:(m=s.indexOf("//")===0?s:s.indexOf("/")===0?o+s:b+s.replace(/^\.\//,""),"url("+JSON.stringify(m)+")")})}}])})})(E);var $=N(E.exports),F=D({__proto__:null,default:$},[E.exports]);export{F as b};