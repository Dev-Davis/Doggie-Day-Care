import React from 'react';
import PropTypes from 'prop-types';

import walkShape from '../../helpers/propz/walkShape';


class Walks extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
    deleteWalk: PropTypes.func.isRequired,
  }

  deleteWalkEvent = (e) => {
    const { walk } = this.props;
    e.preventDefault();
  }

  render() {
    const { walk } = this.props;
    return (
      <div className="Walks cols-3">
        <div className="card" style={{ width: 362 }}>
          <div className="card-body">
            <h3 className="card-title">{walk.dogId}</h3>
            <h5 className="card-text">{walk.employeeId}</h5>
            <p className="card-text">{walk.date}</p>
            <button className="btn btn-danger" onClick={this.deleteWalkEvent}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Walks;
