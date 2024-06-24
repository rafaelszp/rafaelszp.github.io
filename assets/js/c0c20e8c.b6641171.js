"use strict";(self.webpackChunkrafaelszp_github_io=self.webpackChunkrafaelszp_github_io||[]).push([[8163],{8951:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=r(4848),a=r(8453);const i={title:"Fixing pacman corrupted signature (PGP) when executing an update",date:"2024-06-12",categories:["linux","archlinux"]},o=void 0,c={permalink:"/blog/2024/06/12/2024/06/fixing-archlinux-keysignature-error-when-executing-pacman-syu",editUrl:"https://github.com/rafaelszp/rafaelszp.github.io/tree/master/blog/blog/2024/06/2024-06-12-fixing-archlinux-keysignature-error-when-executing-pacman-syu/index.md",source:"@site/blog/2024/06/2024-06-12-fixing-archlinux-keysignature-error-when-executing-pacman-syu/index.md",title:"Fixing pacman corrupted signature (PGP) when executing an update",description:"When an error like following occurs...",date:"2024-06-12T00:00:00.000Z",tags:[],readingTime:.145,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Fixing pacman corrupted signature (PGP) when executing an update",date:"2024-06-12",categories:["linux","archlinux"]},unlisted:!1,prevItem:{title:"Fixing Windows Socket errors when starting programs like LocalSend",permalink:"/blog/2024/06/24/2024/06/resolvendo-problemas-socket-error-porta-dinamica"},nextItem:{title:"Fixing python based applications SSL Errors",permalink:"/blog/2024/06/13/2024/06/fixing-python-sslerrors"}},s={authorsImageUrls:[]},u=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"When an error like following occurs..."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"File /var/cache/pacman/pkg/rhash-1.4.4-1-x86_64.pkg.tar.zst is corrupted (invalid or corrupted package (PGP signature)).\n"})}),"\n",(0,t.jsx)(n.p,{children:"Just execute the following command"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo pacman -S archlinux-keyring\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var t=r(6540);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);