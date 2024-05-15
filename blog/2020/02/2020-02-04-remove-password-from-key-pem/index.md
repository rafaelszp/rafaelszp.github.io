---
title: "Remove password from key/pem"
date: "2020-02-04"
categories: 
  - "linux"
---

When you generate a new SSL certificate protected with password you will always be asked by your webserver about that password when you need to restart your webserver with the following sentence:

```bash
Enter PEM pass phrase:
```

That's annoying after 20239482309 changes, so let's remove that password:

```bash
openssl rsa -in csr_with_pwd.key -out csr_no_pwd.key
```
