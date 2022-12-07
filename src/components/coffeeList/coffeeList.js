import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { fetchCoffees } from './coffeeSlice';

import CoffeeCard from '../coffeeCard/coffeeCard';

import Grid2 from '@mui/material/Unstable_Grid2';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

const CoffeeList = () => {
    const dispatch = useDispatch();

    const coffees = useSelector((state) => state.coffees.coffees);
    const coffeesLoadingStatus = useSelector((state) => state.coffees.coffeesLoadingStatus);
    const category = useSelector((state) => state.filters.category);
    const sort = useSelector((state) => state.filters.sort);

    useEffect(() => {
        dispatch(
            fetchCoffees(
                `https://6388ba57a4bb27a7f78ffb13.mockapi.io/coffees?${
                    category === 'all' ? null : `category=${category}`
                }&sortBy=${sort.split(' ')[0]}&order=${sort.split(' ')[1]}`,
            ),
        );
    }, [category, sort]);

    return (
        <Grid2 sx={{ justifyContent: 'center' }} container spacing={2}>
            {whatShouldBeRendered(coffeesLoadingStatus, coffees)}
        </Grid2>
    );
};

const whatShouldBeRendered = (status, data) => {
    switch (status) {
        case 'loading':
            return [...new Array(7)].map((item, index) => {
                return (
                    <Grid2 key={index} xs={'auto'}>
                        <ViewSceleton></ViewSceleton>
                    </Grid2>
                );
            });

        case 'norm':
            return data.map((card) => {
                return (
                    <Grid2 key={card.id} xs={'auto'}>
                        <CoffeeCard {...card}></CoffeeCard>
                    </Grid2>
                );
            });
        case 'error':
            return (
                <Alert variant="outlined" severity="error">
                    К сожалению мы не смогли загрузить кофе
                </Alert>
            );
    }
};

const ViewSceleton = () => {
    return (
        <Stack spacing={1}>
            <Skeleton variant="rectangular" width={320} height={200} />
            <Skeleton variant="rounded" width={320} height={190} />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        </Stack>
    );
};

export default CoffeeList;
