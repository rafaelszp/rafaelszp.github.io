---
title: "Uploading multipart/form-data in Java: The right way to do it"
date: "2021-10-01"
categories: 
  - "javaee"
---

## With Unirest:

```java

import kong.unirest.ContentType;
import kong.unirest.HttpResponse;
import kong.unirest.Unirest;

import java.io.File;
import java.io.FileInputStream;
import java.nio.charset.StandardCharsets;

public class UnirestTest {

  public static void main(String[] args) throws Exception {

    final File file = new File("/home/rafael/tmp/file-sample.pdf");
    final FileInputStream input = new FileInputStream(file);
    HttpResponse<String> response = Unirest.post("https://httpbin.org:80/post")
      .header("Authorization", "Bearer my_token")
      .header("Accept","*/*")
      .field("file", input, ContentType.create("application/pdf"), "file")
      .asString();

    System.out.println("response = " + response.getStatus());
    System.out.println(response.getBody());
  }


}
```

**Dependency used**

```xml
 <dependency>
      <groupId>com.konghq</groupId>
      <artifactId>unirest-java</artifactId>
      <version>3.12.0</version>
    </dependency>
```

## With OkHttp

```java
import okhttp3.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;

public class OKTest {

  static Logger logger = LoggerFactory.getLogger(OKTest.class);

  public static void main(String[] args) throws Exception{


    OkHttpClient client = new OkHttpClient().newBuilder().build();

    RequestBody requestBody = new MultipartBody.Builder()
      .setType(MultipartBody.FORM)
      .addFormDataPart("file", "file.pdf",
        RequestBody.create(MediaType.parse("application/pdf"),
          new File("/home/rafael/tmp/file-sample.pdf")))
      .build();

    Request request = new Request.Builder()
      .url("https://httpbin.org/post")
      .post(requestBody)
      .addHeader("Authorization", "Bearer my_token")
      .addHeader("Accept","*/*")
      .addHeader("Accept-Encoding","gzip, deflate")
      .build();

    Call call = client.newCall(request);
    Response response = call.execute();
    final String body = new String(response.body().bytes());
    System.out.printf("response code %s body %s\n",response.code(), body);



  }

}

```

**Dependency used:**

```xml
 <dependency>
      <groupId>com.squareup.okhttp3</groupId>
      <artifactId>okhttp</artifactId>
      <version>3.2.0</version>
    </dependency>
```
