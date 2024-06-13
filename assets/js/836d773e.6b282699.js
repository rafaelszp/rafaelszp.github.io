"use strict";(self.webpackChunkrafaelszp_github_io=self.webpackChunkrafaelszp_github_io||[]).push([[9184],{6071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(4848),s=n(8453);const i={title:"Generating temporary credentials with cloud shell",date:"2024-04-22",categories:["aws"]},o=void 0,a={permalink:"/blog/2024/04/22/2024/04/generating-temporary-credentials-with-cloud-shell",editUrl:"https://github.com/rafaelszp/rafaelszp.github.io/tree/master/blog/blog/2024/04/2024-04-22-generating-temporary-credentials-with-cloud-shell/index.md",source:"@site/blog/2024/04/2024-04-22-generating-temporary-credentials-with-cloud-shell/index.md",title:"Generating temporary credentials with cloud shell",description:"",date:"2024-04-22T00:00:00.000Z",tags:[],readingTime:.33,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Generating temporary credentials with cloud shell",date:"2024-04-22",categories:["aws"]},unlisted:!1,prevItem:{title:"Fixing python based applications SSL Errors",permalink:"/blog/2024/06/13/2024/06/fixing-python-sslerrors"},nextItem:{title:"Disable Firefox annoying HTTPS redirect in Firefox",permalink:"/blog/2023/12/19/2023/12/disable-firefox-annoying-https-redirect-in-firefox"}},l={authorsImageUrls:[]},c=[];function d(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'# install jq\nsudo yum install jq -y# curl paste the result /tmp/credentials (raw credential json)\ncurl -H "Authorization: $AWS_CONTAINER_AUTHORIZATION_TOKEN" $AWS_CONTAINER_CREDENTIALS_FULL_URI 2>/dev/null > /tmp/credentials# parse the result json\nACCESS_KEY=`cat /tmp/credentials| jq -r .AccessKeyId`\nSECRET_KEY=`cat /tmp/credentials| jq -r .SecretAccessKey`\nSESSION_TOKEN=`cat /tmp/credentials| jq -r .Token`# show the result with "export" style\necho -ne "\\nThis is ${ROLE_NAME} temporary credential.\\nPaste them in your shell! \\n\\nexport AWS_ACCESS_KEY_ID=${ACCESS_KEY};\\nexport AWS_SECRET_ACCESS_KEY=${SECRET_KEY};\\nexport AWS_SESSION_TOKEN=${SESSION_TOKEN};\\n\\n"\n'})})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);