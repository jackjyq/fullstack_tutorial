# API Documentation

- Author: Jack Jiang
- Date: Jul. 2019

## Overview

| **CRUD**      | **HTTP Method** | **URL**           | 
| ------------- | --------------- | ----------------- | 
| Create        | POST            | @server/keys/     | 
| Read          | GET             | @server/keys/@key | 
| Update        | PUT             | @server/keys/@key | 
| Delete        | DELETE          | @server/keys/@key | 
| Debug         | GET             | @server/debug/    | 

___

## Create Name

### Send

- URL: @server/keys/
- HTTP Method: POST
- Body: 

```json
{
    "key": @key,
    "firstName": "Jack",
    "LastName": "Jiang"
}
```

### Response

**succeed**

- HTTP Status Code: 201
- Body:

```json
{
    "key": @key,
    "firstName": "Jack",
    "LastName": "Jiang"
}
```

**conflict**

- HTTP Status Code: 409
- Body:

```json
{
    "key": @key,
    "errorMsg": "conflict"
}
```

**bad request**

- HTTP Status Code: 400
- Body:

```json
{
    "errorMsg": "bad request"
}
```

___

## Read Name

### Send

- URL: @server/keys/@key
- HTTP Method: GET
- Body: Null

### Response

**succeed**

- HTTP Status Code: 200
- Body:

```json
{
    "key": @key,
    "firstName": "Jack",
    "LastName": "Jiang"
}
```

**not found**

- HTTP Status Code: 404
- Body:

```json
{
    "key": @key,
    "errorMsg": "not found"
}
```

___

## Update Name

### Send

- URL: @server/keys/@key
- HTTP Method: PUT
- Body: 

```json
{
    "firstName": "Jack",
    "LastName": "Jiang"
}
```

### Response

**succeed**

- HTTP Status Code: 200
- Body:

```json
{
    "key": @key,
    "firstName": "Jack",
    "LastName": "Jiang"
}
```

**not found**

- HTTP Status Code: 404
- Body:

```json
{
    "key": @key,
    "errorMsg": "key not found"
}
```

**bad request**

- HTTP Status Code: 400
- Body:

```json
{
    "errorMsg": "bad request"
}
```

___

## Delete Name

### Send

- URL: @server/keys/@key
- HTTP Method: DELETE
- Body: Null

### Response

**Succeed**

- HTTP Status Code: 200
- Body:

```json
{
    "key": @key,
    "firstName": "Jack",
    "LastName": "Jiang"
}
```

**Fail**

- HTTP Status Code: 404
- Body:

```json
{
    "key": @key,
    "errorMsg": "key not found"
}
```

___

## Debug Method

database will be printed out on back-end terminal

- URL: @server/debug/
- HTTP Method: GET
- Body: Null