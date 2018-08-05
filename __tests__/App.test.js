import React from 'react';
import App from '../pages/index';

describe('App component', () => {
  test('Should render App', () => {
    const AppWrapper = shallow(<App />);
    expect(AppWrapper).toMatchSnapshot();
  });
});
