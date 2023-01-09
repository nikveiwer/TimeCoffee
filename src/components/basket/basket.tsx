import { useState } from 'react';
import DialogModal from '../dialogModal/dialogModal';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/initStore';

import { cleanBasket } from '../../redux/slices/basketSlice';

import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import Button from '@mui/material/Button';
import CoffeeIcon from '@mui/icons-material/Coffee';
import Grid2 from '@mui/material/Unstable_Grid2';

//@ts-ignore
import { v4 as uuidv4 } from 'uuid';

import { Link } from 'react-router-dom';

import BsaketCard from '../basketCard/basketCard';

import { IBasketCoffee } from '../../@types/in';
import { RootState } from '../../redux/initStore';

const Basket: React.FC = () => {
    console.log('Basket');

    const totalCount = useSelector((state: RootState) => state.basket.totalCount);

    if (totalCount) {
        return <ViewFullBasket></ViewFullBasket>;
    } else {
        return <ViewEmptyBasket></ViewEmptyBasket>;
    }
};

const ViewEmptyBasket: React.FC = () => {
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

            <Button sx={{ marginTop: '20px' }} variant="contained">
                <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/">
                    Вернуться назад
                </Link>
            </Button>
        </Container>
    );
};

const ViewFullBasket: React.FC = () => {
    const { basketCoffees, totalSum, totalCount } = useSelector((state: RootState) => state.basket);

    const dispatch = useAppDispatch();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Container maxWidth={'md'}>
                <Grid2 container sx={{ justifyContent: 'space-between' }}>
                    <Grid2 xs={12} sm={7} md={7} lg={9}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                maxWidth: '170px',
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
                    </Grid2>
                    <Grid2 xs={12} sm={5} md={5} lg={3}>
                        <Box paddingTop={'20px'}>
                            <Button
                                onClick={() => dispatch(cleanBasket())}
                                endIcon={<DeleteIcon color={'primary'}></DeleteIcon>}
                                size="small">
                                Очистить корзину
                            </Button>
                        </Box>
                    </Grid2>
                </Grid2>

                <Stack mt={'70px'} spacing={2}>
                    {basketCoffees.map((coffee: IBasketCoffee) => {
                        return <BsaketCard key={uuidv4()} {...coffee}></BsaketCard>;
                    })}
                </Stack>

                <Grid2 container sx={{ justifyContent: 'space-between' }}>
                    <Grid2 mt={'50px'} xs={12} sm={7} md={9} lg={9}>
                        <Box>
                            <Typography
                                color={'grey'}
                                ml={1}
                                fontSize={'17px'}
                                variant="h6"
                                component="h2">
                                Всего кофе заказано:{' '}
                                <span style={{ color: 'black' }}>{totalCount}шт.</span>
                            </Typography>

                            <Button sx={{ marginTop: '20px' }} variant="outlined">
                                <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/">
                                    Вернуться назад
                                </Link>
                            </Button>
                        </Box>
                    </Grid2>
                    <Grid2 mt={'50px'} xs={12} sm={5} md={3} lg={3}>
                        <Box>
                            <Typography
                                color={'grey'}
                                ml={1}
                                fontSize={'17px'}
                                variant="h6"
                                component="h2">
                                Общая сумма: <span style={{ color: '#1976d2' }}>{totalSum}р.</span>
                            </Typography>
                            <Button
                                onClick={handleClickOpen}
                                sx={{ marginTop: '20px' }}
                                variant="contained">
                                Подтвердить заказ
                            </Button>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>

            <DialogModal
                open={open}
                handleClose={handleClose}
                basketCoffees={basketCoffees}
                totalSum={totalSum}
            />
        </>
    );
};

export default Basket;
