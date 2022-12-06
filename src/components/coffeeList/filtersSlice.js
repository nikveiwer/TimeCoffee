import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: 'all',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        categoryChanged: (state, action) => {
            state.category = action.payload;
        },
    },
});

const { actions, reducer } = filtersSlice;

export default reducer;

export const { categoryChanged } = actions;
