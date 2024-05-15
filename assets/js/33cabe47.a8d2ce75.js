"use strict";(self.webpackChunkrafaelszp_github_io=self.webpackChunkrafaelszp_github_io||[]).push([[4733],{6993:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(4848),r=t(8453);const o={title:"Solving ssh prompting for password even when using RSA pub key",date:"2022-06-14",categories:["arch-linux","linux"]},i=void 0,a={permalink:"/blog/2022/06/14/2022/06/solving-ssh-prompting-for-password-even-when-using-rsa-pub-key",editUrl:"https://github.com/rafaelszp/rafaelszp.github.io/tree/master/blog/blog/2022/06/2022-06-14-solving-ssh-prompting-for-password-even-when-using-rsa-pub-key/index.md",source:"@site/blog/2022/06/2022-06-14-solving-ssh-prompting-for-password-even-when-using-rsa-pub-key/index.md",title:"Solving ssh prompting for password even when using RSA pub key",description:"Insert into your ~/.ssh/config (client side)",date:"2022-06-14T00:00:00.000Z",tags:[],readingTime:.075,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Solving ssh prompting for password even when using RSA pub key",date:"2022-06-14",categories:["arch-linux","linux"]},unlisted:!1,prevItem:{title:"How to fix the Spacevim error : Updating failed, The plugin dir is dirty",permalink:"/blog/2022/07/06/2022/07/how-to-fix-the-spacevim-error-updating-failed-the-plugin-dir-is-dirty"},nextItem:{title:"Kube dns from desktop via port forward",permalink:"/blog/2022/04/25/2022/04/kube-dns-from-desktop-via-port-forward"}},p={authorsImageUrls:[]},l=[];function d(e){const n={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Insert into your ~/.ssh/config (client side)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-config",children:"Host *\n  AddKeysToAgent yes\n  IdentityFile ~/.ssh/id_rsa\n  PubkeyAcceptedAlgorithms=+ssh-rsa\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(6540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);