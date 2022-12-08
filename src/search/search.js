import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { searchChanged } from '../components/coffeeList/filtersSlice';

const Search = () => {
    const dispatch = useDispatch();

    const search = useSelector((state) => state.filters.search);

    const handleChange = (event) => {
        dispatch(searchChanged(event.target.value));
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                marginBottom: '25px',
            }}
            noValidate
            autoComplete="off">
            <TextField
                id="search"
                label="Поиск"
                value={search}
                placeholder={'Найдите кофе'}
                onChange={handleChange}
            />
        </Box>
    );
};

export default Search;
