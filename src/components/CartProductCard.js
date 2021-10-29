import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';

import { Link } from "react-router-dom";

export default function CartProductCard(props) {

      return (

        <Card className='m-5 rounded text-center' >
            <Card.Img src={props.cart.image} />
            <Card.Body>
                <Card.Title as={Link} to="/item">
                    {props.cart.name}
                </Card.Title>
                <Card.Text className='text-content-center'>
                    {props.cart.description}
                </Card.Text>
                <Card.Title>
                    {'$ ' + props.cart.price}
                </Card.Title>
            </Card.Body>
            <Card.Footer>
                <Button className='mb-3 mt-2'><Trash /></Button>
                <p>{props.cart.amount}</p>
            </Card.Footer>
        </Card>

    )
}