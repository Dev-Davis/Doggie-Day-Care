

import React from 'react';
import 'firebase/auth';
import PropTypes from 'prop-types';

import walkShape from '../../helpers/propz/walkShape';

import WalksRoutine from '../WalkRoutine/WalkRoutine';

class Walks extends React.Component {
  // state = {
  //   walks: [],
  // }
  static propTypes = {
    walk: walkShape.walkShape,
    deleteWalk: PropTypes.func.isRequired,
  }

  render() {
    const createWalks = this.props.walks.map(walk => (
      <WalksRoutine key={walk.id} walk={walk} deleteWalk={this.props.deleteWalk}/>
    ));
    return (
      <div className="WalksRoutine d-flex flex-wrap">
        { createWalks }
      </div>
    );
  }
}

export default Walks;
