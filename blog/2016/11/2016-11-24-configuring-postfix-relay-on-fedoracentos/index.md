---
title: "Configuring Postfix relay on Fedora/CentOS"
date: "2016-11-24"
categories: 
  - "linux"
---

**Installing libs**

```
yum install postfix mailx cyrus-sasl-plain

```

**Writing smtp authentication config**

```
echo "smtp_user@gmail.com smtp_user:smtp_passwd" > /etc/postfix/sasl_passwd
postmap hash:/etc/postfix/sasl_passwd

```

**Edit _mail.cnf_ file like following**

```
#debug_peer_list=smtp.gmail.com
#debug_peer_level=3

compatibility_level = 2

command_directory = /usr/sbin

daemon_directory = /usr/libexec/postfix

data_directory = /var/lib/postfix
mail_owner = postfix

myhostname = hostname.example.com
mydomain = example.com

inet_interfaces = all
inet_protocols = ipv4

unknown_local_recipient_reject_code = 550

mailq_path = /usr/bin/mailq.postfix

setgid_group = postdrop

html_directory = no

manpage_directory = /usr/share/man

relayhost = smtp.gmail.com
smtp_sender_dependent_authentication = yes
sender_dependent_relayhost_maps = hash:/etc/postfix/relayhost_map
smtp_sasl_auth_enable = yes
smtp_sasl_security_options = noanonymous
smtp_sasl_tls_security_options = noanonymous
smtp_sasl_password_maps = hash:/etc/postfix/sasl_passwd
smtp_use_tls = yes
smtp_tls_CAfile = /etc/ssl/certs/ca-bundle.crt
mynetworks = 14.11.0.0/16
transport_maps = hash:/etc/postfix/transport


```

**Edit /etc/postfix/relayhost\_map file like following:**

```
usu01@gmail.com usu01@gmail.com:senha
usu02@gmail.com usu02@gmail.com:senha

```

**Type this command and hit enter**

```
postmap /etc/postfix/relayhost_map

```

\*\* Include theses lines in /etc/aliases file:\*\*

```
usu01: usu01@gmail.com
usu02: usu02@gmail.com

```

**Type this command and hit enter**

```
postmap /etc/aliases

```

**Edit /etc/postfix/transport file:**

```
* smtp:smtp.gmail.com

```

**Type these command and hit enter**

```
postmap /etc/postfix/transport
service postfix restart

```
