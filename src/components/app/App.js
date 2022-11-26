
import Header from '../header/header';
import Categories from '../categories/categories';
import Sort from '../sort/sort';
import CoffeeCard from '../coffeeCard/coffeeCard';

import { Container } from '@mui/material';
import { display } from '@mui/system';


function App() {
  return (
    <>
      <Header></Header>
      
      <Container sx={{
          display: "flex",
          justifyContent: 'space-between',
          paddingTop: "50px"
        }}>
        <Categories></Categories>
        <Sort></Sort>
      </Container>

      <CoffeeCard></CoffeeCard>
      
    </>
  );
}

export default App;