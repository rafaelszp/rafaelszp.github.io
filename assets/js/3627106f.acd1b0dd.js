"use strict";(self.webpackChunkrafaelszp_github_io=self.webpackChunkrafaelszp_github_io||[]).push([[8822],{3337:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(4848),a=t(8453);const i={title:"Fixing pacman corrupted signature (PGP) when executing an update",date:"2024-06-12",categories:["linux","archlinux"]},c=void 0,o={permalink:"/blog/2024/06/12/2024/06/fixing-archlinux-keysignature-error-when-executing-pacman-syu",editUrl:"https://github.com/rafaelszp/rafaelszp.github.io/tree/master/blog/blog/2024/06/2024-06-12-fixing-archlinux-keysignature-error-when-executing-pacman-syu/index.md",source:"@site/blog/2024/06/2024-06-12-fixing-archlinux-keysignature-error-when-executing-pacman-syu/index.md",title:"Fixing pacman corrupted signature (PGP) when executing an update",description:"When an error like following occurs...",date:"2024-06-12T00:00:00.000Z",tags:[],readingTime:.145,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Fixing pacman corrupted signature (PGP) when executing an update",date:"2024-06-12",categories:["linux","archlinux"]},unlisted:!1,prevItem:{title:"Snippets Intro",permalink:"/blog/index"},nextItem:{title:"Generating temporary credentials with cloud shell",permalink:"/blog/2024/04/22/2024/04/generating-temporary-credentials-with-cloud-shell"}},s={authorsImageUrls:[]},u=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"When an error like following occurs..."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"File /var/cache/pacman/pkg/rhash-1.4.4-1-x86_64.pkg.tar.zst is corrupted (invalid or corrupted package (PGP signature)).\n"})}),"\n",(0,r.jsx)(n.p,{children:"Just execute the following command"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo pacman -S archlinux-keyring\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(6540);const a={},i=r.createContext(a);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);