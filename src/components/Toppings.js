import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// for redux
import { connect } from 'react-redux'
import { addToppings } from '../redux/actions/index'

// ? Importing links to all component files - good practice?
import links from '../routing/links'

// Use destructuring {} to pass in functions as a prop
const Toppings = ({addToppings}) => {

    // FUTURE TODO: add costs for each topping
    // all possible toppings options to be selected
    const toppings = [
        {id: 0, name: 'pepperoni'},
        {id: 1, name: 'sausage'},
        {id: 2, name: 'pineapple'},
        {id: 3, name: 'mango'},
        {id: 4, name: 'potato'},
        {id: 5, name: 'red pepper'},
        {id: 6, name: 'mushrooms'},
        {id: 7, name: 'parmesean'}
    ]

    // Hooks
    const [data, setData] = useState({
        toppings: []
    })

    // TODO: Any way to display the list as it is being added? Or highlight the element?
    /**
     * Applies the useState hook's update function on the stateful value, data
     * 
     * @param {*} event 
     * @returns {Object} passes the input field's value into the correct state value
     *      - data: { toppings: [] }
     */
    const handleAddTopping = (topping, event) => {
        console.log("in handleadd, topping = ", topping.name)
        
        let tmp = [...data.toppings]
        tmp.push(topping)
        // console.log("[HANDLE ADD]: ", tmp)
        setData(
            {
                ...data,
                toppings:tmp
            }
        )
        // console.log("tmp:" + tmp)
        // console.log("toppings: " + data.toppings)
    }

    // [TODO: TEST] have to fix this -- doesn't always work!
   /**
    * Inspects an array for a match given an inputted value
    * @param {array} arr - an array with toppings objects
    * @param {string} toppingName - target topping name
    * @returns an array containing all objects matching the truthy condition
    */
    const filterToppings = (arr, toppingName) => {
       return arr.filter(
            t => t.name === toppingName //? console.log("t: " + t.name) : console.log("false")
        )
   }

   /**
    * Deletes a topping from the list of selected toppings
    * @param {Object} topping 
    * @param {*} event 
    * @returns a modified stateful data object via the useState hook
    */
    const handleDeleteTopping = (topping, event) => {
        console.log("in handledelete, topping = ", topping.name)
        let tmp = [...data.toppings]

        // filterToppings return an array with all values that match
        // this is an object
        let currTopping = filterToppings(tmp, topping.name)[0]
        let index = tmp.indexOf(currTopping)
        tmp.splice(index, 1)

        // console.log("[HANDLE DELETE]: ", tmp)
        setData(
            {
                ...data,
                toppings:tmp
            }
        )
        
     }

    // data is the payload passed into the action creator function addCrust()
    const handleButtonClick = () => {
        console.log('[3. Event handler] ' , data)
        addToppings(data)
        console.log("finished addToppings(data)")
    }

     // ? Is this the best solution??????????
     const filterLinks = (arr, linkName) => {
        return arr.filter(
            l => l.name === linkName 
        )
    }

    // TODO: make the text input 'Add Crust' hard-coded
    const filtered = filterLinks(links, 'Add Toppings')
    const nextLink = filtered[0].next
    const label = filtered[0].label 

    return(
        <div>
            <h1>Select your toppings</h1>
            <ul>
            {
                toppings.map( topping => {
                    return(
                       <div key = {topping.id}>
                           <li>
                               {topping.name}
                               <button 
                                    onClick= { event => handleAddTopping(topping, event)}
                                >
                                   +
                               </button>
                               <button onClick = {event => handleDeleteTopping(topping, event)} >
                                   x
                               </button>
                           </li>
                       </div>
                    )
                })
            }

            </ul>
            

            <Link to={nextLink}>
                <button 
                    onClick={handleButtonClick}
                >
                {label}
                </button>
            </Link>
        </div>
    )  
}


/**
 * Using the connect() from react-redux to select the part of the store 
 * the connected component needs.
 * 
 * @param {*} state - Receives the entire store state
 * @return {*} An object with data this component needs. 
 *      - Destructuring: assigns to a local _order object from the order reducer 
 */
const mapStateToProps = state => {
    console.log('[1. State of the store, mapStateToProps ]', state)
    return {
        _order:state.order
    }
}

/**
 * Using the connect() from react-redux to dispatch actions to the store.
 * Triggers a state change.
 * Dispatches the result of an action creator to the store by
 * implicity forwarding arguments to the specified action creator.
 * 
 * @param {*} dispatch 
 * @returns {Object}  action creator addToppings()
 */
const mapDispatchToProps = dispatch => {
    console.log('[. Dispatching to store, mapDispatchToProps ]', dispatch)
    return {
        addToppings: data => dispatch(addToppings(data))
    }
}

/**
 * React-Redux connect() function generates wrapper components 
 * that handle the process of interacting with the Redux store.
 * @param {function} mapStateToProps
 * @param {function} mapDispatchToProps
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Toppings)
