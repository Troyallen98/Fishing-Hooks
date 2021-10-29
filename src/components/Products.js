import React from 'react';
import ProductCard from './ProductCard';
import {Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';



export default function Products(props) {
    const { type } = useParams()
    let filteredItems = props.items.filter(item => item.type === type)


    return (
        <Row>
           
            {filteredItems.map((item, index) => {
                return (
                    <Col key={index} sm={4} md={4}>
                        <ProductCard  addItem={props.addItem} item={item} />
                    </Col>
                )
            })}
            
        </Row>
    )
}
