---
title: "List biggest indexes in elastic search"
date: "2018-05-17"
categories: 
  - "linux"
---

Just send a GET to [http://ELASTIC\_SEARCH\_HOST:9200/\_cat/indices?v&s=store.size:desc](http://ELASTIC_SEARCH_HOST:9200/_cat/indices?v&s=store.size:desc)
