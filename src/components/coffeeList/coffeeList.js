import CoffeeCard from '../coffeeCard/coffeeCard';

import { coffees } from '../../coffees';

import { Container } from '@mui/material';

const CoffeeList = () => {
    return (
        <Container>
            {coffees.map((card) => {
                return <CoffeeCard key={card.id} {...card}></CoffeeCard>;
            })}
        </Container>
    );
};

export default CoffeeList;
