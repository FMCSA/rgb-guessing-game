import React, { Component } from "react";
import "./Square.css";

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: undefined
    };
    this.clickSquare = this.clickSquare.bind(this);
  }

  componentDidMount() {
    if (this.props.color) {
      this.setState({
        color: this.props.color
      });
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      color: props.color
    });
  }

  clickSquare = () => {
    if (this.state.color === this.props.correctColor) {
      this.props.gameWon(true);
      console.log("correct", this.state.color);
    } else {
      this.setState({
        color: "transparent"
      });
      console.log("wrong");
    }
  };

  render() {
    return (
      <div
        className="square"
        style={{ backgroundColor: this.state.color }}
        onClick={this.clickSquare}
      />
    );
  }
}

export default Square;
