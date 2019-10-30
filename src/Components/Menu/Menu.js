import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div>
          <button onClick={this.props.newGame}>
            {this.props.gameIsOver !== true ? "NEW COLORS" : "PLAY AGAIN?"}
          </button>
        </div>
        <span>{this.props.message}</span>
        <div>
          <button
            className={this.props.squares === 3 ? "selected" : "easyMode"}
            onClick={this.props.easyModeGame}
          >
            EASY
          </button>
          <button
            className={this.props.squares === 6 ? "selected" : "hardMode"}
            onClick={this.props.hardModeGame}
          >
            HARD
          </button>
        </div>
      </div>
    );
  }
}

export default Menu;
