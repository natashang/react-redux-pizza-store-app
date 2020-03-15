import React from 'react'
import {
    BrowserRouter as Router,
    Switch, 
    Route,
    Link
} from 'react-router-dom'
import links from './links'

const Routing = () => {

    return(
        <Router>
             {links.map( link => {
                return(
                    <button key = {link.id} >
                        <Link to={link.to}>{link.name}</Link>
                    </button>
                )
            })}   

            <Switch>

                {/* simplification of the code below, but is it a better practice? */}
                {links.map(link => {
                        return(
                            <Route 
                                exact
                                path = {link.to} 
                                component = {link.component}
                                key = {link.id}    
                            />
                        )
                    })
                }
                {/* <Route exact path="/" component = {Home}/>
                <Route exact path="/addcustomer" component = {Customer}/>
                <Route exact path="/addcrust" component = {Crust}/>
                <Route exact path="/addsauce" component = {Sauce}/>
                <Route exact path="/addtoppings" component = {Toppings}/>
                <Route exact path="/displayorder" component = {Display}/> */}
            </Switch>

        </Router>
    )
   
}

export default Routing