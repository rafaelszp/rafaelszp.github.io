---
title: "Forcing new SameSite and Secure values into nginx reverse proxied resource"
date: "2020-07-28"
categories: 
  - "linux"
  - "nginx"
---

```ruby
location /resource {
  proxy_cookie_path ~^/(.+)$ "/$1; SameSite=none; Secure; " #this will do the trick
  proxy_pass http://your_endpoint:1234/resource;
} 
```

Now your ships are burned and your server will tamper your cookies with the above values.
