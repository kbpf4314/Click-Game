import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";
import "./App.css";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images,
    score: 0,
    highscore: 0
  };

  resetGame = () => {
    const { score, highscore, images } = this.state;
    if (score > highscore) {
      this.setState({highscore: score}, function() {
        console.log(highscore);
      });
    }
    // eslint-disable-next-line
    images.map(image => {
      image.count = 0;
    });
    alert(`Try Again! Score: ${score}`);
    this.setState({score: 0});
    return true;
  }

  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  // Map over this.state.images and render an ImageCard component for each object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highscore}>
        TWIN PEAKS CLICK GAME
        </Title>
        {this.state.images.map(image => (
          <ImageCard
            handleClick={this.handleClick}
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
