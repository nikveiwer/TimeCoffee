import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { fetchCoffees } from './coffeeSlice';

import CoffeeCard from '../coffeeCard/coffeeCard';

import { Container } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

const CoffeeList = () => {
    const dispatch = useDispatch();

    const coffees = useSelector((state) => state.coffees.coffees);
    const coffeesLoadingStatus = useSelector((state) => state.coffees.coffeesLoadingStatus);

    useEffect(() => {
        dispatch(fetchCoffees());
    }, []);

    const whatShouldBeRendered = (status) => {
        switch (status) {
            case 'loading':
                const skeletons = [];
                for (let i = 0; i < 9; i++) {
                    skeletons.push(
                        <Grid2 xs={'auto'}>
                            <ViewSceleton></ViewSceleton>
                        </Grid2>,
                    );
                }
                return skeletons;
            case 'norm':
                return coffees.map((card) => {
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

    return (
        <Container>
            <Grid2 sx={{ justifyContent: 'center' }} container spacing={2}>
                {whatShouldBeRendered(coffeesLoadingStatus)}
            </Grid2>
        </Container>
    );
};

const ViewSceleton = () => {
    return (
        <Stack spacing={1}>
            <Skeleton variant="rectangular" width={320} height={170} />
            <Skeleton variant="rounded" width={320} height={170} />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        </Stack>
    );
};

export default CoffeeList;
