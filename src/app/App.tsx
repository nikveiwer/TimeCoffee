import React, { Suspense } from 'react';

import Header from '../components/header/header';
import MainPage from '../pages/MainPage';
import FullCoffee from '../pages/FullCoffee';
import NotFound from '../pages/NotFound';

import { CircularProgress, Container } from '@mui/material';

import { Routes, Route } from 'react-router-dom';

const Cart = React.lazy(() => import('../pages/Cart'));

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
                    <Route
                        path="/cart"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <Cart />
                            </Suspense>
                        }></Route>
                    <Route path="/full/:coffeeId" element={<FullCoffee />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </Container>
        </>
    );
}

export default App;
