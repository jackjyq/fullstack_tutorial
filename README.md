# FullStack Tutorial

- Author: Jack Jiang
- Date: Jul. 2019

In this fullstack tutorial, I will implement a simple CRUD App, including:
- A [Frontend](https://jiangyiqun.github.io/fullstack_tutorial/) using [JavaScript(React)](https://reactjs.org/)
- A [Backend](./docs/README.md) using [Python(Flask)](https://flask.palletsprojects.com/en/1.1.x/)

## Create Frontend from scratch

### Prerequisite

- [Node.js](https://nodejs.org)

### Create React App

```shell
npx create-react-app frontend     # create basic react app
cd frontend
npm install --save reactstrap     # install essitial modules
```

## Create Backend from scratch

### Prerequisite

- [Anaconda (Python 3)](https://www.anaconda.com/distribution/#download-section)

### Create Flask App

```shell
mkdir backend
cd backend
python3 -m venv python_modules          # create python environment
source ./python_modules/bin/activate    # activate python environment
pip install flask flask-cors     		# install essitial modules
python -m pip freeze > package.txt		# save dependencies to package.txt
deactivate                              # deactivate python environment
```

**Alternatively, you could use [ppm](../ppm) (no available for Windows)**

```shell
ppm create-flask-app backend     # create basic flask app
cd backend
ppm install flask-cors           # install essitial modules
```
