import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import { fetchCoffees } from '../coffeeList/coffeeSlice';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

export default function FullCoffee() {
    const params = useParams();
    const { coffeeId } = params;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCoffees(`https://6388ba57a4bb27a7f78ffb13.mockapi.io/coffees/${coffeeId}`));
    }, []);

    const concreateCoffee = useSelector((state) => state.coffees.coffees[0]);
    const status = useSelector((state) => state.coffees.coffeesLoadingStatus);

    console.log(concreateCoffee);

    return whatShouldBeRendered(status, concreateCoffee);
}

const FullCoffeeCard = (props) => {
    const { name, imageUrl } = props;

    return (
        <Card
            sx={{
                paddingTop: '50px',
                display: 'flex',
                minHeight: '500px',
                justifyContent: 'space-around',
            }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '500px' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut corporis
                        fugiat rem placeat nulla mollitia non, nemo voluptate blanditiis voluptas
                        enim aliquid doloribus repellat explicabo est amet earum minima harum.
                        Простите, стало лень искать описание для каждого кофе)
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ maxWidth: 500, maxHeight: 400 }}
                image={imageUrl}
                alt="Live from space album cover"
            />
        </Card>
    );
};
function CircularIndeterminate() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    );
}

function whatShouldBeRendered(status, data) {
    switch (status) {
        case 'loading':
            return <CircularIndeterminate></CircularIndeterminate>;

        case 'norm':
            return <FullCoffeeCard {...data}></FullCoffeeCard>;
        case 'error':
            return (
                <Alert variant="outlined" severity="error">
                    К сожалению мы не смогли загрузить кофе
                </Alert>
            );
    }
}
