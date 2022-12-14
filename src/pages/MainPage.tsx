import Categories from '../components/categories/categories';
import Sort from '../components/sort/sort';
import CoffeeList from '../components/coffeeList/coffeeList';
import Search from '../components/search/search';

import Grid2 from '@mui/material/Unstable_Grid2';

const MainPage: React.FC  = () => {
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
            <Search></Search>
            <CoffeeList></CoffeeList>
        </>
    );
};

export default MainPage;
