import React, { Component } from 'react';
import Card from './Card.js';
import {shuffle} from './helper_functions.js';

// console.log(shuffle(['a','b','c','d']));

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: ['down','down','down','down'],
      colorList: ['up1', 'up1', 'up2', 'up2'],
      faceUp: 0,
    };
  }

  handleClick(i) {
    let cards = this.state.cards.slice();
    let faceUp;
    // cards[i] = cards[i] === 'down' ? "up1" : "down";
    if (cards[i] === 'down' && this.state.faceUp < 2) {
      cards[i] = 'up1';
      faceUp = this.state.faceUp + 1;
    } else if (cards[i] === 'down' && this.state.faceUp >= 2) {
      cards = ['down','down','down','down'];
      cards[i] = 'up1';
      faceUp = 1;
    } else if (cards[i] !== 'down' && this.state.faceUp > 0) {
      cards[i] = 'down';
      faceUp = this.state.faceUp - 1;
    }

    this.setState({
      cards: cards,
      faceUp: faceUp
    });

    console.log(this.state.cards, this.state.faceUp)
  
  }

  renderCard(i) {
    return (
      <Card
        className={this.state.cards[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {

    return (
      
      <div className="Card-container">
           {this.renderCard(0)}
           {this.renderCard(1)}
           {this.renderCard(2)}
           {this.renderCard(3)}
      </div>
        
    );
  }
}

export default Board;