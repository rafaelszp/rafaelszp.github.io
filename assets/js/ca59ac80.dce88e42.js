"use strict";(self.webpackChunkrafaelszp_github_io=self.webpackChunkrafaelszp_github_io||[]).push([[169],{1250:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(4848),r=o(8453);const i={title:"Retrieving logged user info from Keycloak",date:"2017-04-26",categories:["javaee","jboss-eap-wildfly"]},a=void 0,s={permalink:"/blog/2017/04/26/2017/04/retrieving-logged-user-info-from-keycloak",editUrl:"https://github.com/rafaelszp/rafaelszp.github.io/tree/master/blog/blog/2017/04/2017-04-26-retrieving-logged-user-info-from-keycloak/index.md",source:"@site/blog/2017/04/2017-04-26-retrieving-logged-user-info-from-keycloak/index.md",title:"Retrieving logged user info from Keycloak",description:"Just do a GET to the keycloak URL:",date:"2017-04-26T00:00:00.000Z",tags:[],readingTime:.14,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Retrieving logged user info from Keycloak",date:"2017-04-26",categories:["javaee","jboss-eap-wildfly"]},unlisted:!1,prevItem:{title:"Logging into keycloak using auth URL",permalink:"/blog/2017/04/26/2017/04/logging-into-keycloak-using-auth-url"},nextItem:{title:"Using Java 8 with Builder Pattern",permalink:"/blog/2017/03/10/2017/03/using-java-8-with-builder-pattern"}},l={authorsImageUrls:[]},c=[];function u(e){const t={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Just do a GET to the keycloak URL:"}),"\n",(0,n.jsx)(t.p,{children:"\xa0"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"http://{SERVER_URL}/auth/realms/{realm}/protocol/openid-connect/userinfo\n"})}),"\n",(0,n.jsx)(t.p,{children:"\xa0"}),"\n",(0,n.jsx)(t.p,{children:"Dont forget to send this request with you authorization header. Ex:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Authorization: Bearer\xa0{token}\n~~~\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>s});var n=o(6540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);