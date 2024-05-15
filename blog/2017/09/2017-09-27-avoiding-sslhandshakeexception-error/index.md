---
title: "Avoiding SSLHandshakeException Error"
date: "2017-09-27"
categories: 
  - "javaee"
---

The following error is annoying:

```
Caused by: javax.net.ssl.SSLHandshakeException: sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target

```

To avoid this problem, just save the site certificate(e.g. Firefox cert export) and execute the following command in your server:

JAVA8

```
keytool -import -alias $ALIAS -keystore $JAVA_HOME/jre/lib/security/cacerts -file $PATH_TO_PEM_FILE

```

JAVA7

```
keytool -keystore $JAVA_HOME/jre/lib/security/cacerts -importcert -alias sistemafieg -file $PATH_TO_PEM_FILE

```

#### Update

In case you already imported your crt once you can remove by entering the following command:

```bash
keytool -delete -alias $ALIAS -storepass $PASS -keystore $JAVA_HOME/jre/lib/security/cacerts 
```

After that you can import your cert again
