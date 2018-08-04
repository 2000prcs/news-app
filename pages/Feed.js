import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeedItem from './FeedItem';

export default class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {

    const { newsData } = this.props;
    console.log(newsData);

    return (
      <ListGroup>
        { newsData.map(news => <FeedItem news={news} />) }
        <ListGroupItem>
          <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
          <ListGroupItemText>
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    );
  }
}
