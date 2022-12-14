import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/initStore';

import { useParams } from 'react-router-dom';

import { fetchCoffees } from '../redux/slices/coffeeSlice';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import { ICoffee } from '../@types/in';
import { RootState } from '../redux/initStore';

const FullCoffee: React.FC = () => {
    const params = useParams();
    const { coffeeId } = params;

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCoffees(`https://6388ba57a4bb27a7f78ffb13.mockapi.io/coffees/${coffeeId}`));
    }, []);

    const status = useSelector((state: RootState) => state.coffees.coffeesLoadingStatus);
    const concreateCoffee = useSelector((state: RootState) => state.coffees.coffees[0]);

    console.log(concreateCoffee);

    return whatShouldBeRendered(status, concreateCoffee);
};

const FullCoffeeCard: React.FC<ICoffee> = (props) => {
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
                    <Typography component="div" variant="h3" sx={{ marginBottom: '40px' }}>
                        {name}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" component="div">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut corporis
                        fugiat rem placeat nulla mollitia non, nemo voluptate blanditiis voluptas
                        enim aliquid doloribus repellat explicabo est amet earum minima harum.
                        ????????????????, ?????????? ???????? ???????????? ???????????????? ?????? ?????????????? ????????)
                    </Typography>

                    <Link style={{ textDecoration: 'none' }} to="/">
                        <Button sx={{ marginTop: '20px' }} variant="outlined">
                            ?????????????????? ??????????
                        </Button>
                    </Link>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{
                    display: { md: 'block', xs: 'none' },
                    maxWidth: 500,
                    maxHeight: 400,
                    marginTop: '17px',
                }}
                src={imageUrl}
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

function whatShouldBeRendered(status: string, data: ICoffee) {
    switch (status) {
        case 'loading':
            return <CircularIndeterminate></CircularIndeterminate>;

        case 'norm':
            return <FullCoffeeCard {...data}></FullCoffeeCard>;
        case 'error':
            return (
                <>
                    <Alert variant="outlined" severity="error">
                        ?? ?????????????????? ???? ???? ???????????? ?????????????????? ????????
                    </Alert>

                    <Link style={{ textDecoration: 'none' }} to="/">
                        <Button sx={{ marginTop: '20px' }} variant="outlined">
                            ?????????????????? ??????????
                        </Button>
                    </Link>
                </>
            );
        default:
            return <></>;
    }
}

export default FullCoffee;
