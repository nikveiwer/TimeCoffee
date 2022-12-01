import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/http.hook';

const initialState = {
    coffees: [],
    coffeesLoadingStatus: 'norm',
};

export const fetchCoffees = createAsyncThunk('coffees/fetchCoffees', () => {
    const { request } = useHttp();
    return request('https://6388ba57a4bb27a7f78ffb13.mockapi.io/coffees');
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
                state.coffees = action.payload;
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
