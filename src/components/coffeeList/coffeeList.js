import CoffeeCard from '../coffeeCard/coffeeCard';

import { coffees } from '../../coffees';

import { Container } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

const CoffeeList = () => {
    return (
        <Container>
            <Grid2 sx={{ justifyContent: 'center' }} container spacing={2}>
                {coffees.map((card) => {
                    return (
                        <Grid2 key={card.id} xs={'auto'}>
                            <CoffeeCard {...card}></CoffeeCard>
                        </Grid2>
                    );
                })}
            </Grid2>
        </Container>
    );
};

export default CoffeeList;
