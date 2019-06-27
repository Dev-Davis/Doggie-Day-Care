import React from 'react';

import Dogs from '../Dogs/Dogs';
import Workers from '../Worker/Worker';

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
