---
title: "Download a LDAP certificate using openssl linux command"
date: "2019-04-10"
categories: 
  - "linux"
---

To download a LDAP certificate using openssl type the following command in you shell:

```
echo -n | openssl s_client -connect 192.168.1.225:636 | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > ldapserver.pem
```

Credits to: [https://stackoverflow.com/questions/7084482/how-to-save-the-ldap-ssl-certificate-from-openssl](https://stackoverflow.com/questions/7084482/how-to-save-the-ldap-ssl-certificate-from-openssl)
