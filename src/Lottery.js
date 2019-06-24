import React, { Component } from "react";
import Ball from "./Ball";

class Loterry extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxNum: 40
  };
  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.numBalls }) }; // to get 6 balls with no nums at the start when page loads the first time
    this.handleClick = this.handleClick.bind(this);
  }
  generate() {
    this.setState(curState => ({
      // Maps through nums:[null,null,null,null,null,null] and returns a random num for each slot
      nums: curState.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));
  }

  handleClick() {
    this.generate();
  }
  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => (
            <Ball nums={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default Loterry;
