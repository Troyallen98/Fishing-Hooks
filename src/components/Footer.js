import { CardGroup } from 'react-bootstrap';
import ProductCard from './ProductCard';

export default function Footer(props) {
    return (
        <CardGroup className='text-center'>
            {props.items.length > 0 &&
                <>
                    <ProductCard addItem={props.addItem} item={props.items[Math.floor(Math.random() * props.items.length)]} />
                    <ProductCard addItem={props.addItem} item={props.items[Math.floor(Math.random() * props.items.length)]} />
                    <ProductCard addItem={props.addItem} item={props.items[Math.floor(Math.random() * props.items.length)]} />
                </>
            }
        </CardGroup>
    )
}
