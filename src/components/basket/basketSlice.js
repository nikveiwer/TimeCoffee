import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    basketCoffees: [],
    totalSum: 0,
    totalCount: 0,
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        pushCoffee: (state, action) => {
            let index = state.basketCoffees.findIndex(
                (item) =>
                    item.name === action.payload.name &&
                    item.milk === action.payload.milk &&
                    item.size === action.payload.size,
            );

            if (index >= 0) {
                state.basketCoffees[index].count = state.basketCoffees[index].count + 1;
                // state.basketCoffees.splice(index, 1, action.payload);
            } else {
                state.basketCoffees.push(action.payload);
            }

            state.totalSum += action.payload.price;
            state.totalCount += 1;
        },
        // sortChanged: (state, action) => {
        //     state.sort = action.payload;
        // },
        // searchChanged: (state, action) => {
        //     state.search = action.payload;
        // },
        // linkMemo: (state, action) => {
        //     state.category = action.payload.category;
        //     state.sort = action.payload.sort;
        // },
    },
});

const { actions, reducer } = basketSlice;

export default reducer;

export const { pushCoffee } = actions;
