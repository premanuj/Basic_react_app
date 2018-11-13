import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Post from "./components/Post"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
