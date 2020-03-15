import React, {useState} from 'react'
import { Link /*, Switch, Route*/} from 'react-router-dom'

// for redux
import {connect} from 'react-redux'
import {addCrust} from '../redux/actions/index'

const Crust = ({addCrust}) => {
    
    const crusts = [
        {id: 1, name: 'regular'},
        {id: 2, name: 'thin'},
        {id: 3, name: 'thick'},
        {id: 4, name: 'gluten-free'}
    ]

    // Hook
    const [data, setData] = useState({
        crust:''
    })

    const handleButtonClick = () => {
        console.log('[3. Event handler] ' + data)
        addCrust(data)
        console.log("finished addCrust(data)")
    }

    // TODO: can i export these two functions 
    // b/c they will be used in each component?
    const handleInput = event => {
        
        console.log("[HANDLE INPUT]: ", event.currentTarget.value)
        
        setData(
            {
                ...data,
                [event.target.name]:event.currentTarget.value
            }
        )
        
    }

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
                        // onChange={ event=>
                        //     this.setState({newPizzaCrust:event.currentTarget.value})
                        // }
                    />
                    <label>{crust.name}</label>   

                </div>
        )}
    )}

        <Link to="/addsauce">
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
    return { addCrust: data => dispatch(addCrust(data)) }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Crust)