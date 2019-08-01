import Button from 'antd/lib/button'
import CountButton from './components/Counter'
import React from 'react'
import './css/index.scss'
import cancat from './../../lib/fun'
import { Observable, of, merge } from 'rxjs'
class AdminLogin extends React.Component{
    constructor(){
        super()
        this.state = {
            value: 'value',
            showBtn: true,
            value: 1
        }
    }

    componentDidMount(){
        const v1 = of(1,2,3)
        const v2 = of(3,4,5)
        merge(v1, v2).subscribe((value) => {
            console.log(value)
        })

    }

    clearBtn = () => {
        this.setState({
            showBtn: false
        })
    }
    changeProp = (value) => {
        this.setState({
            value
        })
    }

    render() {
        const { value } = this.state
        return <div className="container">
        <Button type="primary" className="my-button">Come on</Button>
        {this.state.showBtn && <CountButton value={value}/>}
        <Button onClick={this.clearBtn}>Clear CountButton</Button>
        <Button onClick={() => this.changeProp(value + 1)}>Change</Button>
        </div>
    }
}

export default AdminLogin