import {createStore} from 'redux'
import reducers from './reducers/index'

const store = createStore(
    reducers, /* preloadedState,*/
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)



export default store
/*
import {
    addCustomer, addCrust, addSauce, addToppings, displayOrder
  } from './actions/index'
  const store = createStore(reducers)
  
  // Log the initial state
  console.log(store.getState())
  
  // Every time the state changes, log it
  // Note that subscribe() returns a function for unregistering the listener
  const unsubscribe = store.subscribe(() => console.log(store.getState()))
  
  // Dispatch some actions
  store.dispatch(addCustomer('sample customer'))
  store.dispatch(addCrust('sample crust'))
  store.dispatch(addSauce('sample sauce'))
  store.dispatch(addToppings('sample topping a, sample b'))
  store.dispatch(displayOrder('sample order'))
  
  // Stop listening to state updates
  unsubscribe()

// testing purposes
*/