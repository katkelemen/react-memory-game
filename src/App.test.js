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
      {state: 'down', color: 'up2'}, 
      {state: 'down', color: 'up2'}
      ],
      faceUp: 1,
    }
  )
  ReactDOM.unmountComponentAtNode(div);
})

it('2 different cards clicked', () => {
  const div = document.createElement('div');
  var component = ReactDOM.render(<Board />, div);
  
  component.handleClick(1)
  component.handleClick(2)

  expect(component.state).toEqual({
  	cards: [
      {state: 'down', color: 'up1'}, 
      {state: 'up', color: 'up1'}, 
      {state: 'up', color: 'up2'}, 
      {state: 'down', color: 'up2'}
      ],
      faceUp: 2,
  })
  ReactDOM.unmountComponentAtNode(div);
})

it('2 similar cards clicked', () => {
  const div = document.createElement('div');
  var component = ReactDOM.render(<Board />, div);
  
  component.handleClick(0)
  component.handleClick(1)

  expect(component.state).toEqual({
  	cards: [
      {state: 'solved', color: 'up1'}, 
      {state: 'solved', color: 'up1'}, 
      {state: 'down', color: 'up2'}, 
      {state: 'down', color: 'up2'}
      ],
      faceUp: 0,
  })
  ReactDOM.unmountComponentAtNode(div);
})


