---
title: "VSCODE REST-CLIENT cheatsheet"
date: "2023-09-01"
---

```
### 
# @name meuTeste
GET https://httpbin.org/get HTTP/1.1

###
# @name ipReq
GET https://api.ipify.org
    ?format=json

###

@server = {{meuTeste.response.headers.Server}}
@origin = {{meuTeste.response.body.$.origin}}

@allHeaders = {{meuTeste.response.body.headers}}

@ip = {{ipReq.response.body.$.ip}}

POST https://httpbin.org/post HTTP/1.1
Content-Type: application/json
X-Server: {{server}}
User-Agent: REST CLIENT VSCODE PLUGIN

{
    "servidor": "{{server}}",
    "origin": "{{origin}}",
    "ip": "{{ip}}",
    "user": "{{$processEnv USERNAME}}",
    "username": "{{username}}",
    "password": "{{password}}",
    "all-headers": {{allHeaders}},
    "documentationLink": "https://marketplace.visualstudio.com/items?itemName=humao.rest-client"
    
}


### Exemplo de multipartPOST {{host}}/anything HTTP/1.1
Content-Type: multipart/form-data; boundary=Boundary

--Boundary
Content-Disposition: form-data; name="text"

title of the file
--Boundary
Content-Disposition: form-data; name="text_file"; filename="trustedroot.txt"
Content-Type: text/plain

<@utf8 ./trustedroot.txt

--Boundary
Content-Disposition: form-data; name="file.txt"; filename="file.txt"
Content-Type: text/plain

<@utf8 ./file.txt
--Boundary--

```
