---
title: "Disable Firefox annoying HTTPS redirect in Firefox"
date: "2023-12-19"
---

_about:config_ settings:

```
network.stricttransportsecurity.preloadlist false
browser.fixup.fallback-to-https false
dom.security.https_first false
dom.security.https_first_pbm false
```

Credits: https://stackoverflow.com/a/54559584

Optional step: Clear all browsing data (everything)
