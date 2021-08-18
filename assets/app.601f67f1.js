var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,o=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(a)for(var n of a(t))r.call(t,n)&&s(e,n,t[n]);return e},i=(e,a)=>t(e,n(a));import{r as c,a as u,i as d,c as p,b as h,m as v,n as m,w as f,d as g,h as b,p as w,e as x,f as k,o as y,g as C,j as L,t as _,u as $,k as S,l as M,q as z,s as E,v as A,x as T,F as I,y as H,z as O,A as P,B as R,C as j,D as U,E as V,G as q,H as B,I as D,J as W,K as N,T as Y,L as F,M as K,N as G,O as J,P as Q,Q as X,R as Z,S as ee,U as te}from"./vendor.4ffcf9e9.js";let ne;const ae={},le=function(e,t){if(!t||0===t.length)return e();if(void 0===ne){const e=document.createElement("link").relList;ne=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/fisand-doc/${e}`)in ae)return;ae[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":ne,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))};const re=/^https?:/i,se="undefined"!=typeof window;function oe(e,t){const n=function(e,t){t.sort(((e,t)=>{const n=t.split("/").length-e.split("/").length;return 0!==n?n:t.length-e.length}));for(const n of t)if(e.startsWith(n))return}(t,Object.keys(e));return n?e[n]:void 0}function ie(e,t){t=function(e,t){if(!se)return t;const n=e.base,a=n.endsWith("/")?n.slice(0,-1):n;return t.slice(a.length)}(e,t);const n=oe(e.locales||{},t)||{},a=oe(e.themeConfig&&e.themeConfig.locales||{},t)||{};return i(o(o({},e),n),{themeConfig:i(o(o({},e.themeConfig),a),{locales:{}}),lang:a.lang||e.lang,locales:{}})}const ce=Symbol(),ue=c((de='{"lang":"en-US","title":"fisandoc","description":"Vite & Vue powered static site generator.","base":"/fisand-doc/","head":[["link",{"rel":"icon","type":"image/png","href":"https://pt-starimg.didistatic.com/static/starimg/img/TvCSBVuy1Y1612669180297.jpeg"}]],"themeConfig":{"repo":"https://github.com/zouhangwithsweet/fisand-doc","logo":"https://pt-starimg.didistatic.com/static/starimg/img/TvCSBVuy1Y1612669180297.jpeg"},"locales":{},"customData":{}}',u(JSON.parse(de))));var de;function pe(){const e=d(ce);if(!e)throw new Error("vitepress data not properly injected in app");return e}function he(e){return re.test(e)?e:function(e,t){return`${e}${t}`.replace(/\/+/g,"/")}(ue.value.base,e)}function ve(e){let t=e.replace(/\.html$/,"");if(t=decodeURIComponent(t),t.endsWith("/")&&(t+="index"),se){const e="/fisand-doc/";t=t.slice(e.length).replace(/\//g,"_")+".md";const n=__VP_HASH_MAP__[t.toLowerCase()];t=`${e}assets/${t}.${n}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const me=Symbol();function fe(){return function(){const e=d(me);if(!e)throw new Error("useRouter() is called without provider.");return e}().route}function ge(e,t,n=!1){const a=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t));if(a){const e=a.offsetTop;!n||Math.abs(e-window.scrollY)>window.innerHeight?window.scrollTo(0,e):window.scrollTo({left:0,top:e,behavior:"smooth"})}}function be(e,t){let n=[],a=!0;f((()=>{const l=e.data,r=t.value,s=l&&l.title,o=l&&l.description,i=l&&l.frontmatter.head;var c;document.title=(s?s+" | ":"")+r.title,document.querySelector("meta[name=description]").setAttribute("content",o||r.description),(e=>{if(a)return void(a=!1);const t=[],l=Math.min(n.length,e.length);for(let a=0;a<l;a++){let l=n[a];const[r,s,o=""]=e[a];if(l.tagName.toLocaleLowerCase()===r){for(const e in s)l.getAttribute(e)!==s[e]&&l.setAttribute(e,s[e]);for(let e=0;e<l.attributes.length;e++){const t=l.attributes[e].name;t in s||l.removeAttribute(t)}l.innerHTML!==o&&(l.innerHTML=o)}else document.head.removeChild(l),l=we(e[a]),document.head.append(l);t.push(l)}n.slice(l).forEach((e=>document.head.removeChild(e))),e.slice(l).forEach((e=>{const n=we(e);document.head.appendChild(n),t.push(n)})),n=t})([...i?(c=i,c.filter((e=>{return!("meta"===(t=e)[0]&&t[1]&&"description"===t[1].name);var t}))):[]])}))}function we([e,t,n]){const a=document.createElement(e);for(const l in t)a.setAttribute(l,t[l]);return n&&(a.innerHTML=n),a}const xe=g({name:"VitePressContent",setup(){const e=fe();return()=>b("div",{style:{position:"relative"}},[e.component?b(e.component):null])}});w("data-v-24b686d9");const ke=L("p",{class:"title"},"Debug",-1),ye={class:"block"};x();g({setup(e){const t=pe(),n=c(null),a=c(!1);return k(a,(e=>{!1===e&&(n.value.scrollTop=0)})),(e,l)=>(y(),C("div",{class:S(["debug",{open:a.value}]),ref:n,onClick:l[0]||(l[0]=e=>a.value=!a.value)},[ke,L("pre",ye,_($(t)),1)],2))}}).__scopeId="data-v-24b686d9";const Ce=/#.*$/,Le=/(index)?\.(md|html)$/,_e=/\/$/,$e=/^[a-z]+:/i;function Se(e){return Array.isArray(e)}function Me(e){return $e.test(e)}function ze(e){return decodeURI(e).replace(Ce,"").replace(Le,"")}function Ee(e){return/^\//.test(e)?e:`/${e}`}function Ae(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function Te(e,t){if(function(e){return!1===e||"auto"===e||Se(e)}(e))return e;t=Ee(t);for(const n in e)if(t.startsWith(Ee(n)))return e[n];return"auto"}function Ie(e){return e.reduce(((e,t)=>(t.link&&e.push({text:t.text,link:Ae(t.link)}),function(e){return void 0!==e.children}(t)&&(e=[...e,...Ie(t.children)]),e)),[])}function He(e){const t=fe(),n=Me(e.value.link);return{props:p((()=>{const a=Oe(`/${t.data.relativePath}`);let l=!1;if(e.value.activeMatch)l=new RegExp(e.value.activeMatch).test(a);else{const t=Oe(he(e.value.link));l="/"===t?t===a:a.startsWith(t)}return{class:{active:l,isExternal:n},href:n?e.value.link:he(e.value.link),target:e.value.target||(n?"_blank":null),rel:e.value.rel||(n?"noopener noreferrer":null),"aria-label":e.value.ariaLabel}})),isExternal:n}}function Oe(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const Pe={},Re={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},je=[L("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),L("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1)];Pe.render=function(e,t){return y(),C("svg",Re,je)},w("data-v-67f07977");const Ue={class:"nav-link"};x();var Ve=g({props:{item:{type:null,required:!0}},setup(e){const t=M(e),{props:n,isExternal:a}=He(t.item);return(t,l)=>(y(),C("div",Ue,[L("a",T({class:"item"},$(n)),[z(_(e.item.text)+" ",1),$(a)?(y(),E(Pe,{key:0})):A("v-if",!0)],16)]))}});Ve.__scopeId="data-v-67f07977";const qe=["GitHub","GitLab","Bitbucket"].map((e=>[e,new RegExp(e,"i")]));function Be(){const{site:e}=pe();return p((()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const a=(l=n,re.test(l)?l:`https://github.com/${l}`);var l;return{text:function(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const a=qe.find((([e,t])=>t.test(n[0])));if(a&&a[0])return a[0];return"Source"}(a,t.repoLabel),link:a}}))}w("data-v-5b522a4c");const De=["href","aria-label"],We=["src"];x();var Ne=g({setup(e){const{site:t,theme:n}=pe(),a=fe(),l=p((()=>n.value.i18n?a.path.includes("/zh-CN/")?he("/zh-CN/"):he("/en-US/"):he("/")));return(e,a)=>(y(),C("a",{class:"nav-bar-title flex items-center",href:$(l),"aria-label":`${$(t).title}, back to home`},[$(n).logo?(y(),C("img",{key:0,class:"logo rounded-full",src:$(he)($(n).logo),alt:"Logo"},null,8,We)):A("v-if",!0),z(" "+_($(t).title),1)],8,De))}});Ne.__scopeId="data-v-5b522a4c",w("data-v-3dc95696");const Ye={class:"nav-dropdown-link-item"},Fe=L("span",{class:"arrow"},null,-1),Ke={class:"text"},Ge={class:"icon"};x();var Je=g({props:{item:{type:null,required:!0}},setup(e){const t=M(e),{props:n,isExternal:a}=He(t.item);return(t,l)=>(y(),C("div",Ye,[L("a",T({class:"item"},$(n)),[Fe,L("span",Ke,_(e.item.text),1),L("span",Ge,[$(a)?(y(),E(Pe,{key:0})):A("v-if",!0)])],16)]))}});Je.__scopeId="data-v-3dc95696",w("data-v-957acb88");const Qe=["aria-label"],Xe={class:"button-text"},Ze={class:"dialog"};x();var et=g({props:{item:{type:null,required:!0}},setup(e){const t=fe(),n=c(!1);function a(){n.value=!n.value}return k((()=>t.path),(()=>{n.value=!1})),(t,l)=>(y(),C("div",{class:S(["nav-dropdown-link",{open:n.value}])},[L("button",{class:"button","aria-label":e.item.ariaLabel,onClick:a},[L("span",Xe,_(e.item.text),1),L("span",{class:S(["button-arrow",n.value?"down":"right"])},null,2)],8,Qe),L("ul",Ze,[(y(!0),C(I,null,H(e.item.items,(e=>(y(),C("li",{key:e.text,class:"dialog-item"},[O(Je,{item:e},null,8,["item"])])))),128))])],2))}});et.__scopeId="data-v-957acb88",w("data-v-adf37eaa");const tt={key:0,class:"nav-links"},nt={key:1,class:"item"};x();var at=g({setup(e){const{theme:t}=pe(),n=function(){const e=fe(),{site:t}=pe();return p((()=>{const n=t.value.themeConfig.locales;if(!n)return null;const a=Object.keys(n);if(a.length<=1)return null;const l=se?t.value.base:"/",r=l.endsWith("/")?l.slice(0,-1):l,s=e.path.slice(r.length),o=a.find((e=>"/"!==e&&s.startsWith(e))),i=o?s.substring(o.length-1):s,c=a.map((e=>{const t=e.endsWith("/")?e.slice(0,-1):e;return{text:n[e].label,link:`${t}${i}`}})),u=o||"/";return{text:n[u].selectText?n[u].selectText:"Languages",items:c}}))}(),a=Be(),l=p((()=>t.value.nav||a.value||n.value));return(e,a)=>$(l)?(y(),C("nav",tt,[$(t).nav?(y(!0),C(I,{key:0},H($(t).nav,(e=>(y(),C("div",{key:e.text,class:"item"},[e.items?(y(),E(et,{key:0,item:e},null,8,["item"])):(y(),E(Ve,{key:1,item:e},null,8,["item"]))])))),128)):A("v-if",!0),$(n)?(y(),C("div",nt,[O(et,{item:$(n)},null,8,["item"])])):A("v-if",!0),A(' <div v-if="repo" class="item">\n      <NavLink :item="repo" />\n    </div> ')])):A("v-if",!0)}});at.__scopeId="data-v-adf37eaa";var lt={emits:["toggle"]};const rt=[L("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[L("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1)];lt.render=function(e,t,n,a,l,r){return y(),C("div",{class:"sidebar-button",onClick:t[0]||(t[0]=t=>e.$emit("toggle"))},rt)};const st={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ot=[L("path",{d:"M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247z",fill:"currentColor"},null,-1)];var it={name:"uil-github",render:function(e,t){return y(),C("svg",st,ot)}};const ct={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ut=[L("path",{d:"M21.94 12.865l-1.066-3.28l.001.005v-.005l-2.115-6.51a.833.833 0 0 0-.799-.57a.822.822 0 0 0-.788.576l-2.007 6.178H8.834L6.824 3.08a.822.822 0 0 0-.788-.575H6.03a.839.839 0 0 0-.796.575L3.127 9.584l-.002.006l.001-.005l-1.069 3.28a1.195 1.195 0 0 0 .435 1.34l9.229 6.705l.004.003l.012.008l-.011-.008l.002.001l.001.001a.466.466 0 0 0 .045.028l.006.004l.004.002l.003.001h.002l.005.003l.025.01l.023.01h.001l.004.002l.005.002h.002l.006.002h.003c.011.004.022.006.034.009l.013.003h.002l.005.002l.007.001h.007a.467.467 0 0 0 .066.006h.001a.469.469 0 0 0 .067-.005h.007l.007-.002l.004-.001h.002l.014-.004l.034-.008h.002l.006-.003h.002l.005-.002l.004-.001h.001l.025-.011l.023-.01l.005-.002h.002l.003-.002l.004-.002l.007-.004a.468.468 0 0 0 .044-.027l.004-.003l.005-.003l9.23-6.706a1.195 1.195 0 0 0 .434-1.339zm-3.973-9.18l1.81 5.574h-3.62zm-11.937 0L7.843 9.26h-3.62zm-2.984 9.757a.255.255 0 0 1-.092-.285l.794-2.438l5.822 7.464zm1.494-3.24h3.61l2.573 7.927zm7.165 10.696l-.006-.005l-.011-.01l-.02-.018l.002.001l.002.002a.473.473 0 0 0 .043.037l.002.002zm.293-1.894l-1.514-4.665l-1.344-4.138h5.72zm.31 1.88l-.01.008l-.002.001l-.005.005l-.012.009l.002-.002a.455.455 0 0 0 .043-.036l.001-.002l.002-.002zM15.851 10.2h3.61l-.74.947l-5.447 6.98zm5.1 3.241l-6.523 4.74l5.824-7.463l.791 2.437a.255.255 0 0 1-.092.286z",fill:"currentColor"},null,-1)];var dt={name:"uil-gitlab",render:function(e,t){return y(),C("svg",ct,ut)}},pt=g({props:{item:{type:null,required:!0}},setup(e){const t=e,n=M(t),{props:a}=He(n.item),l=p((()=>"github"===t.item.text.toLowerCase()));return(e,t)=>{const n=it,r=dt;return y(),C("a",T({class:"github-link flex items-center"},$(a)),[$(l)?(y(),E(n,{key:0})):(y(),E(r,{key:1}))],16)}}});pt.__scopeId="data-v-b37ce6ae";const ht={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},vt=[L("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22C6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z",fill:"currentColor"},null,-1)];var mt={name:"ri-moon-fill",render:function(e,t){return y(),C("svg",ht,vt)}};const ft={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},gt=[L("path",{d:"M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05L3.515 4.93zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414l-2.121-2.121zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414l2.121-2.121zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414l2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z",fill:"currentColor"},null,-1)];var bt={name:"ri-sun-fill",render:function(e,t){return y(),C("svg",ft,gt)}};const wt=P();var xt=g({setup(e){const t=R(wt);return(e,n)=>{const a=mt,l=bt;return y(),C("button",{"aria-label":"Toggle Theme",class:"nav-btn m-0 p-0",onClick:n[0]||(n[0]=(...e)=>$(t)&&$(t)(...e))},[j(O(a,null,null,512),[[U,$(wt)]]),j(O(l,null,null,512),[[U,!$(wt)]])])}}});const kt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},yt=[L("path",{d:"M20 5h-7V4a1 1 0 0 0-2 0v1H4a1 1 0 0 0 0 2h11.882a14.493 14.493 0 0 1-3.94 7.952A14.426 14.426 0 0 1 8.663 9.67a1 1 0 0 0-1.889.66a16.414 16.414 0 0 0 3.68 5.958a14.299 14.299 0 0 1-5.768 2.735A1 1 0 0 0 4.899 21a1.018 1.018 0 0 0 .215-.023a16.297 16.297 0 0 0 6.831-3.319a16.387 16.387 0 0 0 6.842 3.319a1 1 0 0 0 .426-1.954a14.382 14.382 0 0 1-5.79-2.733A16.48 16.48 0 0 0 17.893 7H20a1 1 0 0 0 0-2z",fill:"currentColor"},null,-1)];var Ct={name:"uil-letter-chinese-a",render:function(e,t){return y(),C("svg",kt,yt)}};const Lt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},_t=[L("path",{d:"M14 10h2v.757a4.5 4.5 0 0 1 7 3.743V20h-2v-5.5c0-1.43-1.175-2.5-2.5-2.5S16 13.07 16 14.5V20h-2V10zm-2-6v2H4v5h8v2H4v5h8v2H2V4h10z",fill:"currentColor"},null,-1)];var $t={name:"ri-english-input",render:function(e,t){return y(),C("svg",Lt,_t)}};function St(e){return e.includes("/zh-CN/")}function Mt(e){return e.includes("/en-US/")}const zt={"aria-label":"Lang Switch",class:"nav-btn m-0 p-0"},Et=["href"],At=["href"];var Tt=g({setup(e){const t=fe(),n=p((()=>t.path.replace("/zh-CN/","/en-US/"))),a=p((()=>t.path.replace("/en-US/","/zh-CN/"))),l=e=>!e.startsWith("/zh-CN/")&&!e.startsWith("/en-US/");return(e,r)=>{const s=Ct,o=$t;return y(),C("button",zt,[L("a",{class:"block",href:l($(a))?$(a):$(he)($(a))},[j(O(s,null,null,512),[[U,$(Mt)($(t).path)]])],8,Et),L("a",{class:"block",href:l($(n))?$(n):$(he)($(n))},[j(O(o,null,null,512),[[U,$(St)($(t).path)]])],8,At)])}}});w("data-v-f63ecec4");const It=L("div",{class:"flex-grow"},null,-1),Ht={class:"nav"},Ot={key:0,class:"item"},Pt={class:"nav-icons flex items-center gap-2"};x();var Rt=g({props:{showSidebar:{type:Boolean,required:!0}},emits:["toggle"],setup(e){const t=Be(),n=()=>{var e;return"github"===(null==(e=t.value)?void 0:e.text.toLowerCase())},a=()=>{var e;return"gitlab"===(null==(e=t.value)?void 0:e.text.toLowerCase())},{y:l}=V(),r=p((()=>({boxShadow:`0 0 5px rgb(10 16 20 / ${l.value/10>10?10:l.value/10}%)`})));return(l,s)=>{const o=Ve;return y(),C("header",{class:S(["nav-bar",[e.showSidebar?"pl-16":"pl-1.5rem"]]),style:B($(r))},[j(O(lt,{onToggle:s[0]||(s[0]=e=>l.$emit("toggle"))},null,512),[[U,e.showSidebar]]),O(Ne),It,L("div",Ht,[O(at)]),!$(t)||n()||a()?A("v-if",!0):(y(),C("div",Ot,[O(o,{item:$(t)},null,8,["item"])])),L("div",Pt,[$(t)&&(n()||a())?(y(),E(pt,{key:0,item:$(t)},null,8,["item"])):A("v-if",!0),O(xt),O(Tt)]),q(l.$slots,"search",{},void 0,!0)],6)}}});function jt(){let e=null,t=null;const n=function(e,t){let n,a=!1;return()=>{n&&clearTimeout(n),a?n=setTimeout(e,t):(e(),a=!0,setTimeout((()=>{a=!1}),t))}}(a,300);function a(){const e=function(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter((t=>e.some((e=>e.hash===t.hash))))}([].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item")));for(let t=0;t<e.length;t++){const n=e[t],a=e[t+1],[r,s]=Vt(t,n,a);if(r)return history.replaceState(null,document.title,s||" "),void l(s)}}function l(n){if(r(t),r(e),t=document.querySelector(`.sidebar a[href="${n}"]`),!t)return;t.classList.add("active");const a=t.closest(".sidebar-links > ul > li");a&&a!==t.parentElement?(e=a.querySelector("a"),e&&e.classList.add("active")):e=null}function r(e){e&&e.classList.remove("active")}D((()=>{a(),window.addEventListener("scroll",n)})),W((()=>{l(decodeURIComponent(location.hash))})),N((()=>{window.removeEventListener("scroll",n)}))}function Ut(e){const t=document.querySelector(".nav-bar").offsetHeight;return e.parentElement.offsetTop-t-15}function Vt(e,t,n){const a=window.scrollY;return 0===e&&0===a?[!0,null]:a<Ut(t)?[!1,null]:!n||a<Ut(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function qt(e,t){const n=[];if(void 0===e)return[];let a;return e.forEach((({level:e,title:l,slug:r})=>{if(e-1>t)return;const s={text:l,link:`#${r}`};2===e?(a=s,n.push(s)):a&&(a.children||(a.children=[])).push(s)})),n}Rt.__scopeId="data-v-f63ecec4";const Bt=e=>{const t=fe(),{site:n,frontmatter:a}=pe(),l=e.depth||1,r=a.value.sidebarDepth||3,s=t.data.headers,o=e.item.text,i=function(e,t){if(void 0===t)return t;if(t.startsWith("#"))return t;return function(e,t){const n=e.endsWith("/"),a=t.startsWith("/");return n&&a?e.slice(0,-1)+t:n||a?e+t:`${e}/${t}`}(e,t)}(n.value.base,e.item.link),c=e.item.children,u=function(e,t){return void 0!==t&&ze(`/${e.data.relativePath}`)===ze(t)}(t,e.item.link),d=l<r?Dt(u,c,s,l+1):null;return b("li",{class:"sidebar-link"},[b(i?"a":"p",{class:{"sidebar-link-item":!0,active:u},href:i},o),d])};function Dt(e,t,n,a=1){return t&&t.length>0?b("ul",{class:"sidebar-links"},t.map((e=>b(Bt,{item:e,depth:a})))):e&&n?Dt(!1,function(e){return Wt(function(e){let t;return(e=e.map((e=>Object.assign({},e)))).forEach((e=>{2===e.level?t=e:t&&(t.children||(t.children=[])).push(e)})),e.filter((e=>2===e.level))}(e))}(n),void 0,a):null}function Wt(e){return e.map((e=>({text:e.title,link:`#${e.slug}`,children:e.children?Wt(e.children):void 0})))}const Nt={key:0,class:"sidebar-links"};var Yt=g({setup(e){const t=function(){const e=fe(),{site:t}=pe();return jt(),p((()=>{const n=e.data.headers,a=e.data.frontmatter.sidebar,l=e.data.frontmatter.sidebarDepth;if(!1===a)return[];if("auto"===a)return qt(n,l);const r=Te(t.value.themeConfig.sidebar,e.data.relativePath);return!1===r?[]:"auto"===r?qt(n,l):r}))}();return(e,n)=>$(t).length>0?(y(),C("ul",Nt,[(y(!0),C(I,null,H($(t),(e=>(y(),E($(Bt),{item:e},null,8,["item"])))),256))])):A("v-if",!0)}}),Ft=g({props:{open:{type:Boolean,required:!0}},setup:e=>(t,n)=>(y(),C("aside",{class:S(["sidebar",{open:e.open}])},[O(at,{class:"nav"}),q(t.$slots,"sidebar-top",{},void 0,!0),O(Yt),q(t.$slots,"sidebar-bottom",{},void 0,!0)],2))});Ft.__scopeId="data-v-dd5588a6",w("data-v-68a96dbe");const Kt={class:"right-slug"},Gt=["href"];x();var Jt=g({setup(e){const t=fe(),n=p((()=>(t.data.headers||[]).filter((e=>e.level<=3))));return(e,t)=>(y(),E(Y,{to:"body"},[L("ul",Kt,[(y(!0),C(I,null,H($(n),(({level:e,title:t,slug:n})=>(y(),C("li",{class:S(`slug-item level-${e}`),key:t},[L("a",{href:"#"+n,class:"link"},_(t),9,Gt)],2)))),128))])]))}});Jt.__scopeId="data-v-68a96dbe";const Qt=/bitbucket.org/;function Xt(){const{page:e,theme:t,frontmatter:n}=pe();return{url:p((()=>{const{repo:a,docsDir:l="",docsBranch:r="master",docsRepo:s=a,editLinks:o}=t.value,i=null!=n.value.editLink?n.value.editLink:o,{relativePath:c}=e.value;return i&&c&&a?function(e,t,n,a,l){return Qt.test(e)?function(e,t,n,a,l){return(Me(t)?t:e).replace(_e,"")+`/src/${a}/`+(n?n.replace(_e,"")+"/":"")+l+`?mode=edit&spa=0&at=${a}&fileviewer=file-view-default`}(e,t,n,a,l):function(e,t,n,a,l){return(Me(t)?t:`https://github.com/${t}`).replace(_e,"")+`/edit/${a}/`+(n?n.replace(_e,"")+"/":"")+l}(0,t,n,a,l)}(a,s,l,r,c):null})),text:p((()=>t.value.editLinkText||"Edit this page"))}}w("data-v-44f611dc");const Zt={class:"edit-link"},en=["href"];x();var tn=g({setup(e){const{url:t,text:n}=Xt();return(e,a)=>(y(),C("div",Zt,[$(t)?(y(),C("a",{key:0,class:"link",href:$(t),target:"_blank",rel:"noopener noreferrer"},[z(_($(n))+" ",1),O(Pe,{class:"icon"})],8,en)):A("v-if",!0)]))}});tn.__scopeId="data-v-44f611dc",w("data-v-3cb3759a");const nn={key:0,class:"last-updated"},an={class:"prefix"},ln={class:"datetime"};x();var rn=g({setup(e){const{theme:t,page:n}=pe(),a=p((()=>{const e=t.value.lastUpdated;return void 0!==e&&!1!==e})),l=p((()=>{const e=t.value.lastUpdated;return!0===e?"Last Updated":e})),r=c("");return D((()=>{r.value=new Date(n.value.lastUpdated).toLocaleString("en-US")})),(e,t)=>$(a)?(y(),C("p",nn,[L("span",an,_($(l))+":",1),L("span",ln,_(r.value),1)])):A("v-if",!0)}});rn.__scopeId="data-v-3cb3759a",w("data-v-85b9344c");const sn={class:"page-footer"},on={class:"edit"},cn={class:"updated"};x();var un=g({setup:e=>(e,t)=>(y(),C("footer",sn,[L("div",on,[O(tn)]),L("div",cn,[O(rn)])]))});function dn(){const{page:e,theme:t}=pe(),n=p((()=>Ae(Ee(e.value.relativePath)))),a=p((()=>{const e=Te(t.value.sidebar,n.value);return Se(e)?Ie(e):[]})),l=p((()=>a.value.findIndex((e=>e.link===n.value)))),r=p((()=>{if(!1!==t.value.nextLinks&&l.value>-1&&l.value<a.value.length-1)return a.value[l.value+1]})),s=p((()=>{if(!1!==t.value.prevLinks&&l.value>0)return a.value[l.value-1]})),o=p((()=>!!r.value||!!s.value));return{next:r,prev:s,hasLinks:o}}un.__scopeId="data-v-85b9344c";const pn={},hn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},vn=[L("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1)];pn.render=function(e,t){return y(),C("svg",hn,vn)};const mn={},fn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},gn=[L("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1)];mn.render=function(e,t){return y(),C("svg",fn,gn)},w("data-v-23aa4d7c");const bn={key:0,class:"next-and-prev-link"},wn={class:"container"},xn={class:"prev"},kn=["href"],yn={class:"text"},Cn={class:"next"},Ln=["href"],_n={class:"text"};x();var $n=g({setup(e){const{hasLinks:t,prev:n,next:a}=dn();return(e,l)=>$(t)?(y(),C("div",bn,[L("div",wn,[L("div",xn,[$(n)?(y(),C("a",{key:0,class:"link",href:$(he)($(n).link)},[O(pn,{class:"icon icon-prev"}),L("span",yn,_($(n).text),1)],8,kn)):A("v-if",!0)]),L("div",Cn,[$(a)?(y(),C("a",{key:0,class:"link",href:$(he)($(a).link)},[L("span",_n,_($(a).text),1),O(mn,{class:"icon icon-next"})],8,Ln)):A("v-if",!0)])])])):A("v-if",!0)}});$n.__scopeId="data-v-23aa4d7c",w("data-v-3a8dec68");const Sn={class:"page"},Mn={class:"container"};x();var zn=g({setup:e=>(e,t)=>{const n=F("Content"),a=Jt,l=F("ClientOnly");return y(),C("main",Sn,[L("div",Mn,[q(e.$slots,"top",{},void 0,!0),O(n,{class:"content"}),O(un),O($n),O(l,null,{default:K((()=>[O(a)])),_:1}),q(e.$slots,"bottom",{},void 0,!0)])])}});zn.__scopeId="data-v-3a8dec68";const En={key:0,id:"ads-container"};var An=g({setup(e){const t=G((()=>le((()=>import("./Home.d3a57607.js")),["assets/Home.d3a57607.js","assets/vendor.4ffcf9e9.js"]))),n=()=>null,a=n,l=n,r=n,s=fe(),{site:o,page:i,theme:u,frontmatter:d}=pe(),h=p((()=>!!d.value.customLayout)),v=p((()=>!!d.value.home)),m=p((()=>Object.keys(u.value.locales||{}).length>0)),f=p((()=>{const e=u.value;return!1!==d.value.navbar&&!1!==e.navbar&&(o.value.title||e.logo||e.repo||e.nav)})),g=c(!1),b=p((()=>{return!d.value.home&&!1!==d.value.sidebar&&!(Se(e=Te(u.value.sidebar,s.data.relativePath))?0===e.length:!e);var e})),w=e=>{g.value="boolean"==typeof e?e:!g.value},x=w.bind(null,!1);k(s,x);const _=p((()=>[{"no-navbar":!f.value,"sidebar-open":g.value,"no-sidebar":!b.value}]));return(e,n)=>{const s=F("Content"),c=F("Debug");return y(),C(I,null,[L("div",{class:S(["theme",$(_)])},[$(f)?(y(),E(Rt,{key:0,"show-sidebar":$(b),onToggle:w},{search:K((()=>[q(e.$slots,"navbar-search",{},(()=>[$(u).algolia?(y(),E($(r),{options:$(u).algolia,multilang:$(m),key:$(o).lang},null,8,["options","multilang"])):A("v-if",!0)]))])),_:3},8,["show-sidebar"])):A("v-if",!0),O(Ft,{open:g.value},{"sidebar-top":K((()=>[q(e.$slots,"sidebar-top")])),"sidebar-bottom":K((()=>[q(e.$slots,"sidebar-bottom")])),_:3},8,["open"]),A(" TODO: make this button accessible "),L("div",{class:"sidebar-mask",onClick:n[0]||(n[0]=e=>w(!1))}),$(h)?(y(),E(s,{key:1})):$(v)?(y(),E($(t),{key:2},{hero:K((()=>[q(e.$slots,"home-hero")])),features:K((()=>[q(e.$slots,"home-features")])),footer:K((()=>[q(e.$slots,"home-footer")])),_:3})):(y(),E(zn,{key:3},{top:K((()=>[q(e.$slots,"page-top-ads",{},(()=>[$(u).carbonAds&&$(u).carbonAds.carbon?(y(),C("div",En,[O($(a),{key:"carbon"+$(i).relativePath,code:$(u).carbonAds.carbon,placement:$(u).carbonAds.placement},null,8,["code","placement"])])):A("v-if",!0)])),q(e.$slots,"page-top")])),bottom:K((()=>[q(e.$slots,"page-bottom"),q(e.$slots,"page-bottom-ads",{},(()=>[$(u).carbonAds&&$(u).carbonAds.custom?(y(),E($(l),{key:"custom"+$(i).relativePath,code:$(u).carbonAds.custom,placement:$(u).carbonAds.placement},null,8,["code","placement"])):A("v-if",!0)]))])),_:3}))],2),O(c)],64)}}});const Tn={class:"theme"},In=L("h1",null,"404",-1),Hn=["href"];const On={Layout:An,NotFound:g({setup(e){const t=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];return(e,n)=>(y(),C("div",Tn,[In,L("blockquote",null,_(t[Math.floor(Math.random()*t.length)]),1),L("a",{href:e.$site.base,"aria-label":"go to home"},"Take me home.",8,Hn)]))}})},Pn=new Set,Rn=()=>document.createElement("link");let jn;const Un=se&&(jn=Rn())&&jn.relList&&jn.relList.supports&&jn.relList.supports("prefetch")?e=>{const t=Rn();t.rel="prefetch",t.href=e,document.head.appendChild(t)}:e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};const Vn=g({setup(e,{slots:t}){const n=c(!1);return D((()=>{n.value=!0})),()=>n.value&&t.default?t.default():null}}),qn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Bn=[J('<g fill="none"><path d="M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4L17.75 4A2.25 2.25 0 0 1 20 6.25v7.46a1.75 1.75 0 0 0-1.5-1.692V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h5.38l.812.913c.343.386.818.584 1.297.587H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2h3.5zm2.245 2.096L16 4.25c0-.052-.002-.103-.005-.154zM13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z" fill="currentColor"></path><path d="M19 13.75a.75.75 0 0 1-.03.212l-2.5 8.5a.75.75 0 1 1-1.44-.424l2.5-8.5a.75.75 0 0 1 1.47.212z" fill="currentColor"></path><path d="M11.19 18.498a.75.75 0 0 1 0-.996l2-2.25a.75.75 0 0 1 1.12.996L12.755 18l1.557 1.752a.75.75 0 0 1-1.122.996l-2-2.25z" fill="currentColor"></path><path d="M19.752 20.81a.75.75 0 0 1-.063-1.058L21.247 18l-1.558-1.752a.75.75 0 0 1 1.122-.996l2 2.25a.75.75 0 0 1 0 .996l-2 2.25a.75.75 0 0 1-1.06.063z" fill="currentColor"></path></g>',1)];var Dn={name:"fluent-clipboard-code24-regular",render:function(e,t){return y(),C("svg",qn,Bn)}};const Wn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024"},Nn=[L("path",{d:"M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 0 0 308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 0 0-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",fill:"currentColor"},null,-1)];var Yn={name:"ant-design-code-outlined",render:function(e,t){return y(),C("svg",Wn,Nn)}};const Fn={class:"fisand-demo flex flex-col mb-8 rounded-lg border-1 border-gray-200 border-solid last:mb-0 divide-y"},Kn=["textContent"],Gn=["textContent"],Jn={class:"demo-component p-4px"},Qn={class:"relative flex justify-center py-2 px-2 text-center border-gray-200 border-top-dotted"},Xn={class:"block absolute left-1/2 top-0 text-xs text-blue-500 bg-blue-gray-50 rounded-md shadow-sm",style:{padding:"4px 10px","z-index":"999",transform:"translate(-96%, -80%)"}},Zn=["innerHTML"];var ea=g({props:{demo:{type:Object,default:{}},htmlStrs:{type:String,default:""},codeStrs:{type:String,default:""},src:{type:String}},setup(e){const t=e,n=Q(i(o({title:"",describe:""},t.demo),{showCodeExample:!1,copied:!1})),a=decodeURIComponent(t.htmlStrs.replace(/\&/g,"'")),l=()=>{const{copy:e,isSupported:a}=ee({source:decodeURIComponent(t.codeStrs.replace(/\&/g,"'"))});a&&e(),n.copied||(n.copied=!0,globalThis.setTimeout((()=>{n.copied=!1}),1200))};return(t,r)=>{const s=Dn,o=Yn,i=F("ClientOnly");return y(),E(i,null,{default:K((()=>[L("div",Fn,[A(" title "),L("div",{class:"text-sm py-2 px-2 <sm:text-md border-bottom border-gray-200",textContent:_($(n).title||"基础")},null,8,Kn),$(n).describe?(y(),C("div",{key:0,class:"text-xs my-1 <sm:text-xs <sm:my-1",textContent:_($(n).describe)},null,8,Gn)):A("v-if",!0),A(" demo "),L("div",Jn,[(y(),E(X(e.demo)))]),A(" operation "),L("div",Qn,[O(s,{class:"text-md cursor-pointer <sm:text-sm",onClick:l}),O(o,{class:S(["text-md cursor-pointer ml-12 <sm:text-sm",[$(n).showCodeExample?"active-code":""]]),onClick:r[0]||(r[0]=e=>$(n).showCodeExample=!$(n).showCodeExample)},null,8,["class"]),O(Z,{name:"fade"},{default:K((()=>[j(L("span",Xn,"复制成功!",512),[[U,$(n).copied]])])),_:1})]),$(n).showCodeExample?(y(),C("div",{key:1,class:"example-code language-vue",innerHTML:$(a)},null,8,Zn)):A("v-if",!0)])])),_:1})}}});const ta={class:"fisand-demo-container"};var na=g({props:{demos:{type:Object,default:{}},htmlStrs:{type:String,default:""},codeStrs:{type:String,default:""},src:{type:String}},setup(e){const t=e,n=Object.entries(t.demos).map((e=>e[1].default)),a=p((()=>[...t.htmlStrs.split("&-&")])),l=p((()=>[...t.codeStrs.split("&-&")]));return(e,t)=>(y(),C("div",ta,[(y(!0),C(I,null,H($(n),((e,t)=>(y(),E(X(ea),{demo:e,key:t,"html-strs":$(a)[t],"code-strs":$(l)[t]},null,8,["demo","html-strs","code-strs"])))),128))]))}});const aa=On.NotFound||(()=>"404 Not Found"),la={name:"VitePressApp",setup(){const{site:e}=pe();return D((()=>{k((()=>e.value.lang),(e=>{document.documentElement.lang=e}),{immediate:!0})})),function(){if(!se)return;if(!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const a=()=>{n&&n.disconnect(),n=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const t=e.target;n.unobserve(t);const{pathname:a}=t;if(!Pn.has(a)){Pn.add(a);const e=ve(a);Un(e)}}}))})),t((()=>{document.querySelectorAll("#app a").forEach((e=>{const{target:t,hostname:a,pathname:l}=e,r=l.match(/\.\w+$/);r&&".html"!==r[0]||"_blank"!==t&&a===location.hostname&&(l!==location.pathname?n.observe(e):Pn.add(l))}))}))};D(a);const l=fe();k((()=>l.path),a),N((()=>{n&&n.disconnect()}))}(),()=>b(On.Layout)}};function ra(){const e=function(){let e,t=se;return function(e,t){const n=h({path:"/",component:null,data:null});function a(e=(se?location.href:"/")){const t=new URL(e,"http://a.com");return t.pathname.endsWith("/")||t.pathname.endsWith(".html")||(t.pathname+=".html",e=t.pathname+t.search+t.hash),se&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",e)),r(e)}let l=null;async function r(a,r=0){const s=new URL(a,"http://a.com"),o=l=s.pathname;try{let t=e(o);if("then"in t&&"function"==typeof t.then&&(t=await t),l===o){l=null;const{default:e,__pageData:a}=t;if(!e)throw new Error(`Invalid route component: ${e}`);n.path=o,n.component=v(e),n.data=u(JSON.parse(a)),se&&m((()=>{if(s.hash&&!r){const e=document.querySelector(decodeURIComponent(s.hash));if(e)return void ge(e,s.hash)}window.scrollTo(0,r)}))}}catch(i){i.message.match(/fetch/)||console.error(i),l===o&&(l=null,n.path=o,n.component=t?v(t):null)}}return se&&(window.addEventListener("click",(e=>{const t=e.target.closest("a");if(t){const{href:n,protocol:l,hostname:r,pathname:s,hash:o,target:i}=t,c=window.location,u=s.match(/\.\w+$/);e.ctrlKey||e.shiftKey||e.altKey||e.metaKey||"_blank"===i||l!==c.protocol||r!==c.hostname||u&&".html"!==u[0]||(e.preventDefault(),s===c.pathname?o&&o!==c.hash&&(history.pushState(null,"",o),ge(t,o,t.classList.contains("header-anchor"))):a(n))}}),{capture:!0}),window.addEventListener("popstate",(e=>{r(location.href,e.state&&e.state.scrollPosition||0)})),window.addEventListener("hashchange",(e=>{e.preventDefault()}))),{route:n,go:a}}((n=>{let a=ve(n);return t&&(e=a),(t||e===a)&&(a=a.replace(/\.js$/,".lean.js")),se?(t=!1,le((()=>import(a)),[])):require(a)}),aa)}(),t=te(la);t.provide(me,e);const n=function(e){const t=p((()=>ie(ue.value,e.path)));return{site:t,theme:p((()=>t.value.themeConfig)),page:p((()=>e.data)),frontmatter:p((()=>e.data.frontmatter)),lang:p((()=>t.value.lang)),localePath:p((()=>{const{locales:e,lang:n}=t.value,a=Object.keys(e).find((t=>e[t].lang===n));return he(e&&a||"/")})),title:p((()=>e.data.title?e.data.title+" | "+t.value.title:t.value.title)),description:p((()=>e.data.description||t.value.description))}}(e.route);return t.provide(ce,n),se&&be(e.route,n.site),t.component("Content",xe),t.component("ClientOnly",Vn),t.component("Demo",ea),t.component("DemoWrapper",na),t.component("Debug",(()=>null)),Object.defineProperty(t.config.globalProperties,"$frontmatter",{get:()=>n.frontmatter.value}),{app:t,router:e}}if(se){const{app:e,router:t}=ra();t.go().then((()=>{e.mount("#app")}))}export{Ve as _,ra as createApp,pe as u};
