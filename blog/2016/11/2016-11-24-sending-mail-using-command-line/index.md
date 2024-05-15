---
title: "Sending mail using command line"
date: "2016-11-24"
categories: 
  - "linux"
---

**Sending file**

```

mail -s "[Subject] Test " -a "From: user@example.com" dest@example.com < /path/to/file.txt

```

**Using echo command**

```
echo "Email body - Test" | mail -s "[Subject] Teste " -a "From: USER" dest@example.com

```

 **Using mailx**

```
echo "This is the message body and contains the message" | mailx -v -r "USER" -s "This is the subject" -S smtp="smtp.example.com" user@gmail.com

```

**With auth**

```
echo "Authenticated message" | mailx -v -s "Subject" -S smtp="smtp.gmail.com:587" -S smtp-use-starttls -S smtp-auth=login -S smtp-auth-user="mygmail@gmail.com" -S smtp-auth-password="mypassword" -S ssl-verify=ignore someone@example.com

```
