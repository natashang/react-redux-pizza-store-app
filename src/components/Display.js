import React from 'react'
import { Link /*, Switch, Route*/} from 'react-router-dom'
import {connect} from 'react-redux'

const Display = () => {
    

    return(
        <div>
            <h1>Hey customer, here's your final order</h1>
            
            <table>
                <tbody>
                <tr>
                    <td>Name</td>
                    <td>customer name here</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>customer email here</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>customer phone here</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>customer address here</td>
                </tr>
                <tr>
                    <td>Pizza Sauce</td>
                    <td>sauce here</td>
                </tr>
                <tr>
                    <td>Pizza Crust</td>
                    <td>crust here</td>
                </tr>
                <tr>
                    <td>Pizza Toppings</td>
                    <td>toppings here</td>
                </tr>
                </tbody>
               
            </table>
            
            <Link to="/">
            <button 

            >
            Begin my order
            </button>
        </Link>
        </div>
    )  
}


function mapStateToProps(state){
    console.log('[1. State of the store, mapStateToProps ]', state)
    return{
        order:state.order,
        pizza:state.pizza
    }
}

export default connect(mapStateToProps)(Display)