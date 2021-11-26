# Flask Backend Deployment


## Run existing Backend Server

### Setup Server

```OPEN A CMD PROMPT AT BACKEND PATH
python3 -m venv python_modules          # create python environment
 ./python_modules/bin/activate.bat    # activate python environment for linux do not use the .bat one
python -m pip install -r package-lock.txt   # install python modules from package.txt, YOU SHOULD SEE ALL PACKAGE BEING DOWNLOAD INTO python_modules
deactivate                              # deactivate python environment
```

**Linux can just use PPM**

```shell
ppm install
```

### Run Server

```shell 
   ./python_modules/bin/activate        # activate python environment
python main.py                          # run back-end server
deactivate                              # deactivate python environment
```

**OR**

```shell
ppm start
```

### Install new-package

```shell
./python_modules/bin/activate    # activate python environment
pip install new-package				# install new-package
python -m pip freeze > package-lock.txt		# save new-package to package.txt
deactivate                              # deactivate python environment
```



## References

- [Flask Documentation](https://flask.palletsprojects.com/en/1.1.x/)
