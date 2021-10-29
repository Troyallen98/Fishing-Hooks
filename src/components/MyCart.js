import React from 'react'
import { Button} from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import ProductCard from './ProductCard';
import {Row, Col } from 'react-bootstrap';


export default function MyCart(props) {
    return (
        <Row>
           
            {props.cart.map((item, index) => {
                return (
                    <Col key={index}>
                        <ProductCard item={item} />
                    </Col>
                )
            })}
            
        </Row>
    )
}    

<Button className='mb-3 mt-2 bg-danger'><Trash /> Remove</Button>