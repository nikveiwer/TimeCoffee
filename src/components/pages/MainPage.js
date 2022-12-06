import Categories from '../categories/categories';
import Sort from '../sort/sort';
import CoffeeCard from '../coffeeCard/coffeeCard';
import CoffeeList from '../coffeeList/coffeeList';

import Grid2 from '@mui/material/Unstable_Grid2';

const MainPage = () => {
    return (
        <>
            <Grid2 container sx={{ justifyContent: 'space-between' }}>
                <Grid2 md={8} lg={8}>
                    <Categories></Categories>
                </Grid2>
                <Grid2 md={3} lg={3}>
                    <Sort></Sort>
                </Grid2>
            </Grid2>
            <CoffeeList></CoffeeList>
        </>
    );
};

export default MainPage;
