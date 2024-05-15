---
title: "Using vanilla Javascript to strip accents"
date: "2020-05-08"
categories: 
  - "javascript"
---

The following example is a good one to use in Pentaho DI to map string values without any acentuation:

```jscript
var accentsTidy = function(s){
    var r=s.toLowerCase();
//    r = r.replace(new RegExp(/\s/g),""); // uncomment if you also want to strips spaces
    r = r.replace(new RegExp(/[àáâãäå]/g),"a");
    r = r.replace(new RegExp(/æ/g),"ae");
    r = r.replace(new RegExp(/ç/g),"c");
    r = r.replace(new RegExp(/[èéêë]/g),"e");
    r = r.replace(new RegExp(/[ìíîï]/g),"i");
    r = r.replace(new RegExp(/ñ/g),"n");                
    r = r.replace(new RegExp(/[òóôõö]/g),"o");
    r = r.replace(new RegExp(/œ/g),"oe");
    r = r.replace(new RegExp(/[ùúûü]/g),"u");
    r = r.replace(new RegExp(/[ýÿ]/g),"y");
//    r = r.replace(new RegExp(/\W/g),""); // uncomment if you also want to strips non-word chars
    return r.toUpperCase();
};

var str = accentsTidy("Internacionalização")
```

Reference: [https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript](https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript)
