
/* action types */
export const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const ADD_CRUST    = 'ADD_CRUST'
export const ADD_SAUCE    = 'ADD_SAUCE'
export const ADD_TOPPINGS = 'ADD_TOPPINGS'

// do i need this?
export const DISPLAY_ORDER = 'DISPLAY_ORDER'

/* action creators */
export function addCustomer(data){
    console.log("in addCustomer, data: " , {data} )
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
    console.log("in addCrust, data: " , {data} )

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

    console.log("in toppings, data: " , {data} )

    return{
        type: ADD_TOPPINGS,
        payload:{
            toppings: data.toppings
        }
    }
}

// not sure if this is right
export function displayOrder(order){
    return{
        type: DISPLAY_ORDER,
        payload:order
    }
}