# DBMS interface

\- Author: Jack Jiang
\- Date: Jul. 2019

### Usage

```python
from model_name import Model
model = Model()
```

## Create

```python
def create(self, key, value):
    # key = "1"
    # value = {"firstName": "Jack", "lastName": "Jiang"}
    # return = True
    #          False
```

## Read
```python
def read(self, key):
    # key = "1"
    # reutrn value = {"firstName": "Jack", "lastName": "Jiang"}
    #                None
```

## Updata

```python
def update(self, key, value):
    # key = "1"
    # value = {"firstName": "Jack", "lastName": "Jiang"}
    # return = True
    #          False
    # invalid value
```

## Delete
```python
def delete(self, key):
    # key = "1"
    # return = True 
    #          False
```

## Debug
```python
def debug(self):
    # return = database if implemented
    #          None if not implemented
```