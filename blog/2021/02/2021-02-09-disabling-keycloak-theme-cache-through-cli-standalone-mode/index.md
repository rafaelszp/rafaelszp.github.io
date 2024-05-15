---
title: "Disabling Keycloak theme cache through CLI (standalone mode)"
date: "2021-02-09"
categories: 
  - "keycloak"
---

##### Step 1 - run jboss-cli.sh

```bash
$KEYCLOAK_HOME/bin/jboss-cli.sh -c
```

##### Step2 - Run the following commands

```bash
/subsystem=keycloak-server/theme=defaults/:write-attribute(name=cacheThemes,value=false)
/subsystem=keycloak-server/theme=defaults/:write-attribute(name=cacheTemplates,value=false)
/subsystem=keycloak-server/theme=defaults/:write-attribute(name=staticMaxAge,value=-1)
reload
```
