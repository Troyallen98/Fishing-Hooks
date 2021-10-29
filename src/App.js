import './App.css';
import Home from './components/Home.js'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar.js'
import Products from './components/Products.js'
import Item from './components/Item.js'
import MyCart from './components/MyCart.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/store/products',
            );
            setData(result.data);
        };
        fetchData();
    }, []);


    const [cart, setCart] = useState([])
    function addItem(item, counter) {
        console.log('added to cart')
        let newItem = {...item, amount:counter}
        if (counter > 0) {
            setCart(prevState => [...prevState, newItem])
        } else {
            console.log('not valid quantity')
        }
    }

   


    console.log(data);
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/item/:id">
                    <Item  items={data} />
                </Route>
                <Route path="/mycart">
                    <MyCart cart={cart} items={data} />
                </Route>
                <Route path="/products/:type">
                    <Products   addItem={addItem} items={data} />
                </Route>
                <Route path="/">
                    <Home addItem={addItem} items={data} />
                </Route>
            </Switch>
        </Router>

    )
}

export default App;


