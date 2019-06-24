import React from 'react';

import myDogs from './dogs';
import DogPen from '../Components/DogPen/DogPen';
import myWorkers from './workers';
import WorkerRoom from '../Components/WorkerRoom/WorkerRoom';

import './App.scss';

import Header from '../Components/Header';
import DogContent from '../Components/DogContent';
import WorkerContent from '../Components/WorkerContent';

class App extends React.Component {
  state = {
    dogs: [],
    workers: [],
  }

  componentDidMount() {
    this.setState({ dogs: myDogs });
    this.setState({ workers: myWorkers });
  }

  render() {
    const { dogs } = this.state;
    const { workers } = this.state;
    return (
      <div className="App">
      <Header />
      <DogContent />
      <DogPen dogs={dogs}/>
      <WorkerContent />
      <WorkerRoom workers={workers}/>
      </div>
    );
  }
}

export default App;
