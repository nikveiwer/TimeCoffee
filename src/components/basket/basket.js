import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import Button from '@mui/material/Button';
import CoffeeIcon from '@mui/icons-material/Coffee';

import { Link } from 'react-router-dom';

import BsaketCard from '../basketCard/basketCard';

const Basket = () => {
    console.log('Basket');
    return (
        <ViewFullBasket></ViewFullBasket>
        // <ViewEmptyBasket></ViewEmptyBasket>
    );
};

const ViewEmptyBasket = () => {
    return (
        <Container
            maxWidth={'md'}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <Typography mr={2} fontSize={'30px'} variant="h6" component="h2">
                    Корзина пуста
                </Typography>

                <MoodBadIcon sx={{ width: '40px', height: '40px' }}></MoodBadIcon>
            </Box>

            <Typography mt={2} color={'grey'} fontSize={'20px'} variant="h6" component="h3">
                Скорее всего вы ничего не заказали.
            </Typography>

            <CoffeeIcon
                color="disabled"
                sx={{ width: '150px', height: '150px', marginTop: '40px' }}></CoffeeIcon>

            <Button sx={{ marginTop: '50px' }} variant="contained">
                Вернуться назад
            </Button>
        </Container>
    );
};

const ViewFullBasket = () => {
    return (
        <Container maxWidth={'md'}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
                sm={{
                    flexDirection: 'column',
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <ShoppingBasketIcon sx={{ width: 60, height: 60 }} />
                    <Typography
                        // color={'#1976d2'}
                        ml={1}
                        fontSize={'25px'}
                        variant="h6"
                        component="h2">
                        Корзина
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}>
                    <DeleteIcon color={'disabled'}></DeleteIcon>
                    <Typography color={'grey'} ml={1} fontSize={'14px'} variant="h6" component="h2">
                        Очистить корзину
                    </Typography>
                </Box>
            </Box>

            <Stack mt={'70px'} spacing={2}>
                <BsaketCard></BsaketCard>
            </Stack>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '40px',
                }}>
                <Box>
                    <Typography color={'grey'} ml={1} fontSize={'17px'} variant="h6" component="h2">
                        Всего кофе заказано: <span style={{ color: 'black' }}>3шт.</span>
                    </Typography>
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <Button sx={{ marginTop: '20px' }} variant="outlined">
                            Вернуться назад
                        </Button>
                    </Link>
                </Box>

                <Box>
                    <Typography color={'grey'} ml={1} fontSize={'17px'} variant="h6" component="h2">
                        Общая сумма: <span style={{ color: '#1976d2' }}>424р.</span>
                    </Typography>
                    <Button sx={{ marginTop: '20px' }} variant="contained">
                        Оплатить заказ
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Basket;
