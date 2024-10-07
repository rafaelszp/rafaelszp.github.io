"use strict";(self.webpackChunkrafaelszp_github_io=self.webpackChunkrafaelszp_github_io||[]).push([[6832],{6218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(4848),o=n(8453);const i={title:"Avoiding SSLHandshakeException Error",date:"2017-09-27",categories:["javaee"]},a=void 0,s={permalink:"/blog/2017/09/27/2017/09/avoiding-sslhandshakeexception-error",editUrl:"https://github.com/rafaelszp/rafaelszp.github.io/tree/master/blog/blog/2017/09/2017-09-27-avoiding-sslhandshakeexception-error/index.md",source:"@site/blog/2017/09/2017-09-27-avoiding-sslhandshakeexception-error/index.md",title:"Avoiding SSLHandshakeException Error",description:"The following error is annoying:",date:"2017-09-27T00:00:00.000Z",tags:[],readingTime:.515,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Avoiding SSLHandshakeException Error",date:"2017-09-27",categories:["javaee"]},unlisted:!1,prevItem:{title:"JVM Args",permalink:"/blog/2017/12/08/2017/12/jvm-args"},nextItem:{title:"Update OpenSSL on Centos7",permalink:"/blog/2017/08/29/2017/08/update-openssl-on-centos7"}},c={authorsImageUrls:[]},l=[{value:"Update",id:"update",level:4}];function d(e){const t={code:"code",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The following error is annoying:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Caused by: javax.net.ssl.SSLHandshakeException: sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target\n\n"})}),"\n",(0,r.jsx)(t.p,{children:"To avoid this problem, just save the site certificate(e.g. Firefox cert export) and execute the following command in your server:"}),"\n",(0,r.jsx)(t.p,{children:"JAVA8"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"keytool -import -alias $ALIAS -keystore $JAVA_HOME/jre/lib/security/cacerts -file $PATH_TO_PEM_FILE\n\n"})}),"\n",(0,r.jsx)(t.p,{children:"JAVA7"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"keytool -keystore $JAVA_HOME/jre/lib/security/cacerts -importcert -alias sistemafieg -file $PATH_TO_PEM_FILE\n\n"})}),"\n",(0,r.jsx)(t.h4,{id:"update",children:"Update"}),"\n",(0,r.jsx)(t.p,{children:"In case you already imported your crt once you can remove by entering the following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"keytool -delete -alias $ALIAS -storepass $PASS -keystore $JAVA_HOME/jre/lib/security/cacerts \n"})}),"\n",(0,r.jsx)(t.p,{children:"After that you can import your cert again"})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var r=n(6540);const o={},i=r.createContext(o);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);