import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<store />, div);
  ReactDOM.unmountComponentAtNode(div);
});
