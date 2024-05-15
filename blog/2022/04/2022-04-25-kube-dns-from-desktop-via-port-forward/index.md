---
title: "Kube dns from desktop via port forward"
date: "2022-04-25"
categories: 
  - "kubernetes"
---

This is a copy, please use the original article

Original: [kubiosec](https://blog.kubiosec.io/accessing-kube-dns-from-your-desktop)

1. Setup port-forwarding

First, we need to create a port-forwarding tunnel. kubectl port-forward currenlty does not support UDP, only TCP. We need to keep this in mind, since DNS uses UDP by default.

sudo kubectl port-forward svc/kube-dns -n kube-system 53:53 &

2. Using NSLOOKUP

NSLOOKUP requires to set some sort of configuration. First we configure NSLOOKUP to use TCP with the set vc option. Secondly we point NSLOOKUP to use localhost as the new DNS server.

```bash
$ nslookup
> set vc
> server 127.0.0.1
Default server: 127.0.0.1
Address: 127.0.0.1#53
> set debug
> set q=A

> www.radarhack.com
Server:        127.0.0.1
Address:    127.0.0.1#53

------------
    QUESTIONS:
    www.radarhack.com, type = A, class = IN
    ANSWERS:
    ->  www.radarhack.com
    internet address = 198.199.124.250
    ttl = 30
    AUTHORITY RECORDS:
    ADDITIONAL RECORDS:
------------
Non-authoritative answer:
Name:    www.radarhack.com
Address: 198.199.124.250

> www.default.svc.cluster.local
Server:        127.0.0.1
Address:    127.0.0.1#53

------------
    QUESTIONS:
    www.default.svc.cluster.local, type = A, class = IN
    ANSWERS:
    ->  www.default.svc.cluster.local
    internet address = 10.105.12.40
    ttl = 30
    AUTHORITY RECORDS:
    ADDITIONAL RECORDS:
------------
Name:    www.default.svc.cluster.local
Address: 10.105.12.40
```

3. Using DIG

```shell
$ dig +tcp @127.0.0.1 www.kubiosec.io

; <<>> DiG 9.10.6 <<>> +tcp @127.0.0.1 www.kubiosec.io
; (1 server found)
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 60803
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;www.kubiosec.io.        IN    A

;; ANSWER SECTION:
www.kubiosec.io.    30    IN    A    162.159.153.4

;; Query time: 84 msec
;; SERVER: 127.0.0.1#53(127.0.0.1)
;; WHEN: Sat Mar 26 18:58:14 CET 2022
;; MSG SIZE  rcvd: 75

dig +tcp @127.0.0.1 kubernetes.default.svc.cluster.local

; <<>> DiG 9.10.6 <<>> +tcp @127.0.0.1 kubernetes.default.svc.cluster.local
; (1 server found)
;; global options: +cmd
;; Got answer:
;; WARNING: .local is reserved for Multicast DNS
;; You are currently testing what happens when an mDNS query is leaked to DNS
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 28465
;; flags: qr aa rd; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1
;; WARNING: recursion requested but not available

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;kubernetes.default.svc.cluster.local. IN A

;; ANSWER SECTION:
kubernetes.default.svc.cluster.local. 30 IN A    10.96.0.1

;; Query time: 13 msec
;; SERVER: 127.0.0.1#53(127.0.0.1)
;; WHEN: Sat Mar 26 18:59:06 CET 2022
;; MSG SIZE  rcvd: 117
```

4. Service enumeration

kube-dns also support the SRV record. This record allows you to discover the services a.k.a. ports of specific services. It is also a great hacking trick to list all services in kubernetes, just by using DNS.

```shell
$ dig +tcp @127.0.0.1 kubernetes.default.svc.cluster.local

; <<>> DiG 9.10.6 <<>> +tcp @127.0.0.1 kubernetes.default.svc.cluster.local
; (1 server found)
;; global options: +cmd
;; Got answer:
;; WARNING: .local is reserved for Multicast DNS
;; You are currently testing what happens when an mDNS query is leaked to DNS
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 28465
;; flags: qr aa rd; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1
;; WARNING: recursion requested but not available

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;kubernetes.default.svc.cluster.local. IN A

;; ANSWER SECTION:
kubernetes.default.svc.cluster.local. 30 IN A    10.96.0.1

;; Query time: 13 msec
;; SERVER: 127.0.0.1#53(127.0.0.1)
;; WHEN: Sat Mar 26 18:59:06 CET 2022
;; MSG SIZE  rcvd: 117

$ dig +noall +answer +tcp @127.0.0.1 srv any.any.svc.cluster.local
any.any.svc.cluster.local. 30    IN    SRV    0 12 80 www.default.svc.cluster.local.
any.any.svc.cluster.local. 30    IN    SRV    0 12 443 kubernetes.default.svc.cluster.local.
any.any.svc.cluster.local. 30    IN    SRV    0 12 53 kube-dns.kube-system.svc.cluster.local.
any.any.svc.cluster.local. 30    IN    SRV    0 12 9153 kube-dns.kube-system.svc.cluster.local.
```
