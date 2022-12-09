import { useDispatch } from 'react-redux';

import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import debounce from 'lodash.debounce';

import { searchChanged } from '../components/coffeeList/filtersSlice';

const Search = () => {
    console.log('Search');
    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    const waitHandleChange = useCallback(
        debounce((value) => dispatch(searchChanged(value)), 500),
        [],
    );

    const handleChange = (event) => {
        setValue(event.target.value);
        waitHandleChange(value);
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
                value={value}
                placeholder={'Найдите кофе'}
                onChange={handleChange}
            />
        </Box>
    );
};

export default Search;
