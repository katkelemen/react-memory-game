import React, { Component } from 'react';
import Card from './Card.js';
import {shuffle} from './helper_functions.js';

// console.log(shuffle(['a','b','c','d']));

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
      {state: 'down', color: 'up1'}, 
      {state: 'down', color: 'up1'}, 
      {state: 'down', color: 'up1'}, 
      {state: 'down', color: 'up1'}
      ],
      faceUp: 0,
    };
  }

  handleClick(i) {
    let cards = this.state.cards.slice();
    let currentCardState = cards[i]['state'];
    let currentCardColor = cards[i]['color'];
    if (currentCardState !== 'down') return;
    let faceUp;
    if (this.state.faceUp < 2) {
      faceUp = this.state.faceUp + 1;
    } else {
      cards = [
      {state: 'down', color: 'up1'}, 
      {state: 'down', color: 'up1'}, 
      {state: 'down', color: 'up1'}, 
      {state: 'down', color: 'up1'}
      ]
      faceUp = 1;
    } 
    cards[i]['state'] = 'up';
    this.setState({
      cards: cards,
      faceUp: faceUp
    });
  }

  renderCard(i) {
    return (
      <Card
        className={this.state.cards[i]['state'] === 'down' ? 'down' : this.state.cards[i]['color']}
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