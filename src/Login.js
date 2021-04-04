import React from "react";

class Login extends React.Component {
  state = {
    name: "",
    error: ""
  };

  handleChangeInput = event => {
    this.setState({ name: event.target.value, error: "" });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name) {
      this.props.onSubmit(this.state.name);
    } else {
      this.setState({
        error: "Please provide a name"
      });
    }
  };

  render() {
    return (
      <>
        <h1>Please Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            value={this.state.name}
            onChange={event => this.handleChangeInput(event)}
            placeholder="Mary Poppins"
          />
          <button type="submit">Log in</button>
          <p>{this.state.error}</p>
        </form>
      </>
    );
  }
}

export default Login;
