---
title: "Download files from Google Drive using WGET"
date: "2018-02-06"
categories: 
  - "linux"
---

1. First of all you need to share your file by activating download link
2. Extract the file id from the URL from the given URL
    1. Ex.: https://drive.google.com/open?id=abcdef1234
3. Execute:
    
    ```
    wget --load-cookies /tmp/cookies.txt "https://docs.google.com/uc?export=download&confirm=$(wget --quiet --save-cookies /tmp/cookies.txt --keep-session-cookies --no-check-certificate 'https://docs.google.com/uc?export=download&id=Abc1234' -O- | sed -rn 's/.*confirm=([0-9A-Za-z_]+).*/\1\n/p')&id=Abc1234" -O FILENAME && rm -rf /tmp/cookies.txt
    
    ```
    
**PS:** Don't forget to replace Abc1234 by your real file id on google drive
