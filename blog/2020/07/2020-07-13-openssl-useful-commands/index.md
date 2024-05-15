---
title: "OpenSSL - useful commands"
date: "2020-07-13"
categories: 
  - "linux"
---

**Disclaimer**

> This is only for my reference purpose. Don't use this article. If you want a realiable source consider reading the original post here [https://www.kinamo.be/en/support/faq/useful-openssl-commands](https://www.kinamo.be/en/support/faq/useful-openssl-commands)

## Certificate requests and key generation

Typically, when you ordered a new SSL certificate you must generate a CSR or certificate signing request, with a new private key:

```bash
openssl req -sha256 -nodes -newkey rsa:2048 -keyout www.server.com.key -out www.server.com.csr
```

##### Generate a new certificate request using an existing private key:

```bash
openssl req -new -sha256 -key www.server.com.key -out www.server.com.csr
```

##### Generate a certificate request starting from an existing certificate:

```bash
openssl x509 -x509toreq -in www.server.com.crt -out www.server.com.csr -signkey www.server.com.key
```

##### Generate a new RSA private key:

```bash
openssl genrsa -out www.server.com.key 2048
```

##### Encrypt a private key with a passphrase:

```bash
openssl rsa -in www.server.com.key -out www.server.com.key -des3
```

##### Remove a passphrase from an encrypted private key:

```bash
openssl rsa -in www.server.com.key -out www.server.com.key
```

##### Generate a new ECC private key:

```bash
openssl ecparam -out server.key -name prime256v1 -genkey
```

## Create a self-signed certificate

Generate a self-signed certificate for testing purposes with one year validity period, together with a new 2048-bit key:

```bash
openssl req -x509 -newkey rsa:2048 -nodes -keyout www.server.com.key -out www.server.com.crt -days 365
```

## View and verify certificates

##### Check and display a certificate request (CSR):

```bash
openssl req -noout -text -verify -in www.server.com.csr
```

##### Verify and display a key pair:

```bash
openssl rsa -noout -text -check -in www.server.com.key
```

##### View a PEM-encoded certificate:

```bash
openssl x509 -noout -text -in www.server.com.crt
```

##### View a certificate encoded in PKCS#7 format:

```bash
openssl pkcs7 -print_certs -in www.server.com.p7b
```

##### View a certificate and key pair encoded in PKCS#12 format:

```bash
openssl pkcs12 -info -in www.server.com.pfx
```

##### Verify an SSL connection and display all certificates in the chain:

```bash
openssl s_client -connect www.server.com:443
```

##### Control whether a certificate, a certificate request and a private key have the same public key:

```bash
openssl x509 -noout -modulus www.server.com.crt | openssl sha256
openssl req -noout -modulus www.server.com.csr | openssl sha256
openssl rsa -noout -modulus www.server.com.key | openssl sha256
```

##### Check a certificate and its intermediate certificate chain for web server purposes:

```bash
openssl verify -purpose sslserver -CAfile certificatebundle.pem -verbose www.server.com.crt
```

## Certificate conversion

##### Conversion of PKCS#12 ( .pfx .p12, typically used on Microsoft Windows) files with private key and certificate to PEM (typically used on Linux):

```bash
openssl pkcs12 -nodes -in www.server.com.pfx -out www.server.com.crt
```

##### Conversion of PEM to PKCS#12:

```bash
openssl pkcs12 -export -in www.server.com.crt -inkey www.server.com.key -out www.server.com.pfx
```

##### Conversion of PKCS#7 format ( .p7b .p7c ) to PEM:

```bash
openssl pkcs7 -print_certs -in www.server.com.p7b -out www.server.com.crt  
```

##### Conversion of PEM format to PKCS#7:

```bash
openssl crl2pkcs7 -nocrl -certfile www.server.com.crt -out www.server.com.p7b
```

##### Conversion of DER (.crt .cer or .der) to PEM:

```bash
openssl x509 -inform der -in certificate.cer -out certificate.pem
```

##### Conversion from PEM to DER format:

```bash
openssl x509 -outform der -in certificate.pem -out certificate.cer
```

## Checking SSL Connections

This will output the website's certificate, including any intermediate certificates

```bash
openssl s_client -connect https://www.server.com:443
```
