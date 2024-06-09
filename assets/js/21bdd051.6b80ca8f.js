"use strict";(self.webpackChunkdifranca=self.webpackChunkdifranca||[]).push([[988],{981:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=i(5893),o=i(1151);const s={keywords:["git","hook","commit","pre-commit","secret","format","lint"],title:"Pre-Commit | Git | DevSecOps | Tech-Notes",sidebar_label:"Pre-Commit"},r="Pre-Commit",c={id:"devsecops/git/pre-commit",title:"Pre-Commit | Git | DevSecOps | Tech-Notes",description:"Pre-commit is a framework for managing and maintaining multi-language pre-commit hooks.",source:"@site/docs/tech/devsecops/git/pre-commit.md",sourceDirName:"devsecops/git",slug:"/devsecops/git/pre-commit",permalink:"/tech-notes/devsecops/git/pre-commit",draft:!1,unlisted:!1,editUrl:"https://github.com/difranca/difranca.github.io/blob/main/docs/tech/devsecops/git/pre-commit.md",tags:[],version:"current",frontMatter:{keywords:["git","hook","commit","pre-commit","secret","format","lint"],title:"Pre-Commit | Git | DevSecOps | Tech-Notes",sidebar_label:"Pre-Commit"},sidebar:"tech",previous:{title:"Git",permalink:"/tech-notes/devsecops/git"},next:{title:"Architecture",permalink:"/tech-notes/architecture"}},a={},l=[{value:"Installation",id:"installation",level:2},{value:"Install Pre-Commit",id:"install-pre-commit",level:3},{value:"Create Config File",id:"create-config-file",level:3},{value:"Set Git Template",id:"set-git-template",level:3},{value:"Clone a Repository",id:"clone-a-repository",level:3}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"pre-commit",children:"Pre-Commit"}),"\n",(0,n.jsx)(t.p,{children:"Pre-commit is a framework for managing and maintaining multi-language pre-commit hooks."}),"\n",(0,n.jsx)(t.p,{children:"Git hook scripts are useful for identifying issues before pushing your code or submitting it to review."}),"\n",(0,n.jsx)(t.p,{children:"There are hooks for various purposes, such as formatting files, running tests, validating syntax, identifying security flaws, among others."}),"\n",(0,n.jsx)(t.admonition,{title:"More Information",type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://pre-commit.com",children:"https://pre-commit.com"})}),"\n"]})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.p,{children:"This guide explains how to install and configure pre-commit so that hooks are applied to all repositories that are cloned or initialized."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h3,{id:"install-pre-commit",children:"Install Pre-Commit"}),"\n",(0,n.jsx)(t.p,{children:"Using homebrew:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"brew install pre-commit\n"})}),"\n",(0,n.jsx)(t.p,{children:"Using conda:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"conda install -c conda-forge pre-commit\n"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h3,{id:"create-config-file",children:"Create Config File"}),"\n",(0,n.jsxs)(t.p,{children:["Create a ",(0,n.jsx)(t.code,{children:".pre-commit-config.yaml"})," file in a directory that is easily accessible."]}),"\n",(0,n.jsx)(t.p,{children:"In this example the user's home directory will be used."}),"\n",(0,n.jsx)(t.p,{children:"This file must contain a list of repositories and IDs of the hooks you want to use."}),"\n",(0,n.jsxs)(t.p,{children:["The list of repositories and hooks are available at ",(0,n.jsx)(t.a,{href:"https://pre-commit.com/hooks.html",children:"https://pre-commit.com/hooks.html"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["As an example, the ",(0,n.jsx)(t.code,{children:"detect-secrets"})," hook will be used to check if there are any potential secrets that may be leaked in the commit:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:"title='.pre-commit-config.yaml'",children:"repos:\n- repo: https://github.com/Yelp/detect-secrets\n    rev: v1.2.0\n    hooks:\n    - id: detect-secrets\n      exclude: package.lock.json\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["For more information on how to configure the ",(0,n.jsx)(t.code,{children:".pre-commit-config"}),", visit ",(0,n.jsx)(t.a,{href:"https://pre-commit.com/index.html#pre-commit-configyaml---hooks",children:"this page"}),"."]})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h3,{id:"set-git-template",children:"Set Git Template"}),"\n",(0,n.jsx)(t.p,{children:"It is necessary to set in which directory the git template will be written:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git config --global init.templateDir <teplate-dir>\npre-commit init-templatedir <teplate-dir> -c <pre-commit-config-path>\n"})}),"\n",(0,n.jsx)(t.p,{children:"Using the user's home as an example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git config --global init.templateDir ~/.git-template\npre-commit init-templatedir ~/.git-template -c ~/.pre-commit-config.yaml\n"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h3,{id:"clone-a-repository",children:"Clone a Repository"}),"\n",(0,n.jsxs)(t.p,{children:["Now whenever a repository is cloned or initialized, it will have the hooks set up already (",(0,n.jsx)(t.code,{children:"<repo>/.git/hooks/pre-commit"}),")."]}),"\n",(0,n.jsx)(t.p,{children:"As an example, let's try to commit a file that contains a secret token:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'\u276f git commit -m "Testing secret leak"\n\nDetect secrets.......................................Failed\n- hook id: detect-secrets\n- exit code: 1\n\nERROR: Potential secrets about to be committed to git repo!\n\nSecret Type: Base64 High Entropy String\nLocation:    service.py:9\n'})}),"\n",(0,n.jsx)(t.p,{children:"The commit correctly fails so that the secret is not leaked."})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>r});var n=i(7294);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);