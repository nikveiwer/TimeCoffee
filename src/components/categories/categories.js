import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Categories = () => {
    const [value, setValue] = React.useState('all');

    const categories = [
        {
            value: 'all',
            label: 'Все',
        },
        {
            value: 'capp',
            label: 'Капучино',
        },
        {
            value: 'es',
            label: 'Эспрессо',
        },
        {
            value: 'moc',
            label: 'Мокко',
        },
        {
            value: 'am',
            label: 'Американо',
        },
        {
            value: 'raf',
            label: 'Раф',
        },
    ];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '590px' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {categories.map(({ value, label }) => {
                        return (
                            <Tab key={value} value={value} label={label} {...a11yProps(value)} />
                        );
                    })}
                </Tabs>
            </Box>
        </Box>
    );
};

export default Categories;
