# Full- Stack Tutorial

\- Author: Jack Jiang

\- Date: Jul. 2019



## Create [front-end](https://jiangyiqun.github.io/fullstack_tutorial/) from scratch

### Prerequisite

- [Node.js](https://nodejs.org)

### Create React Project

```shell
npx create-react-app frontend           		# create basic react app
npm install --save reactstrap react react-dom	# install essitial modules
```



## Create [back-end](./documentation/README.md) from scratch

### prerequisite

- [Anaconda (Python 3)](https://www.anaconda.com/distribution/#download-section)

### create Flask Project

```shell
mkdir backend
cd backend
python3 -m venv python_modules          # create python environment
source ./python_modules/bin/activate    # activate python environment
pip install flask flask-cors     		# install essitial modules
python -m pip freeze > package.txt		# save dependencies to package.txt
deactivate                              # deactivate python environment
```

