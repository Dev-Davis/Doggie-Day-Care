import React from 'react';

// import myDogs from '../../../db/dogs';

import dogShape from '../../helpers/propz/dogShape';

class Dog extends React.Component {
  static propTypes = {
    dog: dogShape.dogShape,
  }

  render() {
    const { dog } = this.props;
    return (
      <div className="Dog col-3">
        <div className="card">
          <img src={dog.imageUrl} className="card-img-top" alt="A dog" />
          <div className="card-body">
            <h3 className="card-title">{dog.name}</h3>
            <h5 className="card-text">{dog.color}</h5>
            <h5 className="card-text">{dog.personality}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;
