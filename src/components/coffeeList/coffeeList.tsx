import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/initStore';
import { createSelector } from '@reduxjs/toolkit';
import { fetchCoffees } from '../../redux/slices/coffeeSlice';
import { linkMemo } from '../../redux/slices/filtersSlice';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import CoffeeCard from '../coffeeCard/coffeeCard';

import Grid2 from '@mui/material/Unstable_Grid2';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

import { ICoffee } from '../../@types/in';
import { RootState } from '../../redux/initStore';
import { IFiltersSliceState } from '../../redux/slices/filtersSlice';

const CoffeeList: React.FC  = () => {
    console.log('CoffeeList');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const isSearch = useRef(false);
    const isMounted = useRef(false);

    const coffeesLoadingStatus = useSelector((state: RootState) => state.coffees.coffeesLoadingStatus);
    const category = useSelector((state: RootState) => state.filters.category);
    const sort = useSelector((state: RootState) => state.filters.sort);
    const search = useSelector((state: RootState) => state.filters.search);
    const foundedCoffeesSelector = createSelector(
        (state: RootState) => state.coffees.coffees,
        (coffees) => {
            return search ? coffees.filter(
                (item) => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
            ) : coffees;
        },
    );
    const foundedCoffees = useSelector(foundedCoffeesSelector);

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1)) as unknown as IFiltersSliceState;

            dispatch(linkMemo(params));
            isSearch.current = true;
        }
    }, []);

    const reqCoffees = () => {
        const reqCategory = category === 'all' ? '' : `category=${category}`;
        // const reqSearch = search ? `search=${search}` : '';
        const reqSortBy = sort.split(' ')[0];
        const reqSortOrder = sort.split(' ')[1];
        dispatch(
            fetchCoffees(
                `https://6388ba57a4bb27a7f78ffb13.mockapi.io/coffees?${reqCategory}&sortBy=${reqSortBy}&order=${reqSortOrder}`,
            ),
        );
    };

    useEffect(() => {
        if (!isSearch.current) {
            reqCoffees();
        }

        isSearch.current = false;
    }, [category, sort]);

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                category,
                sort: sort,
            });

            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [category, sort]);



    return (
        <Grid2 sx={{ justifyContent: 'center' }} container spacing={2}>
            {whatShouldBeRendered(coffeesLoadingStatus, foundedCoffees)}
        </Grid2>
    );
};

const whatShouldBeRendered = (status: string, data: ICoffee[]) => {
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

const ViewSceleton: React.FC  = () => {
    return (
        <Stack spacing={1}>
            <Skeleton variant="rectangular" width={320} height={200} />
            <Skeleton variant="rounded" width={320} height={190} />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        </Stack>
    );
};

export default CoffeeList;
