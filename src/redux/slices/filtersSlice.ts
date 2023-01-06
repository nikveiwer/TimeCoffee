import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CategoriesValues } from '../../@types/in';
import { ISort } from '../../components/sort/sort';

export interface IFiltersSliceState {
    category: CategoriesValues;
    sort: ISort['flt'];
    search: string;
}

const initialState: IFiltersSliceState = {
    category: CategoriesValues.ALL,
    sort: 'raiting desc',
    search: '',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        categoryChanged: (state, action: PayloadAction<IFiltersSliceState['category']>) => {
            state.category = action.payload;
        },
        sortChanged: (state, action: PayloadAction<ISort['flt']>) => {
            state.sort = action.payload;
        },
        searchChanged: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        linkMemo: (state, action: PayloadAction<IFiltersSliceState>) => {
            state.category = action.payload.category;
            state.sort = action.payload.sort;
        },
    },
});

const { actions, reducer } = filtersSlice;

export default reducer;

export const { categoryChanged, sortChanged, searchChanged, linkMemo } = actions;
