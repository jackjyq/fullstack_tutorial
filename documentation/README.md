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

- URL: @server/names/
- HTTP Method: POST
- Content: 

```json
{
    "id": @id,
    "firstName": "Jack",
    "LastName": "Jiang"
}
```

### Response

**Succeed**

- HTTP Status Code: 200
- Content:

```json
{
    "id": @id,
    "firstName": "Jack",
    "LastName": "Jiang"
}
```

**Fail**

- HTTP Status Code: 409
- Content:

```json
{
    "id": @id,
    "errorMsg": "id already exist"
}
```



## Read Name

### Send

- URL: @server/names/@id
- HTTP Method: GET
- Content: Null

### Response

**Succeed**

- HTTP Status Code: 200
- Content:

```json
{
    "id": @id,
    "firstName": "Jack",
    "LastName": "Jiang"
}
```

**Fail**

- HTTP Status Code: 404
- Content:

```json
{
    "id": @id,
    "errorMsg": "id not found"
}
```



## Update

### Send

- URL: @server/names/@id
- HTTP Method: PUT
- Content: 

```json
{
    "firstName": "Jack",
    "LastName": "Jiang"
}
```

### Response

**Succeed**

- HTTP Status Code: 200
- Content:

```json
{
    "id": @id,
    "firstName": "Jack",
    "LastName": "Jiang"
}
```

**Fail**

- HTTP Status Code: 404
- Content:

```json
{
    "id": @id,
    "errorMsg": "id not found"
}
```




## Delete

### Send

- URL: @server/names/@id
- HTTP Method: DELETE
- Content: Null

### Response

**Succeed**

- HTTP Status Code: 200
- Content:

```json
{
    "id": @id,
    "firstName": "Jack",
    "LastName": "Jiang"
}
```

**Fail**

- HTTP Status Code: 404
- Content:

```json
{
    "id": @id,
    "errorMsg": "id not found"
}
```