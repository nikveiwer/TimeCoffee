import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import coffees from './slices/coffeeSlice';
import filters from './slices/filtersSlice';
import basket from './slices/basketSlice';

import { storageBasket } from './slices/basketSlice';

import { Middleware } from '@reduxjs/toolkit';

const localStorageMiddleware: Middleware = () => (next) => (action) => {
    const result = next(action);

    if (
        action.type === 'basket/pushCoffee' ||
        action.type === 'basket/deleteWholeCoffee' ||
        action.type === 'basket/decreaseCoffee' ||
        action.type === 'basket/cleanBasket'
    ) {
        const nextBasket = store.getState().basket;
        localStorage.setItem('basket', JSON.stringify(nextBasket));
        console.log('middleware');
    }
    return result;
};

const store = configureStore({
    reducer: { coffees, filters, basket },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

const persistedState = localStorage.getItem('basket');
if (persistedState) {
    store.dispatch(storageBasket(persistedState));
    console.log('persisted');
}

export default store;
