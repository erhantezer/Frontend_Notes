

//! index.js ile file açılırsa redux/index.js olarak belirtmemize gerek kalmıyor***

import { DECREMENT, INCREMENT, RESET } from "../types/counterTypes"


const initialState = {
    counter:0,
}

//* counter value state olarak tanımladık.


//? Durum makinesi mantığı
const reducer = (state=initialState,action) =>{
//! caselar types tanımlanarak oradan çekildi.
    switch (action.type) {
        case INCREMENT:
        return {counter: state.counter +1}
        case DECREMENT:
        return {counter: state.counter - 1}
        case RESET:
        return {counter: state.counter * 0}
    
        default:
           return state;
    }

}

export default reducer
//! reducer her zaman bir state döndürmek zorundadır...