import React from 'react';
import Feed from '../pages/Feed';
import { data } from '../static/data';


describe('Feed component', () => {
  test('Should render Feed', () => {
    const FeedWrapper = shallow(<Feed newsData={data} />);
    expect(FeedWrapper).toMatchSnapshot();
  });

  test('Should render fifty `.list-group-item`s',  () => {
    const FeedWrapper = mount(<Feed newsData={data} />);
    FeedWrapper.update();
    expect(FeedWrapper.find('.list-group-item')).toHaveLength(50);
    FeedWrapper.unmount();
  });
});
