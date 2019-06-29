import React from 'react';

import dogShape from '../../helpers/propz/dogShape';


class Dog extends React.Component {
  static propTypes = {
    dog: dogShape.dogShape,
  }

  render() {
    const { dog } = this.props;
    return (
      <div className="Dog col-3">
        <div className="card" style={{ width: 362 }}>
          <img src={dog.image} className="card-img-top" alt={dog.name} />
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
