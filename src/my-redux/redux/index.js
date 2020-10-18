function createStore (reducer, enhancer) {
    if(enhancer) {
        return enhancer(createStore, reducer)
    }
    let currentStore = undefined
    let listeners = new Set()
    const getState = () => {
        return currentStore
    }

    const subscribe = (func) => {
        listeners.add(func)
        return () => {
            listeners.delete(func)
        }
    }

    const dispatch = (action) => {
        currentStore = reducer(currentStore, action)
        Array.from(listeners).forEach(func => func(action))
    }
    dispatch({ type: '@reducer/init' })
    return {
        dispatch, getState, subscribe
    }
}


function applyMiddleWares (...middlewares) {
    return (createStore, reducer) => {
        const store = createStore(reducer)
        const dispatch = compose(...middlewares)(store.dispatch)
        return {
            ...store, dispatch
        }
    }
}

function compose(...args) {
    if(args.length) {
        if(args.length === 1) {
            return args[0]
        } else {
            return (dispatch) => args.reduce((prev, next) => next(prev(dispatch)))
        }
    } else {
        return args => args
    }
}


export {
    createStore,
    applyMiddleWares
}