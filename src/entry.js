import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import MyReduxPage from './pages/my-redux'

const render = () => {
  return <Router>
    <Route path="/my-redux" component={MyReduxPage}></Route>
  </Router>
}


export default render;
