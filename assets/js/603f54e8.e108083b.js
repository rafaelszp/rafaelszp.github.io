"use strict";(self.webpackChunkrafaelszp_github_io=self.webpackChunkrafaelszp_github_io||[]).push([[6818],{9067:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=o(4848),r=o(8453);const i={title:"Mapping volumes with docker compose",date:"2020-05-08",categories:["docker","linux"]},s=void 0,a={permalink:"/blog/2020/05/08/2020/05/mapping-volumes-with-docker-compose",editUrl:"https://github.com/rafaelszp/rafaelszp.github.io/tree/master/blog/blog/2020/05/2020-05-08-mapping-volumes-with-docker-compose/index.md",source:"@site/blog/2020/05/2020-05-08-mapping-volumes-with-docker-compose/index.md",title:"Mapping volumes with docker compose",description:"",date:"2020-05-08T00:00:00.000Z",tags:[],readingTime:.065,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Mapping volumes with docker compose",date:"2020-05-08",categories:["docker","linux"]},unlisted:!1,prevItem:{title:"Listing Available Resource/Sub-resource Name for RBAC k8s Configuration",permalink:"/blog/2020/07/03/2020/07/listing-available-resource-sub-resource-name-for-rbac-k8s-configuration"},nextItem:{title:"Using vanilla Javascript to strip accents",permalink:"/blog/2020/05/08/2020/05/using-vanilla-javascript-to-strip-accents"}},c={authorsImageUrls:[]},l=[];function p(e){const t={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"volumes:\n  log_folder:\n    driver: local\n    driver_opts:\n      type: none\n      device: /tmp/log_dev\n      o: bind,size=300m\n"})})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var n=o(6540);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);