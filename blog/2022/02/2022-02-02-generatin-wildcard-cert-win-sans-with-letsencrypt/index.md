---
title: "Generatin wildcard cert win SAN's with letsencrypt"
date: "2022-02-02"
categories: 
  - "linux"
---

### Step 1

Generate the wildcard cert

```bash
certbot-auto certonly --manual \
	--preferred-challenges=dns \
	--email myemail@myemail.com \
	--server https://acme-v02.api.letsencrypt.org/directory \
	--agree-tos \
	-d *.mydomain.com
```

### Step 2

After adding TXT entry into your DNS server and confirming the previous operation worked, add the SAN's with the following command:

```bash
certbot-auto certonly --manual --server https://acme-v02.api.letsencrypt.org/directory --expand -d mydomain.com,myanotherdomain.com,mythirdmydomain.com
```
