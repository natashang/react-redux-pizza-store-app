import React, {useState} from 'react'
import { Link /*, Switch, Route*/} from 'react-router-dom'

import {connect} from 'react-redux'
import { addToppings } from '../redux/actions/index'

const Toppings = () => {

    const toppings = [
        {id: 0, name: 'pepperoni'},
        {id: 1, name: 'sausage'},
        {id: 2, name: 'pineapple'},
        {id: 3, name: 'mango'},
        {id: 4, name: 'potato'},
        {id: 5, name: 'red pepper'},
        {id: 6, name: 'mushrooms'},
        {id: 7, name: 'parmesean'}
    ]

    const [data, setData] = useState({
        // toppings:[],
        toppings: []
    })

    // const handleInput = event => {
    //     console.log("[HANDLE INPUT]: ", event.currentTarget.value)
        
    //     let clicked = event.currentTarget.checked
    //     console.log(clicked)
    //     // (clicked == true) ? clicked = false : clicked =true
    //     // if (event.currentTarget.checked == true){
    //     //     event.currentTarget.checked = false
    //     // }
    //     console.log("now: " + clicked)

    //     let toppings = data.toppings

    //     toppings.push(event.currentTarget.value)
    //     console.log("[HANDLE INPUT -- toppings]: ", toppings)
    //     // setData(
    //     //     {
    //     //         ...data,
    //     //         ...data.push(event.currentTarget.value)
    //     //     }
    //     // )

    //     console.log("[HANDLE INPUT -- DATA NOW]: " , data)
    // }

    const handleAddTopping = (topping, event) => {
        console.log("in handleadd, topping = ", topping.name)
        
        let tmp = [...data.toppings]
        tmp.push(topping)
        // console.log("[HANDLE ADD]: ", tmp)
        setData(
            {
                ...data,
                toppings:tmp
            }
        )
        // console.log("tmp:" + tmp)
        // console.log("toppings: " + data.toppings)
    }

// have to fix this -- doesn't always work!
   const filterToppings = (arr, toppingName) => {
       return arr.filter(
            t => t.name === toppingName //? console.log("t: " + t.name) : console.log("false")
        )
   }

    const handleDeleteTopping = (topping, event) => {
        console.log("in handledelete, topping = ", topping.name)
        let tmp = [...data.toppings]

        // filterToppings return an array with all values that match
        // this is an object
        let currTopping = filterToppings(tmp, topping.name)[0]
        // console.log(currTopping)
        let index = tmp.indexOf(currTopping)
        tmp.splice(index, 1)
        // console.log("[HANDLE DELETE]: ", tmp)
        setData(
            {
                ...data,
                toppings:tmp
            }
        )
        
     }

    const handleButtonClick = () => {
        console.log('[3. Event handler] ' , data)
        addToppings(data)
        console.log("finished addToppings(data)")
    }

    return(
        <div>
            <h1>Select your toppings</h1>
            <ul>
            {
                toppings.map( topping => {
                    return(
                       <div key = {topping.id}>
                           <li>
                               {topping.name}
                               <button 
                                    onClick= { event => handleAddTopping(topping, event)}
                                >
                                   +
                               </button>
                               <button onClick = {event => handleDeleteTopping(topping, event)} >
                                   x
                               </button>
                           </li>
                       </div>
                    )
                })
            }

            </ul>
            

        {/* <Link to="/display"> */}
            <button 
                onClick={handleButtonClick}
            >
            Next
            </button>
        {/* </Link> */}
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
    return { addToppings: data => dispatch(addToppings(data)) }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Toppings)


/* 
<div key={topping.id}>
<input 
    type="radio" 
    id={topping.id}
    // not saying name allows multiple selected
    // name={this.state.newPizzaSauce} 
    // name="topping"
    value={topping.name} 
    onChange = { e => handleInput(e)}
    // onChange={event => 
    //     this.setState({newPizzaSauce:event.currentTarget.value})
    // }
/>
<label>{topping.name}</label>   
</div> */