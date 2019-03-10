import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

const render = () => {
  return <Router>
    <Route path="/" component={App}></Route>
  </Router>
}

class App extends Component {
  render() {
    return (
     <div>Hello World</div>
    );
  }
}

export default App;
