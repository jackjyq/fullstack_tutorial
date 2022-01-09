import React from 'react';
import ReactDOM from 'react-dom';
import customer from './customer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<customer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
