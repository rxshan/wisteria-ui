(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[884],{3918:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/displays/Badge",function(){return r(4203)}])},2379:function(e,t,r){"use strict";r.d(t,{G:function(){return h}});var n=r(4957),l=r(7296),i=r(9612),o=r(4180),s=r.n(o);let a=["typedef","property","description","defaultValue"],c=e=>{let{children:t,className:r=""}=e,l=(0,i.Ye)(()=>{let e=r.split(" ").map(e=>e.split("-")[0]);return["py-2","pl-6","text-xs","leading-6","font-mono","font-semibold"].filter(t=>!e.includes(t.split("-")[0])).concat(r)},[r]);return(0,n.tZ)("td",{class:l.join(" "),dangerouslySetInnerHTML:{__html:t}})},d=e=>{let{typedef:t,property:r,description:l,defaultValue:o}=(0,i.Ye)(()=>Object.assign(Object.fromEntries(a.map(e=>[e,"-"])),Object.fromEntries(Object.entries(e).filter(e=>{let[t]=e;return a.includes(t)}).map(e=>{let[t,r]=e;return[t,r.trim()]}))),[e]);return(0,n.BX)("tr",{className:"border-b border-gray-100 dark:border-neutral-700/50",children:[(0,n.tZ)(c,{className:"text-violet-500 pl-0",children:r}),(0,n.tZ)(c,{className:"text-slate-500",children:l}),(0,n.tZ)(c,{className:"text-violet-500",children:t}),(0,n.tZ)(c,{className:"text-slate-500",children:o})]})},h=e=>{let{list:t}=e;return(0,n.tZ)("div",{className:"-mx-6 mb-4 mt-6 overflow-x-auto overscroll-x-contain px-6 pb-4 "+s().container,children:(0,n.BX)("table",{className:"w-full border-collapse text-sm",children:[(0,n.tZ)("thead",{children:(0,n.BX)("tr",{className:"border-b py-4 text-left dark:border-neutral-700",children:[(0,n.tZ)("th",{className:"py-2 font-semibold",children:"属性"}),(0,n.tZ)("th",{className:"px-6 py-2 font-semibold",children:"说明"}),(0,n.tZ)("th",{className:"py-2 pl-6 font-semibold",children:"类型"}),(0,n.tZ)("th",{className:"py-2 pl-6 font-semibold",children:"默认值"})]})}),(0,n.tZ)("tbody",{className:"align-baseline text-gray-900 dark:text-gray-100",children:t.map((e,t)=>(0,l.az)(d,{...e,key:t}))})]})})}},3375:function(e,t,r){"use strict";r.d(t,{r:function(){return b}}),r(6590);var n,l,i,o,s=r(4957),a=r(9612),c=r(7296);(n=i||(i={})).APPEAR="appear",n.APPEAR_ACTIVE="appearActive",n.APPEAR_DONE="appearDone",n.ENTER="enter",n.ENTER_ACTIVE="enterActive",n.ENTER_DONE="enterDone",n.EXIT="exit",n.EXIT_ACTIVE="exitActive",n.EXIT_DONE="exitDone",(l=o||(o={})).ENTER="onEnter",l.ENTERING="onEntering",l.ENTERED="onEntered",l.EXIT="onExit",l.EXITING="onExiting",l.EXITED="onExited";let d={[i.APPEAR]:[o.ENTER,i.APPEAR_ACTIVE],[i.APPEAR_ACTIVE]:[o.ENTERING,i.APPEAR_DONE,!0],[i.APPEAR_DONE]:[o.ENTERED],[i.ENTER]:[o.ENTER,i.ENTER_ACTIVE],[i.ENTER_ACTIVE]:[o.ENTERING,i.ENTER_DONE,!0],[i.ENTER_DONE]:[o.ENTERED],[i.EXIT]:[o.EXIT,i.EXIT_ACTIVE],[i.EXIT_ACTIVE]:[o.EXITING,i.EXIT_DONE,!0],[i.EXIT_DONE]:[o.EXITED]};var h=e=>{var t;let{children:r,in:n=!1,appear:l=!1,enter:o=!0,exit:s=!0,duration:h=500,alwaysMounted:p=!1,addEndListener:y}=e,u=(0,a.sO)(),k=(0,a.sO)(),v=!1,[Z,x]=(0,a.eJ)(()=>(v=!0,n?l?i.APPEAR:i.APPEAR_DONE:i.EXIT_DONE));(0,a.d4)(()=>{var t;let{setTimeout:r,clearTimeout:n}=window,[l,i,o]=d[Z];return null==(t=e[l])||t.call(e,u.current),i&&(o?y?y(u.current,()=>x(i)):k.current=r(x,h,i):x(i)),()=>{n(k.current)}},[Z,h]),(0,a.bt)(()=>{v||x(n?o?i.ENTER:i.ENTER_DONE:s?i.EXIT:i.EXIT_DONE)},[n]);let f=(0,a.Ye)(()=>{let e={};return Object.values(i).forEach(t=>{e[t]=Z===t}),e},[Z]);if(!p&&Z===i.EXIT_DONE)return null;let m=r(f,Z);return(0,c.Tm)(m,{ref:(t=[u,m.ref],e=>{t.forEach(t=>{"function"==typeof t?t(e):null!=t&&(t.current=e)})})})};function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let y=(e,t,r)=>{let{[t]:n=r}=e.props;return n};var u=e=>{let{children:t,appear:r=!1,enter:n=!0,exit:l=!0,duration:i=500}=e,o=Array.isArray(t)?t:[t],s=(0,a.sO)(!0),d=(0,a.sO)([]),h=[],u=[],k=(e,t)=>{if(!e)return;let o=(0,c.Tm)(e,p({enter:n,exit:l,duration:i},e.props,{in:!t,appear:s.current?y(e,"appear",r):y(e,"enter",n)}));h.push({visibleChild:o,removeTimeout:t}),u.push(o)},v=0;d.current.forEach(({visibleChild:e,removeTimeout:t})=>{let{key:r}=e,n=o.findIndex(e=>e.key===r);if(n<0)t?k(e,t):l&&!1!==e.props.exit&&k(e,setTimeout(()=>{let{current:t}=d,r=t.findIndex(({visibleChild:t})=>t.key===e.key);r>-1&&t.splice(r,1)},y(e,"duration",i)));else{t&&clearTimeout(t);for(let e=v;e<=n;e++)k(o[e],null)}v=Math.max(v,n+1)});for(let e=v;e<o.length;e++)k(o[e],null);return d.current=h,s.current=!1,u};i.APPEAR,i.APPEAR_ACTIVE,i.APPEAR_DONE,i.ENTER,i.ENTER_ACTIVE,i.ENTER_DONE,i.EXIT,i.EXIT_ACTIVE,i.EXIT_DONE;var k=r(4321),v=r(2254);let Z=e=>{let{children:t,appear:r=!0,className:n="animate",destoryOnClosed:l=!0,...i}=e;return(0,s.tZ)(h,{...i,appear:r,alwaysMounted:!l,children:(e,r)=>{let l=r.replace(/([A-Z])/g,e=>"-".concat(e.toLowerCase()));return(0,v.Wl)(t)?t({state:e,phase:r,phaseClass:l}):(0,c.Tm)(t,{...t.props,className:(0,k.zj)(n,"".concat(n,"-").concat(l),t.props.className)})}})},[x,f]=(0,k.XK)("ripple"),[m]=(0,k.XK)("collapse"),E=e=>{let{children:t,duration:r=200,...n}=e,l={"--wisteria-collapse-duration":(0,k.xj)(r,"ms")};return(0,s.tZ)(Z,{...n,children:()=>(0,s.tZ)("div",{className:m,style:l,children:t})})},g=e=>{let[t,r]=(0,k.XK)(e);return n=>{let{children:l,duration:i=200,...o}=n,a={["--wisteria-".concat(e,"-duration")]:(0,k.xj)(i,"ms")};return(0,s.tZ)(Z,{...o,duration:i,children:e=>{let{phaseClass:n}=e;return(0,c.l$)(l)?(0,c.Tm)(l,{...l.props,style:(0,k.Ec)(l.props.style,a),className:(0,k.zj)(t,r(n),l.props.className)}):(0,c.az)("span",{style:a,className:(0,k.zj)(t,r(n))},l)}})}},N=g("zoom"),w=g("fade"),b=Object.assign(Z,{Fade:w,Zoom:N,Ripple:e=>{let{color:t,center:r,disabled:n}=e,l=(0,a.sO)(null),i=(0,a.sO)(0),[o,c]=(0,a.eJ)([]),d=e=>{var t;let n=null===(t=l.current)||void 0===t?void 0:t.getBoundingClientRect();if(r){let e=Math.ceil(Math.sqrt((n.width/2)**2+(n.height/2)**2));return{radius:e,coords:{x:Math.round(n.width/2),y:Math.round(n.height/2)}}}let{clientX:i,clientY:o}=(0,v.z6)(e)?e.touches[0]:e,s={x:Math.round(i-n.left),y:Math.round(o-n.top)},a=Math.max(Math.abs(n.width-s.x),s.x),c=Math.max(Math.abs(n.height-s.y),s.y);return{coords:s,radius:Math.ceil(Math.sqrt(a**2+c**2))}},h=e=>{let t=d(e);c(e=>[...e,[i.current,t]]),i.current+=1},p=()=>{c(e=>e.slice(1))};return(0,s.tZ)("span",{ref:l,className:x,style:(0,k.Ec)({color:t,pointerEvents:n&&"none"}),onMouseDown:h,onTouchStart:h,onMouseUp:p,onTouchEnd:p,children:(0,s.tZ)(u,{exit:!0,appear:!0,duration:300,children:o.map(e=>{let[t,{radius:r,coords:n}]=e,l=(0,k.xj)(n.x-r),i=(0,k.xj)(n.y-r),o=(0,k.xj)(2*r+1);return(0,s.tZ)(Z,{className:f("effect"),children:(0,s.tZ)("span",{style:(0,k.Ec)({top:i,left:l,width:o,height:o,transitionDuration:(0,k.xj)(300,"ms")})})},t)})})})},Collapse:E});w.displayName="WisFade",N.displayName="WisZoom",b.displayName="WisTransition",E.displayName="WisCollapse"},4203:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n,l,i=r(7434),o=r(8065),s=r(2435);r(4267),r(5410);var a=r(4957),c=r(4684);(n=l||(l={})).Dot="dot",n.Standard="standard";var d=r(4321),h=r(2254),p=r(3375);let[y,u]=(0,d.XK)("badge"),k=(0,c.forwardRef)((e,t)=>{let{count:r,style:n,color:i,invisible:o,showZero:s,children:k,className:v,max:Z=999,offset:x,variant:f=l.Standard}=e,m=l.Standard===f,E=!(o||m&&!s&&!r),g=(0,c.useMemo)(()=>(0,h.Rw)(r)||!m?null:r>=Z?"".concat(Z,"+"):r,[r,Z,m]),[N,w]=(0,c.useMemo)(()=>(0,h.kJ)(x)?x.map(e=>e.toString().startsWith("-")?(0,d.xj)(e).replace("-",""):"".concat("-").concat((0,d.xj)(e))):[],[x]);return(0,a.BX)("span",{ref:t,className:(0,d.zj)(y,v),style:(0,d.Ec)(n,{"--wisteria-badge-color":i,"--wisteria-badge-offset-x":N,"--wisteria-badge-offset-y":w}),children:[k,(0,a.tZ)("span",{className:u("position"),children:(0,a.tZ)(p.r.Zoom,{in:E,destoryOnClosed:!1,children:(0,a.tZ)("span",{className:u(f),children:g})})})]})});var v=r(9904),Z=r(9612);let x=()=>{let[e,t]=(0,Z.eJ)(!0);return(0,a.BX)("div",{class:"flex items-center gap-16",children:[(0,a.BX)("div",{class:"flex gap-8",children:[(0,a.tZ)(k,{variant:"dot",invisible:!e,children:(0,a.tZ)("div",{class:"w-16 h-16 flex items-center justify-center bg-violet-400 text-white rounded-md shadow-sm"})}),(0,a.tZ)(k,{count:99,max:99,invisible:!e,children:(0,a.tZ)("div",{class:"w-16 h-16 flex items-center justify-center bg-violet-400 text-white rounded-md shadow-sm"})})]}),(0,a.tZ)("button",{class:"bg-slate-300 h-12 w-32 rounded",onClick:()=>{t(e=>!e)},children:e?"隐藏":"显示"})]})};var f=r(5872),m=r(2379);function E(e){let t=Object.assign({h1:"h1",pre:"pre",code:"code",span:"span",h2:"h2",h3:"h3",strong:"strong",p:"p"},(0,s.ah)(),e.components);return(0,i.BX)(i.HY,{children:[(0,i.tZ)(t.h1,{children:"Badge"}),"\n",(0,i.tZ)(t.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,i.tZ)(t.code,{"data-language":"tsx","data-theme":"default",children:(0,i.BX)(t.span,{className:"line",children:[(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" { Badge } "}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'wisteria-ui'"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:";"})]})})}),"\n",(0,i.tZ)(t.h2,{id:"用法",children:"用法"}),"\n",(0,i.tZ)(t.h3,{id:"变体类型",children:"变体类型"}),"\n",(0,i.tZ)(t.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,i.BX)(t.code,{"data-language":"tsx","data-theme":"default",children:[(0,i.BX)(t.span,{className:"line",children:[(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Badge"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"dot"'}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,i.BX)(t.span,{className:"line",children:[(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Badge"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"standard"'}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]})]})}),"\n",(0,i.tZ)(f.S,{label:"Variant",children:(0,i.BX)("div",{class:"flex gap-8",children:[(0,i.tZ)(k,{variant:"dot",children:(0,i.tZ)("div",{class:"w-16 h-16 flex items-center justify-center bg-violet-400 text-white rounded-md shadow-sm"})}),(0,i.tZ)(k,{count:9999,max:99,children:(0,i.tZ)("div",{class:"w-16 h-16 flex items-center justify-center bg-violet-400 text-white rounded-md shadow-sm"})})]})}),"\n",(0,i.tZ)(t.h3,{id:"是否显示",children:"是否显示"}),"\n",(0,i.tZ)(t.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,i.tZ)(t.code,{"data-language":"tsx","data-theme":"default",children:(0,i.BX)(t.span,{className:"line",children:[(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Badge"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"invisible"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"} />"})]})})}),"\n",(0,i.BX)(v.UW,{type:"warning",children:["当 ",(0,i.tZ)(t.strong,{children:"invisible"})," 为真时，将会隐藏组件。"]}),"\n",(0,i.tZ)(f.S,{label:"Invisible",children:(0,i.tZ)(x,{})}),"\n",(0,i.tZ)(t.h3,{id:"自定义背景色",children:"自定义背景色"}),"\n",(0,i.tZ)(t.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,i.BX)(t.code,{"data-language":"tsx","data-theme":"default",children:[(0,i.BX)(t.span,{className:"line",children:[(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Badge"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"color"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"orange"'}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,i.BX)(t.span,{className:"line",children:[(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Badge"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"color"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"green"'}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,i.BX)(t.span,{className:"line",children:[(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Badge"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"color"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"violet"'}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]})]})}),"\n",(0,i.tZ)(f.S,{label:"Color",children:(0,i.BX)("div",{class:"flex gap-12",children:[(0,i.tZ)(k,{color:"orange",count:9,max:9,children:(0,i.tZ)("div",{class:"w-16 h-16 flex items-center justify-center bg-violet-400 text-white rounded-md shadow-sm"})}),(0,i.tZ)(k,{color:"green",count:99,max:99,children:(0,i.tZ)("div",{class:"w-16 h-16 flex items-center justify-center bg-violet-400 text-white rounded-md shadow-sm"})}),(0,i.tZ)(k,{color:"violet",count:999,max:999,children:(0,i.tZ)("div",{class:"w-16 h-16 flex items-center justify-center bg-violet-400 text-white rounded-md shadow-sm"})})]})}),"\n",(0,i.tZ)(t.h3,{id:"显示数值",children:"显示数值"}),"\n",(0,i.tZ)(t.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,i.BX)(t.code,{"data-language":"tsx","data-theme":"default",children:[(0,i.BX)(t.span,{className:"line",children:[(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Badge"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"count"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"} />"})]}),"\n",(0,i.BX)(t.span,{className:"line",children:[(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Badge"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"showZero"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"count"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"} />"})]}),"\n",(0,i.BX)(t.span,{className:"line",children:[(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Badge"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"count"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"999"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"max"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"999"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"} />"})]})]})}),"\n",(0,i.tZ)(v.UW,{type:"info",children:(0,i.BX)(t.p,{children:["当设置 ",(0,i.tZ)(t.strong,{children:"showZero"})," 时，组件将会显示出数字 ",(0,i.tZ)(t.code,{children:"0"}),"，否则将会隐藏。"]})}),"\n",(0,i.tZ)(f.S,{children:(0,i.BX)("div",{class:"flex gap-12",children:[(0,i.tZ)(k,{count:0,children:(0,i.tZ)("div",{class:"w-16 h-16 flex items-center justify-center bg-violet-400 text-white rounded-md shadow-sm"})}),(0,i.tZ)(k,{showZero:!0,count:0,children:(0,i.tZ)("div",{class:"w-16 h-16 flex items-center justify-center bg-violet-400 text-white rounded-md shadow-sm"})}),(0,i.tZ)(k,{count:999,max:999,children:(0,i.tZ)("div",{class:"w-16 h-16 flex items-center justify-center bg-violet-400 text-white rounded-md shadow-sm"})})]})}),"\n",(0,i.tZ)(t.h3,{id:"偏移位置",children:"偏移位置"}),"\n",(0,i.tZ)(t.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,i.BX)(t.code,{"data-language":"tsx","data-theme":"default",children:[(0,i.BX)(t.span,{className:"line",children:[(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Badge"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"dot"'}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"offset"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{["}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"-100%"'}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"]} />"})]}),"\n",(0,i.BX)(t.span,{className:"line",children:[(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Badge"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"count"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"999"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"offset"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{["}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"-100%"'}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"]} />"})]}),"\n",(0,i.BX)(t.span,{className:"line",children:[(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Badge"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"count"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"999"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"offset"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{["}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"120"}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"0"'}),(0,i.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"]} />"})]})]})}),"\n",(0,i.BX)(v.UW,{type:"info",children:[(0,i.tZ)(t.strong,{children:"offset"})," 偏移位置基于右上角坐标。"]}),"\n",(0,i.tZ)(f.S,{label:"Offset",children:(0,i.BX)("div",{class:"flex gap-12",children:[(0,i.tZ)(k,{variant:"dot",offset:["-100%",0],children:(0,i.tZ)("div",{class:"w-16 h-16 flex items-center justify-center bg-violet-400 text-white rounded-md shadow-sm"})}),(0,i.tZ)(k,{count:999,offset:[0,"-100%"],children:(0,i.tZ)("div",{class:"w-16 h-16 flex items-center justify-center bg-violet-400 text-white rounded-md shadow-sm"})}),(0,i.tZ)(k,{count:999,offset:[20,"0"],children:(0,i.tZ)("div",{class:"w-16 h-16 flex items-center justify-center bg-violet-400 text-white rounded-md shadow-sm"})})]})}),"\n",(0,i.tZ)(t.h2,{id:"api",children:"API"}),"\n",(0,i.tZ)(m.G,{list:[{property:"invisible",description:"是否隐藏",typedef:"boolean"},{property:"variant",description:"变体类型",typedef:"dot | standard",defaultValue:"standard"},{property:"color",description:"背景色",typedef:"string"},{property:"max",description:"数字最多值，超过将采用  代替",typedef:"number",defaultValue:"999"},{property:"count",description:"显示的数字",typedef:"number"},{property:"showZero",description:"当 'count' 为 0 时，是否展示",typedef:"boolean"},{property:"offset",description:" 设置偏移位置，[x, y]",typedef:"[number|string, number|string]"},{property:"className",description:"自定义样式类名",typedef:"string"},{property:"style",description:"自定义样式对象",typedef:"JSX.CSSProperties"},{property:"children",typedef:"ComponentChild"}]})]})}var g=(0,o.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,i.tZ)(t,{...e,children:(0,i.tZ)(E,{...e})}):E(e)},pageOpts:{filePath:"pages/displays/Badge.mdx",route:"/displays/Badge",headings:[{depth:1,value:"Badge",id:"badge"},{depth:2,value:"用法",id:"用法"},{depth:3,value:"变体类型",id:"变体类型"},{depth:3,value:"是否显示",id:"是否显示"},{depth:3,value:"自定义背景色",id:"自定义背景色"},{depth:3,value:"显示数值",id:"显示数值"},{depth:3,value:"偏移位置",id:"偏移位置"},{depth:2,value:"API",id:"api"}],title:"Badge"},pageNextRoute:"/displays/Badge"})},6590:function(){},5410:function(){},4180:function(e){e.exports={container:"styles_container__unOV2"}}},function(e){e.O(0,[65,888,179],function(){return e(e.s=3918)}),_N_E=e.O()}]);