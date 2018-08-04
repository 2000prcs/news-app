import React from 'react';
import { object } from 'prop-types';
import {
  ListGroupItem,
  Media,
  Badge,
} from 'reactstrap';

const FeedItem = ({ news }) => {

  const imgStyle = {
    height: '160px',
    width: '160px',
    margin: '10px',
  };

  const textStyle = {
    fontStyle: 'italic',
  };

  return (
    <ListGroupItem>
      <Media>
        <Media left href={news.url} target="_blank">
          <Media style={imgStyle} object src={news.image_url} onError={(e) => {e.target.src="../static/image.jpg"}} alt="news-image" />
        </Media>
        <Media body>
          <Media heading>
          {news.title}
        </Media>
          {news.description}
          <br />
          <br />
          <span style={textStyle} >Source: <a href={news.site.url} target="_blank">{news.site.name}</a></span>
        </Media>
          <Badge color="secondary">News Score: {Math.ceil(news.score)}</Badge>
      </Media>
    </ListGroupItem>
  );
};

export default FeedItem;