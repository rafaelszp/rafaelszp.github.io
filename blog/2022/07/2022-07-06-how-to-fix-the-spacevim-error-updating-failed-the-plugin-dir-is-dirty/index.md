---
title: "How to fix the Spacevim error : Updating failed, The plugin dir is dirty"
date: "2022-07-06"
---

First, make sure that you didn’t change any file on ~/.SpaceVim/.

```
cd ~/.SpaceVim.d/
git checkout .

```

then, empty the repos contained in vimfiles cache:

```
rm -rf ~/.cache/vimfiles/repos/github.com/*

```

The error should then disappear
