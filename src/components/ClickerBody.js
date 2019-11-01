import React from "react";
import Card from "./Card";
import images from "../characters.json";
import "./Body.css";

class Body extends React.Component {

  state = {
    images,
    score: 0,
    highScore: 0
  }

  shuffle = () => {
    for (let i = this.state.images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.state.images[i], this.state.images[j]] = [this.state.images[j], this.state.images[i]];
    }
    this.setState({images});
  }

  clickImage = (id) => {
    console.log(id);
    const images = this.state.images.map(image => {
      if(image.id === id && image.clicked === true){
        if (this.state.score > this.state.highScore) {
          this.setState({ highScore: this.state.score });
        }
        this.resetGame();
      } else if (image.id === id && image.clicked === false){
        var currentScore = this.state.score;
        image.clicked = true;
        this.setState({score: currentScore + 1});
      }
      return image;
    })
    this.setState({images});
  }

  resetGame = () => {
    this.setState({
      score: 0,
      images: this.shuffle(this.state.images),
      clicked: false
    })
  }


  render() {
    return (
    <div className="container">
      <div className="scoreContainer">
        <h3 className="score">Score: {this.state.score}/12</h3>
        <h3 className="score">High Score: {this.state.highScore}</h3>
      </div>
      {
        this.state.images.map(image => {
          return (<Card 
            image={image.image}
            clickCard={this.clickImage}
            clicked={this.state.images.clicked}
            shuffle={this.shuffle}
            id={image.id}
            key={image.id}
          />)
        })
      }
    </div>
    )
  }
}

export default Body;