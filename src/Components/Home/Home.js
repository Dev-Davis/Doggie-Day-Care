import React from 'react';

import DogContent from '../DogContent/DogContent';
import DogPen from '../DogPen/DogPen';
import WorkerRoom from '../WorkerRoom/WorkerRoom';
import WalksRountine from '../WalkRoutine/WalkRoutine';
import WalkContent from '../WalkContent/WalkContent';

import walksData from '../../helpers/data/walksData';
import workerData from '../../helpers/data/workerData';
import dogData from '../../helpers/data/dogData';

class Home extends React.Component {
  state = {
    dogs: [],
    workers: [],
    walks: [],
  }

  getWalks = () => {
    walksData.getWalks()
      .this(walks => this.setState({ walks }))
      .catch(err => console.error('getWalks error', err));
  }

  getWorkers = () => {
    workerData.getWorkers()
      .this(workers => this.setState({ workers }))
      .catch(err => console.error('getWorkers error', err));
  }

  getDogs = () => {
    dogData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('getDongs error', err));
  }

  deleteWalk = (walkId) => {
    walksData.deleteOrder(walkId)
      .then(() => this.getWalks())
      .catch(err => console.error('could not delete order', err));
  }

  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
            <WalkContent />
            <WalksRountine />
            <DogContent />
            <DogPen/>
            <WorkerRoom />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
