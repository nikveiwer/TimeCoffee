
import Header from '../header/header';
import Categories from '../categories/categories';
import Sort from '../sort/sort';
import CoffeeCard from '../coffeeCard/coffeeCard';
import CoffeeList from '../coffeeList/coffeeList';

import { Container } from '@mui/material';


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

      <CoffeeList></CoffeeList>
      
    </>
  );
}

export default App;