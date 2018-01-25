import React, { Component } from 'react';
import './Card.css';

let classList = ['up1', 'up2', 'up3', 'up4']

class Card extends Component {
	constructor(props) {
    super(props);
    this.state = {
      cardClass: 'down' 
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (){
        console.log(this.state.cardClass	);
        var css = (this.state.cardClass === "down") ? this.props.color : "down";
        this.setState({"cardClass":css});
  }

  render() {
    return (
      
          <div className={this.state.cardClass} onClick={this.handleClick}>
          </div>
        
    );
  }
}

export default Card;