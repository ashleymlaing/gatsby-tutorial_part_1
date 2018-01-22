import React from "react";
import Link from 'gatsby-link';
import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
});

class Counter extends React.Component {
  constructor() {
  super()
  this.state = { count: 0 }
}

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>current count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count +
          1 })}>plus
        </button>
        <button onClick={() => this.setState({ count: this.state.count -
          1 })}>minus
        </button>

        <div>
          <Link to="/">back home</Link>
        </div>
        <div>
          <Link to="/page-2/">Page Two</Link>
        </div>
      </div>

    )
  }
}

export default Counter;
