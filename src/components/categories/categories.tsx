import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/initStore';
import { categoryChanged } from '../../redux/slices/filtersSlice';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { RootState } from '../../redux/initStore';
import { CategoriesValues } from '../../@types/in';


interface ICategories {
    value: CategoriesValues,
    label: string,
}

function a11yProps(index: string) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Categories: React.FC  = () => {
    console.log('categories');
    const dispatch = useAppDispatch();

    const category = useSelector((state: RootState) => state.filters.category);

    const categories: ICategories[] = [
        {
            value: CategoriesValues.ALL,
            label: 'Все',
        },
        {
            value: CategoriesValues.CAPP,
            label: 'Капучино',
        },
        {
            value: CategoriesValues.ES,
            label: 'Эспрессо',
        },
        {
            value: CategoriesValues.MOC,
            label: 'Мокко',
        },
        {
            value: CategoriesValues.AM,
            label: 'Американо',
        },
        {
            value: CategoriesValues.RAF,
            label: 'Раф',
        },
    ];

    const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: CategoriesValues) => {
        dispatch(categoryChanged(newValue));
    };

    return (
        <Box sx={{ maxWidth: '700px' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={category}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example">
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
