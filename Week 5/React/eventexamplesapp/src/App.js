import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 5,
      amount: "",
      currency: ""
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };

  sayHello = () => {
    alert("Hello! Member!");
  };

  incrementHello = () => {
    this.increment();
    this.sayHello();
  };

  welcome = (msg) => {
    alert(msg);
  };

  clickMe = () => {
    alert("I was clicked");
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const amount = Number(this.state.amount);
    const result = amount * 80;

    alert(
      "Converting to " +
      this.state.currency +
      " Amount is " +
      result
    );
  };

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <h2>{this.state.count}</h2>

        <button onClick={this.incrementHello}>
          Increment
        </button>

        <br /><br />

        <button onClick={this.decrement}>
          Decrement
        </button>

        <br /><br />

        <button onClick={() => this.welcome("welcome")}>
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.clickMe}>
          Click on Me
        </button>

        <h1 style={{ color: "green" }}>
          Currency Converter!!!
        </h1>

        <form onSubmit={this.handleSubmit}>
          <label>Amount: </label>

          <input
            type="text"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />

          <br /><br />

          <label>Currency: </label>

          <input
            type="text"
            name="currency"
            value={this.state.currency}
            onChange={this.handleChange}
          />

          <br /><br />

          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;