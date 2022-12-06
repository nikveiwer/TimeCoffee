import { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const BsaketCard = () => {
    const [count, setCount] = useState(1);

    return (
        <Card sx={{ width: '100%' }}>
            <CardHeader
                avatar={
                    <Avatar
                        sx={{
                            marginRight: '3vw',
                        }}
                        src={
                            'https://img.freepik.com/premium-photo/ice-cappuccino-cool-beverage-cafe-view_6351-1562.jpg'
                        }
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
                                onClick={() => setCount(2)}
                                color="black"
                                aria-label="mines">
                                <ArrowLeftIcon />
                            </IconButton>

                            <Typography fontSize={'20px'} variant="h6" component="h3">
                                {count}
                            </Typography>

                            <IconButton aria-label="plus">
                                <ArrowRightIcon />
                            </IconButton>
                        </Box>

                        <Typography fontSize={'20px'} variant="h6" component="h3">
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
                    fontSize: '30px',
                }}
            />
        </Card>
    );
};

export default BsaketCard;
