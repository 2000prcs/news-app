import React from 'react';
import { arrayOf, object } from 'prop-types';
import { ListGroup } from 'reactstrap';
import FeedItem from './FeedItem';

const Feed = ({ newsData }) => {
  return (
    <ListGroup>
      {newsData.map(news => <FeedItem key={news.id} news={news} />)}
    </ListGroup>
  );
};

Feed.propTypes = {
  newsData: arrayOf(object.isRequired).isRequired,
};

export default Feed;
