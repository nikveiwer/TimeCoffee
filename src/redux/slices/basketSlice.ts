import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBasketCoffee } from '../../@types/in';

interface IBasketSliceState {
    basketCoffees: IBasketCoffee[];
    totalSum: number;
    totalCount: number;
}

const initialState: IBasketSliceState = {
    basketCoffees: [],
    totalSum: 0,
    totalCount: 0,
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        pushCoffee: (state, action: PayloadAction<IBasketCoffee>) => {
            let index = state.basketCoffees.findIndex(
                (item) =>
                    item.name === action.payload.name &&
                    item.milk === action.payload.milk &&
                    item.size === action.payload.size,
            );

            if (index >= 0) {
                state.basketCoffees[index].count = state.basketCoffees[index].count + 1;
            } else {
                state.basketCoffees.push(action.payload);
            }

            state.totalSum += action.payload.price;
            state.totalCount += 1;
        },
        deleteWholeCoffee: (state, action: PayloadAction<IBasketCoffee>) => {
            let index = state.basketCoffees.findIndex(
                (item) =>
                    item.name === action.payload.name &&
                    item.milk === action.payload.milk &&
                    item.size === action.payload.size,
            );

            state.totalSum -= state.basketCoffees[index].price * state.basketCoffees[index].count;
            state.totalCount -= state.basketCoffees[index].count;

            state.basketCoffees.splice(index, 1);
        },
        decreaseCoffee: (state, action: PayloadAction<IBasketCoffee>) => {
            let index = state.basketCoffees.findIndex(
                (item) =>
                    item.name === action.payload.name &&
                    item.milk === action.payload.milk &&
                    item.size === action.payload.size,
            );

            state.totalSum -= state.basketCoffees[index].price;
            state.totalCount -= 1;

            if (state.basketCoffees[index].count > 1) {
                state.basketCoffees[index].count -= 1;
            } else {
                state.basketCoffees.splice(index, 1);
            }
        },
        cleanBasket: (state) => {
            state.basketCoffees = [];
            state.totalSum = 0;
            state.totalCount = 0;
        },
        storageBasket: (state, action: PayloadAction<string>) => {
            const persistedBasket: IBasketSliceState = JSON.parse(action.payload);

            state.basketCoffees = persistedBasket.basketCoffees;
            state.totalSum = persistedBasket.totalSum;
            state.totalCount = persistedBasket.totalCount;
        },
    },
});

const { actions, reducer } = basketSlice;

export default reducer;

export const { pushCoffee, deleteWholeCoffee, decreaseCoffee, cleanBasket, storageBasket } =
    actions;
