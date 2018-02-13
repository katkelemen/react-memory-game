import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Board from './Board'

it('1 card clicked', () => {
  const div = document.createElement('div');
  var component = ReactDOM.render(<Board />, div);
  
  component.handleClick(1)
  expect(component.state).toEqual({
      cards: [
      {state: 'down', color: 'up1'}, 
      {state: 'up', color: 'up1'}, 
      {state: 'down', color: 'up1'}, 
      {state: 'down', color: 'up1'}
      ],
      faceUp: 1,
    }
  )
  ReactDOM.unmountComponentAtNode(div);
})

it('2 cards clicked', () => {
  const div = document.createElement('div');
  var component = ReactDOM.render(<Board />, div);
  
  component.handleClick(1)
  component.handleClick(2)

  expect(component.state).toEqual({
  	cards: [
      {state: 'down', color: 'up1'}, 
      {state: 'up', color: 'up1'}, 
      {state: 'up', color: 'up1'}, 
      {state: 'down', color: 'up1'}
      ],
      faceUp: 2,
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
  	cards: [
      {state: 'down', color: 'up1'}, 
      {state: 'down', color: 'up1'}, 
      {state: 'down', color: 'up1'}, 
      {state: 'up', color: 'up1'}
      ],
      faceUp: 1,
  })
  ReactDOM.unmountComponentAtNode(div);
})

