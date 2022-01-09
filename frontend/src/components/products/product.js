// There is only one class called App
// the constructor() does initialzation job
// handleChange() is triggered when input changes
// handleClick() is triggered when clicking any buttons
// render() inlude the page desgin
// you may want to start read render() first
import React from 'react';
import {
    Row, Col, Button,
    Card,  CardBody, CardHeader, CardFooter,
    Input, InputGroup, InputGroupAddon,
    }
    from 'reactstrap';
import './product.css';

class product extends React.Component {
  // ######################### initialzation ###########################
  constructor(props) {
    super(props);
    this.state = {
        "productID": "",
        "name": "",
        "kind": "",
        "price" :"",
        "storeID":"",
        "stock":"",
        "httpStatus": 0,
        "errorMsg": ""
        };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // ######################### input handler ###########################
  handleChange(event) {
    const inputId = event.target.id;
    const inputValue = event.target.value;
    let state = this.state;
    state[inputId] = inputValue;
    this.setState(state);
  }

  // ######################### click handler ###########################
  handleClick(event) {
    const serverUrl = "http://localhost:5000/product";
    const debugUrl = "http://localhost:5000/debug";
    const buttonId = event.target.id;
    let state = this.state
    // ######################### create name ###########################
    if (buttonId === "create") {
      fetch(serverUrl, {
        method: 'POST',
        body: JSON.stringify({
            "productID": state["productID"],
            "name": state["name"],
            "kind": state["kind"],
            "price" : state["price"],
            "storeID":state["storeID"],
            "stock": state["stock"],
            })
      })
      .then(response => {
        // console.log(response);
        state["httpStatus"] = response.status;
        state["errorMsg"] = response.statusText;
        if (response.status < 300) {
          return response.json();
        }
        return {}
      })
      .then(object => {
          // console.log(object);
          if (state["httpStatus"] < 300) {
            state["productID"]= object["productID"];
            state["name"]= object["name"];
            state["kind"]= object["kind"];
            state["price"] = object["price"];
            state["storeID"]=object["storeID"];
            state["stock"]= object["stock"];
          }
          this.setState(state);
      })
      .catch(error => {
        console.log(error);
        state["productID"]= "";
        state["name"]= "";
        state["kind"]= "";
        state["price"] = "";
        state["storeID"]= "";
        state["stock"]= "";
        state["errorMsg"] = error;
        this.setState(state);
      });
    }

    // ########################## read name ############################
    else if (buttonId === "read") {
      fetch(serverUrl + "/" + state["productID"] + "/" + state["storeID"], {
        method: 'GET'
      })
      .then(response => {
        // console.log(response);
        state["httpStatus"] = response.status;
        state["errorMsg"] = response.statusText;
        if (response.status < 300) {
          return response.json();
        }
        return {}
      })
      .then(object => {
          // console.log(object);
          if (state["httpStatus"] < 300) {
            state["productID"]= object["productID"];
            state["name"]= object["name"];
            state["kind"]= object["kind"];
            state["price"] = object["price"];
            state["storeID"]=object["storeID"];
            state["stock"]= object["stock"];
          } else {
            state["name"]= "";
            state["kind"]= "";
            state["price"] = "";
            //state["storeID"]= "";
            state["stock"]= "";
          }
          this.setState(state);
      })
      .catch(error => {
        // console.log(error);
        state["name"]= "";
        state["kind"]= "";
        state["price"] = "";
        //state["storeID"]= "";
        state["stock"]= "";
        state["errorMsg"] = error;
        this.setState(state);
      });
    }

    // ######################### update name ###########################
    else if (buttonId === "update") {
      fetch(serverUrl + "/" + state["productID"] + "/" + state["storeID"], {
        method: 'PUT',
        body: JSON.stringify({
          "name": state["name"],
          "kind": state["kind"],
          "price" : state["price"],
          //"storeID":state["storeID"],
          "stock": state["stock"],
            })
      })
      .then(response => {
        // console.log(response);
        state["httpStatus"] = response.status;
        state["errorMsg"] = response.statusText;
        if (response.status < 300) {
          return response.json();
        }
        return {}
      })
      .then(object => {
          // console.log(object);
          if (state["httpStatus"] < 300) {
            state["productID"]= object["productID"];
            state["name"]= object["name"];
            state["kind"]= object["kind"];
            state["price"] = object["price"];
            state["storeID"]=object["storeID"];
            state["stock"]= object["stock"];
          }
          this.setState(state);
      })
      .catch(error => {
        // console.log(error);
        state["errorMsg"] = error;
        this.setState(state);
      });
    }

    // ######################### delete name ###########################
    else if (buttonId === "delete") {
      fetch(serverUrl + "/" + state["productID"] + "/" + state["storeID"], {
        method: 'DELETE'
      })
      .then(response => {
        // console.log(response);
        state["httpStatus"] = response.status;
        state["errorMsg"] = response.statusText;
        if (response.status < 300) {
          return response.json();
        }
        return {}
      })
      .then(object => {
          // console.log(object);
          if (state["httpStatus"] < 300) {
            state["productID"]= object["productID"];
            state["name"]= object["name"];
            state["kind"]= object["kind"];
            state["price"] = object["price"];
            state["storeID"]=object["storeID"];
            state["stock"]= object["stock"];
          }
          this.setState(state);
      })
      .catch(error => {
        // console.log(error);
        state["errorMsg"] = error;
        this.setState(state);
      });
    }

    // ######################### debug method ###########################
    else if (buttonId === "debug") {
      fetch(debugUrl, {
        method: 'GET'
      })
      .then(response => {
        // console.log(response);
        state["httpStatus"] = response.status;
        state["errorMsg"] = response.statusText;
        if (response.status < 300) {
          return response.json();
        }
        return {}
      })
      .then(object => {
          // console.log(object);
          if (state["httpStatus"] < 300) {
            state["errorMsg"] = JSON.stringify(object);
          }
          this.setState(state);
      })
      .catch(error => {
        // console.log(error);
        state["name"]= "";
        state["kind"]= "";
        state["price"] = "";
        state["storeID"]= "";
        state["stock"]= "";
        state["errorMsg"] = error;
        this.setState(state);
      });
    }
  }

  // ######################### page design ###########################
  render() {
    const state = this.state;
    return (
    <Row> <Col sm={{ size: 6, offset: 3 }}> <Card className='mt-5'>
        <CardHeader tag="h3">Add Products</CardHeader>
        <CardBody>
          <InputGroup>
            <InputGroupAddon addonType="prepend">ProductID:</InputGroupAddon>
            <Input value={state["productID"]} onChange={this.handleChange} id="productID"/>
          </InputGroup> <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">StoreID: </InputGroupAddon>
            <Input value={state["storeID"]} onChange={this.handleChange} id="storeID"/>
          </InputGroup> <br />
          <div> Product Information </div> <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">Name: </InputGroupAddon>
            <Input value={state["name"]} onChange={this.handleChange} id="name"/>
          </InputGroup> <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">Kind: </InputGroupAddon>
            <Input value={state["kind"]} onChange={this.handleChange} id="kind"/>
          </InputGroup> <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">Price: </InputGroupAddon>
            <Input value={state["price"]} onChange={this.handleChange} id="price"/>
          </InputGroup> <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">Stock: </InputGroupAddon>
            <Input value={state["stock"]} onChange={this.handleChange} id="stock"/>
          </InputGroup> <br />
          <Button color="success" onClick={this.handleClick} id="create">Create</Button>{" "}
          <Button color="primary" onClick={this.handleClick} id="read">Read</Button>{" "}
          <Button color="warning" onClick={this.handleClick} id="update">Update</Button>{" "}
          <Button color="danger" onClick={this.handleClick} id="delete">Delete</Button>{" "}
          <Button color="secondary" onClick={this.handleClick} id="debug">Debug</Button>{" "}
        </CardBody>
      <CardFooter>
        {"Message: " + state["errorMsg"]}
      </CardFooter>
    </Card> </Col> </Row>
    )
  }
}

export default product;
