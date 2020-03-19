import React from 'react'
import { ProgressBar, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import getLinkInfo from '../utils/getLinkInfo'

import links from '../utils/links'


const Home = () => {
    const currLink = getLinkInfo(links, 'Home')
    const progress = currLink.progress

    return(
        <div>
                <ProgressBar animated now = {progress}/>

                <h1>Pizza Delivery Shop</h1>
                <p>Build your own pizza in seconds! We offer a wide selection of locally sourced ingredients. We also do delivery! </p>

                <Link to={currLink.next}>
                    <Button>{currLink.label}</Button>
                </Link> 
        </div>
    )  
}

export default Home