import Header from '../header/header';
import MainPage from '../pages/MainPage';
import Cart from '../pages/Cart';

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
                </Routes>
            </Container>
        </>
    );
}

export default App;
