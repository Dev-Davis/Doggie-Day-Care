import React from 'react';

import Worker from '../Worker/Worker';
import workerData from '../../helpers/data/workerData';

class WorkerRoom extends React.Component {
  state = {
    workers: [],
  }

  componentDidMount() {
    workerData.getWorkers()
      .then(workers => this.setState({ workers }))
      .catch(err => console.error('could not get workers', err));
  }

  render() {
    const makeWorkers = this.state.workers.map(worker => (
      <Worker key={worker.id} worker={worker} />
    ));
    return (
      <div>
        <div className="WorkerRoom d-flex flex-wrap">
          { makeWorkers }
        </div>
      </div>
    );
  }
}

export default WorkerRoom;
