import React from "react";
import Card from "./Card";
import images from "../characters.json";
import "./Body.css";

console.log(images);

class Body extends React.Component {



  state = {
    images,
    score: 0,
    highScore: 0,
    clicked: false
  }

  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  clickImage = (clicked) => {
    console.log(clicked);
    if(clicked){
      alert('You Lose!')
      if(this.state.score > this.state.highScore){
        this.setState({highScore: this.state.score});
      }
      this.resetGame();
    } else {
      var currentScore = this.state.score;
      this.setState({
        clicked: true,
        score: currentScore + 1,
        images: this.shuffle(this.state.images)
      });
    }
  }

  resetGame = () => {
    this.setState({
      score: 0,
      images: this.shuffle(this.state.images)
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
        this.shuffle(this.state.images).map(image => {
          return (<Card 
            image={image.image}
            clickCard={this.clickImage}
            clicked={this.state.clicked}
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