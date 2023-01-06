import { useEffect, useState, useCallback } from 'react';

import { useAppDispatch } from '../../redux/initStore';

import { createSelector } from '@reduxjs/toolkit';

import { pushCoffee, deleteWholeCoffee, decreaseCoffee } from '../../redux/slices/basketSlice';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { IBasketCoffee } from '../../@types/in';

import { milkNames } from '../coffeeCard/coffeeCard';

let displayedMilk: string;

const BsaketCard: React.FC<IBasketCoffee> = (props) => {
    console.log('BasketCard');

    const { name, milk, size, price, imageUrl, count } = props;

    const dispatch = useAppDispatch();

    const basketCoffeObj = {
        name,
        milk,
        size,
        imageUrl,
        price,
        count,
    };

    switch (milk) {
        case 'default':
            displayedMilk = milkNames[0];
            break;
        case 'grown':
            displayedMilk = milkNames[1];
            break;
    }

    return (
        <Card sx={{ width: '100%' }}>
            <CardHeader
                avatar={
                    <Avatar
                        sx={{
                            marginRight: { sm: '30px', xs: '5px' },
                        }}
                        src={imageUrl}
                        aria-label="basketCard"></Avatar>
                }
                action={
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: { sm: '250px', xs: '90px' },
                            flexDirection: { sm: 'row', xs: 'column' },
                            alignItems: 'center',
                        }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                            <IconButton
                                onClick={() => dispatch(decreaseCoffee(basketCoffeObj))}
                                aria-label="mines">
                                <ArrowLeftIcon />
                            </IconButton>

                            <Typography fontSize={'20px'} variant="h6" component="h3">
                                {count}
                            </Typography>

                            <IconButton
                                onClick={() => dispatch(pushCoffee(basketCoffeObj))}
                                aria-label="plus">
                                <ArrowRightIcon />
                            </IconButton>
                        </Box>

                        <Typography fontSize={'20px'} variant="h6" component="h3">
                            {price * count}p.
                        </Typography>

                        <IconButton
                            onClick={() => dispatch(deleteWholeCoffee(basketCoffeObj))}
                            aria-label="delete">
                            <CancelIcon></CancelIcon>
                        </IconButton>
                    </Box>
                }
                title={name}
                subheader={`${displayedMilk} молоко, ${size}л`}
                sx={{
                    fontSize: '30px',
                }}
            />
        </Card>
    );
};

export default BsaketCard;
