import React, { useState } from 'react'
import {ProgressBar, Form} from 'react-bootstrap'

import PrevNextButtons from './presentation/PrevNextButtons'
import getLinkInfo from '../utils/getLinkInfo'

// for redux
import { connect } from 'react-redux'
import { addToppings } from '../redux/actions/index'

import links from '../utils/links'


// Use destructuring {} to pass in functions as a prop
const Toppings = ({ addToppings }) => {

    // FUTURE TODO: add costs for each topping
    // all possible toppings options to be selected
    const toppings = [
        {id: 1, name: 'pepperoni'},
        {id: 2, name: 'sausage'},
        {id: 3, name: 'pineapple'},
        {id: 4, name: 'mango'},
        {id: 5, name: 'potato'},
        {id: 6, name: 'red pepper'},
        {id: 7, name: 'mushrooms'},
        {id: 8, name: 'parmesean'}
    ]

    // Hooks
    const [data, setData] = useState({
        toppings: []
    })

    const currLink = getLinkInfo(links, 'Add Toppings')
    const progress = currLink.progress

    const handleToppings = (topping, event) => {
        // console.log("in handletoppings, topping = ", topping)

        let tmp = [...data.toppings]
        let index = -1

        // has this option been selected yet
        for (let i = 0; i < tmp.length; i++){
            if (tmp[i].name === topping.name)
                index = i
        }

        // if not in toppings[], add()
        if (index === -1)
            handleAddTopping(topping)

        // else, delete() at that index
        else
            handleDeleteTopping(topping, index)
    }

    /**
     * Applies the useState hook's update function on the stateful value, data
     * 
     * @param {*} event 
     * @returns {Object} passes the input field's value into the correct state value
     *      - data: { toppings: [] }
     */
    const handleAddTopping = topping => {
        console.log("in handleadd, topping = ", topping.name)
        
        let tmp = [...data.toppings]
        tmp.push(topping)
        setData(
            {
                ...data,
                toppings:tmp
            }
        )
    }

   /**
    * Deletes a topping from the list of selected toppings
    * @param {Object} topping 
    * @param {*} event 
    * @returns a modified stateful data object via the useState hook
    */
    const handleDeleteTopping = (topping, index) => {
        console.log("in handledelete, topping = ", topping.name, "index =", index)        
        let tmp = [...data.toppings]
        tmp.splice(index, 1)

        setData(
            {
                ...data,
                toppings:tmp
            }
        )       
    }
   
    // data is the payload passed into the action creator function addCrust()
    const handleButtonClick = () => {
        // console.log('[3. Event handler] ' , data)
        addToppings(data)
    }
    
    return(
        <>
            <ProgressBar animated now = {progress}/>

            <h1>Select your toppings</h1>
            
            <Form>
                {toppings.map( topping => {
                    return(
                       <div key = {topping.id}>
                           <Form.Check
                                custom
                                id={topping.id}
                                type="checkbox"
                                name="topping"
                                label={topping.name}
                                value={topping.name}
                                onChange = {event => handleToppings(topping, event)}
                            />
                       </div>
                    )
                })
                }
            </Form>

            <br />
            
            <PrevNextButtons
                    prev = {currLink.prev}
                    plabel = {currLink.plabel}
                    next = {currLink.next}
                    nlabel = {currLink.nlabel}
                    handleButtonClick={handleButtonClick}
                />
        </>
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
 * @returns {Object}  action creator addToppings()
 */
const mapDispatchToProps = dispatch => {
    // console.log('[. Dispatching to store, mapDispatchToProps ]', dispatch)
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
