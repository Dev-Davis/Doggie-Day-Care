import React from 'react';
import PropTypes from 'prop-types';

import workerShape from '../../helpers/propz/workerShape';

import Worker from '../Worker';

class WorkerRoom extends React.Component {
  static propTypes = {
    hired: PropTypes.arrayOf(workerShape.workerShape),
  }

  render() {
    const { workers } = this.props;
    const makeWorkers = workers.map(worker => (
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
