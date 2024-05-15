---
title: "Bash strict mode"
date: "2022-01-07"
categories: 
  - "linux"
---

All contents are from this address: http://redsymbol.net/articles/unofficial-bash-strict-mode/  
Consider reading the original article instead.

Headline bash script:

```
#!/bin/bash
set -euo pipefail
IFS=$'\n\t'
```

Reference: http://redsymbol.net/articles/unofficial-bash-strict-mode/

### Explanation

#### set -e

The _set -e_ option instructs bash to immediately exit if any command \[1\] has a non-zero exit status. You wouldn't want to set this for your command-line shell, but in a script it's massively helpful. In all widely used general-purpose programming languages, an unhandled runtime error - whether that's a thrown exception in Java, or a segmentation fault in C, or a syntax error in Python - immediately halts execution of the program; subsequent lines are not executed.

```
set -e
```

#### set -u

_set -u_ affects variables. When set, a reference to any variable you haven't previously defined - with the exceptions of $\* and $@ - is an error, and causes the program to immediately exit. Languages like Python, C, Java and more all behave the same way, for all sorts of good reasons. One is so typos don't create new variables without you realizing it.

```
set -u
```

#### set -o pipefail

This setting prevents errors in a pipeline from being masked. If any command in a pipeline fails, that return code will be used as the return code of the whole pipeline. By default, the pipeline's return code is that of the last command - even if it succeeds.

```
set -o pipefail
```

#### The IFS variable

The IFS variable - which stands for Internal Field Separator - controls what Bash calls word splitting. When set to a string, each character in the string is considered by Bash to separate words. This governs how bash will iterate through a sequence.

```
IFS=$'\n\t'
```

Examples:

[![](https://rafaelszp.files.wordpress.com/2022/01/2022-01-07_14-25.png?w=757)](https://rafaelszp.files.wordpress.com/2022/01/2022-01-07_14-25.png)

[![](https://rafaelszp.files.wordpress.com/2022/01/2022-01-07_14-27.png?w=839)](https://rafaelszp.files.wordpress.com/2022/01/2022-01-07_14-27.png)
