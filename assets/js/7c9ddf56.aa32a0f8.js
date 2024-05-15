"use strict";(self.webpackChunkrafaelszp_github_io=self.webpackChunkrafaelszp_github_io||[]).push([[5269],{7771:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=e(4848),r=e(8453);const s={title:"Improving ArchLinux fonts",date:"2017-12-15",categories:["arch-linux"]},o=void 0,a={permalink:"/blog/2017/12/15/2017/12/improving-archlinux-fonts",editUrl:"https://github.com/rafaelszp/rafaelszp.github.io/tree/master/blog/blog/2017/12/2017-12-15-improving-archlinux-fonts/index.md",source:"@site/blog/2017/12/2017-12-15-improving-archlinux-fonts/index.md",title:"Improving ArchLinux fonts",description:"I got this tutorial from reddit//www.reddit.com/r/archlinux/comments/5r5ep8/make\\your\\arch\\fonts\\beautiful\\easily/",date:"2017-12-15T00:00:00.000Z",tags:[],readingTime:.575,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Improving ArchLinux fonts",date:"2017-12-15",categories:["arch-linux"]},unlisted:!1,prevItem:{title:"Fixing missing EFI partition after pacman upgrade",permalink:"/blog/2017/12/15/2017/12/fixing-missing-efi-partition-after-pacman-upgrade"},nextItem:{title:"JVM Args",permalink:"/blog/2017/12/08/2017/12/jvm-args"}},c={authorsImageUrls:[]},l=[];function d(n){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["I got this tutorial from reddit:\xa0",(0,i.jsx)(t.a,{href:"https://www.reddit.com/r/archlinux/comments/5r5ep8/make_your_arch_fonts_beautiful_easily/",children:"https://www.reddit.com/r/archlinux/comments/5r5ep8/make_your_arch_fonts_beautiful_easily/"})]}),"\n",(0,i.jsx)(t.p,{children:"Install some fonts, for example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"sudo pacman -S ttf-dejavu ttf-liberation noto-fonts\n\n"})}),"\n",(0,i.jsx)(t.p,{children:"Enable font presets by creating symbolic links:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"sudo ln -s /etc/fonts/conf.avail/70-no-bitmaps.conf /etc/fonts/conf.d\nsudo ln -s /etc/fonts/conf.avail/10-sub-pixel-rgb.conf /etc/fonts/conf.d\nsudo ln -s /etc/fonts/conf.avail/11-lcdfilter-default.conf /etc/fonts/conf.d\n\n"})}),"\n",(0,i.jsx)(t.p,{children:"Enable FreeType subpixel hinting mode by editing:"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"/etc/profile.d/freetype2.sh"})})," Uncomment the desired mode at the end:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'export FREETYPE_PROPERTIES="truetype:interpreter-version=40"\n\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Create ",(0,i.jsx)(t.strong,{children:"/etc/fonts/local.conf"})," with following:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'<?xml version="1.0"?>\n<!DOCTYPE fontconfig SYSTEM "fonts.dtd">\n<fontconfig>\n <match>\n <edit mode="prepend" name="family"><string>Noto Sans</string></edit>\n </match>\n <match target="pattern">\n <test qual="any" name="family"><string>serif</string></test>\n <edit name="family" mode="assign" binding="same"><string>Noto Serif</string></edit>\n </match>\n <match target="pattern">\n <test qual="any" name="family"><string>sans-serif</string></test>\n <edit name="family" mode="assign" binding="same"><string>Noto Sans</string></edit>\n </match>\n <match target="pattern">\n <test qual="any" name="family"><string>monospace</string></test>\n <edit name="family" mode="assign" binding="same"><string>Noto Mono</string></edit>\n </match>\n</fontconfig>\n\n\n'})})]})}function m(n={}){const{wrapper:t}={...(0,r.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>o,x:()=>a});var i=e(6540);const r={},s=i.createContext(r);function o(n){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),i.createElement(s.Provider,{value:t},n.children)}}}]);