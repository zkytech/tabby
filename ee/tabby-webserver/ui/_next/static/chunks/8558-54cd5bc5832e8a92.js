(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8558],{2390:function(e,t,n){"use strict";var r=n(25809),l={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,o,a,u,i,c,s,d,f=!1;t||(t={}),a=t.debug||!1;try{if(i=r(),c=document.createRange(),s=document.getSelection(),(d=document.createElement("span")).textContent=e,d.ariaHidden="true",d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=l[t.format]||l.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(d),c.selectNodeContents(d),s.addRange(c),!document.execCommand("copy"))throw Error("copy command was unsuccessful");f=!0}catch(r){a&&console.error("unable to copy using execCommand: ",r),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(r){a&&console.error("unable to copy using clipboardData: ",r),a&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",o=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",u=n.replace(/#{\s*key\s*}/g,o),window.prompt(u,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(c):s.removeAllRanges()),d&&document.body.removeChild(d),i()}return f}},30415:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let r=n(21024);n(2265);let l=r._(n(54));function o(e){return{default:(null==e?void 0:e.default)||e}}function a(e,t){let n=l.default,r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e),Object.assign(r,t);let a=r.loader;return n({...r,loader:()=>null!=a?a().then(o):Promise.resolve(o(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},63388:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{suspense:function(){return l},NoSSR:function(){return o}}),n(21024),n(2265);let r=n(54922);function l(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e}function o(e){let{children:t}=e;return t}},54:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let r=n(21024),l=r._(n(2265)),o=n(63388),a=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function n(e){let n=t.loading,r=l.default.createElement(n,{isLoading:!0,pastDelay:!0,error:null}),a=t.ssr?l.default.Fragment:o.NoSSR,u=t.lazy;return l.default.createElement(l.default.Suspense,{fallback:r},l.default.createElement(a,null,l.default.createElement(u,e)))}return t.lazy=l.default.lazy(t.loader),n.displayName="LoadableComponent",n}},61574:function(e,t,n){"use strict";n.d(t,{OT:function(){return er},eh:function(){return ee},s_:function(){return A}});var r,l=n(2265);let{createElement:o,createContext:a,createRef:u,forwardRef:i,useCallback:c,useContext:s,useEffect:d,useImperativeHandle:f,useLayoutEffect:p,useMemo:v,useRef:y,useState:g}=r||(r=n.t(l,2)),b=(r||(r=n.t(l,2)))["useId".toString()],m=a(null);m.displayName="PanelGroupContext";let h="function"==typeof b?b:()=>null,w=0;function Z(e=null){let t=h(),n=y(e||t||null);return null===n.current&&(n.current=""+w++),null!=e?e:n.current}function j({children:e,className:t="",collapsedSize:n,collapsible:r,defaultSize:l,forwardedRef:a,id:u,maxSize:i,minSize:c,onCollapse:d,onExpand:v,onResize:g,order:b,style:h,tagName:w="div",...j}){let A=s(m);if(null===A)throw Error("Panel components must be rendered within a PanelGroup container");let{collapsePanel:x,expandPanel:E,getPanelSize:C,getPanelStyle:S,groupId:z,isPanelCollapsed:O,registerPanel:I,resizePanel:D,unregisterPanel:P}=A,M=Z(u),N=y({callbacks:{onCollapse:d,onExpand:v,onResize:g},constraints:{collapsedSize:n,collapsible:r,defaultSize:l,maxSize:i,minSize:c},id:M,idIsFromProps:void 0!==u,order:b});y({didLogMissingDefaultSizeWarning:!1}),p(()=>{let{callbacks:e,constraints:t}=N.current;N.current.id=M,N.current.idIsFromProps=void 0!==u,N.current.order=b,e.onCollapse=d,e.onExpand=v,e.onResize=g,t.collapsedSize=n,t.collapsible=r,t.defaultSize=l,t.maxSize=i,t.minSize=c}),p(()=>{let e=N.current;return I(e),()=>{P(e)}},[b,M,I,P]),f(a,()=>({collapse:()=>{x(N.current)},expand:()=>{E(N.current)},getId:()=>M,getSize:()=>C(N.current),isCollapsed:()=>O(N.current),isExpanded:()=>!O(N.current),resize:e=>{D(N.current,e)}}),[x,E,C,O,M,D]);let k=S(N.current,l);return o(w,{...j,children:e,className:t,style:{...k,...h},"data-panel":"","data-panel-id":M,"data-panel-group-id":z,"data-panel-collapsible":void 0,"data-panel-size":void 0})}let A=i((e,t)=>o(j,{...e,forwardedRef:t}));function x(e,t="Assertion failed!"){if(!e)throw console.error(t),Error(t)}function E(e,t,n=10){e=parseFloat(e.toFixed(n)),t=parseFloat(t.toFixed(n));let r=e-t;return 0===r?0:r>0?1:-1}function C(e,t,n){return 0===E(e,t,n)}function S({panelConstraints:e,panelIndex:t,size:n}){let r=e[t];x(null!=r);let{collapsedSize:l=0,collapsible:o,maxSize:a=100,minSize:u=0}=r;if(0>E(n,u)){if(o){let e=(l+u)/2;n=0>E(n,e)?l:u}else n=u}return n=parseFloat((n=Math.min(a,n)).toFixed(10))}function z({delta:e,layout:t,panelConstraints:n,pivotIndices:r,trigger:l}){if(C(e,0))return t;let o=[...t],[a,u]=r;x(null!=a),x(null!=u);let i=0;if("keyboard"===l){{let r=e<0?u:a,l=n[r];if(x(l),l.collapsible){let l=t[r];x(null!=l);let o=n[r];x(o);let{collapsedSize:a=0,minSize:u=0}=o;if(C(l,a)){let t=u-l;E(t,Math.abs(e))>0&&(e=e<0?0-t:t)}}}{let r=e<0?a:u,l=n[r];x(l);let{collapsible:o}=l;if(o){let l=t[r];x(null!=l);let o=n[r];x(o);let{collapsedSize:a=0,minSize:u=0}=o;if(C(l,u)){let t=l-a;E(t,Math.abs(e))>0&&(e=e<0?0-t:t)}}}}{let r=e<0?1:-1,l=e<0?u:a,o=0;for(;;){let e=t[l];x(null!=e);let a=S({panelConstraints:n,panelIndex:l,size:100}),u=a-e;if(o+=u,(l+=r)<0||l>=n.length)break}let i=Math.min(Math.abs(e),Math.abs(o));e=e<0?0-i:i}{let r=e<0?a:u,l=r;for(;l>=0&&l<n.length;){let r=Math.abs(e)-Math.abs(i),a=t[l];x(null!=a);let u=a-r,c=S({panelConstraints:n,panelIndex:l,size:u});if(!C(a,c)&&(i+=a-c,o[l]=c,i.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?l--:l++}}if(C(i,0))return t;{let r=e<0?u:a,l=t[r];x(null!=l);let c=l+i,s=S({panelConstraints:n,panelIndex:r,size:c});if(o[r]=s,!C(s,c)){let t=c-s,r=e<0?u:a,l=r;for(;l>=0&&l<n.length;){let r=o[l];x(null!=r);let a=r+t,u=S({panelConstraints:n,panelIndex:l,size:a});if(C(r,u)||(t-=u-r,o[l]=u),C(t,0))break;e>0?l--:l++}}}let c=o.reduce((e,t)=>t+e,0);return C(c,100)?o:t}function O(e){return Array.from(document.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`))}function I(e,t){let n=O(e),r=n.findIndex(e=>e.getAttribute("data-panel-resize-handle-id")===t);return null!=r?r:null}function D(e,t){let n=I(e,t);return null!=n?[n,n+1]:[-1,-1]}function P(e){let t=document.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return t||null}function M(e){let t=document.querySelector(`[data-panel-resize-handle-id="${e}"]`);return t||null}function N(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function k(e){return"keydown"===e.type}function L(e){return e.type.startsWith("mouse")}function R(e){return e.type.startsWith("touch")}function _(e,t){let n="horizontal"===e;if(L(t))return n?t.clientX:t.clientY;if(R(t)){let e=t.touches[0];return x(e),n?e.screenX:e.screenY}throw Error(`Unsupported event type "${t.type}"`)}function F(e,t,n){t.forEach((t,r)=>{let l=e[r];x(l);let{callbacks:o,constraints:a,id:u}=l,{collapsedSize:i=0,collapsible:c}=a,s=n[u];if(null==s||t!==s){n[u]=t;let{onCollapse:e,onExpand:r,onResize:l}=o;l&&l(t,s),c&&(e||r)&&(r&&(null==s||s===i)&&t!==i&&r(),e&&(null==s||s!==i)&&t===i&&e())}})}function U(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!=t[n])return!1;return!0}j.displayName="Panel",A.displayName="forwardRef(Panel)";let T=null,$=null;function B(e){switch(e){case"horizontal":return"ew-resize";case"horizontal-max":return"w-resize";case"horizontal-min":return"e-resize";case"vertical":return"ns-resize";case"vertical-max":return"n-resize";case"vertical-min":return"s-resize"}}function H(e){if(T===e)return;T=e;let t=B(e);null===$&&($=document.createElement("style"),document.head.appendChild($)),$.innerHTML=`*{cursor: ${t}!important;}`}function G(e){try{if("undefined"!=typeof localStorage)e.getItem=e=>localStorage.getItem(e),e.setItem=(e,t)=>{localStorage.setItem(e,t)};else throw Error("localStorage not supported in this environment")}catch(t){console.error(t),e.getItem=()=>null,e.setItem=()=>{}}}function W(e){return`react-resizable-panels:${e}`}function X(e){return e.map(e=>{let{constraints:t,id:n,idIsFromProps:r,order:l}=e;return r?n:l?`${l}:${JSON.stringify(t)}`:JSON.stringify(t)}).sort((e,t)=>e.localeCompare(t)).join(",")}function J(e,t){try{let n=W(e),r=t.getItem(n);if(r){let e=JSON.parse(r);if("object"==typeof e&&null!=e)return e}}catch(e){}return null}function Y(e,t,n,r,l){var o;let a=W(e),u=X(t),i=null!==(o=J(e,l))&&void 0!==o?o:{};i[u]={expandToSizes:Object.fromEntries(n.entries()),layout:r};try{l.setItem(a,JSON.stringify(i))}catch(e){console.error(e)}}function q({layout:e,panelConstraints:t}){let n=[...e],r=n.reduce((e,t)=>e+t,0);if(n.length!==t.length)throw Error(`Invalid ${t.length} panel layout: ${n.map(e=>`${e}%`).join(", ")}`);if(!C(r,100))for(let e=0;e<t.length;e++){let t=n[e];x(null!=t);let l=100/r*t;n[e]=l}let l=0;for(let e=0;e<t.length;e++){let r=n[e];x(null!=r);let o=S({panelConstraints:t,panelIndex:e,size:r});r!=o&&(l+=r-o,n[e]=o)}if(!C(l,0))for(let e=0;e<t.length;e++){let r=n[e];x(null!=r);let o=r+l,a=S({panelConstraints:t,panelIndex:e,size:o});if(r!==a&&(l-=a-r,n[e]=a,C(l,0)))break}return n}let K={getItem:e=>(G(K),K.getItem(e)),setItem:(e,t)=>{G(K),K.setItem(e,t)}},V={};function Q({autoSaveId:e=null,children:t,className:n="",direction:r,forwardedRef:l,id:a=null,onLayout:u=null,keyboardResizeBy:i=null,storage:s=K,style:b,tagName:h="div",...w}){let j=Z(a),[A,E]=g(null),[S,I]=g([]),B=y({}),G=y(new Map),W=y(0),Q=y({autoSaveId:e,direction:r,dragState:A,id:j,keyboardResizeBy:i,onLayout:u,storage:s}),ee=y({layout:S,panelDataArray:[],panelDataArrayChanged:!1});y({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),f(l,()=>({getId:()=>Q.current.id,getLayout:()=>{let{layout:e}=ee.current;return e},setLayout:e=>{let{onLayout:t}=Q.current,{layout:n,panelDataArray:r}=ee.current,l=q({layout:e,panelConstraints:r.map(e=>e.constraints)});N(n,l)||(I(l),ee.current.layout=l,t&&t(l),F(r,l,B.current))}}),[]),p(()=>{Q.current.autoSaveId=e,Q.current.direction=r,Q.current.dragState=A,Q.current.id=j,Q.current.onLayout=u,Q.current.storage=s}),function({committedValuesRef:e,eagerValuesRef:t,groupId:n,layout:r,panelDataArray:l,setLayout:o}){y({didWarnAboutMissingResizeHandle:!1}),p(()=>{let e=O(n);for(let t=0;t<l.length-1;t++){let{valueMax:n,valueMin:o,valueNow:a}=function({layout:e,panelsArray:t,pivotIndices:n}){let r=0,l=100,o=0,a=0,u=n[0];x(null!=u),t.forEach((e,t)=>{let{constraints:n}=e,{maxSize:i=100,minSize:c=0}=n;t===u?(r=c,l=i):(o+=c,a+=i)});let i=Math.min(l,100-o),c=Math.max(r,100-a),s=e[u];return{valueMax:i,valueMin:c,valueNow:s}}({layout:r,panelsArray:l,pivotIndices:[t,t+1]}),u=e[t];if(null==u);else{let e=l[t];x(e),u.setAttribute("aria-controls",e.id),u.setAttribute("aria-valuemax",""+Math.round(n)),u.setAttribute("aria-valuemin",""+Math.round(o)),u.setAttribute("aria-valuenow",null!=a?""+Math.round(a):"")}}return()=>{e.forEach((e,t)=>{e.removeAttribute("aria-controls"),e.removeAttribute("aria-valuemax"),e.removeAttribute("aria-valuemin"),e.removeAttribute("aria-valuenow")})}},[n,r,l]),d(()=>{let e=t.current;x(e);let{panelDataArray:l}=e,a=P(n);x(null!=a,`No group found for id "${n}"`);let u=O(n);x(u);let i=u.map(e=>{let t=e.getAttribute("data-panel-resize-handle-id");x(t);let[a,u]=function(e,t,n){var r,l,o,a;let u=M(t),i=O(e),c=u?i.indexOf(u):-1,s=null!==(r=null===(l=n[c])||void 0===l?void 0:l.id)&&void 0!==r?r:null,d=null!==(o=null===(a=n[c+1])||void 0===a?void 0:a.id)&&void 0!==o?o:null;return[s,d]}(n,t,l);if(null==a||null==u)return()=>{};let i=e=>{if(!e.defaultPrevented&&"Enter"===e.key){e.preventDefault();let u=l.findIndex(e=>e.id===a);if(u>=0){let e=l[u];x(e);let a=r[u],{collapsedSize:i=0,collapsible:c,minSize:s=0}=e.constraints;if(null!=a&&c){let e=z({delta:C(a,i)?s-i:i-a,layout:r,panelConstraints:l.map(e=>e.constraints),pivotIndices:D(n,t),trigger:"keyboard"});r!==e&&o(e)}}}};return e.addEventListener("keydown",i),()=>{e.removeEventListener("keydown",i)}});return()=>{i.forEach(e=>e())}},[e,t,n,r,l,o])}({committedValuesRef:Q,eagerValuesRef:ee,groupId:j,layout:S,panelDataArray:ee.current.panelDataArray,setLayout:I}),d(()=>{let{panelDataArray:t}=ee.current;if(e){if(0===S.length||S.length!==t.length)return;let n=V[e];null==n&&(n=function(e,t=10){let n=null;return(...r)=>{null!==n&&clearTimeout(n),n=setTimeout(()=>{e(...r)},t)}}(Y,100),V[e]=n);let r=[...t],l=new Map(G.current);n(e,r,l,S,s)}},[e,S,s]),d(()=>{});let er=c(e=>{let{onLayout:t}=Q.current,{layout:n,panelDataArray:r}=ee.current;if(e.constraints.collapsible){let l=r.map(e=>e.constraints),{collapsedSize:o=0,panelSize:a,pivotIndices:u}=en(r,e,n);if(x(null!=a),a!==o){G.current.set(e.id,a);let i=et(r,e)===r.length-1,c=i?a-o:o-a,s=z({delta:c,layout:n,panelConstraints:l,pivotIndices:u,trigger:"imperative-api"});U(n,s)||(I(s),ee.current.layout=s,t&&t(s),F(r,s,B.current))}}},[]),el=c(e=>{let{onLayout:t}=Q.current,{layout:n,panelDataArray:r}=ee.current;if(e.constraints.collapsible){let l=r.map(e=>e.constraints),{collapsedSize:o=0,panelSize:a,minSize:u=0,pivotIndices:i}=en(r,e,n);if(a===o){let o=G.current.get(e.id),c=null!=o&&o>=u?o:u,s=et(r,e)===r.length-1,d=z({delta:s?a-c:c-a,layout:n,panelConstraints:l,pivotIndices:i,trigger:"imperative-api"});U(n,d)||(I(d),ee.current.layout=d,t&&t(d),F(r,d,B.current))}}},[]),eo=c(e=>{let{layout:t,panelDataArray:n}=ee.current,{panelSize:r}=en(n,e,t);return x(null!=r),r},[]),ea=c((e,t)=>{let{panelDataArray:n}=ee.current,r=et(n,e);return function({defaultSize:e,dragState:t,layout:n,panelData:r,panelIndex:l,precision:o=3}){let a=n[l];return{flexBasis:0,flexGrow:null==a?null!=e?e:"1":1===r.length?"1":a.toPrecision(o),flexShrink:1,overflow:"hidden",pointerEvents:null!==t?"none":void 0}}({defaultSize:t,dragState:A,layout:S,panelData:n,panelIndex:r})},[A,S]),eu=c(e=>{let{layout:t,panelDataArray:n}=ee.current,{collapsedSize:r=0,collapsible:l,panelSize:o}=en(n,e,t);return!0===l&&o===r},[]),ei=c(e=>{let{layout:t,panelDataArray:n}=ee.current,{collapsedSize:r=0,collapsible:l,panelSize:o}=en(n,e,t);return x(null!=o),!l||o>r},[]),ec=c(e=>{let{panelDataArray:t}=ee.current;t.push(e),t.sort((e,t)=>{let n=e.order,r=t.order;return null==n&&null==r?0:null==n?-1:null==r?1:n-r}),ee.current.panelDataArrayChanged=!0},[]);p(()=>{if(ee.current.panelDataArrayChanged){ee.current.panelDataArrayChanged=!1;let{autoSaveId:e,onLayout:t,storage:n}=Q.current,{layout:r,panelDataArray:l}=ee.current,o=null;if(e){let t=function(e,t,n){var r,l;let o=null!==(r=J(e,n))&&void 0!==r?r:{},a=X(t);return null!==(l=o[a])&&void 0!==l?l:null}(e,l,n);t&&(G.current=new Map(Object.entries(t.expandToSizes)),o=t.layout)}null==o&&(o=function({panelDataArray:e}){let t=Array(e.length),n=e.map(e=>e.constraints),r=0,l=100;for(let o=0;o<e.length;o++){let e=n[o];x(e);let{defaultSize:a}=e;null!=a&&(r++,t[o]=a,l-=a)}for(let o=0;o<e.length;o++){let a=n[o];x(a);let{defaultSize:u}=a;if(null!=u)continue;let i=e.length-r,c=l/i;r++,t[o]=c,l-=c}return t}({panelDataArray:l}));let a=q({layout:o,panelConstraints:l.map(e=>e.constraints)});N(r,a)||(I(a),ee.current.layout=a,t&&t(a),F(l,a,B.current))}});let es=c(e=>function(t){t.preventDefault();let{direction:n,dragState:r,id:l,keyboardResizeBy:o,onLayout:a}=Q.current,{layout:u,panelDataArray:i}=ee.current,{initialLayout:c}=null!=r?r:{},s=D(l,e),d=function(e,t,n,r,l){if(k(e)){let t="horizontal"===n,r=0;r=e.shiftKey?100:null!=l?l:10;let o=0;switch(e.key){case"ArrowDown":o=t?0:r;break;case"ArrowLeft":o=t?-r:0;break;case"ArrowRight":o=t?r:0;break;case"ArrowUp":o=t?0:-r;break;case"End":o=100;break;case"Home":o=-100}return o}return null==r?0:function(e,t,n,r){let l="horizontal"===n,o=M(t);x(o);let a=o.getAttribute("data-panel-group-id");x(a);let{initialCursorPosition:u}=r,i=_(n,e),c=P(a);x(c);let s=c.getBoundingClientRect(),d=l?s.width:s.height;return(i-u)/d*100}(e,t,n,r)}(t,e,n,r,o);if(0===d)return;let f="horizontal"===n;"rtl"===document.dir&&f&&(d=-d);let p=i.map(e=>e.constraints),v=z({delta:d,layout:null!=c?c:u,panelConstraints:p,pivotIndices:s,trigger:k(t)?"keyboard":"mouse-or-touch"}),y=!U(u,v);(L(t)||R(t))&&W.current!=d&&(W.current=d,y?H(f?"horizontal":"vertical"):f?H(d<0?"horizontal-min":"horizontal-max"):H(d<0?"vertical-min":"vertical-max")),y&&(I(v),ee.current.layout=v,a&&a(v),F(i,v,B.current))},[]),ed=c((e,t)=>{let{onLayout:n}=Q.current,{layout:r,panelDataArray:l}=ee.current,o=l.map(e=>e.constraints),{panelSize:a,pivotIndices:u}=en(l,e,r);x(null!=a);let i=et(l,e)===l.length-1,c=i?a-t:t-a,s=z({delta:c,layout:r,panelConstraints:o,pivotIndices:u,trigger:"imperative-api"});U(r,s)||(I(s),ee.current.layout=s,n&&n(s),F(l,s,B.current))},[]),ef=c((e,t)=>{let{direction:n}=Q.current,{layout:r}=ee.current,l=M(e);x(l);let o=_(n,t);E({dragHandleId:e,dragHandleRect:l.getBoundingClientRect(),initialCursorPosition:o,initialLayout:r})},[]),ep=c(()=>{null!==$&&(document.head.removeChild($),T=null,$=null),E(null)},[]),ev=c(e=>{let{panelDataArray:t}=ee.current,n=et(t,e);n>=0&&(t.splice(n,1),delete B.current[e.id],ee.current.panelDataArrayChanged=!0)},[]),ey=v(()=>({collapsePanel:er,direction:r,dragState:A,expandPanel:el,getPanelSize:eo,getPanelStyle:ea,groupId:j,isPanelCollapsed:eu,isPanelExpanded:ei,registerPanel:ec,registerResizeHandle:es,resizePanel:ed,startDragging:ef,stopDragging:ep,unregisterPanel:ev}),[er,A,r,el,eo,ea,j,eu,ei,ec,es,ed,ef,ep,ev]);return o(m.Provider,{value:ey},o(h,{...w,children:t,className:n,style:{display:"flex",flexDirection:"horizontal"===r?"row":"column",height:"100%",overflow:"hidden",width:"100%",...b},"data-panel-group":"","data-panel-group-direction":r,"data-panel-group-id":j}))}let ee=i((e,t)=>o(Q,{...e,forwardedRef:t}));function et(e,t){return e.findIndex(e=>e===t||e.id===t.id)}function en(e,t,n){let r=e.map(e=>e.constraints),l=et(e,t),o=r[l],a=l===e.length-1,u=n[l];return{...o,panelSize:u,pivotIndices:a?[l-1,l]:[l,l+1]}}function er({children:e=null,className:t="",disabled:n=!1,id:r,onDragging:l,style:a={},tabIndex:u=0,tagName:i="div",...f}){let p=y(null),v=y({onDragging:l});d(()=>{v.current.onDragging=l});let b=s(m);if(null===b)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");let{direction:h,dragState:w,groupId:j,registerResizeHandle:A,startDragging:E,stopDragging:C}=b,S=Z(r),z=(null==w?void 0:w.dragHandleId)===S,[D,P]=g(!1),[N,k]=g(null),L=c(()=>{let e=p.current;x(e),e.blur(),C();let{onDragging:t}=v.current;t&&t(!1)},[C]);d(()=>{if(n)k(null);else{let e=A(S);k(()=>e)}},[n,S,A]),d(()=>{if(n||null==N||!z)return;let e=e=>{N(e)},t=e=>{N(e)},r=p.current;x(r);let l=r.ownerDocument;return l.body.addEventListener("contextmenu",L),l.body.addEventListener("mousemove",e),l.body.addEventListener("touchmove",e),l.body.addEventListener("mouseleave",t),window.addEventListener("mouseup",L),window.addEventListener("touchend",L),()=>{l.body.removeEventListener("contextmenu",L),l.body.removeEventListener("mousemove",e),l.body.removeEventListener("touchmove",e),l.body.removeEventListener("mouseleave",t),window.removeEventListener("mouseup",L),window.removeEventListener("touchend",L)}},[h,n,z,N,L]),function({disabled:e,handleId:t,resizeHandler:n}){d(()=>{if(e||null==n)return;let r=M(t);if(null==r)return;let l=e=>{if(!e.defaultPrevented)switch(e.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":e.preventDefault(),n(e);break;case"F6":{e.preventDefault();let n=r.getAttribute("data-panel-group-id");x(n);let l=O(n),o=I(n,t);x(null!==o);let a=e.shiftKey?o>0?o-1:l.length-1:o+1<l.length?o+1:0,u=l[a];u.focus()}}};return r.addEventListener("keydown",l),()=>{r.removeEventListener("keydown",l)}},[e,t,n])}({disabled:n,handleId:S,resizeHandler:N});let R={cursor:B(h),touchAction:"none",userSelect:"none"};return o(i,{...f,children:e,className:t,onBlur:()=>P(!1),onFocus:()=>P(!0),onMouseDown:e=>{E(S,e.nativeEvent);let t=v.current;x(t);let{onDragging:n}=t;n&&n(!0)},onMouseUp:L,onTouchCancel:L,onTouchEnd:L,onTouchStart:e=>{E(S,e.nativeEvent);let t=v.current;x(t);let{onDragging:n}=t;n&&n(!0)},ref:p,role:"separator",style:{...R,...a},tabIndex:u,"data-panel-group-direction":h,"data-panel-group-id":j,"data-resize-handle":"","data-resize-handle-active":z?"pointer":D?"keyboard":void 0,"data-panel-resize-handle-enabled":!n,"data-panel-resize-handle-id":S})}Q.displayName="PanelGroup",ee.displayName="forwardRef(PanelGroup)",er.displayName="PanelResizeHandle"},25809:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},34380:function(e,t,n){"use strict";var r=n(62913),l=n(26785),o=Object.prototype.hasOwnProperty;t.Z=function(e,t,n){var a=e[t];o.call(e,t)&&(0,l.Z)(a,n)&&(void 0!==n||t in e)||(0,r.Z)(e,t,n)}},13433:function(e,t){"use strict";t.Z=function(e,t,n){var r=-1,l=e.length;t<0&&(t=-t>l?0:l+t),(n=n>l?l:n)<0&&(n+=l),l=t>n?0:n-t>>>0,t>>>=0;for(var o=Array(l);++r<l;)o[r]=e[r+t];return o}},56141:function(e,t,n){"use strict";var r=n(41926),l=n(85387),o=n(13879);t.Z=function(e){return(0,r.Z)(e,o.Z,l.Z)}},16345:function(e,t,n){"use strict";var r=(0,n(16917).Z)(Object.getPrototypeOf,Object);t.Z=r},85387:function(e,t,n){"use strict";var r=n(35563),l=n(16345),o=n(82787),a=n(26772),u=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)(0,r.Z)(t,(0,o.Z)(e)),e=(0,l.Z)(e);return t}:a.Z;t.Z=u},72999:function(e,t){"use strict";t.Z=function(e){for(var t=-1,n=null==e?0:e.length,r=0,l=[];++t<n;){var o=e[t];o&&(l[r++]=o)}return l}},83390:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r,l=n(18579),o=n(85222),a=n(35805),u=(r=n(16630).Z,function(e,t,n){var u=Object(e);if(!(0,o.Z)(e)){var i=(0,l.Z)(t,3);e=(0,a.Z)(e),t=function(e){return i(u[e],e,u)}}var c=r(e,t,n);return c>-1?u[i?e[c]:c]:void 0})},91067:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=Object.prototype.hasOwnProperty,l=function(e,t){return null!=e&&r.call(e,t)},o=n(12494),a=function(e,t){return null!=e&&(0,o.Z)(e,t,l)}},24144:function(e,t){"use strict";t.Z=function(e){return null==e}},13879:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(86070),l=n(64164),o=n(26343),a=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t},u=Object.prototype.hasOwnProperty,i=function(e){if(!(0,l.Z)(e))return a(e);var t=(0,o.Z)(e),n=[];for(var r in e)"constructor"==r&&(t||!u.call(e,r))||n.push(r);return n},c=n(85222),s=function(e){return(0,c.Z)(e)?(0,r.Z)(e,!0):i(e)}},95376:function(e,t,n){"use strict";n.d(t,{Z:function(){return eO}});var r,l,o,a,u,i=n(89688),c=n(43128),s=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e},d=n(34380),f=n(62913),p=function(e,t,n,r){var l=!n;n||(n={});for(var o=-1,a=t.length;++o<a;){var u=t[o],i=r?r(n[u],e[u],u,n,e):void 0;void 0===i&&(i=e[u]),l?(0,f.Z)(n,u,i):(0,d.Z)(n,u,i)}return n},v=n(35805),y=n(13879),g=n(90440),b="object"==typeof exports&&exports&&!exports.nodeType&&exports,m=b&&"object"==typeof module&&module&&!module.nodeType&&module,h=m&&m.exports===b?g.Z.Buffer:void 0,w=h?h.allocUnsafe:void 0,Z=function(e,t){if(t)return e.slice();var n=e.length,r=w?w(n):new e.constructor(n);return e.copy(r),r},j=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t},A=n(82787),x=n(85387),E=n(86124),C=n(56141),S=n(97113),z=Object.prototype.hasOwnProperty,O=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&z.call(e,"index")&&(n.index=e.index,n.input=e.input),n},I=n(5859),D=function(e){var t=new e.constructor(e.byteLength);return new I.Z(t).set(new I.Z(e)),t},P=function(e,t){var n=t?D(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)},M=/\w*$/,N=function(e){var t=new e.constructor(e.source,M.exec(e));return t.lastIndex=e.lastIndex,t},k=n(34463),L=k.Z?k.Z.prototype:void 0,R=L?L.valueOf:void 0,_=function(e,t){var n=t?D(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)},F=function(e,t,n){var r=e.constructor;switch(t){case"[object ArrayBuffer]":return D(e);case"[object Boolean]":case"[object Date]":return new r(+e);case"[object DataView]":return P(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return _(e,n);case"[object Map]":case"[object Set]":return new r;case"[object Number]":case"[object String]":return new r(e);case"[object RegExp]":return N(e);case"[object Symbol]":return R?Object(R.call(e)):{}}},U=n(64164),T=Object.create,$=function(){function e(){}return function(t){if(!(0,U.Z)(t))return{};if(T)return T(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),B=n(16345),H=n(26343),G=n(5541),W=n(55250),X=n(92403),J=n(82356),Y=n(79028),q=Y.Z&&Y.Z.isMap,K=q?(0,J.Z)(q):function(e){return(0,X.Z)(e)&&"[object Map]"==(0,S.Z)(e)},V=Y.Z&&Y.Z.isSet,Q=V?(0,J.Z)(V):function(e){return(0,X.Z)(e)&&"[object Set]"==(0,S.Z)(e)},ee="[object Arguments]",et="[object Function]",en="[object Object]",er={};er[ee]=er["[object Array]"]=er["[object ArrayBuffer]"]=er["[object DataView]"]=er["[object Boolean]"]=er["[object Date]"]=er["[object Float32Array]"]=er["[object Float64Array]"]=er["[object Int8Array]"]=er["[object Int16Array]"]=er["[object Int32Array]"]=er["[object Map]"]=er["[object Number]"]=er[en]=er["[object RegExp]"]=er["[object Set]"]=er["[object String]"]=er["[object Symbol]"]=er["[object Uint8Array]"]=er["[object Uint8ClampedArray]"]=er["[object Uint16Array]"]=er["[object Uint32Array]"]=!0,er["[object Error]"]=er[et]=er["[object WeakMap]"]=!1;var el=function e(t,n,r,l,o,a){var u,i=1&n,f=2&n,g=4&n;if(r&&(u=o?r(t,l,o,a):r(t)),void 0!==u)return u;if(!(0,U.Z)(t))return t;var b=(0,G.Z)(t);if(b){if(u=O(t),!i)return j(t,u)}else{var m,h,w,z,I=(0,S.Z)(t),D=I==et||"[object GeneratorFunction]"==I;if((0,W.Z)(t))return Z(t,i);if(I==en||I==ee||D&&!o){if(u=f||D?{}:"function"!=typeof t.constructor||(0,H.Z)(t)?{}:$((0,B.Z)(t)),!i)return f?(h=(m=u)&&p(t,(0,y.Z)(t),m),p(t,(0,x.Z)(t),h)):(z=(w=u)&&p(t,(0,v.Z)(t),w),p(t,(0,A.Z)(t),z))}else{if(!er[I])return o?t:{};u=F(t,I,i)}}a||(a=new c.Z);var P=a.get(t);if(P)return P;a.set(t,u),Q(t)?t.forEach(function(l){u.add(e(l,n,r,l,t,a))}):K(t)&&t.forEach(function(l,o){u.set(o,e(l,n,r,o,t,a))});var M=g?f?C.Z:E.Z:f?y.Z:v.Z,N=b?void 0:M(t);return s(N||t,function(l,o){N&&(l=t[o=l]),(0,d.Z)(u,o,e(l,n,r,o,t,a))}),u},eo=n(12930),ea=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0},eu=n(95157),ei=n(13433),ec=n(16422),es=function(e,t){var n,r;return t=(0,eo.Z)(t,e),n=e,null==(e=(r=t).length<2?n:(0,eu.Z)(n,(0,ei.Z)(r,0,-1)))||delete e[ec.Z(ea(t))]},ed=n(87916),ef=Object.prototype,ep=Function.prototype.toString,ev=ef.hasOwnProperty,ey=ep.call(Object),eg=function(e){if(!(0,X.Z)(e)||"[object Object]"!=(0,ed.Z)(e))return!1;var t=(0,B.Z)(e);if(null===t)return!0;var n=ev.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&ep.call(n)==ey},eb=function(e){return eg(e)?void 0:e},em=n(35563),eh=n(98220),ew=k.Z?k.Z.isConcatSpreadable:void 0,eZ=function(e){return(0,G.Z)(e)||(0,eh.Z)(e)||!!(ew&&e&&e[ew])},ej=function e(t,n,r,l,o){var a=-1,u=t.length;for(r||(r=eZ),o||(o=[]);++a<u;){var i=t[a];n>0&&r(i)?n>1?e(i,n-1,r,l,o):(0,em.Z)(o,i):l||(o[o.length]=i)}return o},eA=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)},ex=Math.max,eE=n(73043),eC=n(8293),eS=eE.Z?function(e,t){return(0,eE.Z)(e,"toString",{configurable:!0,enumerable:!1,value:function(){return t},writable:!0})}:eC.Z,ez=Date.now,eO=(r=0,l=0,function(){var e=ez(),t=16-(e-l);if(l=e,t>0){if(++r>=800)return arguments[0]}else r=0;return eS.apply(void 0,arguments)})((a=o=function(e,t){var n={};if(null==e)return n;var r=!1;t=(0,i.Z)(t,function(t){return t=(0,eo.Z)(t,e),r||(r=t.length>1),t}),p(e,(0,C.Z)(e),n),r&&(n=el(n,7,eb));for(var l=t.length;l--;)es(n,t[l]);return n},u=ex((u=void 0,a.length-1),0),function(){for(var e=arguments,t=-1,n=ex(e.length-u,0),r=Array(n);++t<n;)r[t]=e[u+t];t=-1;for(var l=Array(u+1);++t<u;)l[t]=e[t];return l[u]=(null==r?0:r.length)?ej(r,1):[],eA(a,this,l)}),o+"")},1589:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(30713),l=n(44796);let o=(0,l.xD)(r.ZP,e=>(t,n,r)=>(r.revalidateOnFocus=!1,r.revalidateIfStale=!1,r.revalidateOnReconnect=!1,e(t,n,r)))}}]);