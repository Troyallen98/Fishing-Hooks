import React, {useState} from 'react'
import { Button, Card } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { Cart } from 'react-bootstrap-icons';
import Quantity from './Quantity';


export default function Item(props) {
const {id} = useParams()
const item = props.items.find(product => product.id === parseInt(id))


 const [counter, setCounter] = useState(0);
    const incrementCounter = () => setCounter(counter + 1);
    const decrementCounter = () => setCounter(() => {
        if (counter > 0) {

            return counter - 1
        } else {
            return counter
        }
    });

    console.log(props)
    return (

        <Card className='m-5 rounded text-center' >
            <Card.Img src={item?.image} />
            <Card.Body>
                <Card.Title >
                    {item?.name}
                </Card.Title>
                <Card.Text className='text-content-center'>
                    {item?.description}
                </Card.Text>
                <Card.Title>
                    {'$ ' + item?.price}
                </Card.Title>
            </Card.Body>
            <Card.Footer>
                <Button className='mb-3 mt-2'><Cart /></Button>
                <Quantity incrementCounter={incrementCounter } counter={counter} decrementCounter={decrementCounter}/> 
            </Card.Footer>
        </Card>

    )
}
