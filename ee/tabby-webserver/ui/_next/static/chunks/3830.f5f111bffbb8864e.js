(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3830],{53830:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return F}});var n=r(57437),o=r(2265),l=r(48262),a=r(6435),s=r(39311),i=r(30684),u=r(67060),c=r(88826),h=r(61230),d=r(72999),g=r(17052);let f=[(0,l.Eu)(),(0,l.AE)(),(0,g.sW)(),u.yy.allowMultipleSelections.of(!0),(0,i.nF)(i.R_,{fallback:!0}),(0,l.Zs)(),(0,i.mi)({markerDOM(e){let t=document.createElement("div");return t.style.cursor="pointer",e?t.innerHTML='<svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg>':t.innerHTML='<svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"></path></svg>',t}})];r(73662);let p=u.q6.define(),m=e=>{let{value:t,theme:r,language:a,readonly:s=!0,extensions:g,height:m=null,width:v=null}=e,b=o.useRef(null),k=o.useRef(null),y=l.tk.theme({"&":{height:m,width:v,outline:"none !important",background:"hsl(var(--background))"},"& .cm-scroller":{height:"100% !important"},"& .cm-gutters":{background:"hsl(var(--background))"}}),x=[y,f,u.yy.readOnly.of(s)],w=()=>{let e=(0,d.Z)([...x,(0,h.vf)(function(e,t){switch(e){case"javascript-typescript":return"tsx";case"shellscript":return"shell";default:return e}}(a))]);return"dark"===r?(e.push(c.pD),e.push((0,i.nF)(c.VE))):e.push((0,i.nF)(i.R_)),Array.isArray(g)&&(e=e.concat(g)),e};return o.useEffect(()=>((()=>{if(b.current){let e=u.yy.create({doc:t,extensions:x});k.current=new l.tk({state:e,parent:b.current})}})(),()=>{k.current&&k.current.destroy()}),[]),o.useEffect(()=>{k.current&&k.current.dispatch({effects:u.Py.reconfigure.of(w())})},[m,v,r,a,g]),o.useEffect(()=>{(()=>{if(void 0===t||!k.current)return;let e=k.current?k.current.state.doc.toString():"";k.current&&t!==e&&k.current.dispatch({changes:{from:0,to:e.length,insert:t||""},annotations:[p.of(!0)]})})()},[t]),(0,n.jsx)("div",{className:"codemirror-editor h-full",ref:b})};function v(e,t){let r=e.doc,{span:n,utf16_column_range:o}=t;try{let e=r.line(n.start.row+1),t=e.from+o.start,l=e.from+o.end;return{start:t,end:l}}catch(e){return null}}let b=l.p.mark({class:"cm-tag-mark"}),k=l.tk.baseTheme({".cm-tag-mark":{border:"1px solid hsla(var(--tag-blue-border))",padding:"0px 4px",borderRadius:"4px",backgroundColor:"hsla(var(--tag-blue-bg))",color:"hsla(var(--tag-blue-text)) !important"},".cm-tag-mark > span":{color:"hsla(var(--tag-blue-text)) !important"}});function y(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=e.state.doc,n=r.length;if(!n)return l.p.none;let o=[];for(let r of t){let t=v(e.state,r);try{t&&t.start<=n&&t.end<=n&&o.push(b.range(t.start,t.end))}catch(e){}}return o.length?l.p.set(o):l.p.none}let x=e=>{let t=l.lg.fromClass(class{update(t){(t.docChanged||t.viewportChanged)&&(this.marks=y(t.view,e))}constructor(t){this.marks=y(t,e)}},{decorations:e=>e.marks});return[t,k]},w=l.p.mark({class:"cm-range-highlight"}),C=l.tk.baseTheme({".cm-range-highlight":{backgroundColor:"hsl(var(--selection))"}});function T(e,t){let r;let n=e.selection.ranges;e:for(let o of n)for(let n of t){let t=v(e,n);if(!t)continue;let l=t.start-n.name_range.start;if(o.from>=t.start&&o.to<=t.end){r={from:n.range.start+l,to:n.range.end+l};break e}}return r?l.p.set([w.range(r.from,r.to)]):l.p.none}let E=u.Py.define(),_=e=>{let t=l.lg.fromClass(class{update(t){if(t.selectionSet)this.triggerType="cursor",this.highlight=T(t.view.state,e);else if("cursor"!==this.triggerType)for(let e of t.transactions)for(let t of e.effects)t.is(E)&&t.value&&(this.highlight=t.value,this.triggerType="hover")}handleMouseListener(t){if(-1!==this.timeout&&clearTimeout(this.timeout),!this.highlight.size){let r=setTimeout(()=>{let r=this.view.posAtCoords({x:t.clientX,y:t.clientY});if(null!==r){let t=function(e,t){let r;for(let n of t)if(e>=n.name_range.start&&e<=n.name_range.end){r={from:n.range.start,to:n.range.end};break}return r?l.p.set([w.range(r.from,r.to)]):l.p.none}(r,e);if(t.size)this.triggerType="hover";else if("cursor"===this.triggerType)return;this.view.dispatch({effects:E.of(t)})}},100);this.timeout=r}}destroy(){}constructor(t){this.view=t,this.highlight=T(t.state,e),this.timeout=-1,this.triggerType="hover"}},{decorations:e=>e.highlight});return[t,C]},M=l.tk.baseTheme({".cm-tooltip":{border:"none !important"},".cm-tooltip-cursor":{backgroundColor:"hsl(var(--popover))",color:"hsl(var(--popover-foreground))",border:"none !important",padding:"2px 7px",borderRadius:"4px"}}),L=e=>[(0,l.bF)((t,r,n)=>{for(let n of e){let e=v(t.state,n);if(e&&r>=e.start&&r<=e.end)return{pos:r,above:!0,create(e){let t=document.createElement("div");return t.className="cm-tooltip-cursor",t.textContent="".concat(n.syntax_type_name),{dom:t,offset:{x:-20,y:4}}}}}return null}),M];var R=r(56922),F=e=>{var t,r,i,u;let{className:c}=e,{activePath:h,codeMap:d,fileMetaMap:g}=(0,o.useContext)(R.SourceCodeBrowserContext),{theme:f}=(0,a.F)(),p=h&&null!==(i=null==d?void 0:d[h])&&void 0!==i?i:"",v=h&&null!==(u=null==g?void 0:null===(t=g[h])||void 0===t?void 0:t.language)&&void 0!==u?u:"",b=h?null==g?void 0:null===(r=g[h])||void 0===r?void 0:r.tags:void 0,k=o.useMemo(()=>{let e=[l.tk.baseTheme({".cm-scroller":{fontSize:"14px"},".cm-gutterElement":{padding:"0px 16px"},".cm-gutters":{paddingLeft:"32px",backgroundColor:"transparent",borderRight:"none"}})];return p&&b&&e.push(x(b),L(b),_(b)),e},[p,b]);return(0,n.jsx)("div",{className:(0,s.cn)("source-code-browser",c),children:(0,n.jsx)(m,{value:p,theme:f,language:v,readonly:!0,extensions:k},h)})}},73662:function(){}}]);