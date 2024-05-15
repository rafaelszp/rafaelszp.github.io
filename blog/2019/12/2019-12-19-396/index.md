---
title: "Elasticsearch General commands"
date: "2019-12-19"
---

Setando número de réplicas

```bash
curl -XPUT http://10.21.152.133:9200/_settings -d '{ "number_of_replicas" :0 }'
curl -XPUT http://10.21.152.133:9200/_settings -d '{ "number_of_replicas" :1 }'
```

Habilitando roteamento de alocação automático. Isto é bom fazer depois de reiniciar, antes de reiniciar o valor deve ser none

```bash
curl -XPUT http://10.21.152.133:9200/_cluster/settings -d '
{
    "transient" : {
        "cluster.routing.allocation.enable": "all"
    }
}'
```

Mapeando saúde dos índices do cluster

```
curl -s "http://10.21.152.133:9200/_cluster/health?level=indices" | \
    jq '.indices | map_values(.status)'
```

Cluster health geral

```bash
http://10.21.152.133:9200/_cluster/health?pretty
```

Status do servidor

```bash
http://10.21.152.133:9200/_stats 
```

Exibindo settings

```bash
http://10.21.152.133:9200/_settings?pretty
```

Exibindo Status dos indices (STARTED x UNASSIGNED)

```bash
http://10.21.152.133:9200/_cat/shards?v&pretty
```

Allocation status

```bash
http://10.21.152.133:9200/_cluster/allocation/explain?pretty
```

Checando stats de um index

```bash
http://10.21.152.133:9200/.kibana/_stats
```

Copiando índice de um servidor remoto

```
POST _reindex
{
  "source": {
    "remote": {
      "host": "http://otherhost:9200",
      "username": "user",
      "password": "pass"
    },
    "index": "source",
    "query": {
      "match": {
        "test": "data"
      }
    }
  },
  "dest": {
    "index": "dest"
  }
}
```

Reindexando índices diários(daily)

```
POST _reindex
{
  "source": {
    "index": "metricbeat-*"
  },
  "dest": {
    "index": "metricbeat"
  },
  "script": {
    "lang": "painless",
    "source": "ctx._index = 'metricbeat-' + (ctx._index.substring('metricbeat-'.length(), ctx._index.length())) + '-1'"
  }
}
```

Outras operações de reindex:

https://www.elastic.co/guide/en/elasticsearch/reference/6.8/docs-reindex.html

https://www.elastic.co/guide/en/elasticsearch/reference/5.4/docs-reindex.html
