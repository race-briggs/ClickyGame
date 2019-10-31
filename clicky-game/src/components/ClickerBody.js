import React from "react";
import Card from "./Card";
import images from "../characters.json";

console.log(images);

class Body extends React.Component {

  state = {
    images,
    score: 0
  }


  clickImage = (clicked) => {
    if(clicked){
      // gameOver()
    } else {
      clicked = true;
      const newScore = this.state.score + 1;
      this.setState({score: newScore});
    }
  }

  // gameOver = () => {
  //   alert(`Oops! You clicked on an image twice! Your score was ${this.state.score}`)
  //   this.setState({score: 0});
  // }


  render() {
    return (
    <div className="container">
      {
        this.state.images.map(image => {
          return (<Card 
            image={image.image}
            clickCard={this.clickImage}
            clicked={image.clicked}
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