"use strict";(self.webpackChunkrafaelszp_github_io=self.webpackChunkrafaelszp_github_io||[]).push([[7793],{1814:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(4848),r=a(8453);const i={title:"Extracting package from Android via adb",date:"2017-06-19",categories:["android"]},o=void 0,s={permalink:"/blog/2017/06/19/2017/06/extracting-package-from-android-via-adb",editUrl:"https://github.com/rafaelszp/rafaelszp.github.io/tree/master/blog/blog/2017/06/2017-06-19-extracting-package-from-android-via-adb/index.md",source:"@site/blog/2017/06/2017-06-19-extracting-package-from-android-via-adb/index.md",title:"Extracting package from Android via adb",description:"First of all, list packages",date:"2017-06-19T00:00:00.000Z",tags:[],readingTime:.21,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Extracting package from Android via adb",date:"2017-06-19",categories:["android"]},unlisted:!1,prevItem:{title:"Excluding Subsystems from JBOSS/WILDFLY Applicaton",permalink:"/blog/2017/06/19/2017/06/excluding-subsystems-from-jbosswildfly-applicaton"},nextItem:{title:"Pushing custom images to your private docker registry",permalink:"/blog/2017/05/03/2017/05/pushing-custom-images-to-your-private-docker-registry"}},c={authorsImageUrls:[]},d=[];function p(e){const t={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"First of all, list packages"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"adb shell pm list packages |grep appname\n\n"})}),"\n",(0,n.jsx)(t.p,{children:"Then find out where it is placed the required apk"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"adb shell pm path the.package.name\n\n"})}),"\n",(0,n.jsx)(t.p,{children:"Finally pull the desired apk"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"adb pull /data/app/path-to-apk/apk-name.apk ~/tmp/\n\n"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>s});var n=a(6540);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);