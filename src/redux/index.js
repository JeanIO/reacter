const createStore = function(reducer, enhancer){
    if(enhancer){
        return enhancer(createStore)(reducer)
    }
    let state
    let sub_funcs = []
    const dispatch = (action) => {
        const newState = reducer(state, action)
        if(state !== newState){
            sub_funcs.forEach(func => func());
        }
    }

    const getState = () => {
        return state
    }

    const subscribe = (func) => {
        sub_funcs.push(func)
        return function(){
            for(let i = 0; i < sub_funcs.length; i++){
                if(sub_funcs[i] === func){
                    sub_funcs.splice(i, 1)
                }
            }
        }
    }

    dispatch({action: '###9999999sdawdasdawd'})

    return {
        dispatch,
        getState,
        subscribe
    }
}

const applyMiddleWares = function(...middlewares){
    return createStore => (reducer) => {
        const store = createStore(reducer)
        const { dispatch, getState } = store
        const Api = { dispatch, getState }
        const middleWareChains = middlewares.map(item => item(Api))
    }
}



