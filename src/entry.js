import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import MyReduxTestPage from './pages/my-redux-test-page'

const render = () => {
  return <Router>
    <Route path="/my-redux" component={MyReduxTestPage}></Route>
  </Router>
}


export default render;
