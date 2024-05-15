---
title: "Recursive search and replace text in files within any directory with fd and sed"
date: "2022-12-12"
categories: 
  - "linux"
---

Syntax: `# Syntax fd --full-path <desired directory> --type f --exec sed -i 's/<text to find>/<desired text>/g'`

```bash
fd --full-path mydirectory --type f --exec sed -i 's/oldtext/newtext/g' {}

```

Requirements:

1. cargo installed
2. fd installed via `cargo install fd`
