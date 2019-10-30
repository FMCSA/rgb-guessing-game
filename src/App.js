import React, { Component } from "react";
import Square from "./Components/Square/Square";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      rgbDisplay: "",
      squares: 6,
      correctColor: undefined,
      colorSquares: undefined,
      gameIsOver: false
    };
  }

  componentDidMount() {
    this.newGame();
  }

  generateRandomColor = () => {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
  };

  fillSquaresColor = correctColor => {
    let correctIndex = Math.floor(Math.random() * (this.state.squares - 1));
    let colors = [];
    colors[correctIndex] = correctColor;

    for (let i = 0; i < this.state.squares; i++) {
      if (correctIndex !== i) {
        colors[i] = this.generateRandomColor();
      }
    }
    return colors;
  };

  newGame = () => {
    let correctColor = this.generateRandomColor();

    this.setState({
      correctColor: correctColor,
      rgbDisplay: correctColor,
      gameIsOver: false,
      message: ""
    });

    let colors = this.fillSquaresColor(correctColor);
    this.setState({
      colorSquares: colors //colorSquares state is the colors array
    });
  };

  createSquares = () => {
    let squares = [];
    if (this.state.colorSquares) {
      squares = this.state.colorSquares.map((color, i) => {
        return (
          <Square
            key={i}
            correctColor={this.state.correctColor}
            color={color}
            gameWon={this.gameWon}
          />
        );
      });
      return squares;
    }
  };

  gameWon = win => {
    if (win) {
      console.log("win? " + win);
      let colors = [];
      for (let i = 0; i < this.state.colorSquares.length; i++) {
        colors[i] = this.state.correctColor;
      }
      this.setState({
        colorSquares: colors,
        gameIsOver: true,
        message: "Correct!"
      });
    }
  };

  easyModeGame = () => {
    this.setState(
      {
        squares: 3
      },
      () => {
        this.newGame();
      }
    );
  };

  hardModeGame = () => {
    this.setState(
      {
        squares: 6
      },
      () => {
        this.newGame();
      }
    );
  };

  render() {
    return (
      <div>
        {/* Header */}
        <Header
          gameIsOver={this.state.gameIsOver}
          correctColor={this.state.correctColor}
          rgbDisplay={this.state.rgbDisplay}
        />

        {/* Menu */}
        <Menu
          gameIsOver={this.state.gameIsOver}
          message={this.state.message}
          newGame={this.newGame}
          squares={this.state.squares}
          easyModeGame={this.easyModeGame}
          hardModeGame={this.hardModeGame}
        />

        {/* Container (Squares) */}
        <div className="squares-container">{this.createSquares()}</div>
      </div>
    );
  }
}

export default App;
