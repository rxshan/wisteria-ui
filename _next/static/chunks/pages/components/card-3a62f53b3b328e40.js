(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{8537:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/card",function(){return r(7666)}])},2573:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var n=r(4957),i=r(4684),s=r(45),l=r(1719);let[o,a]=(0,l.XK)("button"),c=(0,i.forwardRef)((e,t)=>{let{block:r,color:i,corner:c="rounded",variant:d="elevated",...h}=e;return(0,n.BX)("button",{...h,ref:t,className:(0,l.zj)(o,h.className,a("corner-".concat(c),d)),style:(0,l.Ec)(h.style,{width:r&&"100%","--button-color":i}),children:[(0,n.tZ)("span",{className:a("content"),children:h.children}),(0,n.tZ)("span",{className:a("state-layer")}),(0,n.tZ)(s.u.Ripple,{})]})})},9286:function(e,t,r){"use strict";r.d(t,{Zb:function(){return m}}),r(6255);var n=r(4957),i=r(3445),s=r(4684),l=r(1719);let[o]=(0,l.XK)("card"),a=(0,s.forwardRef)((e,t)=>{let{variant:r,children:s,className:a,...c}=e;return(0,n.tZ)(i.T,{...c,ref:t,variant:r,className:(0,l.zj)(a,o),children:s})}),[c]=(0,l.XK)("card-cover"),d=e=>{let{className:t,...r}=e;return(0,n.tZ)("img",{...r,loading:"lazy",className:(0,l.zj)(c,t)})};var h=r(2029);let[,p]=(0,l.XK)("card"),k=e=>{let{title:t,titleStyle:r,titleNumberOfLines:i=1,subtitle:s,subtitleStyle:o,subtitleNumberOfLines:a=1,left:c,leftStyle:d}=e;return(0,n.BX)("header",{className:p("header"),children:[!!c&&(0,n.tZ)("div",{className:p("header-left"),style:(0,l.Ec)({width:40,height:40},d),children:c({size:40})}),(0,n.BX)(h.T,{direction:"vertical",align:"start",size:4,style:{flex:1},children:[!!t&&(0,n.tZ)("span",{className:p("title",!!i&&"title-ellipsis"),style:(0,l.Ec)(r,{"--title-ellipsis-lines":i}),children:t}),!!s&&(0,n.tZ)("span",{className:p("subtitle",!!a&&"subtitle-ellipsis"),style:(0,l.Ec)(o,{"--subtitle-ellipsis-lines":a}),children:s})]})]})},[Z]=(0,l.XK)("card-actions"),v=e=>{let{style:t,className:r,children:i,placement:s="left"}=e;return(0,n.tZ)("div",{style:(0,l.Ec)(t,{justifyContent:"right"===s?"flex-end":"flex-start"}),className:(0,l.zj)(r,Z),children:i})},[y]=(0,l.XK)("card-content"),u=e=>{let{className:t,children:r,...i}=e;return(0,n.tZ)("p",{...i,className:(0,l.zj)(t,y),children:r})};a.displayName="WisteriaUI.Card",d.displayName="WisteriaUI.CardCover",k.displayName="WisteriaUI.CardTitle",v.displayName="WisteriaUI.CardActions",u.displayName="WisteriaUI.CardContent";let m=Object.assign(a,{Title:k,Cover:d,Actions:v,Content:u})},489:function(e,t,r){"use strict";r.d(t,{i:function(){return h}});var n=r(4957),i=r(7296),s=r(4684),l=r(1719),o=r(362),a=r(2423);let[c,d]=(0,l.XK)("divider"),h=(0,s.forwardRef)((e,t)=>{let{dashed:r,children:s,insetSize:h,textAlign:p="center",variant:k="fullWidth",direction:Z="horizontal",...v}=e;return(0,n.tZ)("div",{ref:t,role:"separator","data-variant":k,className:(0,l.zj)(c,v.className,d(Z,!!s&&["with-children","text-".concat(p)])),style:(0,l.Ec)(!!r&&{borderStyle:"dashed"},(0,o.hj)(h)&&{"--divider-inset-size":(0,a.xj)(h)},v.style),children:(0,o.Rw)(s)?null:(0,i.l$)(s)?s:(0,n.tZ)("span",{className:d("text"),children:s})})})},2029:function(e,t,r){"use strict";r.d(t,{T:function(){return p}});var n=r(4957),i=r(489),s=r(9612),l=r(4684),o=r(7296),a=r(1719),c=r(362);let[d,h]=(0,a.XK)("space"),p=(0,l.forwardRef)((e,t)=>{let{wrap:r,split:l,children:p,size:k=6,align:Z="center",direction:v="horizontal",...y}=e,u=(0,o.bR)(p),[m,x]=(0,s.Ye)(()=>(0,c.kJ)(k)?k:[k,k],[k]);return(0,n.tZ)("div",{...y,ref:t,style:(0,a.Ec)(e.style,{rowGap:m,columnGap:x}),className:(0,a.zj)(d,e.className,h(Z,v,{wrap:r})),children:u.map((e,t)=>{let r=t!==u.length-1,s=r&&l;if(s&&(0,c.jn)(s)){let e="vertical"===v;s=(0,n.tZ)(i.i,{direction:e?"horizontal":"vertical"})}return(0,n.BX)(o.HY,{children:[(0,n.tZ)("div",{className:h("item"),children:e}),s]},t)})})})},3445:function(e,t,r){"use strict";r.d(t,{T:function(){return h}});var n,i,s=r(4957),l=r(4684);(n=i||(i={})).OUTLINED="outlined",n.ELEVATED="elevated";var o=r(1719),a=r(2423);let[c,d]=(0,o.XK)("surface"),h=(0,l.forwardRef)((e,t)=>{let{bgColor:r,children:n,corner:l=6,elevation:h=1,variant:p=i.ELEVATED,...k}=e;return(0,s.tZ)("div",{...k,ref:t,style:(0,o.Ec)(e.style,{background:r,borderRadius:l&&(0,a.xj)(l)}),className:(0,o.zj)(e.className,c,d(p,{["elevation-".concat(h)]:p===i.ELEVATED})),children:n})})},7666:function(e,t,r){"use strict";r.r(t);var n=r(7434),i=r(8065),s=r(2435);r(4267);var l=r(9286),o=r(2573),a=r(5872),c=r(2379);function d(e){let t=Object.assign({h1:"h1",pre:"pre",code:"code",span:"span",h2:"h2",p:"p"},(0,s.ah)(),e.components);return l.Zb||_missingMdxReference("Card",!1),l.Zb.Actions||_missingMdxReference("Card.Actions",!0),l.Zb.Content||_missingMdxReference("Card.Content",!0),l.Zb.Cover||_missingMdxReference("Card.Cover",!0),l.Zb.Title||_missingMdxReference("Card.Title",!0),(0,n.BX)(n.HY,{children:[(0,n.tZ)(t.h1,{children:"Card"}),"\n",(0,n.tZ)(t.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,n.tZ)(t.code,{"data-language":"tsx","data-theme":"default",children:(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" { Card } "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'wisteria-ui'"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:";"})]})})}),"\n",(0,n.tZ)(t.h2,{id:"用法",children:"用法"}),"\n",(0,n.tZ)(t.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,n.BX)(t.code,{"data-language":"tsx","data-theme":"default",children:[(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Card"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"style"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{{ width"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'50%'"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" }} "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"elevation"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"}>"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Card.Cover"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"src"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"https://images.pexels.com/photos/17539760/pexels-photo-17539760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Card.Title"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"title"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Card Title"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"subtitle"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Card Subtitle"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Card.Content"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.tZ)(t.span,{className:"line",children:(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi fugiat"})}),"\n",(0,n.tZ)(t.span,{className:"line",children:(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    facere sapiente error hic, id nobis repellendus natus atque, nostrum dolorem"})}),"\n",(0,n.tZ)(t.span,{className:"line",children:(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    laboriosam ex cumque deleniti expedita quo suscipit provident et?"})}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  </"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Card.Content"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Card.Actions"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"placement"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"right"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Button"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"text"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">SHARE</"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Button"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Button"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"text"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">LIKE</"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Button"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  </"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Card.Actions"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Card"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,n.tZ)(a.S,{children:(0,n.BX)(l.Zb,{style:{width:"50%"},elevation:3,children:[(0,n.tZ)(l.Zb.Cover,{src:"https://images.pexels.com/photos/17539760/pexels-photo-17539760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}),(0,n.tZ)(l.Zb.Title,{title:"Card Title",subtitle:"Card Subtitle"}),(0,n.tZ)(l.Zb.Content,{children:(0,n.tZ)(t.p,{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi fugiat\nfacere sapiente error hic, id nobis repellendus natus atque, nostrum\ndolorem laboriosam ex cumque deleniti expedita quo suscipit provident et?"})}),(0,n.BX)(l.Zb.Actions,{placement:"right",children:[(0,n.tZ)(o.z,{variant:"text",children:"SHARE"}),(0,n.tZ)(o.z,{variant:"text",children:"LIKE"})]})]})}),"\n",(0,n.tZ)(t.h2,{id:"api",children:"API"}),"\n",(0,n.tZ)(c.G,{list:[]})]})}t.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.tZ)(t,{...e,children:(0,n.tZ)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/components/card.mdx",route:"/components/card",headings:[{depth:1,value:"Card",id:"card"},{depth:2,value:"用法",id:"用法"},{depth:2,value:"API",id:"api"}],title:"Card"},pageNextRoute:"/components/card"})}},function(e){e.O(0,[65,906,888,179],function(){return e(e.s=8537)}),_N_E=e.O()}]);