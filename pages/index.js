import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from '../data';
import Feed from './Feed';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <Head>
          <title>PairHub</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">News Finder</h1>
            <p className="lead">Wordwide news finder</p>
          </Container>
        </Jumbotron>
        <Feed newsData={data} />
      </div>
    );
  }
}
