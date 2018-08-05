import React from 'react';
import sinon from 'sinon';
import FeedItem from '../pages/FeedItem';
import { data } from '../static/data';

describe('FeedItem component', () => {
  test('Should render FeedItem', () => {
    const FeedItemWrapper = shallow(<FeedItem news={data[0]} />);
    expect(FeedItemWrapper).toMatchSnapshot();
  });

  // test('Should render fifty `.list-group-item`s', () => {
  //   const FeedItemWrapper = render(<FeedItem news={data[0]} />);
  //   expect(FeedItemWrapper.find('.list-group-item')).to.have.length(1);
  // });

});
