---
title: "Excluding Subsystems from JBOSS/WILDFLY Applicaton"
date: "2017-06-19"
categories: 
  - "javaee"
  - "jboss-eap-wildfly"
---

Just create a jboss-deployment-structure.xml inside your /META-INF/ context path folder  with these contents, for example:

\[gist https://gist.github.com/rafaelszp/099e90ff18aaee20f662cf21d749d66c/\]

In this example I'm excluding JPA and Hibernate subsystems.
