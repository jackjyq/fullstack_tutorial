import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"firstName": "Hello", "lastName": "World!"};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let id = event.target.id;
    if (id == "reset") {
      this.setState({"firstName": "Hello", "lastName": "World!"});
    }
    if (id === "reload") {
      fetch('http://localhost:5000/api/name/')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(object => {
        console.log(object);
        this.setState(object);
      })
      .catch(error => {
        console.log(error);
        this.setState({"firstName": "Bad", "lastName": "Request!"});
      });    
    }
  }

  render() {
    const name = this.state;
    return (
        <Jumbotron>
          <h1 className="display-3">{name["firstName"] + " " + name["lastName"]}</h1>
          <Button color="primary" onClick={this.handleClick} id="reload">Reload</Button>{" "}
          <Button color="danger" onClick={this.handleClick} id="reset">Reset</Button>
        </Jumbotron>
    )
  }
}

export default App;
