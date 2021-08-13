var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,l=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&o(e,n,t[n]);if(a)for(var n of a(t))s.call(t,n)&&o(e,n,t[n]);return e},i=(e,a)=>t(e,n(a));import{r as c,a as u,i as d,c as p,b as h,m as v,n as m,w as f,d as g,h as b,p as w,e as k,f as x,o as y,g as _,j as $,t as C,u as L,k as S,l as E,q as M,s as A,v as I,x as T,F as z,y as O,z as P,A as H,B as j,C as U,D as q,E as R,G as D,H as W,T as B,I as V,J as N,K as Y,L as F,M as K,N as G,O as J}from"./vendor.1c165e7c.js";let X;const Q={},Z=function(e,t){if(!t||0===t.length)return e();if(void 0===X){const e=document.createElement("link").relList;X=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/fisand-doc/${e}`)in Q)return;Q[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":X,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))};const ee=/^https?:/i,te="undefined"!=typeof window;function ne(e,t){const n=function(e,t){t.sort(((e,t)=>{const n=t.split("/").length-e.split("/").length;return 0!==n?n:t.length-e.length}));for(const n of t)if(e.startsWith(n))return}(t,Object.keys(e));return n?e[n]:void 0}function ae(e,t){t=function(e,t){if(!te)return t;const n=e.base,a=n.endsWith("/")?n.slice(0,-1):n;return t.slice(a.length)}(e,t);const n=ne(e.locales||{},t)||{},a=ne(e.themeConfig&&e.themeConfig.locales||{},t)||{};return i(l(l({},e),n),{themeConfig:i(l(l({},e.themeConfig),a),{locales:{}}),lang:a.lang||e.lang,locales:{}})}const re=Symbol(),se=c((oe='{"lang":"en-US","title":"fisandoc","description":"Vite & Vue powered static site generator.","base":"/fisand-doc/","head":[["link",{"rel":"icon","type":"image/png","href":"https://pt-starimg.didistatic.com/static/starimg/img/TvCSBVuy1Y1612669180297.jpeg"}]],"themeConfig":{"repo":"https://github.com/zouhangwithsweet/fisand-doc","logo":"https://pt-starimg.didistatic.com/static/starimg/img/TvCSBVuy1Y1612669180297.jpeg"},"locales":{},"customData":{}}',u(JSON.parse(oe))));var oe;function le(){const e=d(re);if(!e)throw new Error("vitepress data not properly injected in app");return e}function ie(e){return ee.test(e)?e:function(e,t){return`${e}${t}`.replace(/\/+/g,"/")}(se.value.base,e)}function ce(e){let t=e.replace(/\.html$/,"");if(t=decodeURIComponent(t),t.endsWith("/")&&(t.endsWith("en-US/")?t=t.replace("en-US/","")+"index.en-US":t+="index"),te){const e="/fisand-doc/";t=t.slice(e.length).replace(/\//g,"_")+".md";const n=__VP_HASH_MAP__[t.toLowerCase()];t=`${e}assets/${t}.${n}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const ue=Symbol();function de(){return function(){const e=d(ue);if(!e)throw new Error("useRouter() is called without provider.");return e}().route}function pe(e,t,n=!1){const a=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t));if(a){const e=a.offsetTop;!n||Math.abs(e-window.scrollY)>window.innerHeight?window.scrollTo(0,e):window.scrollTo({left:0,top:e,behavior:"smooth"})}}function he(e,t){let n=[],a=!0;f((()=>{const r=e.data,s=t.value,o=r&&r.title,l=r&&r.description,i=r&&r.frontmatter.head;var c;document.title=(o?o+" | ":"")+s.title,document.querySelector("meta[name=description]").setAttribute("content",l||s.description),(e=>{if(a)return void(a=!1);const t=[],r=Math.min(n.length,e.length);for(let a=0;a<r;a++){let r=n[a];const[s,o,l=""]=e[a];if(r.tagName.toLocaleLowerCase()===s){for(const e in o)r.getAttribute(e)!==o[e]&&r.setAttribute(e,o[e]);for(let e=0;e<r.attributes.length;e++){const t=r.attributes[e].name;t in o||r.removeAttribute(t)}r.innerHTML!==l&&(r.innerHTML=l)}else document.head.removeChild(r),r=ve(e[a]),document.head.append(r);t.push(r)}n.slice(r).forEach((e=>document.head.removeChild(e))),e.slice(r).forEach((e=>{const n=ve(e);document.head.appendChild(n),t.push(n)})),n=t})([...i?(c=i,c.filter((e=>{return!("meta"===(t=e)[0]&&t[1]&&"description"===t[1].name);var t}))):[]])}))}function ve([e,t,n]){const a=document.createElement(e);for(const r in t)a.setAttribute(r,t[r]);return n&&(a.innerHTML=n),a}const me=g({name:"VitePressContent",setup(){const e=de();return()=>b("div",{style:{position:"relative"}},[e.component?b(e.component):null])}});w("data-v-24b686d9");const fe=$("p",{class:"title"},"Debug",-1),ge={class:"block"};k();g({setup(e){const t=le(),n=c(null),a=c(!1);return x(a,(e=>{!1===e&&(n.value.scrollTop=0)})),(e,r)=>(y(),_("div",{class:S(["debug",{open:a.value}]),ref:n,onClick:r[0]||(r[0]=e=>a.value=!a.value)},[fe,$("pre",ge,C(L(t)),1)],2))}}).__scopeId="data-v-24b686d9";const be=/#.*$/,we=/(index)?\.(md|html)$/,ke=/\/$/,xe=/^[a-z]+:/i;function ye(e){return Array.isArray(e)}function _e(e){return xe.test(e)}function $e(e){return decodeURI(e).replace(be,"").replace(we,"")}function Ce(e){return/^\//.test(e)?e:`/${e}`}function Le(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function Se(e,t){if(function(e){return!1===e||"auto"===e||ye(e)}(e))return e;t=Ce(t);for(const n in e)if(t.startsWith(Ce(n)))return e[n];return"auto"}function Ee(e){return e.reduce(((e,t)=>(t.link&&e.push({text:t.text,link:Le(t.link)}),function(e){return void 0!==e.children}(t)&&(e=[...e,...Ee(t.children)]),e)),[])}const Me=["GitHub","GitLab","Bitbucket"].map((e=>[e,new RegExp(e,"i")]));function Ae(){const{site:e}=le();return p((()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const a=(r=n,ee.test(r)?r:`https://github.com/${r}`);var r;return{text:function(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const a=Me.find((([e,t])=>t.test(n[0])));if(a&&a[0])return a[0];return"Source"}(a,t.repoLabel),link:a}}))}w("data-v-5b522a4c");const Ie=["href","aria-label"],Te=["src"];k();var ze=g({setup(e){const{site:t,theme:n}=le(),a=de(),r=p((()=>n.value.i18n?a.path.includes("/zh-CN/")?ie("/zh-CN/"):ie("/en-US/"):ie("/")));return(e,a)=>(y(),_("a",{class:"nav-bar-title flex items-center",href:L(r),"aria-label":`${L(t).title}, back to home`},[L(n).logo?(y(),_("img",{key:0,class:"logo rounded-full",src:L(ie)(L(n).logo),alt:"Logo"},null,8,Te)):E("v-if",!0),M(" "+C(L(t).title),1)],8,Ie))}});function Oe(e){const t=de(),n=_e(e.value.link);return{props:p((()=>{const a=Pe(`/${t.data.relativePath}`);let r=!1;if(e.value.activeMatch)r=new RegExp(e.value.activeMatch).test(a);else{const t=Pe(ie(e.value.link));r="/"===t?t===a:a.startsWith(t)}return{class:{active:r,isExternal:n},href:n?e.value.link:ie(e.value.link),target:e.value.target||(n?"_blank":null),rel:e.value.rel||(n?"noopener noreferrer":null),"aria-label":e.value.ariaLabel}})),isExternal:n}}function Pe(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}ze.__scopeId="data-v-5b522a4c";const He={},je={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},Ue=[$("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),$("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1)];He.render=function(e,t){return y(),_("svg",je,Ue)},w("data-v-67f07977");const qe={class:"nav-link"};k();var Re=g({props:{item:{type:null,required:!0}},setup(e){const t=A(e),{props:n,isExternal:a}=Oe(t.item);return(t,r)=>(y(),_("div",qe,[$("a",T({class:"item"},L(n)),[M(C(e.item.text)+" ",1),L(a)?(y(),I(He,{key:0})):E("v-if",!0)],16)]))}});Re.__scopeId="data-v-67f07977",w("data-v-3dc95696");const De={class:"nav-dropdown-link-item"},We=$("span",{class:"arrow"},null,-1),Be={class:"text"},Ve={class:"icon"};k();var Ne=g({props:{item:{type:null,required:!0}},setup(e){const t=A(e),{props:n,isExternal:a}=Oe(t.item);return(t,r)=>(y(),_("div",De,[$("a",T({class:"item"},L(n)),[We,$("span",Be,C(e.item.text),1),$("span",Ve,[L(a)?(y(),I(He,{key:0})):E("v-if",!0)])],16)]))}});Ne.__scopeId="data-v-3dc95696",w("data-v-957acb88");const Ye=["aria-label"],Fe={class:"button-text"},Ke={class:"dialog"};k();var Ge=g({props:{item:{type:null,required:!0}},setup(e){const t=de(),n=c(!1);function a(){n.value=!n.value}return x((()=>t.path),(()=>{n.value=!1})),(t,r)=>(y(),_("div",{class:S(["nav-dropdown-link",{open:n.value}])},[$("button",{class:"button","aria-label":e.item.ariaLabel,onClick:a},[$("span",Fe,C(e.item.text),1),$("span",{class:S(["button-arrow",n.value?"down":"right"])},null,2)],8,Ye),$("ul",Ke,[(y(!0),_(z,null,O(e.item.items,(e=>(y(),_("li",{key:e.text,class:"dialog-item"},[P(Ne,{item:e},null,8,["item"])])))),128))])],2))}});Ge.__scopeId="data-v-957acb88",w("data-v-adf37eaa");const Je={key:0,class:"nav-links"},Xe={key:1,class:"item"};k();var Qe=g({setup(e){const{theme:t}=le(),n=function(){const e=de(),{site:t}=le();return p((()=>{const n=t.value.themeConfig.locales;if(!n)return null;const a=Object.keys(n);if(a.length<=1)return null;const r=te?t.value.base:"/",s=r.endsWith("/")?r.slice(0,-1):r,o=e.path.slice(s.length),l=a.find((e=>"/"!==e&&o.startsWith(e))),i=l?o.substring(l.length-1):o,c=a.map((e=>{const t=e.endsWith("/")?e.slice(0,-1):e;return{text:n[e].label,link:`${t}${i}`}})),u=l||"/";return{text:n[u].selectText?n[u].selectText:"Languages",items:c}}))}(),a=Ae(),r=p((()=>t.value.nav||a.value||n.value));return(e,a)=>L(r)?(y(),_("nav",Je,[L(t).nav?(y(!0),_(z,{key:0},O(L(t).nav,(e=>(y(),_("div",{key:e.text,class:"item"},[e.items?(y(),I(Ge,{key:0,item:e},null,8,["item"])):(y(),I(Re,{key:1,item:e},null,8,["item"]))])))),128)):E("v-if",!0),L(n)?(y(),_("div",Xe,[P(Ge,{item:L(n)},null,8,["item"])])):E("v-if",!0),E(' <div v-if="repo" class="item">\n      <NavLink :item="repo" />\n    </div> ')])):E("v-if",!0)}});Qe.__scopeId="data-v-adf37eaa";var Ze={emits:["toggle"]};const et=[$("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[$("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1)];Ze.render=function(e,t,n,a,r,s){return y(),_("div",{class:"sidebar-button",onClick:t[0]||(t[0]=t=>e.$emit("toggle"))},et)};const tt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},nt=[$("path",{d:"M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247z",fill:"currentColor"},null,-1)];var at={name:"uil-github",render:function(e,t){return y(),_("svg",tt,nt)}},rt=g({props:{item:{type:null,required:!0}},setup(e){const t=A(e),{props:n}=Oe(t.item);return(e,t)=>{const a=at;return y(),_("a",T({class:"github-link flex items-center"},L(n)),[P(a)],16)}}});rt.__scopeId="data-v-292590e3";const st={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ot=[$("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22C6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z",fill:"currentColor"},null,-1)];var lt={name:"ri-moon-fill",render:function(e,t){return y(),_("svg",st,ot)}};const it={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ct=[$("path",{d:"M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05L3.515 4.93zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414l-2.121-2.121zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414l2.121-2.121zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414l2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z",fill:"currentColor"},null,-1)];var ut={name:"ri-sun-fill",render:function(e,t){return y(),_("svg",it,ct)}};const dt=H();var pt=g({setup(e){const t=j(dt);return(e,n)=>{const a=lt,r=ut;return y(),_("button",{"aria-label":"Toggle Theme",class:"nav-btn m-0 p-0",onClick:n[0]||(n[0]=(...e)=>L(t)&&L(t)(...e))},[U(P(a,null,null,512),[[q,L(dt)]]),U(P(r,null,null,512),[[q,!L(dt)]])])}}});const ht={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},vt=[$("path",{d:"M20 5h-7V4a1 1 0 0 0-2 0v1H4a1 1 0 0 0 0 2h11.882a14.493 14.493 0 0 1-3.94 7.952A14.426 14.426 0 0 1 8.663 9.67a1 1 0 0 0-1.889.66a16.414 16.414 0 0 0 3.68 5.958a14.299 14.299 0 0 1-5.768 2.735A1 1 0 0 0 4.899 21a1.018 1.018 0 0 0 .215-.023a16.297 16.297 0 0 0 6.831-3.319a16.387 16.387 0 0 0 6.842 3.319a1 1 0 0 0 .426-1.954a14.382 14.382 0 0 1-5.79-2.733A16.48 16.48 0 0 0 17.893 7H20a1 1 0 0 0 0-2z",fill:"currentColor"},null,-1)];var mt={name:"uil-letter-chinese-a",render:function(e,t){return y(),_("svg",ht,vt)}};const ft={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},gt=[$("path",{d:"M14 10h2v.757a4.5 4.5 0 0 1 7 3.743V20h-2v-5.5c0-1.43-1.175-2.5-2.5-2.5S16 13.07 16 14.5V20h-2V10zm-2-6v2H4v5h8v2H4v5h8v2H2V4h10z",fill:"currentColor"},null,-1)];var bt={name:"ri-english-input",render:function(e,t){return y(),_("svg",ft,gt)}};function wt(e){return e.includes("/zh-CN/")}function kt(e){return e.includes("/en-US/")}const xt={"aria-label":"Lang Switch",class:"nav-btn m-0 p-0"},yt=["href"],_t=["href"];var $t=g({setup(e){const t=de(),n=p((()=>t.path.replace("/zh-CN/","/en-US/"))),a=p((()=>t.path.replace("/en-US/","/zh-CN/"))),r=e=>!e.startsWith("/zh-CN/")&&!e.startsWith("/en-US/");return(e,s)=>{const o=mt,l=bt;return y(),_("button",xt,[$("a",{class:"block",href:r(L(a))?L(a):L(ie)(L(a))},[U(P(o,null,null,512),[[q,L(kt)(L(t).path)]])],8,yt),$("a",{class:"block",href:r(L(n))?L(n):L(ie)(L(n))},[U(P(l,null,null,512),[[q,L(wt)(L(t).path)]])],8,_t)])}}});w("data-v-fb331776");const Ct=$("div",{class:"flex-grow"},null,-1),Lt={class:"nav"},St={class:"nav-icons flex items-center gap-2"};k();var Et=g({props:{showSidebar:{type:Boolean,required:!0}},emits:["toggle"],setup(e){const t=Ae(),{y:n}=R(),a=p((()=>({boxShadow:`0 0 5px rgb(10 16 20 / ${n.value/10>10?10:n.value/10}%)`})));return(n,r)=>{return y(),_("header",{class:S(["nav-bar",[e.showSidebar?"pl-16":"pl-1.5rem"]]),style:W(L(a))},[U(P(Ze,{onToggle:r[0]||(r[0]=e=>n.$emit("toggle"))},null,512),[[q,e.showSidebar]]),P(ze),Ct,$("div",Lt,[P(Qe)]),$("div",St,[L(t)&&"github"===(null==(s=t.value)?void 0:s.text.toLowerCase())?(y(),I(rt,{key:0,item:L(t)},null,8,["item"])):E("v-if",!0),P(pt),P($t)]),D(n.$slots,"search",{},void 0,!0)],6);var s}}});Et.__scopeId="data-v-fb331776",w("data-v-68a96dbe");const Mt={class:"right-slug"},At=["href"];k();var It=g({setup(e){const t=de(),n=p((()=>(t.data.headers||[]).filter((e=>e.level<=3))));return(e,t)=>(y(),I(B,{to:"body"},[$("ul",Mt,[(y(!0),_(z,null,O(L(n),(({level:e,title:t,slug:n})=>(y(),_("li",{class:S(`slug-item level-${e}`),key:t},[$("a",{href:"#"+n,class:"link"},C(t),9,At)],2)))),128))])]))}});function Tt(){let e=null,t=null;const n=function(e,t){let n,a=!1;return()=>{n&&clearTimeout(n),a?n=setTimeout(e,t):(e(),a=!0,setTimeout((()=>{a=!1}),t))}}(a,300);function a(){const e=function(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter((t=>e.some((e=>e.hash===t.hash))))}([].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item")));for(let t=0;t<e.length;t++){const n=e[t],a=e[t+1],[s,o]=Ot(t,n,a);if(s)return history.replaceState(null,document.title,o||" "),void r(o)}}function r(n){if(s(t),s(e),t=document.querySelector(`.sidebar a[href="${n}"]`),!t)return;t.classList.add("active");const a=t.closest(".sidebar-links > ul > li");a&&a!==t.parentElement?(e=a.querySelector("a"),e&&e.classList.add("active")):e=null}function s(e){e&&e.classList.remove("active")}V((()=>{a(),window.addEventListener("scroll",n)})),N((()=>{r(decodeURIComponent(location.hash))})),Y((()=>{window.removeEventListener("scroll",n)}))}function zt(e){const t=document.querySelector(".nav-bar").offsetHeight;return e.parentElement.offsetTop-t-15}function Ot(e,t,n){const a=window.scrollY;return 0===e&&0===a?[!0,null]:a<zt(t)?[!1,null]:!n||a<zt(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function Pt(e,t){const n=[];if(void 0===e)return[];let a;return e.forEach((({level:e,title:r,slug:s})=>{if(e-1>t)return;const o={text:r,link:`#${s}`};2===e?(a=o,n.push(o)):a&&(a.children||(a.children=[])).push(o)})),n}It.__scopeId="data-v-68a96dbe";const Ht=e=>{const t=de(),{site:n,frontmatter:a}=le(),r=e.depth||1,s=a.value.sidebarDepth||1/0,o=t.data.headers,l=e.item.text,i=function(e,t){if(void 0===t)return t;if(t.startsWith("#"))return t;return function(e,t){const n=e.endsWith("/"),a=t.startsWith("/");return n&&a?e.slice(0,-1)+t:n||a?e+t:`${e}/${t}`}(e,t)}(n.value.base,e.item.link),c=e.item.children,u=function(e,t){return void 0!==t&&$e(`/${e.data.relativePath}`)===$e(t)}(t,e.item.link),d=r<s?jt(u,c,o,r+1):null;return b("li",{class:"sidebar-link"},[b(i?"a":"p",{class:{"sidebar-link-item":!0,active:u},href:i},l),d])};function jt(e,t,n,a=1){return t&&t.length>0?b("ul",{class:"sidebar-links"},t.map((e=>b(Ht,{item:e,depth:a})))):e&&n?jt(!1,function(e){return Ut(function(e){let t;return(e=e.map((e=>Object.assign({},e)))).forEach((e=>{2===e.level?t=e:t&&(t.children||(t.children=[])).push(e)})),e.filter((e=>2===e.level))}(e))}(n),void 0,a):null}function Ut(e){return e.map((e=>({text:e.title,link:`#${e.slug}`,children:e.children?Ut(e.children):void 0})))}const qt={key:0,class:"sidebar-links"};var Rt=g({setup(e){const t=function(){const e=de(),{site:t}=le();return Tt(),p((()=>{const n=e.data.headers,a=e.data.frontmatter.sidebar,r=e.data.frontmatter.sidebarDepth;if(!1===a)return[];if("auto"===a)return Pt(n,r);const s=Se(t.value.themeConfig.sidebar,e.data.relativePath);return!1===s?[]:"auto"===s?Pt(n,r):s}))}();return(e,n)=>L(t).length>0?(y(),_("ul",qt,[(y(!0),_(z,null,O(L(t),(e=>(y(),I(L(Ht),{item:e},null,8,["item"])))),256))])):E("v-if",!0)}}),Dt=g({props:{open:{type:Boolean,required:!0}},setup:e=>(t,n)=>{const a=It,r=F("ClientOnly");return y(),_("aside",{class:S(["sidebar",{open:e.open}])},[P(Qe,{class:"nav"}),D(t.$slots,"sidebar-top",{},void 0,!0),P(Rt),D(t.$slots,"sidebar-bottom",{},void 0,!0),P(r,null,{default:K((()=>[P(a)])),_:1})],2)}});Dt.__scopeId="data-v-da9fa5da";const Wt=/bitbucket.org/;function Bt(){const{page:e,theme:t,frontmatter:n}=le();return{url:p((()=>{const{repo:a,docsDir:r="",docsBranch:s="master",docsRepo:o=a,editLinks:l}=t.value,i=null!=n.value.editLink?n.value.editLink:l,{relativePath:c}=e.value;return i&&c&&a?function(e,t,n,a,r){return Wt.test(e)?function(e,t,n,a,r){return(_e(t)?t:e).replace(ke,"")+`/src/${a}/`+(n?n.replace(ke,"")+"/":"")+r+`?mode=edit&spa=0&at=${a}&fileviewer=file-view-default`}(e,t,n,a,r):function(e,t,n,a,r){return(_e(t)?t:`https://github.com/${t}`).replace(ke,"")+`/edit/${a}/`+(n?n.replace(ke,"")+"/":"")+r}(0,t,n,a,r)}(a,o,r,s,c):null})),text:p((()=>t.value.editLinkText||"Edit this page"))}}w("data-v-44f611dc");const Vt={class:"edit-link"},Nt=["href"];k();var Yt=g({setup(e){const{url:t,text:n}=Bt();return(e,a)=>(y(),_("div",Vt,[L(t)?(y(),_("a",{key:0,class:"link",href:L(t),target:"_blank",rel:"noopener noreferrer"},[M(C(L(n))+" ",1),P(He,{class:"icon"})],8,Nt)):E("v-if",!0)]))}});Yt.__scopeId="data-v-44f611dc",w("data-v-3cb3759a");const Ft={key:0,class:"last-updated"},Kt={class:"prefix"},Gt={class:"datetime"};k();var Jt=g({setup(e){const{theme:t,page:n}=le(),a=p((()=>{const e=t.value.lastUpdated;return void 0!==e&&!1!==e})),r=p((()=>{const e=t.value.lastUpdated;return!0===e?"Last Updated":e})),s=c("");return V((()=>{s.value=new Date(n.value.lastUpdated).toLocaleString("en-US")})),(e,t)=>L(a)?(y(),_("p",Ft,[$("span",Kt,C(L(r))+":",1),$("span",Gt,C(s.value),1)])):E("v-if",!0)}});Jt.__scopeId="data-v-3cb3759a",w("data-v-85b9344c");const Xt={class:"page-footer"},Qt={class:"edit"},Zt={class:"updated"};k();var en=g({setup:e=>(e,t)=>(y(),_("footer",Xt,[$("div",Qt,[P(Yt)]),$("div",Zt,[P(Jt)])]))});function tn(){const{page:e,theme:t}=le(),n=p((()=>Le(Ce(e.value.relativePath)))),a=p((()=>{const e=Se(t.value.sidebar,n.value);return ye(e)?Ee(e):[]})),r=p((()=>a.value.findIndex((e=>e.link===n.value)))),s=p((()=>{if(!1!==t.value.nextLinks&&r.value>-1&&r.value<a.value.length-1)return a.value[r.value+1]})),o=p((()=>{if(!1!==t.value.prevLinks&&r.value>0)return a.value[r.value-1]})),l=p((()=>!!s.value||!!o.value));return{next:s,prev:o,hasLinks:l}}en.__scopeId="data-v-85b9344c";const nn={},an={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},rn=[$("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1)];nn.render=function(e,t){return y(),_("svg",an,rn)};const sn={},on={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},ln=[$("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1)];sn.render=function(e,t){return y(),_("svg",on,ln)},w("data-v-23aa4d7c");const cn={key:0,class:"next-and-prev-link"},un={class:"container"},dn={class:"prev"},pn=["href"],hn={class:"text"},vn={class:"next"},mn=["href"],fn={class:"text"};k();var gn=g({setup(e){const{hasLinks:t,prev:n,next:a}=tn();return(e,r)=>L(t)?(y(),_("div",cn,[$("div",un,[$("div",dn,[L(n)?(y(),_("a",{key:0,class:"link",href:L(ie)(L(n).link)},[P(nn,{class:"icon icon-prev"}),$("span",hn,C(L(n).text),1)],8,pn)):E("v-if",!0)]),$("div",vn,[L(a)?(y(),_("a",{key:0,class:"link",href:L(ie)(L(a).link)},[$("span",fn,C(L(a).text),1),P(sn,{class:"icon icon-next"})],8,mn)):E("v-if",!0)])])])):E("v-if",!0)}});gn.__scopeId="data-v-23aa4d7c",w("data-v-252f1aa8");const bn={class:"page"},wn={class:"container"};k();var kn=g({setup:e=>(e,t)=>{const n=F("Content");return y(),_("main",bn,[$("div",wn,[D(e.$slots,"top",{},void 0,!0),P(n,{class:"content"}),P(en),P(gn),D(e.$slots,"bottom",{},void 0,!0)])])}});kn.__scopeId="data-v-252f1aa8";const xn={key:0,id:"ads-container"};var yn=g({setup(e){const t=G((()=>Z((()=>import("./Home.15a849c0.js")),["assets/Home.15a849c0.js","assets/vendor.1c165e7c.js"]))),n=()=>null,a=n,r=n,s=n,o=de(),{site:l,page:i,theme:u,frontmatter:d}=le(),h=p((()=>!!d.value.customLayout)),v=p((()=>!!d.value.home)),m=p((()=>Object.keys(u.value.locales||{}).length>0)),f=p((()=>{const e=u.value;return!1!==d.value.navbar&&!1!==e.navbar&&(l.value.title||e.logo||e.repo||e.nav)})),g=c(!1),b=p((()=>{return!d.value.home&&!1!==d.value.sidebar&&!(ye(e=Se(u.value.sidebar,o.data.relativePath))?0===e.length:!e);var e})),w=e=>{g.value="boolean"==typeof e?e:!g.value},k=w.bind(null,!1);x(o,k);const C=p((()=>[{"no-navbar":!f.value,"sidebar-open":g.value,"no-sidebar":!b.value}]));return(e,n)=>{const o=F("Content"),c=F("Debug");return y(),_(z,null,[$("div",{class:S(["theme",L(C)])},[L(f)?(y(),I(Et,{key:0,"show-sidebar":L(b),onToggle:w},{search:K((()=>[D(e.$slots,"navbar-search",{},(()=>[L(u).algolia?(y(),I(L(s),{options:L(u).algolia,multilang:L(m),key:L(l).lang},null,8,["options","multilang"])):E("v-if",!0)]))])),_:3},8,["show-sidebar"])):E("v-if",!0),P(Dt,{open:g.value},{"sidebar-top":K((()=>[D(e.$slots,"sidebar-top")])),"sidebar-bottom":K((()=>[D(e.$slots,"sidebar-bottom")])),_:3},8,["open"]),E(" TODO: make this button accessible "),$("div",{class:"sidebar-mask",onClick:n[0]||(n[0]=e=>w(!1))}),L(h)?(y(),I(o,{key:1})):L(v)?(y(),I(L(t),{key:2},{hero:K((()=>[D(e.$slots,"home-hero")])),features:K((()=>[D(e.$slots,"home-features")])),footer:K((()=>[D(e.$slots,"home-footer")])),_:3})):(y(),I(kn,{key:3},{top:K((()=>[D(e.$slots,"page-top-ads",{},(()=>[L(u).carbonAds&&L(u).carbonAds.carbon?(y(),_("div",xn,[P(L(a),{key:"carbon"+L(i).relativePath,code:L(u).carbonAds.carbon,placement:L(u).carbonAds.placement},null,8,["code","placement"])])):E("v-if",!0)])),D(e.$slots,"page-top")])),bottom:K((()=>[D(e.$slots,"page-bottom"),D(e.$slots,"page-bottom-ads",{},(()=>[L(u).carbonAds&&L(u).carbonAds.custom?(y(),I(L(r),{key:"custom"+L(i).relativePath,code:L(u).carbonAds.custom,placement:L(u).carbonAds.placement},null,8,["code","placement"])):E("v-if",!0)]))])),_:3}))],2),P(c)],64)}}});const _n={class:"theme"},$n=$("h1",null,"404",-1),Cn=["href"];const Ln={Layout:yn,NotFound:g({setup(e){const t=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];return(e,n)=>(y(),_("div",_n,[$n,$("blockquote",null,C(t[Math.floor(Math.random()*t.length)]),1),$("a",{href:e.$site.base,"aria-label":"go to home"},"Take me home.",8,Cn)]))}})},Sn=new Set,En=()=>document.createElement("link");let Mn;const An=te&&(Mn=En())&&Mn.relList&&Mn.relList.supports&&Mn.relList.supports("prefetch")?e=>{const t=En();t.rel="prefetch",t.href=e,document.head.appendChild(t)}:e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};const In=g({setup(e,{slots:t}){const n=c(!1);return V((()=>{n.value=!0})),()=>n.value&&t.default?t.default():null}}),Tn=Ln.NotFound||(()=>"404 Not Found"),zn={name:"VitePressApp",setup(){const{site:e}=le();return V((()=>{x((()=>e.value.lang),(e=>{document.documentElement.lang=e}),{immediate:!0})})),function(){if(!te)return;if(!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const a=()=>{n&&n.disconnect(),n=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const t=e.target;n.unobserve(t);const{pathname:a}=t;if(!Sn.has(a)){Sn.add(a);const e=ce(a);An(e)}}}))})),t((()=>{document.querySelectorAll("#app a").forEach((e=>{const{target:t,hostname:a,pathname:r}=e,s=r.match(/\.\w+$/);s&&".html"!==s[0]||"_blank"!==t&&a===location.hostname&&(r!==location.pathname?n.observe(e):Sn.add(r))}))}))};V(a);const r=de();x((()=>r.path),a),Y((()=>{n&&n.disconnect()}))}(),()=>b(Ln.Layout)}};function On(){const e=function(){let e,t=te;return function(e,t){const n=h({path:"/",component:null,data:null});function a(e=(te?location.href:"/")){const t=new URL(e,"http://a.com");return t.pathname.endsWith("/")||t.pathname.endsWith(".html")||(t.pathname+=".html",e=t.pathname+t.search+t.hash),te&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",e)),s(e)}let r=null;async function s(a,s=0){const o=new URL(a,"http://a.com"),l=r=o.pathname;try{let t=e(l);if("then"in t&&"function"==typeof t.then&&(t=await t),r===l){r=null;const{default:e,__pageData:a}=t;if(!e)throw new Error(`Invalid route component: ${e}`);n.path=l,n.component=v(e),n.data=u(JSON.parse(a)),te&&m((()=>{if(o.hash&&!s){const e=document.querySelector(decodeURIComponent(o.hash));if(e)return void pe(e,o.hash)}window.scrollTo(0,s)}))}}catch(i){i.message.match(/fetch/)||console.error(i),r===l&&(r=null,n.path=l,n.component=t?v(t):null)}}return te&&(window.addEventListener("click",(e=>{const t=e.target.closest("a");if(t){const{href:n,protocol:r,hostname:s,pathname:o,hash:l,target:i}=t,c=window.location,u=o.match(/\.\w+$/);e.ctrlKey||e.shiftKey||e.altKey||e.metaKey||"_blank"===i||r!==c.protocol||s!==c.hostname||u&&".html"!==u[0]||(e.preventDefault(),o===c.pathname?l&&l!==c.hash&&(history.pushState(null,"",l),pe(t,l,t.classList.contains("header-anchor"))):a(n))}}),{capture:!0}),window.addEventListener("popstate",(e=>{s(location.href,e.state&&e.state.scrollPosition||0)})),window.addEventListener("hashchange",(e=>{e.preventDefault()}))),{route:n,go:a}}((n=>{let a=ce(n);return t&&(e=a),(t||e===a)&&(a=a.replace(/\.js$/,".lean.js")),te?(t=!1,Z((()=>import(a)),[])):require(a)}),Tn)}(),t=J(zn);t.provide(ue,e);const n=function(e){const t=p((()=>ae(se.value,e.path)));return{site:t,theme:p((()=>t.value.themeConfig)),page:p((()=>e.data)),frontmatter:p((()=>e.data.frontmatter)),lang:p((()=>t.value.lang)),localePath:p((()=>{const{locales:e,lang:n}=t.value,a=Object.keys(e).find((t=>e[t].lang===n));return ie(e&&a||"/")})),title:p((()=>e.data.title?e.data.title+" | "+t.value.title:t.value.title)),description:p((()=>e.data.description||t.value.description))}}(e.route);return t.provide(re,n),te&&he(e.route,n.site),t.component("Content",me),t.component("ClientOnly",In),t.component("Debug",(()=>null)),Object.defineProperty(t.config.globalProperties,"$frontmatter",{get:()=>n.frontmatter.value}),{app:t,router:e}}if(te){const{app:e,router:t}=On();t.go().then((()=>{e.mount("#app")}))}export{Re as _,On as createApp,le as u};
