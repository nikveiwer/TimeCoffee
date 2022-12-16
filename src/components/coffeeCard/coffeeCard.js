import { useEffect, useState, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { createSelector } from '@reduxjs/toolkit';

import { pushCoffee } from '../basket/basketSlice';

import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// import { set } from 'immer/dist/internal';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const CoffeeCard = (props) => {
    console.log('coffeeCad');

    const dispatch = useDispatch();

    const { id, imageUrl, name, milks, sizes, price } = props;

    const [milk, setMilk] = useState(milks[0] || milks[1]);
    const [size, setSize] = useState(sizes[0] || sizes[1] || sizes[2]);
    const [count, setCount] = useState(0);
    const totalPrice = Math.round(price * (Number(size) + 0.8));

    const basketSelector = createSelector(
        (state) => state.basket.basketCoffees,
        (basket) => {
            return basket.find(
                (item) => item.milk === milk && item.size === size && item.name === name,
            );
        },
    );
    const currentCoffeCountInBasket = useSelector(basketSelector);
    // console.log(basketSelector);

    useEffect(() => {
        currentCoffeCountInBasket ? setCount(currentCoffeCountInBasket.count) : setCount(0);
    }, [currentCoffeCountInBasket, milk, size]);

    const handleMilk = (event, newValue) => {
        setMilk(newValue);
    };

    const handleSize = (event, newValue) => {
        setSize(newValue);
    };

    const onAdd = () => {
        const basketCoffeObj = {
            name,
            milk,
            size,
            imageUrl,
            price: totalPrice,
            count: 1,
        };

        dispatch(pushCoffee(basketCoffeObj));
    };

    const milkNames = ['Обычное', 'Растительное'];
    const sizeNames = ['0.2л', '0.4л', '0.6л'];

    return (
        <Card sx={{ width: '320px' }}>
            <CardMedia component="img" height="190" src={imageUrl} alt="coffee cap" />
            <CardContent>
                <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
                    {name}
                </Typography>

                <Box margin={'0 auto'} sx={{ width: '80%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs fontSize={'5px'} value={milk} onChange={handleMilk} aria-label="Milk">
                            {milks.map((milkTab, i) => {
                                return (
                                    <Tab
                                        key={i}
                                        value={milkTab}
                                        disabled={!milkTab}
                                        label={milkNames[i]}
                                        {...a11yProps(milkTab)}
                                    />
                                );
                            })}
                        </Tabs>
                    </Box>
                </Box>

                <Box margin={'10px auto'} sx={{ width: '90%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={size} onChange={handleSize} aria-label="basic tabs example">
                            {/* <Tab value="0.2" label="0.2л" {...a11yProps('all')} />
                            <Tab value="0.4" label="0.4л" {...a11yProps('capp')} />
                            <Tab value="0.6" label="0.6л" {...a11yProps('raf')} /> */}
                            {sizes.map((size, i) => {
                                return (
                                    <Tab
                                        key={i}
                                        value={size}
                                        disabled={!size}
                                        label={sizeNames[i]}
                                        {...a11yProps(size)}
                                    />
                                );
                            })}
                        </Tabs>
                    </Box>
                </Box>
            </CardContent>

            <CardActions>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '0 50px',
                        width: '100%',
                    }}>
                    <Box
                        sx={{
                            fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
                            fontWeight: '400',
                        }}>
                        {`${count === 0 ? totalPrice : totalPrice * count}р.`}
                    </Box>
                    <Button onClick={onAdd} size="small" color="primary">
                        + Добавить {count}
                    </Button>

                    <Link to={`/full/${id}`}>
                        <Button size="small" color="primary">
                            Подробнее
                        </Button>
                    </Link>
                </Box>
            </CardActions>
        </Card>
    );
};

export default CoffeeCard;
