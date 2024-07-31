---
title: "Publishing a jar to private maven repository"
date: "2024-07-31"
categories: 
  - "windows"
  - "linux"
  - "maven"
  - "java
---

## Example 1- Publishing to AWS

1. setup maven settings xml file
```xml
<settings>
    <servers>
        <server>
            <id>codeartifact</id>
            <username>aws</username>
            <password>${env.CODEARTIFACT_AUTH_TOKEN}</password>
        </server>
    </servers>
</settings>
```

2. publish with mvn
```shell
mvn deploy:deploy-file -DgroupId=commons-cli          \
-DartifactId=commons-cli       \
-Dversion=1.4                  \
-Dfile=./commons-cli-1.4.jar   \
-Dpackaging=jar                \
-DrepositoryId=codeartifact    \
-Durl=https://my_domain-111122223333.d.codeartifact.region.amazonaws.com/maven/repo-name/
```