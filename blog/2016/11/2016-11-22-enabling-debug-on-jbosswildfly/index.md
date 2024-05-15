---
title: "Enabling debug on JBoss/Wildfly"
date: "2016-11-22"
categories: 
  - "javaee"
  - "jboss-eap-wildfly"
---

Just include the following arguments to JAVA\_OPTS or command line:

```
 

-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=4060


```

Where 4060 is the port number you will use to debug.

Example of use:

```

[user@localhost ~]$ $JBOSS_HOME/bin/standalone.bat -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=4060


```
