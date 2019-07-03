import React from 'react';
import PropTypes from 'prop-types';
import walkShape from '../../helpers/propz/walkShape';
import dogShapes from '../../helpers/propz/dogShape';
import workerShapes from '../../helpers/propz/workerShape';

class WalksRoutine extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
    dogs: dogShapes.dogShape,
    workers: workerShapes.workerShape,
    deleteWalk: PropTypes.func.isRequired,
  }

  deleteWalkEvent = (e) => {
    const { walk, deleteWalk } = this.props;
    e.preventDefault();
    deleteWalk(walk.id);
  };

  render() {
    const { walk } = this.props;
    return (
      <div className="Walk col-3">
        <div className="card" style={{ width: 362 }}>
            <div className="card-body">
              <h2 className="card-title">{walk.dogId}</h2>
              <h3 className="card-text">{walk.employeeId}</h3>
              <h3 className="card-text">{walk.date}</h3>
              <button className="btn btn-danger" onClick={this.deleteWalkEvent}>Delete</button>
            </div>
        </div>
    </div>
    );
  }
}

export default WalksRoutine;
