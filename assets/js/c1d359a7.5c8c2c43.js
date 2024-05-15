"use strict";(self.webpackChunkrafaelszp_github_io=self.webpackChunkrafaelszp_github_io||[]).push([[2722],{3723:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(4848),a=t(8453);const o={title:"JVM Args",date:"2017-12-08",categories:["javaee"]},s=void 0,i={permalink:"/blog/2017/12/08/2017/12/jvm-args",editUrl:"https://github.com/rafaelszp/rafaelszp.github.io/tree/master/blog/blog/2017/12/2017-12-08-jvm-args/index.md",source:"@site/blog/2017/12/2017-12-08-jvm-args/index.md",title:"JVM Args",description:"- Java < 8",date:"2017-12-08T00:00:00.000Z",tags:[],readingTime:.45,hasTruncateMarker:!1,authors:[],frontMatter:{title:"JVM Args",date:"2017-12-08",categories:["javaee"]},unlisted:!1,prevItem:{title:"Improving ArchLinux fonts",permalink:"/blog/2017/12/15/2017/12/improving-archlinux-fonts"},nextItem:{title:"Avoiding SSLHandshakeException Error",permalink:"/blog/2017/09/27/2017/09/avoiding-sslhandshakeexception-error"}},m={authorsImageUrls:[]},c=[];function l(e){const n={code:"code",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Java < 8"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'    -server\n    -Xms<heap size>[g|m|k] -Xmx<heap size>[g|m|k]\n    -XX:PermSize=<perm gen size>[g|m|k] -XX:MaxPermSize=<perm gen size>[g|m|k]\n    -Xmn<young size>[g|m|k]\n    -XX:SurvivorRatio=<ratio>\n    -XX:+UseConcMarkSweepGC -XX:+CMSParallelRemarkEnabled\n    -XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=<percent>\n    -XX:+ScavengeBeforeFullGC -XX:+CMSScavengeBeforeRemark\n    -XX:+PrintGCDateStamps -verbose:gc -XX:+PrintGCDetails -Xloggc:"<path to log>"\n    -XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=10 -XX:GCLogFileSize=100M\n    -Dsun.net.inetaddr.ttl=<TTL in seconds>\n    -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=<path to dump>`date`.hprof\n    -Djava.rmi.server.hostname=<external IP>\n    -Dcom.sun.management.jmxremote.port=<port> \n    -Dcom.sun.management.jmxremote.authenticate=false \n    -Dcom.sun.management.jmxremote.ssl=false\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Java >= 8"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'    -server\n    -Xms<heap size>[g|m|k] -Xmx<heap size>[g|m|k]\n    -XX:MaxMetaspaceSize=<metaspace size>[g|m|k]\n    -Xmn<young size>[g|m|k]\n    -XX:SurvivorRatio=<ratio>\n    -XX:+UseConcMarkSweepGC -XX:+CMSParallelRemarkEnabled\n    -XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=<percent>\n    -XX:+ScavengeBeforeFullGC -XX:+CMSScavengeBeforeRemark\n    -XX:+PrintGCDateStamps -verbose:gc -XX:+PrintGCDetails -Xloggc:"<path to log>"\n    -XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=10 -XX:GCLogFileSize=100M\n    -Dsun.net.inetaddr.ttl=<TTL in seconds>\n    -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=<path to dump>`date`.hprof\n    -Djava.rmi.server.hostname=<external IP>\n    -Dcom.sun.management.jmxremote.port=<port> \n    -Dcom.sun.management.jmxremote.authenticate=false \n    -Dcom.sun.management.jmxremote.ssl=false\n'})})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(6540);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);