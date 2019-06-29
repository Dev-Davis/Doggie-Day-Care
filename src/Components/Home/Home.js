import React from 'react';

import DogContent from '../DogContent/DogContent';
import DogPen from '../DogPen/DogPen';
import WorkerRoom from '../WorkerRoom/WorkerRoom';
import WalksRountine from '../WalkRoutine/WalkRoutine';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
            <DogContent />
            <DogPen/>
            <WalksRountine />
            <WorkerRoom />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
