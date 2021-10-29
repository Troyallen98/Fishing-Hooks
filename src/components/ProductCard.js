import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons';
import Quantity from './Quantity';
import { Link } from "react-router-dom";



export default function ProductCard(props) {

    const [counter, setCounter] = useState(0);
    const incrementCounter = () => setCounter(counter + 1);
    const decrementCounter = () => setCounter(() => {
        if (counter > 0) {

            return counter - 1
        } else {
            return counter
        }
    });

    function viewItem(id) {
        
    }

    function itemAdded() {

        props.addItem(props.item, counter)
    }


    return (

        <Card className='m-5 rounded text-center' >
            <Card.Img src={props.item.image} />
            <Card.Body>
                <Card.Title as={Link} to={`/item/${props.item.id}`} onclick={() => viewItem(props.item.id)}>
                    {props.item.name}
                </Card.Title>
                <Card.Text className='text-content-center'>
                    {props.item.description}
                </Card.Text>
                <Card.Title>
                    {'$ ' + props.item.price}
                </Card.Title>
            </Card.Body>
            <Card.Footer>
                <Button onClick={itemAdded} className='mb-3 mt-2'><Cart /> Add to Cart!</Button>
                <Quantity incrementCounter={incrementCounter } counter={counter} decrementCounter={decrementCounter}/>
            </Card.Footer>
        </Card>

    )
}

