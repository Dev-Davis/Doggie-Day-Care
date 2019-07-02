import React from 'react';
import PropTypes from 'prop-types';
import walkShape from '../../helpers/propz/walkShape';

class WalksRoutine extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
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
      <div className="Walks">
        <div className="card" style={{ width: 362 }}>
          <div className="card-body">
            <h3 className="card-title">{walk.props.name}</h3>
            <h5 className="card-text">{this.props.employeeId}</h5>
            <p className="card-text">{this.props.Date}</p>
            <button className="btn btn-danger" onClick={this.deleteWalkEvent}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default WalksRoutine;
