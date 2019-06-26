import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import myDogs from './dogs';
import DogPen from '../Components/DogPen/DogPen';
import myWorkers from './workers';
import Home from '../Components/Home/Home';

import './App.scss';

class App extends React.Component {
  state = {
    dogs: [],
    workers: [],
    authed: false,
  }

  componentDidMount() {
    this.setState({ dogs: myDogs });
    this.setState({ workers: myWorkers });
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { dogs } = this.state;
    const { workers } = this.state;

    const { authed } = this.state;
    const loadComponent = () => {
      if (authed) {
        return <Home />;
      }
      return <Auth />;
    };

    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
