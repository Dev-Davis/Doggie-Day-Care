import React from 'react';

import Dogs from '../Dogs';
import Workers from '../Worker';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
            <Dogs />
          </div>
          <div className="col">
            <Workers />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
