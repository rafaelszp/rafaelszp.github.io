"use strict";(self.webpackChunkrafaelszp_github_io=self.webpackChunkrafaelszp_github_io||[]).push([[1599],{8734:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(4848),a=t(8453);const o={title:"IntelliJ IDEA tuning configuration",date:"2019-08-02",categories:["javaee"]},r=void 0,s={permalink:"/blog/2019/08/02/2019/08/intellij-idea-tuning-configuration",editUrl:"https://github.com/rafaelszp/rafaelszp.github.io/tree/master/blog/blog/2019/08/2019-08-02-intellij-idea-tuning-configuration/index.md",source:"@site/blog/2019/08/2019-08-02-intellij-idea-tuning-configuration/index.md",title:"IntelliJ IDEA tuning configuration",description:"In my workstation I use an i5(7thGen) with 16GB RAM. So I tuned my idea.vmoptions in order to get better IntelliJ IDEA performance.",date:"2019-08-02T00:00:00.000Z",tags:[],readingTime:.165,hasTruncateMarker:!1,authors:[],frontMatter:{title:"IntelliJ IDEA tuning configuration",date:"2019-08-02",categories:["javaee"]},unlisted:!1,prevItem:{title:"Finding files bigger than a value in Linux with find command",permalink:"/blog/2019/12/11/2019/12/finding-files-bigger-than-a-value-in-linux-with-find-command"},nextItem:{title:"Bypassing AUR package installation when PGP signatures verification fails",permalink:"/blog/2019/07/29/2019/07/bypassing-aur-package-installation-when-pgp-signatures-verification-fails"}},l={authorsImageUrls:[]},c=[];function u(e){const n={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In my workstation I use an i5(7thGen) with 16GB RAM. So I tuned my idea.vmoptions in order to get better IntelliJ IDEA performance."}),"\n",(0,i.jsx)(n.p,{children:"That is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"-Xms881m\n-Xmx2048m\n-XX:ReservedCodeCacheSize=512m\n-XX:+PerfDisableSharedMem\n-XX:+UseG1GC\n-XX:MaxGCPauseMillis=100\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(6540);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);