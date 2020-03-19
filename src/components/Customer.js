import React, {useState} from 'react'
import {ProgressBar, Form } from 'react-bootstrap'

import PrevNextButtons from './presentation/PrevNextButtons'
import getLinkInfo from '../utils/getLinkInfo'

// for redux
import { connect } from 'react-redux'
import { addCustomer } from '../redux/actions/index'

import links from '../utils/links'


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

    const currLink = getLinkInfo(links, 'Add Customer')
    const progress = currLink.progress
    
    // data is the payload passed into the action creator function addCustomer()
    const handleButtonClick = () => {
        // console.log('[3. Event handler] ', data)
        addCustomer(data)
    }

    /**
     * Applies the useState hook's update function on the stateful value, data
     * 
     * @param {*} event 
     * @returns {Object} passes the input field's value into the correct state value
     *      - data: { name, email, phone, address }
     */
    const handleInput = event => {
        // c.log("event: ", event.target.value)
        setData(
            {
                ...data,
                [event.target.name]: event.target.value
            }
        )
    }   
    
    return(
        <div>
            <ProgressBar animated now = {progress}/>

            <h1>Enter customer information</h1>

            <Form>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={data.name}
                        onChange = { e=> handleInput(e)}
                    />
                    {/* <Form.Control.Feedback
                        type="invalid"
                    >
                        Please enter your name.
                    </Form.Control.Feedback> */}
               
                <Form.Label> Email: </Form.Label>
                <Form.Control 
                        type="email" 
                        name="email"
                        value={data.email}
                        onChange= {e => handleInput(e)}
                />
                {/* <Form.Control.Feedback
                    type="invalid"
                >
                    Please enter your email.
                </Form.Control.Feedback> */}

                <Form.Label> Phone:  </Form.Label>
                <Form.Control 
                    type="text" 
                    name="phone"
                    value={data.phone}
                    onChange= {e => handleInput(e)}
                />
                {/* <Form.Control.Feedback
                    type="invalid"
                >
                    Please enter your phone number.
                </Form.Control.Feedback> */}

                <Form.Label> Address: </Form.Label>
                <Form.Control 
                    type="text" 
                    name="address"
                    value={data.address}
                    onChange= {e => handleInput(e)}
                />
                {/* <Form.Control.Feedback
                    type="invalid"
                >
                    Please enter your address.
                </Form.Control.Feedback> */}
                </Form>

                <br />

                <PrevNextButtons
                    prev = {currLink.prev}
                    plabel = {currLink.plabel}
                    next = {currLink.next}
                    nlabel = {currLink.nlabel}
                    handleButtonClick={handleButtonClick}
                />
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
    // console.log('[1. State of the store, mapStateToProps ]', state)
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
    // console.log('[. Dispatching to store, mapDispatchToProps ]', dispatch)
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