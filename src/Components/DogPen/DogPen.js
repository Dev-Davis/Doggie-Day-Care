import React from 'react';
import PropTypes from 'prop-types';

import dogShape from '../../helpers/propz/dogShape';

import Dog from '../Dogs/Dogs';

import './DogPen.scss';

class DogPen extends React.Component {
  static propTypes = {
    woof: PropTypes.arrayOf(dogShape.dogShape),
  }

  render() {
    const { dogs } = this.props;
    const makeDogs = dogs.map(dog => (
      <Dog key={dog.id} dog={dog} />
    ));
    return (
      <div>
        <div className="DogPen d-flex flex-wrap">
          { makeDogs }
        </div>
      </div>
    );
  }
}

export default DogPen;
