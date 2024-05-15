---
title: "Logging into keycloak using auth URL"
date: "2017-04-26"
categories: 
  - "javaee"
  - "jboss-eap-wildfly"
---
```
URL: http://{keycloak_url}/auth/realms/{realm}/protocol/openid-connect/token
Request Headers:

grant_type:password client_id:{client_id} response_type:token username:{username} password:{password} client_secret: {client_secret} -> Just needed when Access type = confidential
```
