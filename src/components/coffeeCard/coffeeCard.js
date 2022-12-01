import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const CoffeeCard = (props) => {
    const { imageUrl, name, milks, sizes, price, category, raiting } = props;

    const [milk, setMilk] = React.useState(milks[0] || milks[1]);
    const [size, setSize] = React.useState(sizes[0] || sizes[1] || sizes[2]);
    const [count, setCount] = React.useState(0);

    const handleMilk = (event, newValue) => {
        setMilk(newValue);
    };

    const handleSize = (event, newValue) => {
        setSize(newValue);
    };

    const onAdd = () => {
        setCount((count) => count + 1);
    };

    const milkNames = ['Обычное', 'Растительное'];
    const sizeNames = ['0.2л', '0.4л', '0.6л'];

    return (
        <Card sx={{ width: '320px' }}>
            <CardMedia component="img" height="140" src={imageUrl} alt="coffee cap" />
            <CardContent>
                <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography> */}

                <Box margin={'0 auto'} sx={{ width: '80%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs fontSize={'5px'} value={milk} onChange={handleMilk} aria-label="Milk">
                            {/* <Tab value="default" label="Обычное" {...a11yProps('all')} />
                            <Tab value="grown" label="Растительное" {...a11yProps('capp')} /> */}
                            {milks.map((milkTab, i) => {
                                return (
                                    <Tab
                                        key={i}
                                        value={milkTab}
                                        disabled={!milkTab}
                                        label={milkNames[i]}
                                        {...a11yProps(milkTab)}
                                    />
                                );
                            })}
                        </Tabs>
                    </Box>
                </Box>

                <Box margin={'10px auto'} sx={{ width: '90%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={size} onChange={handleSize} aria-label="basic tabs example">
                            {/* <Tab value="0.2" label="0.2л" {...a11yProps('all')} />
                            <Tab value="0.4" label="0.4л" {...a11yProps('capp')} />
                            <Tab value="0.6" label="0.6л" {...a11yProps('raf')} /> */}
                            {sizes.map((size, i) => {
                                return (
                                    <Tab
                                        key={i}
                                        value={size}
                                        disabled={!size}
                                        label={sizeNames[i]}
                                        {...a11yProps(size)}
                                    />
                                );
                            })}
                        </Tabs>
                    </Box>
                </Box>
            </CardContent>

            <CardActions>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '0 50px',
                        width: '100%',
                    }}>
                    <Box
                        sx={{
                            fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
                            fontWeight: '400',
                        }}>
                        {500 + 'р.'}
                    </Box>
                    <Button onClick={onAdd} size="small" color="primary">
                        + Добавить {count}
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
};

export default CoffeeCard;
