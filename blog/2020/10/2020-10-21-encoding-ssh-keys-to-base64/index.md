---
title: "Encoding SSH keys to base64"
date: "2020-10-21"
categories: 
  - "linux"
---

cat chave | base64 | tr -d '\\n' | cat - > chave.b64  
cat chave.pub | base64 | tr -d '\\n' | cat - > chave.pub.b64
