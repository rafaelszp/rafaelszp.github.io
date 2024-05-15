---
title: "POSTGRESQL: Get connection usage"
date: "2021-11-08"
categories: 
  - "linux"
---

```sql
select max_conn,used,res_for_super,max_conn-used-res_for_super res_for_normal 
from 
  (select count(*) used from pg_stat_activity) t1,
  (select setting::int res_for_super from pg_settings where name=$$superuser_reserved_connections$$) t2,
  (select setting::int max_conn from pg_settings where name=$$max_connections$$) t3

```

**Reference**: [https://dba.stackexchange.com/a/161761](https://dba.stackexchange.com/a/161761)
