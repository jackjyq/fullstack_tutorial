# ppm Documentation

- Author: Jack Jiang
- Date: Jul. 2019

ppm is a wrapper of python3, venv and pip which syntax is similar to npm.

## Setup

To setup, you need to copy ppm to a system PATH

1. type `echo $PATH`
2. copy ppm to one of a system PATH

for Ubuntu, just run `./install`. After that, you could be able to run `ppm <command>`

**Alternatively, if you do not want to install ppm to system PATH, you could:**

- always keep ppm in current directory
- and use `./ppm <command>`

## Full Usage

```
ppm install
    Install Packages from package.txt
ppm install <pkg1> <pkg2> ... <pkgn>
    Install package <pkg1> <pkg2> ... <pkgn> and add to package.txt
ppm start
    Start main.py in current directory
ppm start <py>
    start python file <py> in currrent directory
ppm create-flask-app <backend>
    create a flask app in <backend> folder
```

## FAQ

- Problem: `permission denied`
- Soluton: `chmod +x ppm`

## Prerequisite

- [Anaconda (Python 3)](https://www.anaconda.com/distribution/#download-section)

## System Compatibility

- Linux: Yes
- Windows: No
- Mac: Not Sure