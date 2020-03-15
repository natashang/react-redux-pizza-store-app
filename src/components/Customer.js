import React, {useState} from 'react'
import {connect} from 'react-redux'

// for redux
import { Link /*, Switch, Route*/} from 'react-router-dom'
import {addCustomer} from '../redux/actions/index'

// {addCustomer} makes it passed in as a function
const Customer = ( {addCustomer} ) => {
//class Customer extends React.Component{
    
    // these line up with the name of the input fields
    const [data, setData] = useState({
        name:'',
        email:'',
        phone:'',
        address:''
    })
    

//    render() {
    const handleButtonClick = () => {
        console.log('[3. Event handler] ', data)
        addCustomer(data)
        console.log("finished addCustomer(data)")
    }

    const handleInput = event => {
        setData(
            {
                ...data,
                [event.target.name]: event.target.value
            }
        )
    }
    
    return(
        <div>
            <h1>Enter customer information</h1>

                <label> Name: 
                    <input 
                        type="text" 
                        name="name" 
                        value={data.name}
                        onChange = {e => handleInput(e)}
                           
                        
                        // onChange= {event => 
                        //     this.setState({newname: event.target.value})
                        // }
                    />
                </label>
                <br/>

                <label> Email:  
                    <input 
                        type="email" 
                        name="email"
                        value={data.email}
                        onChange= {e => handleInput(e)}
                        // onChange={event => 
                        //     this.setState({newemail: event.target.value})
                        // }
                    />
                </label>
                <br/>

                <label> Phone:  
                    <input 
                        type="text" 
                        name="phone"
                        value={data.phone}
                        onChange= {e => handleInput(e)}

                        // onChange={event =>
                        //     this.setState({newphone: event.target.value})
                        // }
                    />
                </label>
                <br/>

                <label> Address: 
                    <input 
                        type="text" 
                        name="address"
                        value={data.address}
                        onChange= {e => handleInput(e)}

                        // onChange={event =>
                        //     this.setState({newCustAddress: event.target.value})
                        // }
                    />
                </label>
                <br/>


           <Link to="/addcrust">
            <button 
                 onClick= {handleButtonClick}
            >
                Next
            </button>
        </Link>

        </div>
    )  
//}
}

// take from the store, the state
// state: [ customer:{}, pizza: {}]
const mapStateToProps= (state) => {
    console.log('[1. State of the store, mapStateToProps ]', state)
    return{
        customer:state.customer
    }
}

const mapDispatchToProps = dispatch => {
    console.log('[. Dispatching to store, mapDispatchToProps ]', dispatch)
    return{
        addCustomer: data => dispatch(addCustomer(data))
    }
}



export default connect(
    mapStateToProps ,
    mapDispatchToProps
)(Customer)