import React from 'react';

import Dog from '../Dogs/Dogs';
import dogData from '../../helpers/data/dogData';

import './DogPen.scss';

class DogPen extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    dogData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('could not get dogs', err));
  }
  // static propTypes = {
  //   woof: PropTypes.arrayOf(dogShape.dogShape),
  // }

  render() {
    const makeDogs = this.state.dogs.map(dog => (
      <Dog key={dog.id} dog={dog}/>
    ));
    return (
      <div className="DogPen d-flex flex-wrap">
          { makeDogs }
      </div>
    );
  }
}

export default DogPen;
