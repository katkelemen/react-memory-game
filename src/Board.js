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
      {state: 'down', color: 'up2'}, 
      {state: 'down', color: 'up2'}
      ]
    };
  }

  countFaceUp() {
    return this.state.cards.filter((card) => {return card.state === 'up'}).length;
  }

  handleClick(i) {
    let cards = this.state.cards.slice();
    let currentCardState = cards[i]['state'];
    let currentCardColor = cards[i]['color'];
    if (currentCardState !== 'down') return;
    if (this.countFaceUp() === 0) {
      cards[i]['state'] = 'up';
    } else if (this.countFaceUp() === 1) {
        const pairIndex = cards.indexOf(cards.filter((card) => {return card.state === 'up'})[0]);
        if (cards[pairIndex]['color'] === currentCardColor) {
          cards[i]['state'] = 'solved';
          cards[pairIndex]['state'] = 'solved';
        } else {
          cards[i]['state'] = 'up';
        }
    } else {
      cards = cards.map((card) => {if (card['state'] === 'up') {card['state'] = 'down'};return card})
      cards[i]['state'] = 'up';
    } 
    
    this.setState({
      cards: cards
    });
  }

  renderCard(i) {
    return (
      <Card
        className={this.state.cards[i]['state'] === 'solved' || this.state.cards[i]['state'] === 'down'  ? 
        this.state.cards[i]['state'] : 
        this.state.cards[i]['color']}
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