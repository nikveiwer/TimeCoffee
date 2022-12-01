import { configureStore } from '@reduxjs/toolkit';

import coffees from '../components/coffeeList/coffeeSlice';

const store = configureStore({
    reducer: { coffees },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
