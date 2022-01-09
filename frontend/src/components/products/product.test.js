import React from 'react';
import ReactDOM from 'react-dom';
import product from './product';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<product />, div);
  ReactDOM.unmountComponentAtNode(div);
});
