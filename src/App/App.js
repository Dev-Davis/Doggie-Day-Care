import React from 'react';
import firebase from 'firebase/app';

import Auth from '../Components/Auth/Auth';
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';

import connectFirebase from '../helpers/data/connection';

connectFirebase();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
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
    const { authed } = this.state;
    const loadComponent = () => {
      if (authed) {
        return <Home />;
      }
      return <Auth />;
    };

    return (
      <div className="App">
        <Header utheds={authed}/>
        {loadComponent()}
      </div>
    );
  }
}

export default App;
