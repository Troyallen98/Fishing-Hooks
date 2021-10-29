import { ButtonGroup } from 'react-bootstrap';

export default function Quantity(props) {

    

    return (
        <ButtonGroup size="sm">
            <p className='ms-4 me-2' onClick={props.decrementCounter}>-</p>
            <p>{props.counter}</p>
            <p className='me-3 ms-2' onClick={props.incrementCounter}> + </p>
        </ButtonGroup>
    )

}
