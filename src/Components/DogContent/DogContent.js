import React from 'react';

class DogContent extends React.Component {
  // State is the data. The information to print to the screeb
  state = {
    dogs: [],
  }

  render() {
    return (
      <div className="header">
        <h1 className="title-head-name">Our Doggies</h1>
      </div>
    );
  }
}

export default DogContent;
