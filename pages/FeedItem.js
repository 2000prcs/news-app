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
    // Render image from the news image_url (use default image for fallback if error occurs)
    <ListGroupItem>
      <Media>
        <Media left href={news.url} target="_blank">        
          <Media style={imgStyle} object src={news.image_url ? news.image_url : "../static/image.jpg"} onError={(e) => {e.target.src="../static/image.jpg"}} alt="news-image" /> 
        </Media>
        <Media body>
          <Media heading>
          <a href={news.url} target="_blank">{news.title}</a>
        </Media>
          {news.description}
          <br />
          <br />
          <span style={textStyle} >Source: <a href={news.site.url} target="_blank">{news.site.name}</a></span>
          <br />
          <span style={textStyle}>Published @ {news.published_at.substr(0, 10)}</span>
        </Media>
          <Badge color="secondary">News Score: {Math.ceil(news.score)}</Badge>
      </Media>
    </ListGroupItem>
  );
};

FeedItem.propTypes = {
  news: object.isRequired,
};

export default FeedItem;
