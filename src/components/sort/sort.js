import { useDispatch, useSelector } from 'react-redux';
import { sortChanged } from '../coffeeList/filtersSlice';

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const opt = [
    {
        label: 'Более популярные',
        flt: 'raiting desc',
    },
    {
        label: 'Менее популярные',
        flt: 'raiting asc',
    },
    {
        label: 'Более дорогие',
        flt: 'price desc',
    },
    {
        label: 'Менее дорогие',
        flt: 'price asc',
    },
    {
        label: 'Алфавиту',
        flt: 'name asc',
    },
];

const Sort = () => {
    console.log('Sort');

    const sort = useSelector((state) => state.filters.sort);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const dispatch = useDispatch();

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, flt) => {
        setAnchorEl(null);
        dispatch(sortChanged(flt));
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <List component="nav" aria-label="Device settings" sx={{ bgcolor: 'background.paper' }}>
                <ListItem
                    button
                    id="lock-button"
                    aria-haspopup="listbox"
                    aria-controls="lock-menu"
                    aria-label="when device is locked"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickListItem}>
                    <ListItemText
                        primary="Сортировка по:"
                        secondary={opt.find((item) => item.flt === sort).label}
                    />
                </ListItem>
            </List>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                }}>
                {opt.map((option, index) => (
                    <MenuItem
                        key={option.label}
                        disabled={false} //index === 0
                        selected={option.flt === sort}
                        onClick={(event) => handleMenuItemClick(event, option.flt)}>
                        {option.label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default Sort;
