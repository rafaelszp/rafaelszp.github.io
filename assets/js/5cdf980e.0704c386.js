"use strict";(self.webpackChunkrafaelszp_github_io=self.webpackChunkrafaelszp_github_io||[]).push([[6251],{8861:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(4848),a=t(8453);const i={title:"Fixing autoswitch profile to wrong one with pulseaudio in Arch/Manjaro",date:"2020-12-02",categories:["arch-linux","linux"]},r=void 0,s={permalink:"/blog/2020/12/02/2020/12/fixing-autoswitch-profile-to-wrong-one-with-pulseaudio-in-arch-manjaro",editUrl:"https://github.com/rafaelszp/rafaelszp.github.io/tree/master/blog/blog/2020/12/2020-12-02-fixing-autoswitch-profile-to-wrong-one-with-pulseaudio-in-arch-manjaro/index.md",source:"@site/blog/2020/12/2020-12-02-fixing-autoswitch-profile-to-wrong-one-with-pulseaudio-in-arch-manjaro/index.md",title:"Fixing autoswitch profile to wrong one with pulseaudio in Arch/Manjaro",description:"First of all, close all windows, players, pavucontrol and any application that uses audio, then change to the profile you want with the following command:",date:"2020-12-02T00:00:00.000Z",tags:[],readingTime:.485,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Fixing autoswitch profile to wrong one with pulseaudio in Arch/Manjaro",date:"2020-12-02",categories:["arch-linux","linux"]},unlisted:!1,prevItem:{title:"Searching AD Users with ldapsearch command",permalink:"/blog/2021/01/28/2021/01/searching-ad-users-with-ldapsearch-command"},nextItem:{title:"Limiting resources in docker-compose v3 using compatibility mode",permalink:"/blog/2020/11/27/2020/11/limiting-resources-in-docker-compose-v3-using-compatibility-mode"}},l={authorsImageUrls:[]},c=[];function d(e){const n={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"First of all, close all windows, players, pavucontrol and any application that uses audio, then change to the profile you want with the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"#get the profile you selected in pulseaudio volume control\npacmd list-cards | grep 'active profile'\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then get the card you want:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pacmd list-cards | grep 'active profile'\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then ",(0,o.jsx)(n.code,{children:"sudo vim /etc/pulse/default.pa"})," and add the following line"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# set-card-profile  \n# example:\nset-card-profile alsa_card.pci-0000_00_1f.3 output:analog-stereo+input:analog-stereo\n"})}),"\n",(0,o.jsx)(n.p,{children:"Finally comment the problematic line:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"#load-module module-switch-on-port-available\n"})}),"\n",(0,o.jsx)(n.p,{children:"Save the file and restart pulse audio with"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"systemctl --user restart pulseaudio\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var o=t(6540);const a={},i=o.createContext(a);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);