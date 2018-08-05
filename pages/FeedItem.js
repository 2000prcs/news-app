import React from 'react';
import { object } from 'prop-types';
import {
  ListGroupItem,
  Media,
  Badge,
} from 'reactstrap';
import Error from 'next/error';
import fetch from 'isomorphic-unfetch';


export default class FeedItem extends React.Component {
  static async getInitialProps() {
    const res = await fetch(news.image_url)
    const statusCode = res.statusCode > 200 ? res.statusCode : false
    const json = await res.json();
    
    return { statusCode }
  }
  
  render(){
    
    if (this.props.statusCode) {
      return <Error statusCode={this.props.statusCode} />
    }

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
            <Media style={imgStyle} object src={news.image_url ? news.image_url : "../static/image.jpg"} onError={(e) => {e.target.src="../static/image.jpg"}} alt="news-image" />
          </Media>
          <Media body>
            <Media heading>
            {news.title}
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
  }
};

// FeedItem.propTypes = {
//   news: object.isRequired,
// };

// export default FeedItem;
