import {
    ADD_CUSTOMER, DISPLAY_ORDER, RESET_APP,
    ADD_CRUST, ADD_SAUCE, ADD_TOPPINGS
} from '../actions/index'

const initialState = {
    
}

function order (state = initialState, action) {
    // console.log('[5. ORDER-REDUCER]: ', 'STATE', state,
    //             'ACTION: ', action)

    switch(action.type){
        case ADD_CUSTOMER:
            // console.log('[ACTION]: add customer', action.payload)
            return {
                ...state,
                ...action.payload
            }

        case DISPLAY_ORDER:
            // console.log("[ACTION]: display order", action.payload)
            return state

        case ADD_CRUST:
            // console.log("[ACTION] add crust", action.payload)
            return {
                ...state,
                ...action.payload
            }
        
        case ADD_SAUCE:
            // console.log("[ACTION] add sauce", action.payload)
            return {
                ...state,
                ...action.payload
            }
        
        case ADD_TOPPINGS:
            // console.log("[ACTION] add toppings", action.payload)
            return {
                ...state,
                ...action.payload
            }

        case RESET_APP:            
            // console.log("[ACTION] reset app", action.payload)
            return {
                ...initialState
            }

        default:
            return state
    }
}
export default order