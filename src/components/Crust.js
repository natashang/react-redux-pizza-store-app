import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// for redux
import { connect } from 'react-redux'
import { addCrust } from '../redux/actions/index'

// ? Importing links to all component files - good practice?
import links from '../routing/links'

// Use destructuring {} to pass in functions as a prop
const Crust = ({ addCrust }) => {
    
    // all possible crust options to be selected
    const crusts = [
        {id: 1, name: 'regular'},
        {id: 2, name: 'thin'},
        {id: 3, name: 'thick'},
        {id: 4, name: 'gluten-free'}
    ]

    // Hooks
    const [data, setData] = useState({
        crust:''
    })

    // data is the payload passed into the action creator function addCrust()
    const handleButtonClick = () => {
        console.log('[3. Event handler] ' + data)
        addCrust(data)
        console.log("finished addCrust(data)")
    }

    // TODO: can i export these two functions 
    // b/c they will be used in each component?

    /**
     * Applies the useState hook's update function on the stateful value, data
     * 
     * @param {*} event 
     * @returns {Object} passes the input field's value into the correct state value
     *      - data: { crust }
     */
    const handleInput = event => {        
        // console.log("[HANDLE INPUT]: ", event.currentTarget.value)
        setData(
            {
                ...data,
                [event.target.name]:event.currentTarget.value
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
    const filtered = filterLinks(links, 'Add Crust')
    const nextLink = filtered[0].next
    const label = filtered[0].label 

    return(
        <div>
            <h1>Select a crust type</h1>

        {
        crusts.map( crust => {
            return(
                <div key={crust.id}>
                    <input 
                        type="radio" 
                        id={crust.id}
                        name="crust" // enables only one selected
                        value={crust.name} 
                        onChange = {e => handleInput(e)}
                    />
                    <label>{crust.name}</label>   

                </div>
        )}
    )}

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
 * @returns {Object}  action creator addCrust()
 */
const mapDispatchToProps = dispatch => {
    console.log('[. Dispatching to store, mapDispatchToProps ]', dispatch)
    return {
        addCrust: data => dispatch(addCrust(data))
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
)(Crust)