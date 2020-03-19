import React from 'react'
import { Link } from 'react-router-dom'
import {Button, Container, Row, Col} from 'react-bootstrap'

import centerStyle from '../../utils/centerStyle'

const PrevNextButtons = (props) => {
    return(
        <Container style={centerStyle}>
        <Row>
            <Col>
                <Link to={props.prev}>
                    <Button>
                        {props.plabel}
                    </Button>
                </Link>
            </Col>
            
            <Col>
                <Link to={props.next}>
                    <Button onClick= {props.handleButtonClick} >
                        {props.nlabel}
                    </Button>
                </Link>
            </Col>
        </Row>
    </Container>
    )
   
}

export default PrevNextButtons