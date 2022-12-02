import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

const Basket = () => {
    return (
        <Container>
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
                    <Typography ml={1} fontSize={'25px'} variant="h6" component="h2">
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
        </Container>
    );
};

export default Basket;
