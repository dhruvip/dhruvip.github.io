"use strict";(self.webpackChunkdifranca=self.webpackChunkdifranca||[]).push([[364],{9813:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>h,toc:()=>l});var n=r(5893),c=r(1151),i=r(2991),a=r(3438);const o={title:"Software | Architecture | Tech-Notes",sidebar_label:"Software",slug:"/architecture/software",keywords:["architecture","architectural","software","pattern","code"]},s="Software Architecture",h={id:"architecture/software/index",title:"Software | Architecture | Tech-Notes",description:"Styles and patterns to organize software components, how they interact with each other and the environment in which they operate.",source:"@site/docs/tech/architecture/software/index.md",sourceDirName:"architecture/software",slug:"/architecture/software",permalink:"/tech-notes/architecture/software",draft:!1,unlisted:!1,editUrl:"https://github.com/difranca/difranca.github.io/blob/main/docs/tech/architecture/software/index.md",tags:[],version:"current",frontMatter:{title:"Software | Architecture | Tech-Notes",sidebar_label:"Software",slug:"/architecture/software",keywords:["architecture","architectural","software","pattern","code"]},sidebar:"tech",previous:{title:"Architecture",permalink:"/tech-notes/architecture"},next:{title:"Code Reuse",permalink:"/tech-notes/architecture/software/code-reuse"}},d={},l=[];function u(e){const t={h1:"h1",p:"p",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"software-architecture",children:"Software Architecture"}),"\n",(0,n.jsx)(t.p,{children:"Styles and patterns to organize software components, how they interact with each other and the environment in which they operate."}),"\n","\n","\n",(0,n.jsx)(i.Z,{items:(0,a.jA)().items})]})}function f(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},2991:(e,t,r)=>{r.d(t,{Z:()=>x});r(7294);var n=r(512),c=r(3438),i=r(3692),a=r(3919),o=r(5999),s=r(2503);const h={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(5893);function l(e){let{href:t,children:r}=e;return(0,d.jsx)(i.Z,{href:t,className:(0,n.Z)("card padding--lg",h.cardContainer),children:r})}function u(e){let{href:t,icon:r,title:c,description:i}=e;return(0,d.jsxs)(l,{href:t,children:[(0,d.jsxs)(s.Z,{as:"h2",className:(0,n.Z)("text--truncate",h.cardTitle),title:c,children:[r," ",c]}),i&&(0,d.jsx)("p",{className:(0,n.Z)("text--truncate",h.cardDescription),title:i,children:i})]})}function f(e){let{item:t}=e;const r=(0,c.LM)(t);return r?(0,d.jsx)(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,c.xz)(t.docId??void 0);return(0,d.jsx)(u,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(m,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function w(e){let{className:t}=e;const r=(0,c.jA)();return(0,d.jsx)(x,{items:r.items,className:t})}function x(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(w,{...e});const i=(0,c.MN)(t);return(0,d.jsx)("section",{className:(0,n.Z)("row",r),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(p,{item:e})},t)))})}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>a});var n=r(7294);const c={},i=n.createContext(c);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);