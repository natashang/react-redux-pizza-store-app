import React from 'react'

import { Link /*, Switch, Route*/} from 'react-router-dom'

// import links from '../routing/links'

const Home = () => {

    /*
    const copy = links.filter(e => e.name === 'Home')
    console.log( "copy: ", copy)
    */

    return(
        <div>
            <h1>Order a Pizza now!</h1>
            <Link to="/addcustomer">
                <button >I'm hangry, let me in!</button>
            </Link>
            {/* <Link to={copy.to}>
                <Switch>
                    <Route exact path = {copy.to} component = {copy.component}>
                        <button >I'm hangry, let me in!</button>

                    </Route>
                </Switch>
            </Link> */}

        </div>
    )  
}

export default Home