---
title: "Fixing python based applications SSL Errors"
date: "2024-06-12"
categories: 
  - "linux"
  - "archlinux"
---
When running python based apps in ArchLinux which returns errors like following:
```
http: error: SSLError: HTTPSConnectionPool(host='api.ipify.org', port=443): Max retries exceeded with url: /?format=json (Caused by SSLError(SSLCertVerificationError(1, '[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1000)'))) while doing a GET request to URL: https://api.ipify.org/?format=json
```

Just run...

```shell
yay -S python-pip-system-certs --noconfirm
```