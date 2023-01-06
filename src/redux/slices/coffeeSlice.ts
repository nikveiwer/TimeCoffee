import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/http.hook';

import { ICoffee } from '../../@types/in';

interface ICoffeeSliceState {
    coffees: ICoffee[];
    coffeesLoadingStatus: "loading" | "error" | "norm"
}

const initialState: ICoffeeSliceState = {
    coffees: [],
    coffeesLoadingStatus: 'loading',
};

export const fetchCoffees = createAsyncThunk<ICoffee[] | ICoffee, string>('coffees/fetchCoffees', (adress) => {
    const { request } = useHttp();
    return request<ICoffee[] | ICoffee>(adress);
});

const coffeesSlice = createSlice({
    name: 'coffees',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoffees.pending, (state) => {
                state.coffeesLoadingStatus = 'loading';
            })
            .addCase(fetchCoffees.fulfilled, (state, action) => {
                if (Array.isArray(action.payload)) {
                    state.coffees = action.payload;
                } else {
                    state.coffees = [action.payload];
                }
                state.coffeesLoadingStatus = 'norm';
            })
            .addCase(fetchCoffees.rejected, (state) => {
                state.coffeesLoadingStatus = 'error';
            })
            .addDefaultCase(() => {});
    },
});

const { actions, reducer } = coffeesSlice;

export default reducer;
