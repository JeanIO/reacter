
// @flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {fun2, concat} from './functional'
// import {withService} from './smart-service/src'
// import MyService from './service'
// @withService(MyService, state => ({
//   value: state.value
// }))
class App extends Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
  }

  componentDidMount(){
    this.setState({ count: fun2(0) })
    concat(true, false)
  }

  addCount = () => {
    const { myService } = this.props
    myService.valueAdd()
  }

  render() {
    const { value } = this.props
    return (
     <div onClick={this.addCount}>
       Hello World {value}
     </div>
    );
  }
}
export default App