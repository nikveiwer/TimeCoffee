import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Basket = () => {
    return (
        <Container maxWidth={"md"}>
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

            <Stack spacing={2}>

                    <Card sx={{"width": "100%"}}>
                        {/* <CardMedia component="img" height="50" width={50} src={"https://img.freepik.com/premium-photo/ice-cappuccino-cool-beverage-cafe-view_6351-1562.jpg"} alt="coffee cap" /> */}
                        <CardHeader
                            avatar={
                            <Avatar src={"https://img.freepik.com/premium-photo/ice-cappuccino-cool-beverage-cafe-view_6351-1562.jpg"} aria-label="basketCard">
                            </Avatar>
                            }
                            action={
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "space-between"
                                }}>

                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "space-between"
                                    }}>
                                        <IconButton aria-label="mines">
                                            <ArrowLeftIcon/>
                                        </IconButton>
                                        <IconButton aria-label="plus">
                                            <ArrowRightIcon/>
                                        </IconButton>
                                    </Box>

                                    <Typography mr={"150px"} fontSize={'20px'} variant="h6" component="h3">
                                        125p.
                                    </Typography>
                                    <IconButton aria-label="delete">
                                        <CancelIcon></CancelIcon>
                                    </IconButton>
                                </Box>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                            sx={{
                                fontSize: "30px"
                            }}
                        />
                        
                    </Card>

            </Stack>
        </Container>
    );
};

export default Basket;
