import { useAppDispatch } from '../../redux/initStore';

import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//@ts-ignore
import debounce from 'lodash.debounce';

import { searchChanged } from '../../redux/slices/filtersSlice';

const Search = () => {
    console.log('Search');
    const dispatch = useAppDispatch();

    const [value, setValue] = useState('');

    const waitHandleChange = useCallback(
        debounce((value: string) => dispatch(searchChanged(value)), 500),
        [],
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        waitHandleChange(event.target.value);
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                marginBottom: '25px',
            }}
            noValidate
            autoComplete="off"
            onSubmit={(e) => {e.preventDefault()}}>
                
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
