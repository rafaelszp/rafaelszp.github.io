---
title: "React routers and Java backend(Wildfly)"
date: "2018-09-19"
categories: 
  - "javaee"
  - "javascript"
  - "jboss-eap-wildfly"
  - "react"
---

When you use Java as backend(Wildfy 10+) for your web apps you'll need to create a rewrite rule in order to your routes work properly.

So, first of all, you'll need to add to the **WEB-INF/undertow-handlers.conf** all paths that won't be managed by your react application like example below:

```bash
path-prefix('/api') -> done
path-prefix('/static') -> done
path-prefix('/images/') -> done
path-prefix('/templates') -> done
path-prefix('/other-stuff') -> done
path-prefix('/report') -> done
```

So you'll need to provide the default rewrite rules for all addresses that will be managed(rewritten to) react js application, like example below

```bash
path-prefix('/') -> rewrite('/')
```

**P.S.** This might work with angular and other JS frameworks as well.

Reference: [http://undertow.io/undertow-docs/undertow-docs-1.3.0/predicates-attributes-handlers.html](http://undertow.io/undertow-docs/undertow-docs-1.3.0/predicates-attributes-handlers.html)

For the sake of simplicity you can check the complete example below:

```bash
path-prefix('/api') -> done
path-prefix('/static') -> done
path-prefix('/images/') -> done
path-prefix('/templates') -> done
path-prefix('/other-stuff') -> done
path-prefix('/report') -> done
path-prefix('/') -> rewrite('/')
```
