import Header from '../header/header';
import Categories from '../categories/categories';
import Sort from '../sort/sort';
import CoffeeCard from '../coffeeCard/coffeeCard';
import CoffeeList from '../coffeeList/coffeeList';

import { Container } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

function App() {
    return (
        <>
            <Header></Header>

            <Container
                sx={{
                    paddingTop: '50px',
                }}>
                <Grid2 container sx={{ justifyContent: 'space-between' }}>
                    <Grid2 md={8} lg={8}>
                        <Categories></Categories>
                    </Grid2>
                    <Grid2 md={3} lg={3}>
                        <Sort></Sort>
                    </Grid2>
                </Grid2>
            </Container>

            <CoffeeList></CoffeeList>
        </>
    );
}

export default App;
