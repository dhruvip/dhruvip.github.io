"use strict";(self.webpackChunkdifranca=self.webpackChunkdifranca||[]).push([[783],{5497:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var a=s(5893),t=s(1151);const c={keywords:["kubernetes","k8s","kubectl","namespace"],title:"Namespaces | Kubernetes | Cloud | Tech-Notes",sidebar_label:"Namespaces"},i="Namespaces",r={id:"cloud/kubernetes/namespace",title:"Namespaces | Kubernetes | Cloud | Tech-Notes",description:"Namespaces provides a mechanism for isolating groups of resources within a single cluster.",source:"@site/docs/tech/cloud/kubernetes/namespace.md",sourceDirName:"cloud/kubernetes",slug:"/cloud/kubernetes/namespace",permalink:"/tech-notes/cloud/kubernetes/namespace",draft:!1,unlisted:!1,editUrl:"https://github.com/difranca/difranca.github.io/blob/main/docs/tech/cloud/kubernetes/namespace.md",tags:[],version:"current",frontMatter:{keywords:["kubernetes","k8s","kubectl","namespace"],title:"Namespaces | Kubernetes | Cloud | Tech-Notes",sidebar_label:"Namespaces"},sidebar:"tech",previous:{title:"Kubernetes",permalink:"/tech-notes/cloud/kubernetes"},next:{title:"Terraform",permalink:"/tech-notes/cloud/terraform"}},l={},o=[{value:"Namespaces Stuck in Terminating",id:"namespaces-stuck-in-terminating",level:2},{value:"Solution",id:"solution",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"namespaces",children:"Namespaces"}),"\n",(0,a.jsx)(n.p,{children:"Namespaces provides a mechanism for isolating groups of resources within a single cluster."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Names of resources need to be unique within a namespace"}),"\n",(0,a.jsx)(n.li,{children:"Namespace-based scoping is applicable only for namespaced objects and not for cluster-wide objects"}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{title:"More Information",type:"note",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/",children:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"})}),"\n"]})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.h2,{id:"namespaces-stuck-in-terminating",children:"Namespaces Stuck in Terminating"}),"\n",(0,a.jsx)(n.p,{children:"When deleting a namespace in Kubernetes, the namespace may remain stuck in terminating status."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ kubectl get ns\n\nNAME               STATUS        AGE\ndefault            Active        2d\nkube-public        Active        2d\nkube-system        Active        2d\nmy-namespace       Terminating   7m \n"})}),"\n",(0,a.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Get the namespace manifest"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl get ns my-namespace -o yaml > namespace.yaml \n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Edit the manifest file and remove all finalizers"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="namespace.yaml"',children:"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: my-namespace\nspec:\n  finalizers:\nstatus:\n  phase: Terminating\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Start kubectl proxy"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ kubectl proxy\n\nStarting to serve on 127.0.0.1:8001\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Call namespace finalize API:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -H "Content-Type: application/yaml" -X PUT --data-binary @namespace.yaml http://127.0.0.1:8001/api/v1/namespaces/my-namespace/finalize \n'})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"Confirm if namespace was deleted"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ kubectl get ns\n\nNAME               STATUS        AGE\ndefault            Active        2d\nkube-public        Active        2d\nkube-system        Active        2d\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>i});var a=s(7294);const t={},c=a.createContext(t);function i(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);