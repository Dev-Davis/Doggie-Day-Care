import React from 'react';

import Walks from '../Walks/Walks';
import walksData from '../../helpers/data/walksData';

class WalksRoutine extends React.Component {
  state = {
    walks: [],
  }

  componentDidMount() {
    walksData.getWalks()
      .then(walks => this.setState({ walks }))
      .catch(err => console.error('could not get walks', err));
  }

  render() {
    const createWalks = this.state.walks.map(walk => (
      <Walks key={walk.id} walk={walk}/>
    ));
    return (
      <div className="WalksRoutine">
        { createWalks }
      </div>
    );
  }
}

export default WalksRoutine;
