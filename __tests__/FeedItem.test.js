import React from 'react';
import FeedItem from '../pages/FeedItem';
import { data } from '../static/data';

describe('FeedItem component', () => {
  test('Should render FeedItem', () => {
    const FeedItemWrapper = shallow(<FeedItem news={data[0]} />);
    expect(FeedItemWrapper).toMatchSnapshot();
  });
});
