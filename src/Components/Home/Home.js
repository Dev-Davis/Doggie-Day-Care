import React from 'react';

// import Dogs from '../Dogs/Dogs';
import DogContent from '../DogContent/DogContent';
import DogPen from '../DogPen/DogPen';
import WorkerRoom from '../WorkerRoom/WorkerRoom';

// import Workers from '../Worker/Worker';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
            <DogContent />
            {/* <Dogs /> */}
            <DogPen/>
            {/* <WorkerContent /> */}
            <WorkerRoom />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
