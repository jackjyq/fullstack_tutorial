# API Documentation

- Author: Jack Jiang
- Date: Jul. 2019

### [Summary of HTTP Methods for RESTful APIs](https://restfulapi.net/http-methods/)

| **HTTP Method** | CRUD Function |
| --------------- | ------------- |
| POST            | Create        |
| GET             | Read          |
| PUT             | Update        |
| DELETE          | Delete        |



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

- HTTP Status Code: 200
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




## Delete

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



## Debug Method

It will print out the whole database on back-end terminal

- URL: @server/debug/print_database
- HTTP Method: GET
- Body: Null

### Response

**succeed**

- HTTP Status Code: 200
- Body:

```json
{}
```