import React from 'react';
import firebase from 'firebase/app';

import DogPen from '../DogPen/DogPen';
import WorkerRoom from '../WorkerRoom/WorkerRoom';
import Walks from '../Walks/Walks';

import walksData from '../../helpers/data/walksData';
import workerData from '../../helpers/data/workerData';
import dogData from '../../helpers/data/dogData';
import WalksRoutine from '../WalkRoutine/WalkRoutine';

class Home extends React.Component {
  state = {
    dogs: [],
    workers: [],
    walks: [],
    newWalks: {},
  }

  getWalks = () => {
    walksData.getWalks(firebase.auth().currentUser.uid)
      .then(walks => this.setState({ walks }))
      .catch(err => console.error('could not get walks', err));
  }


  getWorkers = () => {
    workerData.getWorkers()
      .then(workers => this.setState({ workers }))
      .catch(err => console.error('could not get workers', err));
  }

  componentDidMount() {
    dogData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('getDongs error', err));
    this.getWalks();
    this.getWorkers();
  }

  deleteWalk = (walkId) => {
    walksData.deleteWalk(walkId)
      .then(() => this.getWalks())
      .catch(err => console.error('could not delete order', err));
  }

  render() {
    const {
      dogs,
      workers,
      walks,
    } = this.state;
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
            <WalksRoutine
            dogs={ dogs }
            workers={ workers }
            deleteWalk={this.deleteWalk}
            />
            <Walks
            walks={ walks }
            // dogs={ dogs }
            // workers={ workers }
            deleteWalk={this.deleteWalk}
            />
            <DogPen
            dogs={ dogs }
            />
            <WorkerRoom
            workers={workers}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
