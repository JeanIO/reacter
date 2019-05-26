import { Service } from './smart-service/src'
class MyService extends Service{
    constructor(){
        const state = { value: 1 }
        super({state})
    }
    valueAdd(){
        const {value}  = this.getState()
        this._produceState(state => {state.value = value + 1})
    }

}
export default MyService