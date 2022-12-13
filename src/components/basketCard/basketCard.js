import { useEffect, useState, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { createSelector } from '@reduxjs/toolkit';

import { pushCoffee, deleteWholeCoffee, decreaseCoffee } from '../basket/basketSlice';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const BsaketCard = (props) => {
    console.log('BasketCard');

    const { name, milk, size, price, imageUrl, count } = props;

    const dispatch = useDispatch();

    const basketCoffeObj = {
        name,
        milk,
        size,
        price,
    };

    return (
        <Card sx={{ width: '100%' }}>
            <CardHeader
                avatar={
                    <Avatar
                        sx={{
                            marginRight: '3vw',
                        }}
                        src={imageUrl}
                        aria-label="basketCard"></Avatar>
                }
                action={
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '22vw',
                        }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                            <IconButton
                                onClick={() => dispatch(decreaseCoffee(basketCoffeObj))}
                                color="black"
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
                subheader={`${milk}, ${size}`}
                sx={{
                    fontSize: '30px',
                }}
            />
        </Card>
    );
};

export default BsaketCard;
