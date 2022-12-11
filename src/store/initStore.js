import { configureStore } from '@reduxjs/toolkit';

import coffees from '../components/coffeeList/coffeeSlice';
import filters from '../components/coffeeList/filtersSlice';
import basket from '../components/basket/basketSlice';

const store = configureStore({
    reducer: { coffees, filters, basket },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
