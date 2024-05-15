---
title: "Installing GenyMotion on Fedora"
date: "2016-11-22"
categories: 
  - "git"
  - "linux"
---

# Installing GenyMotion on Fedora

1. Preparing our environment
    
    ```
    sudo -s
    dnf -y install @development-tools 
    dnf -y install binutils rpm-build fedora-packager chrpath
    ```
    
2. Download installer
    
    ```
    wget -c https://raw.githubusercontent.com/kuboosoft/spec-testing/master/SRPM/genymotion-rpm
    
    chmod a+x genymotion-rpm
    
    ./genymotion-rpm
    ```
    
3. Installing
    
    ```
    sudo -s
    dnf install $HOME/rpmbuild/RPMS/$(uname -m)/genymotion*.rpm
    ```
    
4. Enabling libgcrypt11
    
    ```
    sudo dnf copr enable red/libgcrypt.so.11
    sudo dnf install compat-libgcrypt
    sudo dnf upgrade qt5-* -y
    ```
