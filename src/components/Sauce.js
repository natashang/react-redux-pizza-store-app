import React, { useState} from 'react'
import { Link } from 'react-router-dom'

// for redux
import { connect } from 'react-redux'
import { addSauce } from '../redux/actions/index'


// ? Importing links to all component files - good practice?
import links from '../routing/links'

// Use destructuring {} to pass in functions as a prop
const Sauce = ( {addSauce }) => {
    
    // all possible sauce options to be selected
    const sauces = [
        {id: 1, name: 'tomato'},
        {id: 2, name: 'marinara'},
        {id: 3, name: 'olive oil'},
        {id: 4, name: 'none'}
    ]

    // Hooks
    const [data, setData] = useState({
        sauce:''
    })

    // data is the payload passed into the action creator function addSauce()
    const handleButtonClick = () => {
        console.log('[3. Event handler] ' + data)
        addSauce(data)
        console.log("finished addSauce(data)")
    }

    // TODO: can i export these two functions 
    // b/c they will be used in each component?

    /**
     * Applies the useState hook's update function on the stateful value, data
     * 
     * @param {*} event 
     * @returns {Object} passes the input field's value into the correct state value
     *      - data: { sauce }
     */
    const handleInput = event => {
        // console.log("[HANDLE INPUT]: ", event.currentTarget.value)
        setData(
            {
                ...data,
                [event.target.name]: event.currentTarget.value
            }
        )
    }

     // ? Is this the best solution??????????
     const filterLinks = (arr, linkName) => {
        return arr.filter(
            l => l.name === linkName 
        )
    }

    // TODO: make the text input 'Add Crust' hard-coded
    const filtered = filterLinks(links, 'Add Sauce')
    const nextLink = filtered[0].next
    const label = filtered[0].label 

    return(
        <div>
            <h1>Select your sauce</h1>
            {
                sauces.map( sauce => {
                    return(
                        <div key={sauce.id}>
                            <input 
                                type="radio" 
                                id={sauce.id}
                                name="sauce"
                                value={sauce.name} 
                                onChange = { e => handleInput(e)}
                            />
                            <label>{sauce.name}</label>   
                        </div>
                    )
                })
                }

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
 * @returns {Object}  action creator addSauce()
 */
const mapDispatchToProps = dispatch => {
    console.log('[. Dispatching to store, mapDispatchToProps ]', dispatch)
    return {
        addSauce: data => dispatch(addSauce(data))
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
)(Sauce)