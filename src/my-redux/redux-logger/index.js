function reduxLogger (dispatch) {
    return action => {
        console.log('执行了'+action.type)
        return dispatch(action)
    }
}

export default reduxLogger