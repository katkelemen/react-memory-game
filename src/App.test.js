import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Board from './Board'

it('1 card clicked', () => {
  const div = document.createElement('div');
  var component = ReactDOM.render(<Board />, div);
  
  component.handleClick(1)
  expect(component.state).toEqual({
  	"cards": ["down", "up1", "down", "down"], 
  	"colorList": ["up1", "up1", "up2", "up2"], 
  	"faceUp": 1
  })
  ReactDOM.unmountComponentAtNode(div);
})

it('2 cards clicked', () => {
  const div = document.createElement('div');
  var component = ReactDOM.render(<Board />, div);
  
  component.handleClick(1)
  component.handleClick(2)

  expect(component.state).toEqual({
  	"cards": ["down", "up1", "up1", "down"], 
  	"colorList": ["up1", "up1", "up2", "up2"], 
  	"faceUp": 2
  })
  ReactDOM.unmountComponentAtNode(div);
})

it('3 cards clicked', () => {
  const div = document.createElement('div');
  var component = ReactDOM.render(<Board />, div);
  
  component.handleClick(1)
  component.handleClick(2)
  component.handleClick(3)

  expect(component.state).toEqual({
  	"cards": ["down", "down", "down", "up1"], 
  	"colorList": ["up1", "up1", "up2", "up2"], 
  	"faceUp": 1
  })
  ReactDOM.unmountComponentAtNode(div);
})

