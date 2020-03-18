import React from 'react'
import { Link } from 'react-router-dom'

// ? Importing links to all component files - good practice?
import links from '../routing/links'

const Home = () => {
    
    // ? Is this the best solution??????????
    const filterLinks = (arr, linkName) => {
    return arr.filter(
        l => l.name === linkName 
     )
}
   const filtered = filterLinks(links, 'Home')
   const nextLink = filtered[0].next
   const label = filtered[0].label

    return(
        <div>
            <h1>Order a Pizza now!</h1>

            <Link to={nextLink}>
                <button>{label}</button>
            </Link>           

        </div>
    )  
}

export default Home