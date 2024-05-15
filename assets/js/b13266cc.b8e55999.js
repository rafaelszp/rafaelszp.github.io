"use strict";(self.webpackChunkrafaelszp_github_io=self.webpackChunkrafaelszp_github_io||[]).push([[7785],{9058:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=s(4848),r=s(8453);const l={title:"Install NFS server on Centos 7.x",date:"2019-04-16",categories:["linux"]},a=void 0,i={permalink:"/blog/2019/04/16/2019/04/install-nfs-server-on-centos-7-x",editUrl:"https://github.com/rafaelszp/rafaelszp.github.io/tree/master/blog/blog/2019/04/2019-04-16-install-nfs-server-on-centos-7-x/index.md",source:"@site/blog/2019/04/2019-04-16-install-nfs-server-on-centos-7-x/index.md",title:"Install NFS server on Centos 7.x",description:"Server",date:"2019-04-16T00:00:00.000Z",tags:[],readingTime:.715,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Install NFS server on Centos 7.x",date:"2019-04-16",categories:["linux"]},unlisted:!1,prevItem:{title:"Resizing linux /tmp  partition on the fly",permalink:"/blog/2019/05/30/2019/05/resizing-linux-tmp-partition-on-the-fly"},nextItem:{title:"Download a LDAP certificate using openssl linux command",permalink:"/blog/2019/04/10/2019/04/download-a-ldap-certificate-using-openssl-linux-command"}},o={authorsImageUrls:[]},c=[{value:"<strong>Server</strong>",id:"server",level:2},{value:"Client",id:"client",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"server",children:(0,t.jsx)(n.strong,{children:"Server"})}),"\n",(0,t.jsx)(n.p,{children:"Execute following commands"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yum install nfs-utils -y\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir <DIRECTORY_TO_SHARE>\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"chmod -R 755 <DIRECTORY_TO_SHARE>\nchown nfsnobody:nfsnobody  <DIRECTORY_TO_SHARE>\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"systemctl enable rpcbind\nsystemctl enable nfs-server\nsystemctl enable nfs-lock\nsystemctl enable nfs-idmap\nsystemctl start rpcbind\nsystemctl start nfs-server\nsystemctl start nfs-lock\nsystemctl start nfs-idmap\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"vi /etc/exports\n"})}),"\n",(0,t.jsx)(n.p,{children:"Inside /etc/exports file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"#assuming you want to whare with all IPs within range 192.168.1.1-255\n<DIRECTORY_TO_SHARE> 192.168.1.*(rw,sync,no_root_squash,no_all_squash)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"systemctl restart nfs-server\n"})}),"\n",(0,t.jsx)(n.h2,{id:"client",children:"Client"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mkdir <SHARED_FOLDER_MOUNTPOINT>\nyum install -y nfs-utils\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"#show list of available shared folders from server\nshowmount -e <SERVER_IP>\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"vi /etc/fstab\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"#add the following line\n<SERVER_IP>:<SERVER_SHARED_FOLDER>    <SHARED_FOLDER_MOUNTPOINT>   nfs defaults 0 0\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"Alternatively you can mount your server shared folder with mount command like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"#Caution: mountpoint will reset after client restart\nmount -t nfs <SERVER_IP>:<SERVER_SHARED_FOLDER> <SHARED_FOLDER_MOUNTPOINT>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var t=s(6540);const r={},l=t.createContext(r);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);