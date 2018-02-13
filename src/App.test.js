import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Board from './Board'

it('is able to call a board method', () => {
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
