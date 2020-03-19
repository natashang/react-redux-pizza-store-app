
/* action types */
export const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const ADD_CRUST    = 'ADD_CRUST'
export const ADD_SAUCE    = 'ADD_SAUCE'
export const ADD_TOPPINGS = 'ADD_TOPPINGS'
export const DISPLAY_ORDER = 'DISPLAY_ORDER'
export const RESET_APP    = 'RESET_APP'

/* action creators */
// in ES6: const addCustomer = data => {
export function addCustomer(data){
    return{
        type: ADD_CUSTOMER,
        payload:{
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address
        }
    }
}

export function addCrust(data){
    return{
        type:ADD_CRUST,
        payload:{
            crust: data.crust
        }
    }
}

export function addSauce(data){
    return{
        type: ADD_SAUCE,
        payload:{
            sauce: data.sauce
        }
    }
}

export function addToppings(data){
    return{
        type: ADD_TOPPINGS,
        payload:{
            toppings: data.toppings
        }
    }
}

export function displayOrder(data){
    return{
        type: DISPLAY_ORDER,
        payload:data
    }
}

export function resetApp(){
    return{
        type:RESET_APP,
        payload: ''
    }
}