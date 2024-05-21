"use strict";(self.webpackChunkrafaelszp_github_io=self.webpackChunkrafaelszp_github_io||[]).push([[5678],{9365:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(4848),s=t(8453);const o={title:"Using mvn to set pom.xml version and afterwards  show the current project version",date:"2021-02-25",categories:["javaee","maven"]},i=void 0,a={permalink:"/blog/2021/02/25/2021/02/using-mvn-to-set-pom-xml-version-and-afterwards-show-the-current-project-version",editUrl:"https://github.com/rafaelszp/rafaelszp.github.io/tree/master/blog/blog/2021/02/2021-02-25-using-mvn-to-set-pom-xml-version-and-afterwards-show-the-current-project-version/index.md",source:"@site/blog/2021/02/2021-02-25-using-mvn-to-set-pom-xml-version-and-afterwards-show-the-current-project-version/index.md",title:"Using mvn to set pom.xml version and afterwards  show the current project version",description:"Setting a new version",date:"2021-02-25T00:00:00.000Z",tags:[],readingTime:.15,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Using mvn to set pom.xml version and afterwards  show the current project version",date:"2021-02-25",categories:["javaee","maven"]},unlisted:!1,prevItem:{title:"Generating a self signed certificate with openssl",permalink:"/blog/2021/02/25/2021/02/generating-a-self-signed-certificate-with-openssl"},nextItem:{title:"Fixing linkerd AccessDenied error that denies linkerd-proxy container to start",permalink:"/blog/2021/02/16/2021/02/fixing-linkerd-accessdenied-error-that-denies-linkerd-proxy-container-to-start"}},c={authorsImageUrls:[]},l=[];function h(e){const n={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Setting a new version"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mvn versions:set -DnewVersion=1.0.3-SNAPSHOT\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Showing current project version"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"MVN_VERSION=$(mvn -q -Dexec.executable=echo -Dexec.args='${project.version}' --non-recursive  exec:exec); echo $MVN_VERSION\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"References:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.mojohaus.org/versions-maven-plugin/examples/set.html",children:"https://www.mojohaus.org/versions-maven-plugin/examples/set.html"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://stackoverflow.com/a/26514030",children:"https://stackoverflow.com/a/26514030"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.mojohaus.org/exec-maven-plugin/",children:"https://www.mojohaus.org/exec-maven-plugin/"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(6540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);