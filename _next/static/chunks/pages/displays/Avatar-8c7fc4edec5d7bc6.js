(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[555],{2311:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/displays/Avatar",function(){return r(8570)}])},2379:function(t,e,r){"use strict";r.d(e,{G:function(){return d}});var l=r(4957),a=r(7296),n=r(9612),i=r(4180),s=r.n(i);let o=["typedef","property","description","defaultValue"],c=t=>{let{children:e,className:r=""}=t,a=(0,n.Ye)(()=>{let t=r.split(" ").map(t=>t.split("-")[0]);return["py-2","pl-6","text-xs","leading-6","font-mono","font-semibold"].filter(e=>!t.includes(e.split("-")[0])).concat(r)},[r]);return(0,l.tZ)("td",{class:a.join(" "),dangerouslySetInnerHTML:{__html:e}})},h=t=>{let{typedef:e,property:r,description:a,defaultValue:i}=(0,n.Ye)(()=>Object.assign(Object.fromEntries(o.map(t=>[t,"-"])),Object.fromEntries(Object.entries(t).filter(t=>{let[e]=t;return o.includes(e)}).map(t=>{let[e,r]=t;return[e,r.trim()]}))),[t]);return(0,l.BX)("tr",{className:"border-b border-gray-100 dark:border-neutral-700/50",children:[(0,l.tZ)(c,{className:"text-violet-500 pl-0",children:r}),(0,l.tZ)(c,{className:"text-slate-500",children:a}),(0,l.tZ)(c,{className:"text-violet-500",children:e}),(0,l.tZ)(c,{className:"text-slate-500",children:i})]})},d=t=>{let{list:e}=t;return(0,l.tZ)("div",{className:"-mx-6 mb-4 mt-6 overflow-x-auto overscroll-x-contain px-6 pb-4 "+s().container,children:(0,l.BX)("table",{className:"w-full border-collapse text-sm",children:[(0,l.tZ)("thead",{children:(0,l.BX)("tr",{className:"border-b py-4 text-left dark:border-neutral-700",children:[(0,l.tZ)("th",{className:"py-2 font-semibold",children:"属性"}),(0,l.tZ)("th",{className:"px-6 py-2 font-semibold",children:"说明"}),(0,l.tZ)("th",{className:"py-2 pl-6 font-semibold",children:"类型"}),(0,l.tZ)("th",{className:"py-2 pl-6 font-semibold",children:"默认值"})]})}),(0,l.tZ)("tbody",{className:"align-baseline text-gray-900 dark:text-gray-100",children:e.map((t,e)=>(0,a.az)(h,{...t,key:e}))})]})})}},8570:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return z}});var l,a,n=r(7434),i=r(8065),s=r(2435);r(4267),r(1090);var o=r(4957),c=r(9612),h=r(4321);let d=t=>{let{src:e,srcSet:r,crossOrigin:l,referrerpolicy:a}=t,n=!!e||!!r,i=(0,c.sO)(!1),[s,o]=(0,c.eJ)();return(0,c.d4)(()=>{if(!n)return;i.current=!0;let t=new Image;return Object.assign(t,{src:e,srcSet:r,crossOrigin:l,referrerpolicy:a}),t.onload=()=>i.current&&o("loaded"),t.onerror=()=>i.current&&o("error"),()=>{i.current=!1,o(void 0)}},[e,r,l,a,n]),[n,s]};(l=a||(a={})).Small="small",l.Normal="normal",l.Large="large";var p=r(7296);let v=(0,p.kr)(null),k=()=>(0,c.qp)(v);var y=r(4512);let[Z,u]=(0,h.XK)("avatar"),m={[a.Small]:24,[a.Normal]:40,[a.Large]:56},x=t=>{var e;let{style:r,color:l,children:a,size:n="normal",variant:i="circle",...s}=t,p=(0,c.sO)(null),[v,x]=d(s),g=k(),f=null!==(e=null==g?void 0:g.variant)&&void 0!==e?e:i,A=(0,c.Ye)(()=>{var t,e;let r=null!==(t=null==g?void 0:g.size)&&void 0!==t?t:n;return(0,y.hj)(r)?r:null!==(e=m[r])&&void 0!==e?e:m.normal},[n,null==g?void 0:g.size]);(0,c.d4)(()=>{if(p.current&&A){let t=p.current.clientWidth,e=A/(t+16);e<1&&(p.current.style.transform="scale(".concat(e,")"))}},[A,a]);let N=!v||"error"===x;return(0,o.BX)("div",{className:(0,h.zj)(Z,u(f,!N&&"with-image")),style:(0,h.Ec)(r,{"--wisteria-avatar-color":l,"--wisteria-avatar-size":(0,h.xj)(A),"--wisteria-avatar-offset":g&&(0,h.xj)(-A/4)}),children:[!!(v&&"loaded"===x)&&(0,o.tZ)("img",{...s,className:u("image")}),!!N&&(0,o.tZ)("span",{ref:p,className:u("with-child"),children:null!=a?a:s.alt})]})},[g]=(0,h.XK)("avatar-group"),f=t=>{let{total:e,size:r,variant:l,children:a,maxCount:n=5}=t,i=(0,p.bR)(a).filter(t=>(0,p.l$)(t)&&!(0,y.HD)(t.type)&&"WisAvatar"===t.type.displayName),s=null!=e?e:i.length,c=(0,y.hj)(n)&&s>n,h=i.slice(0,c?n-1:n);if(c){let t=s-n+1;h.push((0,o.BX)(x,{children:["+",t]}))}return(0,o.tZ)(v.Provider,{value:{size:r,variant:l},children:(0,o.tZ)("div",{className:g,children:h})})},A=Object.assign(x,{Group:f});A.displayName="WisAvatar",f.displayName="WisAvatarGroup";var N=r(9904),b=r(5872),X=r(2379);let B=t=>(0,o.tZ)(A,{...t,src:"https://images.pexels.com/photos/18077636/pexels-photo-18077636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"});function w(t){let e=Object.assign({h1:"h1",pre:"pre",code:"code",span:"span",h2:"h2",h3:"h3",p:"p",strong:"strong"},(0,s.ah)(),t.components);return A||_missingMdxReference("Avatar",!1),A.Group||_missingMdxReference("Avatar.Group",!0),(0,n.BX)(n.HY,{children:[(0,n.tZ)(e.h1,{children:"Avatar"}),"\n",(0,n.tZ)(e.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,n.tZ)(e.code,{"data-language":"tsx","data-theme":"default",children:(0,n.BX)(e.span,{className:"line",children:[(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { Avatar } "}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'wisteria-ui'"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]})})}),"\n",(0,n.tZ)(e.h2,{id:"用法",children:"用法"}),"\n",(0,n.tZ)(e.h3,{id:"形状",children:"形状"}),"\n",(0,n.tZ)(e.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,n.BX)(e.code,{"data-language":"tsx","data-theme":"default",children:[(0,n.BX)(e.span,{className:"line",children:[(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"square"'}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  />"})]}),"\n",(0,n.BX)(e.span,{className:"line",children:[(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"rounded"'}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,n.BX)(e.span,{className:"line",children:[(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"circle"'}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  />"})]})]})}),"\n",(0,n.BX)(b.S,{label:"Variant",children:[(0,n.tZ)(B,{variant:"square",size:"large"}),(0,n.tZ)(B,{variant:"rounded",size:"large"}),(0,n.tZ)(B,{variant:"circle",size:"large"})]}),"\n",(0,n.tZ)(e.h3,{id:"尺寸",children:"尺寸"}),"\n",(0,n.tZ)(e.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,n.BX)(e.code,{"data-language":"tsx","data-theme":"default",children:[(0,n.BX)(e.span,{className:"line",children:[(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-function)"},children:"size"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"small"'}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  />"})]}),"\n",(0,n.BX)(e.span,{className:"line",children:[(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-function)"},children:"size"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"normal"'}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,n.BX)(e.span,{className:"line",children:[(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-function)"},children:"size"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"large"'}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  />"})]}),"\n",(0,n.BX)(e.span,{className:"line",children:[(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-function)"},children:"size"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"72"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}  />"})]})]})}),"\n",(0,n.BX)(b.S,{label:"Size",children:[(0,n.tZ)(B,{size:"small"}),(0,n.tZ)(B,{size:"normal"}),(0,n.tZ)(B,{size:"large"}),(0,n.tZ)(B,{size:72})]}),"\n",(0,n.tZ)(e.h3,{id:"文字",children:"文字"}),"\n",(0,n.tZ)(e.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,n.BX)(e.code,{"data-language":"tsx","data-theme":"default",children:[(0,n.BX)(e.span,{className:"line",children:[(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">L</"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(e.span,{className:"line",children:[(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-function)"},children:"size"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"large"'}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">LA</"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,n.BX)(b.S,{label:"Letter",children:[(0,n.tZ)(A,{children:"L"}),(0,n.tZ)(A,{size:"large",children:"LA"})]}),"\n",(0,n.tZ)(e.h3,{id:"avatargroup",children:"AvatarGroup"}),"\n",(0,n.tZ)(e.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,n.BX)(e.code,{"data-language":"tsx","data-theme":"default",children:[(0,n.BX)(e.span,{className:"line",children:[(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar.Group"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-function)"},children:"maxCount"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}>"})]}),"\n",(0,n.BX)(e.span,{className:"line",children:[(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">A</"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(e.span,{className:"line",children:[(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">B</"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(e.span,{className:"line",children:[(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">C</"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(e.span,{className:"line",children:[(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">D</"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(e.span,{className:"line",children:[(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">E</"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(e.span,{className:"line",children:[(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar.Group"}),(0,n.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,n.tZ)(b.S,{label:"AvatarGroup",children:(0,n.BX)(A.Group,{maxCount:3,children:[(0,n.tZ)(A,{children:"A"}),(0,n.tZ)(A,{children:"B"}),(0,n.tZ)(A,{children:"C"}),(0,n.tZ)(A,{children:"D"}),(0,n.tZ)(A,{children:"E"})]})}),"\n",(0,n.tZ)(e.h2,{id:"api",children:"API"}),"\n",(0,n.tZ)(e.h3,{id:"avatar",children:"Avatar"}),"\n",(0,n.tZ)(N.UW,{type:"info",children:(0,n.BX)(e.p,{children:[(0,n.tZ)(e.strong,{children:"Avatar"})," 组件支持原生 ",(0,n.tZ)(e.strong,{children:"HTMLImageElement"})," 属性。"]})}),"\n",(0,n.tZ)(N.UW,{type:"info",children:(0,n.BX)(e.p,{children:["如果加载图片链接失败，",(0,n.tZ)(e.strong,{children:"Avatar"})," 组件将会渲染 ",(0,n.tZ)(e.strong,{children:"children"})," 或 ",(0,n.tZ)(e.strong,{children:"alt"}),"\n属性内容。"]})}),"\n",(0,n.tZ)(X.G,{list:[{property:"variant",typedef:"square | rounded | circle",description:"设置形状",defaultValue:"circle"},{property:"size",typedef:"small | normal | large | number",description:"尺寸大小",defaultValue:"normal"},{property:"color",typedef:"string",description:"设置背景色"},{property:"src",typedef:"string",description:"图片链接"}]}),"\n",(0,n.tZ)(e.h3,{id:"avatargroup-1",children:"Avatar.Group"}),"\n",(0,n.tZ)(X.G,{list:[{property:"variant",typedef:"square | rounded | circle",description:"设置形状",defaultValue:"circle"},{property:"size",typedef:"small | normal | large | number",description:"尺寸大小",defaultValue:"normal"},{property:"total",typedef:"number",description:"设置头像总量，默认获取 Avatar 组件数量"},{property:"maxCount",typedef:"number",description:"显示最大数量"}]})]})}var z=(0,i.j)({MDXContent:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),t.components);return e?(0,n.tZ)(e,{...t,children:(0,n.tZ)(w,{...t})}):w(t)},pageOpts:{filePath:"pages/displays/Avatar.mdx",route:"/displays/Avatar",headings:[{depth:1,value:"Avatar",id:"avatar"},{depth:2,value:"用法",id:"用法"},{depth:3,value:"形状",id:"形状"},{depth:3,value:"尺寸",id:"尺寸"},{depth:3,value:"文字",id:"文字"},{depth:3,value:"AvatarGroup",id:"avatargroup"},{depth:2,value:"API",id:"api"},{depth:3,value:"Avatar",id:"avatar-1"},{depth:3,value:"Avatar.Group",id:"avatargroup-1"}],title:"Avatar"},pageNextRoute:"/displays/Avatar"})},1090:function(){},4180:function(t){t.exports={container:"styles_container__unOV2"}}},function(t){t.O(0,[65,888,179],function(){return t(t.s=2311)}),_N_E=t.O()}]);