import React from "react";

export default function login(props) {
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState();

  const handleChangeInput = (e) => {
    e.preventDefault();
    setName(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    name ? props.onSubmit(name) : setError("Please provide a name");
  };

  return (
    <>
      <h1>Please Login</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          value={name}
          onChange={(event) => handleChangeInput(event)}
          placeholder="Mary Poppins"
        />
        <button type="submit">Log in</button>
        <p>{error}</p>
      </form>
    </>
  );
}

/*

class Login extends React.Component {
  state = {
    name: "",
    error: ""
  };

  handleChangeInput = (event) => {
    this.setState({ name: event.target.value, error: "" });
  };
  handleSubmit = (event) => {
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
            onChange={(event) => this.handleChangeInput(event)}
            placeholder="Mary Poppins"
          />
          <button type="submit">Log in</button>
          <p>{this.state.error}</p>
        </form>
      </>
    );
  }
}
*/
