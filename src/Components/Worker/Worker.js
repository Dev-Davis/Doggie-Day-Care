import React from 'react';

import workerShape from '../../helpers/propz/workerShape';

class Worker extends React.Component {
  static propType = {
    worker: workerShape.workerShape,
  }

  render() {
    const { worker } = this.props;
    return (
      <div className="Worker col-3">
        <div className="card">
          <img src={worker.imageUrl} className="card-img-top" alt="Employees" />
          <div className="card-body">
            <h3 className="card-title">{worker.name}</h3>
            <h5 className="card-title">{worker.personality}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Worker;
