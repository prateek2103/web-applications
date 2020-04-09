import React, { Component } from 'react';
import Home from './components/home';
import Me from './components/me';
import auth from './components/auth';
import {Switch,BrowserRouter,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/me' component={auth(Me)}></Route>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
