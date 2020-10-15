
const addToDo = 'ADD_TO_DO'
const finishToDo = 'FINISH_TO_DO'
const delToDo = 'DEL_TO_DO'


let index = 0
const initState = []
const reducer = function(state = initState, action) {
    switch(action.type){
        case addToDo:
            return [...state, { id: index++, todo: action.data, status: 'unstart' }]
        case finishToDo:
            return state.map(item => {
                return item.id === action.id ? {...item, status: 'finished'} : item
            })
        case delToDo: 
            return state.filter(item => !(item.id === action.id))
        default:
            return state

    }
}

const actions = { addToDo, finishToDo, delToDo }

export {
    actions,
    reducer
}