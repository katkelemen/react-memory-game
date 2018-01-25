import React, { Component } from 'react';
import './Cards.css';
import Card from './Card.js';
import {shuffle} from './helper_functions.js';

// console.log(shuffle(['a','b','c','d']));

class Cards extends Component {
  
  render() {

    return (
      
      <div className="Card-container">
          <Card color="up1"/>
          <Card color="up2"/>
          <Card color="up3"/>
          <Card color="up4"/>  
      </div>
        
    );
  }
}

export default Cards;