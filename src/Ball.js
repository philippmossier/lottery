import React, { Component } from "react";
import "./Ball.css";

class Ball extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <section className="Ball">{this.props.nums}</section>;
  }
}

export default Ball;
