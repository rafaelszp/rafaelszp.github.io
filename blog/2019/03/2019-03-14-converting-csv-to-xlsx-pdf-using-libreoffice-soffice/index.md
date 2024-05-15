---
title: "Converting CSV to XLSX/PDF using Libreoffice/SOffice"
date: "2019-03-14"
categories: 
  - "linux"
---

### **FROM CSV TO PDF**

```bash
libreoffice --headless --convert-to pdf:calc_pdf_Export --outdir ./export/ file.csv
```

### FROM CSV TO XLSX

```bash
libreoffice --headless --convert-to xlsx:"Calc MS Excel 2007 XML" --outdir ./export/ file.csv
```

**PS:** Newer versions use **soffice** instead.
