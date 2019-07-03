/* eslint-disable react/jsx-no-undef */
import React from 'react';

class WorkerContent extends React.Component {
  state = {
    workers: [],
  }

  render() {
    return (
      <div className="header">
        <h2 className="title-head">Doggie Walk Schedule</h2>
        <button>Show menu</button>
          <button> Menu item 1 </button>
          <button> Menu item 2 </button>
          <button> Menu item 3 </button>
      </div>
    );
  }
}

export default WorkerContent;
