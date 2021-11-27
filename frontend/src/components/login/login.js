import React from "react";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    jwtToken: "",
    isLogin: false,
    message: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    const isLoggedIn = this.state.jwtToken;
    event.preventDefault();
    if (isLoggedIn) {
      console.log("Zoom it here");
      this.setState({ jwtToken: "", isLogin: false });
      window.location.reload();
    } else {
      console.log(this.state);
      return fetch("http://127.0.0.1:5000/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            // invalid username and password. 401 condition
            this.setState({
              jwtToken: "",
              isLogin: false,
              message: "Invalid login"
            });
          } else {
            if(data.access_token === undefined){
                this.setState({
                  jwtToken: data.access_token,
                  isLogin: false,
                  message: "Invalid login"
                });
            }else{
              localStorage.setItem("token", data.access_token);
              this.setState({
                jwtToken: data.access_token,
                isLogin: true,
                message:
                  "Your logged in with Authentication token " + data.access_token
              });
            }
          }
        });
    }
  };

  render() {
    const isLoggedIn = this.state.isLogin;

    var loginButton;
    if (isLoggedIn) {
      loginButton = <input type="submit" value="logout" />;
    } else {
      loginButton = <input type="submit" value="login" />;
    }

    return (
      <form onSubmit={this.handleSubmit} method="post">
        <p> Login Form </p>

        <label>Username</label>
        <input
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <p>{this.state.message}</p>
        {loginButton}
      </form>
    );
  }
}

export default Login;