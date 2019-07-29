# ppm Documentation

ppm is a wrapper of python3, venv and pip which makes it easier to use.

## prerequisite

- [Anaconda (Python 3)](https://www.anaconda.com/distribution/#download-section)
- Copy ppm to the root of backend folder
- Give excute permission to ppm: `chmod +x ppm`

## Example

### Setup

```shell
./ppm install
```

which is equivalent to 

```shell
python3 -m venv python_modules          # create python environment
source ./python_modules/bin/activate    # activate python environment
python3 -m pip install -r package.txt   # install python modules from package.txt
deactivate                              # deactivate python environment
```

## Run

```shell
./ppm start
```

which is equivalent to 

```shell 
source ./python_modules/bin/activate    # activate python environment
python main.py                          # run back-end server
deactivate                              # deactivate python environment
```

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
```