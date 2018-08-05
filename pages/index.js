import Head from 'next/head';
import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from '../static/data';
import Feed from './Feed';

const App = () => {
  return (
    <div>
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
