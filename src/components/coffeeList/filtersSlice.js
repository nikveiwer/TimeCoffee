import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: 'all',
    sort: 'raiting desc',
    search: '',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        categoryChanged: (state, action) => {
            state.category = action.payload;
        },
        sortChanged: (state, action) => {
            state.sort = action.payload;
        },
        searchChanged: (state, action) => {
            state.search = action.payload;
        },
    },
});

const { actions, reducer } = filtersSlice;

export default reducer;

export const { categoryChanged, sortChanged, searchChanged } = actions;
