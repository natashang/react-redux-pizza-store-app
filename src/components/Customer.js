import React, {useState} from 'react'
import { Link } from 'react-router-dom'

// for redux
import { connect } from 'react-redux'
import { addCustomer } from '../redux/actions/index'

// ? Importing links to all component files - good practice?
import links from '../routing/links'

// Use destructuring {} to pass in functions as a prop
const Customer = ( { addCustomer } ) => {
    
    // Hooks
    // variable names line up with the input field names
    const [data, setData] = useState({
        name:'',
        email:'',
        phone:'',
        address:''
    })
    
    // data is the payload passed into the action creator function addCustomer()
    const handleButtonClick = () => {
        console.log('[3. Event handler] ', data)
        addCustomer(data)
        console.log("finished addCustomer(data)")
    }

    /**
     * Applies the useState hook's update function on the stateful value, data
     * 
     * @param {*} event 
     * @returns {Object} passes the input field's value into the correct state value
     *      - data: { name, email, phone, address }
     */
    const handleInput = event => {
        setData(
            {
                ...data,
                [event.target.name]: event.target.value
            }
        )
    }

    // ? Is this the best solution??????????
    const filterLinks = (arr, linkName) => {
        return arr.filter(
            l => l.name === linkName 
        )
    }
    
    // TODO: make the text input 'Add Customer' hard-coded
    const filtered = filterLinks(links, 'Add Customer')
    const nextLink = filtered[0].next
    const label = filtered[0].label 
    
    return(
        <div>
            <h1>Enter customer information</h1>

                <label> Name: 
                    <input 
                        type="text" 
                        name="name" 
                        value={data.name}
                        onChange = {e => handleInput(e)}
                    />
                </label>
                <br/>

                <label> Email:  
                    <input 
                        type="email" 
                        name="email"
                        value={data.email}
                        onChange= {e => handleInput(e)}
                    />
                </label>
                <br/>

                <label> Phone:  
                    <input 
                        type="text" 
                        name="phone"
                        value={data.phone}
                        onChange= {e => handleInput(e)}
                    />
                </label>
                <br/>

                <label> Address: 
                    <input 
                        type="text" 
                        name="address"
                        value={data.address}
                        onChange= {e => handleInput(e)}
                    />
                </label>
                <br/>

            <Link to={nextLink}>
                <button 
                    onClick= {handleButtonClick}
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
 * @returns {Object}  action creator addCustomer()
 */
const mapDispatchToProps = dispatch => {
    console.log('[. Dispatching to store, mapDispatchToProps ]', dispatch)
    return {
        addCustomer: data => dispatch(addCustomer(data))
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
)(Customer)