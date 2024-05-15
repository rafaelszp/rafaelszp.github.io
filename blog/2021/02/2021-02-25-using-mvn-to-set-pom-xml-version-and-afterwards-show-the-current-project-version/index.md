---
title: "Using mvn to set pom.xml version and afterwards  show the current project version"
date: "2021-02-25"
categories: 
  - "javaee"
  - "maven"
---

**Setting a new version**

```bash
mvn versions:set -DnewVersion=1.0.3-SNAPSHOT
```

**Showing current project version**

```bash
MVN_VERSION=$(mvn -q -Dexec.executable=echo -Dexec.args='${project.version}' --non-recursive  exec:exec); echo $MVN_VERSION
```

**References:**

1. https://www.mojohaus.org/versions-maven-plugin/examples/set.html
2. https://stackoverflow.com/a/26514030
3. https://www.mojohaus.org/exec-maven-plugin/
