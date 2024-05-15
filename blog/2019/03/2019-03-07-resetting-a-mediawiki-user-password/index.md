---
title: "Resetting a mediawiki user password"
date: "2019-03-07"
categories: 
  - "linux"
---

1. Change dir to mediawiki home
2. Execute the following command:
    
    ```
    php ./maintenance/changePassword.php --user=<USERNAME> --password=<NEW_PWD>
    
    ```
