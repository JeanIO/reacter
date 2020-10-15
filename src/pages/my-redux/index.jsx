import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../../entities/toDoList'


class MyReduxPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:''
        }
    }

    handleChange = (e) =>{
        this.setState({ value: e.target.value })
    }

    asyncAdd = () => {
        const { asyncAdd } = this.props
        asyncAdd(this.state.value)
        this.setState({ value: '' })
    }

    onEnter = (e) => {
        if(e.keyCode === 13){
            const { addToDo } = this.props
            addToDo(this.state.value)
            this.setState({value: ''})
        }
    }

    del = (e, id) => {
        e.stopPropagation()
        const {delToDo} = this.props
        delToDo(id)
    }

    finishToDo = (id) => {
        const { finishToDo } = this.props
        finishToDo(id)
    }

    render(){
        const { toDoList } = this.props
        return <div>
            <ul>
                {toDoList.map(item => {
                    return <li key={item.id} onClick={() => this.finishToDo(item.id)}>{item.status === "finished" ? <del>{item.todo}</del> : item.todo}<button onClick={(e) => this.del(e, item.id)}>×</button></li>
                })}
            </ul>
            <input value={this.state.value} onChange={this.handleChange} onKeyDown={this.onEnter}/>
            <button onClick={this.asyncAdd}> add </button>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        toDoList: state.ToDo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delToDo: (id) => dispatch({type: actions.delToDo, id }),
        finishToDo: (id) => dispatch({type: actions.finishToDo, id}),
        addToDo: (msg) => dispatch({ type: actions.addToDo, data: msg }),
        asyncAdd: (msg) => dispatch(function(dis){
            dis({ type: actions.addToDo, data: msg + '1' })
            dis({ type: actions.addToDo, data: msg + '2' })
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyReduxPage)