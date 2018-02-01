import React, { Component } from 'react';
import './Card.css';

function Card(props) {
    return (
      <button className={props.className} onClick={props.onClick}>
      </button>
    );
}

export default Card;