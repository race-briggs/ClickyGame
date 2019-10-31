import React from "react";
import Card from "./Card";
import images from "../characters.json";

console.log(images);

class Body extends React.Component {

  state = {
    images,
    score: 0
  }

  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  clickImage = (clicked) => {
    if(clicked){
      alert('You Lose!')
    } else {
      this.setState({images: this.shuffle(this.state.images)})
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
        this.shuffle(this.state.images).map(image => {
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