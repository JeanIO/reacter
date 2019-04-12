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
     <div>
       <ul>
         <li>1</li>
         <li>2</li>
         <li>3</li>
         <li>4</li>
         <li>5</li>
       </ul>
     </div>
    );
  }
}

export default App;
