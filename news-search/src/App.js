import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route ,Switch } from 'react-router-dom';
import Post from './components/post';
import Navbar from './components/navbar';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <div className="container">
          <Route exact path="/" component={Navbar}></Route>
          <Route path="/posts/:post_id" component={Post}></Route>
        </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
