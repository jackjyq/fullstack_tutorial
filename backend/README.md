# Flask Back-end Deployment

- Author: Jack Jiang
- Date: Jul. 2019

## Setup

```shell
python3 -m venv python_modules          # create python environment
source ./python_modules/bin/activate    # activate python environment
python3 -m pip install -r package.txt   # install python modules from package.txt
deactivate                              # deactivate python environment
```

## Run

```shell 
source ./python_modules/bin/activate    # activate python environment
python main.py                          # run back-end server
deactivate                              # deactivate python environment
```

## Install new-package

```shell
source ./python_modules/bin/activate    # activate python environment
pip install new-package					# install new-package
python -m pip freeze > package.txt		# save new-package to package.txt
deactivate                              # deactivate python environment
```

## References

- [Flask Documentation](https://flask.palletsprojects.com/en/1.1.x/)