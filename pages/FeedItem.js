import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { news } = this.props;

    return (
      <ListGroupItem>
        <ListGroupItemHeading>
          {news.title}
        </ListGroupItemHeading>
        <ListGroupItemText>
          {news.description}
        </ListGroupItemText>
      </ListGroupItem>
    );
  }
}
