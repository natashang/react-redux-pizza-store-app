import React, { useState} from 'react'
import { Link /*, Switch, Route*/} from 'react-router-dom'

// for redux
import {connect} from 'react-redux'
import { addSauce } from '../redux/actions/index'

const Sauce = ({addSauce}) => {
    
    const sauces = [
        {id: 1, name: 'tomato'},
        {id: 2, name: 'marinara'},
        {id: 3, name: 'olive oil'},
        {id: 4, name: 'none'}
    ]

    // Hook
    const [data, setData] = useState({
        sauce:''
    })

    const handleButtonClick = () => {
        console.log('[3. Event handler] ' + data)
        addSauce(data)
        console.log("finished addSauce(data)")
    }

    const handleInput = event => {
        console.log("[HANDLE INPUT]: ", event.currentTarget.value)

        setData(
            {
                ...data,
                [event.target.name]: event.currentTarget.value
            }
        )
    }

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
                                // name={this.state.newPizzaSauce} 
                                value={sauce.name} 
                                onChange = { e => handleInput(e)}
                                // onChange={event => 
                                //     this.setState({newPizzaSauce:event.currentTarget.value})
                                // }
                            />
                            <label>{sauce.name}</label>   
                        </div>
                    )
                })
                }

            <Link to="/addtoppings">
            <button 
                onClick={handleButtonClick}
            >
            Next
            </button>
        </Link>
        </div>
    )  
}


function mapStateToProps(state){
    console.log('[1. State of the store, mapStateToProps ]', state)
    return{
        pizza:state.pizza
    }
}


const mapDispatchToProps = dispatch => {
    console.log('[. Dispatching to store, mapDispatchToProps ]', dispatch)
    return { addSauce: data => dispatch( addSauce(data)) }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sauce)