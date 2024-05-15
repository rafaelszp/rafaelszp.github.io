---
title: "Debugging Jupyter Notebooks with Python3.6"
date: "2018-02-14"
categories: 
  - "jupyter-notebooks"
  - "python"
---

First of all, you need to place the following line above the one you want to debug: `from IPython.core.debugger import Pdb; Pdb().set_trace()`

Then run the cell you want to debug. After that, a console will be prompted. Next, type a command or the  variable name you want to look into.

Here are some commands :

1. **q** -> quit
2. **n** -> next
3. **p** -> print . Could be a variable or something like 'hello world'
4. **a** -> show the arguments of the current function
5. **b** -> insert a breakpoint in the current line
6. **c** -> continue to the next breakpoint
7. **s** -> step into
8. **r** -> execute script until leaves the current function
