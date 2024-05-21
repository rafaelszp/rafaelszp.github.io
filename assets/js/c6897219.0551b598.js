"use strict";(self.webpackChunkrafaelszp_github_io=self.webpackChunkrafaelszp_github_io||[]).push([[84],{9710:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=t(4848),r=t(8453);const a={title:"Elasticsearch General commands",date:"2019-12-19"},i=void 0,c={permalink:"/blog/2019/12/19/2019/12/396",editUrl:"https://github.com/rafaelszp/rafaelszp.github.io/tree/master/blog/blog/2019/12/2019-12-19-396/index.md",source:"@site/blog/2019/12/2019-12-19-396/index.md",title:"Elasticsearch General commands",description:"Setando n\xfamero de r\xe9plicas",date:"2019-12-19T00:00:00.000Z",tags:[],readingTime:.96,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Elasticsearch General commands",date:"2019-12-19"},unlisted:!1,prevItem:{title:"Remove password from key/pem",permalink:"/blog/2020/02/04/2020/02/remove-password-from-key-pem"},nextItem:{title:"Finding files bigger than a value in Linux with find command",permalink:"/blog/2019/12/11/2019/12/finding-files-bigger-than-a-value-in-linux-with-find-command"}},d={authorsImageUrls:[]},l=[];function o(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Setando n\xfamero de r\xe9plicas"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -XPUT http://10.21.152.133:9200/_settings -d '{ \"number_of_replicas\" :0 }'\ncurl -XPUT http://10.21.152.133:9200/_settings -d '{ \"number_of_replicas\" :1 }'\n"})}),"\n",(0,s.jsx)(n.p,{children:"Habilitando roteamento de aloca\xe7\xe3o autom\xe1tico. Isto \xe9 bom fazer depois de reiniciar, antes de reiniciar o valor deve ser none"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -XPUT http://10.21.152.133:9200/_cluster/settings -d \'\n{\n    "transient" : {\n        "cluster.routing.allocation.enable": "all"\n    }\n}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"Mapeando sa\xfade dos \xedndices do cluster"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl -s \"http://10.21.152.133:9200/_cluster/health?level=indices\" | \\\n    jq '.indices | map_values(.status)'\n"})}),"\n",(0,s.jsx)(n.p,{children:"Cluster health geral"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"http://10.21.152.133:9200/_cluster/health?pretty\n"})}),"\n",(0,s.jsx)(n.p,{children:"Status do servidor"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"http://10.21.152.133:9200/_stats \n"})}),"\n",(0,s.jsx)(n.p,{children:"Exibindo settings"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"http://10.21.152.133:9200/_settings?pretty\n"})}),"\n",(0,s.jsx)(n.p,{children:"Exibindo Status dos indices (STARTED x UNASSIGNED)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"http://10.21.152.133:9200/_cat/shards?v&pretty\n"})}),"\n",(0,s.jsx)(n.p,{children:"Allocation status"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"http://10.21.152.133:9200/_cluster/allocation/explain?pretty\n"})}),"\n",(0,s.jsx)(n.p,{children:"Checando stats de um index"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"http://10.21.152.133:9200/.kibana/_stats\n"})}),"\n",(0,s.jsx)(n.p,{children:"Copiando \xedndice de um servidor remoto"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'POST _reindex\n{\n  "source": {\n    "remote": {\n      "host": "http://otherhost:9200",\n      "username": "user",\n      "password": "pass"\n    },\n    "index": "source",\n    "query": {\n      "match": {\n        "test": "data"\n      }\n    }\n  },\n  "dest": {\n    "index": "dest"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Reindexando \xedndices di\xe1rios(daily)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'POST _reindex\n{\n  "source": {\n    "index": "metricbeat-*"\n  },\n  "dest": {\n    "index": "metricbeat"\n  },\n  "script": {\n    "lang": "painless",\n    "source": "ctx._index = \'metricbeat-\' + (ctx._index.substring(\'metricbeat-\'.length(), ctx._index.length())) + \'-1\'"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Outras opera\xe7\xf5es de reindex:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.8/docs-reindex.html",children:"https://www.elastic.co/guide/en/elasticsearch/reference/6.8/docs-reindex.html"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/5.4/docs-reindex.html",children:"https://www.elastic.co/guide/en/elasticsearch/reference/5.4/docs-reindex.html"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(6540);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);