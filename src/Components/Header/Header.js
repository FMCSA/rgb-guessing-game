import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div
        className="header"
        style={{
          backgroundColor:
            this.props.gameIsOver === true ? this.props.correctColor : "#51aba0"
        }}
      >
        <h1 className="header__title">
          The Great
          <br />
          <span className="rgbDisplay">{this.props.rgbDisplay}</span>
          <br />
          Guessing Game
          <br />
          <span className="header__framework">React</span>
        </h1>
      </div>
    );
  }
}

export default Header;
