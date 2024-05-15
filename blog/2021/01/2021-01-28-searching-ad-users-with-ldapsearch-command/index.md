---
title: "Searching AD Users with ldapsearch command"
date: "2021-01-28"
categories: 
  - "linux"
---

### Without TLS

```bash
ldapsearch -D "CN=myuser,CN=Users,DC=example,DC=net" -w mypassword -H "ldap://myserver.example.com:389" -b "OU=mycompany,CN=Users,DC=example,DC=net" -s sub "CN=myuser"
```

### With TLS

```bash
ldapsearch -D "CN=myuser,CN=Users,DC=example,DC=net" -w mypassword -H "ldaps://myserver.example.com:636" -b "OU=mycompany,CN=Users,DC=example,DC=net" -Z -s sub "CN=myuser"
```

**Reference:** [https://linux.die.net/man/1/ldapsearch](https://linux.die.net/man/1/ldapsearch)

### Update

If ldapsearch return the following error:

```
ldap_start_tls: Can't contact LDAP server (-1)
	additional info: error:1416F086:SSL routines:tls_process_server_certificate:certificate verify failed (unable to get local issuer certificate)
ldap_sasl_bind(SIMPLE): Can't contact LDAP server (-1)

```

Then edit `/etc/openldap/ldap.conf` or `/etc/ldap/ldap.conf` and add these lines:

```
HOST myserver.example.com
PORT 636
TLS_REQCERT never
```
