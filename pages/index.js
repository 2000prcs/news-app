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
          <h1 className="display-3">Worldwide Tech News</h1>
          <p className="lead">View the latest and breaking worldwide tech news</p>
        </Container>
      </Jumbotron>
      <Feed newsData={data} />
    </div>
  );
};

export default App;
