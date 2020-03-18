import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// ? Importing links to all component files - good practice?
import links from '../routing/links'

// Use destructuring {} to pass in a state's reducer function (order) as a props
const Display = ({ _order }) => {  

    // ? Is this the best solution??????????
    const filterLinks = (arr, linkName) => {
        return arr.filter(
            l => l.name === linkName 
        )
    }
    
    const filtered = filterLinks(links, 'Display Order')
    const nextLink = filtered[0].next
    const label = filtered[0].label 

    return(
        <div>
            <h1>Hey customer, here's your final order</h1>
            
            <table>
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
               
            </table>
            
            <Link to={nextLink}>
                <button 
                    // function call for reset app here
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
 * React-Redux connect() function generates wrapper components 
 * that handle the process of interacting with the Redux store.
 * @param {function} mapStateToProps
 */
export default connect(
    mapStateToProps
)(Display)