"use strict";(self.webpackChunkrafaelszp_github_io=self.webpackChunkrafaelszp_github_io||[]).push([[6158],{2786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(4848),c=n(8453);const s={title:"crictl cheatsheet for k0s",date:"2023-03-07",categories:["kubernetes"]},r=void 0,i={permalink:"/blog/2023/03/07/2023/03/crictl-cheatsheet-for-k0s",editUrl:"https://github.com/rafaelszp/rafaelszp.github.io/tree/master/blog/blog/2023/03/2023-03-07-crictl-cheatsheet-for-k0s/index.md",source:"@site/blog/2023/03/2023-03-07-crictl-cheatsheet-for-k0s/index.md",title:"crictl cheatsheet for k0s",description:"/etc/crictl.yaml config file:",date:"2023-03-07T00:00:00.000Z",tags:[],readingTime:.275,hasTruncateMarker:!1,authors:[],frontMatter:{title:"crictl cheatsheet for k0s",date:"2023-03-07",categories:["kubernetes"]},unlisted:!1,prevItem:{title:"Focus mode on linux with 'at' and 'dunst'",permalink:"/blog/2023/03/14/2023/03/focus-mode-on-linux-with-at-and-dunst"},nextItem:{title:"Convert AD Timestamp to human readable with w32tm.exe",permalink:"/blog/2023/02/23/2023/02/convert-ad-timestamp-to-human-readable-with-w32tm-exe"}},o={authorsImageUrls:[]},l=[{value:"Useful commands",id:"useful-commands",level:4}];function u(e){const t={code:"code",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"/etc/crictl.yaml"})," config file:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"runtime-endpoint: unix:///run/k0s/containerd.sock\nimage-endpoint: unix:///run/k0s/containerd.sock\ntimeout: 10\ndebug: false\n"})}),"\n",(0,a.jsx)(t.h4,{id:"useful-commands",children:"Useful commands"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"#Pruning images\ncrictl rmi --prune\n\n#listing pods by namespace 'mynamespace'\ncrictl  pods --namespace mynamespace\n\n\n#listing containers by label\ncrictl ps --label=mylabel=labelvalue\n\n#Execute a command in a running container with hash 1f73f2d81bf98\ncrictl exec -i -t 1f73f2d81bf98 ls\n"})})]})}function d(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var a=n(6540);const c={},s=a.createContext(c);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);