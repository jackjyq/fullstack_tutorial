# FullStack Tutorial

In this fullstack tutorial, I will implement a simple CRUD App, including:
- A [Frontend](./frontend/README.md) using [React.js](https://reactjs.org/)
- A [Backend](./docs/README.md) using [Python(Flask)](https://flask.palletsprojects.com/en/1.1.x/)
- Using the MySQL Database and [flask_mysqldb](https://flask-mysqldb.readthedocs.io/en/latest/) to Connect


## Implementation

One of the fancy part of web app is that it is seperated by layers.

- The top layer is [frontend](./frontend), which utilises the [APIs](./docs) provided by backend. When implementing [frontend](./frontend), we can assume that all the [APIs](./docs) has already been implemented.
- The middle layer is [backend](./backend), which utilises the functions in [Model layer](./backend/dbms) to manipuate database. When implementing [backend](./backend), we assume that all the functions in [Model layer](./backend/dbms) has already been implemented.
- The bottom DB structure can is [](./resources/ER_design.jpg)
