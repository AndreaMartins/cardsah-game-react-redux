import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import GameBlock from './containers/GameBlock/GameBlock';
import ResultBlock from './containers/ResultBlock/ResultBlock';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/result" component={ResultBlock}/>
          <Route path="/" exact component={GameBlock}/>
        </Switch>
      </div>
    );
  }
}

export default App;
