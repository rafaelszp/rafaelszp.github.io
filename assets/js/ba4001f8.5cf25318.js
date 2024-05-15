"use strict";(self.webpackChunkrafaelszp_github_io=self.webpackChunkrafaelszp_github_io||[]).push([[567],{4298:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(4848),a=i(8453);const o={title:"Find out which application is grabbing a linux shortcut",date:"2023-01-30",categories:["arch-linux","linux"]},r=void 0,l={permalink:"/blog/2023/01/30/2023/01/find-out-which-application-is-grabbing-a-linux-shortcut",editUrl:"https://github.com/rafaelszp/rafaelszp.github.io/tree/master/blog/blog/2023/01/2023-01-30-find-out-which-application-is-grabbing-a-linux-shortcut/index.md",source:"@site/blog/2023/01/2023-01-30-find-out-which-application-is-grabbing-a-linux-shortcut/index.md",title:"Find out which application is grabbing a linux shortcut",description:"Step 1 - Find key modifier names",date:"2023-01-30T00:00:00.000Z",tags:[],readingTime:.205,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Find out which application is grabbing a linux shortcut",date:"2023-01-30",categories:["arch-linux","linux"]},unlisted:!1,prevItem:{title:"Convert AD Timestamp to human readable with w32tm.exe",permalink:"/blog/2023/02/23/2023/02/convert-ad-timestamp-to-human-readable-with-w32tm-exe"},nextItem:{title:"Recursive search and replace text in files within any directory with fd and sed",permalink:"/blog/2022/12/12/2022/12/recursive-search-and-replace-text-in-files-within-any-directory-with-fd-and-sed"}},s={authorsImageUrls:[]},c=[{value:"Step 1 - Find key modifier names",id:"step-1---find-key-modifier-names",level:4},{value:"Step 2 - Execute in a terminal",id:"step-2---execute-in-a-terminal",level:4}];function d(e){const t={code:"code",h4:"h4",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h4,{id:"step-1---find-key-modifier-names",children:"Step 1 - Find key modifier names"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"xmodmap -pm\n"})}),"\n",(0,n.jsx)(t.h4,{id:"step-2---execute-in-a-terminal",children:"Step 2 - Execute in a terminal"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'xdotool keydown "Control_L+Shift_L+P"; xdotool key "XF86LogGrabInfo"; xdotool keyup "P"; sleep 1; xdotool keyup "Shift_L"; xdotool keyup "Control_L"; tail /var/log/Xorg.0.log\n'})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>l});var n=i(6540);const a={},o=n.createContext(a);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);