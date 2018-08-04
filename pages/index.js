import Head from 'next/head';
import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from '../static/data';
import Feed from './Feed';

const App = () => {
  return (
    <div>
      <Head>
        <title>News App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Mo's News App</h1>
          <p className="lead">Wordwide Tech News</p>
        </Container>
      </Jumbotron>
      <Feed newsData={data} />
    </div>
  );
};

export default App;
