---
title: "Checking if jar file is Valid"
date: "2023-10-30"
---

```shell
for j in $(find $PATH_TO_LIB -name '*.jar'); do jar -tvf $j > /dev/null 2>&1; [ "$?" -ne 0 ] && echo "$j jar is broken"; done
```

Reference: https://stackoverflow.com/a/54930734
