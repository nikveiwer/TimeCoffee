import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CoffeeIcon from '@mui/icons-material/Coffee';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Divider from '@mui/material/Divider';
import { Container } from '@mui/material';

import { Link, useLocation } from 'react-router-dom';

import { RootState } from '../../redux/initStore';

const Header: React.FC = () => {
    console.log('Header');

    const { totalSum, totalCount } = useSelector((state: RootState) => state.basket);

    const location = useLocation();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}>
                            <Link style={{ color: 'inherit' }} to="/">
                                <CoffeeIcon />
                            </Link>
                        </IconButton>

                        <Typography
                            lineHeight={'18px'}
                            fontSize={'17px'}
                            variant="h6"
                            component="h1"
                            sx={{ flexGrow: 2 }}>
                            <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/">
                                TimeCoffee
                                <br />
                                <span style={{ fontSize: '9px', lineHeight: '9px' }}>
                                    Закажите здесь, заберите
                                    <br /> в любой нашей точке без очереди
                                </span>
                            </Link>
                        </Typography>

                        {location.pathname !== '/cart' && (
                            <Link style={{ textDecoration: 'none' }} to="/cart">
                                <Button
                                    sx={{
                                        width: '100px',
                                        height: '30px',
                                        padding: '4px 55px',
                                    }}
                                    variant="contained"
                                    endIcon={<ShoppingBasketIcon />}>
                                    <Box textTransform={'none'} mr={'10px'}>
                                        <Typography
                                            lineHeight={'12px'}
                                            fontSize={'12px'}
                                            variant="h6"
                                            component="h6"
                                            sx={{ flexGrow: 2 }}>
                                            {totalSum}р.
                                        </Typography>
                                    </Box>
                                    <Divider color={'white'} orientation="vertical" flexItem />
                                    <Box ml={'10px'}>
                                        <Typography
                                            lineHeight={'12px'}
                                            fontSize={'12px'}
                                            variant="h6"
                                            component="h6"
                                            sx={{ flexGrow: 2 }}>
                                            {totalCount}
                                        </Typography>
                                    </Box>
                                </Button>
                            </Link>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Header;
