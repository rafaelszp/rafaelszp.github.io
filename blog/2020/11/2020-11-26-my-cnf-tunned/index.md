---
title: "my.cnf tunned"
date: "2020-11-26"
---

```bash
[mysqld]
local-infile=0
max_connections = 600
max_user_connections=1000
key_buffer_size = 512M
myisam_sort_buffer_size = 64M
read_buffer_size = 1M
table_open_cache = 5000
thread_cache_size = 384
wait_timeout = 20
connect_timeout = 10
tmp_table_size = 256M
max_heap_table_size = 128M
max_allowed_packet = 64M
net_buffer_length = 16384
max_connect_errors = 10
concurrent_insert = 2
read_rnd_buffer_size = 786432
bulk_insert_buffer_size = 8M
query_cache_limit = 5M
query_cache_size = 128M
query_cache_type = 1
query_prealloc_size = 262144
query_alloc_block_size = 65535
transaction_alloc_block_size = 8192
transaction_prealloc_size = 4096
max_write_lock_count = 8
slow_query_log
log-error
external-locking=FALSE
open_files_limit=50000

[mysqld_safe]

[mysqldump]
quick
max_allowed_packet = 16M

[isamchk]
key_buffer = 384M
sort_buffer = 384M
read_buffer = 256M
write_buffer = 256M

[myisamchk]
key_buffer = 384M
sort_buffer = 384M
read_buffer = 256M
write_buffer = 256M

#### Per connection configuration ####
sort_buffer_size = 1M
join_buffer_size = 1M
thread_stack = 192K
```

outro link: https://mariadb.com/kb/en/configuring-mariadb-for-optimal-performance/
