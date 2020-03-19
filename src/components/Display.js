import React from 'react'
import {ProgressBar, Table} from 'react-bootstrap'

import PrevNextButtons from './presentation/PrevNextButtons'
import getLinkInfo from '../utils/getLinkInfo'

import { connect } from 'react-redux'
import {resetApp} from '../redux/actions/index'

import links from '../utils/links'


// Use destructuring {} to pass in a state's reducer function (order) as a props
const Display = ({ _order, resetApp }) => {  
   
    const currLink = getLinkInfo(links, 'Display Order')
    const progress = currLink.progress

    return(
        <div>
            <ProgressBar animated now = {progress}/>

            <h1>Here's your final order</h1>
            
            <Table bordered>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{_order.name}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{_order.email}</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>{_order.phone}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{_order.address}</td>
                </tr>
                <tr>
                    <td>Pizza Crust</td>
                    <td>{_order.crust}</td>
                </tr>
                <tr>
                    <td>Pizza Sauce</td>
                    <td>{_order.sauce}</td>
                </tr>
                <tr>
                    <td>Pizza Toppings</td>
                    <td>
                        <ul>
                        {
                            _order.toppings.map( t => {
                                return(
                                    <li key = {t.id}>
                                        {t.name}
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </td>
                </tr>
                </tbody>
            </Table>            
            
            <PrevNextButtons
                    prev = {currLink.prev}
                    plabel = {currLink.plabel}
                    next = {currLink.next}
                    nlabel = {currLink.nlabel}
                    handleButtonClick={resetApp}
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
    // console.log('[DISPLAY 1. State of the store, mapStateToProps ]', state)
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
    // console.log('[DISPLAY. Dispatching to store, mapDispatchToProps ]', dispatch)
    return { resetApp: () => dispatch(resetApp())}
}

/**
 * React-Redux connect() function generates wrapper components 
 * that handle the process of interacting with the Redux store.
 * @param {function} mapStateToProps
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Display)