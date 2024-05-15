---
title: "Retrieving logged user info from Keycloak"
date: "2017-04-26"
categories: 
  - "javaee"
  - "jboss-eap-wildfly"
---

Just do a GET to the keycloak URL:

 
~~~
http://{SERVER_URL}/auth/realms/{realm}/protocol/openid-connect/userinfo
~~~
 

Dont forget to send this request with you authorization header. Ex:

Authorization: Bearer {token}
