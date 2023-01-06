import React from 'react'

import Header from '../components/header/header';
import MainPage from '../pages/MainPage';
import Cart from '../pages/Cart';
import FullCoffee from '../pages/FullCoffee';

import { Container } from '@mui/material';

import { Routes, Route } from 'react-router-dom';

function App() {
    console.log('App');
    return (
        <>
            <Header></Header>

            <Container
                sx={{
                    paddingTop: '50px',
                }}>
                <Routes>
                    <Route path="/" element={<MainPage />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/full/:coffeeId" element={<FullCoffee />}></Route>
                </Routes>
            </Container>
        </>
    );
}

export default App;
