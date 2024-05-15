"use strict";(self.webpackChunkrafaelszp_github_io=self.webpackChunkrafaelszp_github_io||[]).push([[3174],{578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(4848),a=n(8453);const o={title:"maintenance k8s",date:"2020-10-06",categories:["kubernetes"]},s=void 0,c={permalink:"/blog/2020/10/06/2020/10/maintenance-k8s",editUrl:"https://github.com/rafaelszp/rafaelszp.github.io/tree/master/blog/blog/2020/10/2020-10-06-maintenance-k8s/index.md",source:"@site/blog/2020/10/2020-10-06-maintenance-k8s/index.md",title:"maintenance k8s",description:"",date:"2020-10-06T00:00:00.000Z",tags:[],readingTime:.31,hasTruncateMarker:!1,authors:[],frontMatter:{title:"maintenance k8s",date:"2020-10-06",categories:["kubernetes"]},unlisted:!1,prevItem:{title:"Generating private and public keys for JWT tokens",permalink:"/blog/2020/10/14/2020/10/generating-private-and-public-keys-for-jwt-tokens"},nextItem:{title:"Forcing new SameSite and Secure values into nginx reverse proxied resource",permalink:"/blog/2020/07/28/2020/07/forcing-new-samesite-and-secure-values-into-nginx-reverse-proxied-resource"}},i={authorsImageUrls:[]},u=[];function d(e){const t={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"\n#Take a backup of the ETCD if it's hosting the ETCD. You can use the in-built command to backup the data like\n\nETCDCTL_API=3 etcdctl --endpoints=https://[127.0.0.1]:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt \\\n     --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key \\\n     snapshot save /tmp/snapshot-pre-boot.db\n\n#Now drain the node using\n\nkubectl drain <master01>\n\n#Do the System update | patches and reboot.\n\n#Now uncordon the node back to the cluster\n\nkubectl uncordon <master01>\n\n\n"})})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(6540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);