import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CoffeeCard = () => {
  const [milk, setMilk] = React.useState('default');
  const [size, setSize] = React.useState('0.4');
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

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography> */}

        <Box margin={'0 auto'} sx={{ width: '80%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs fontSize={'5px'} value={milk} onChange={handleMilk} aria-label="Milk">
              <Tab value="default" label="Обычное" {...a11yProps('all')} />
              <Tab value="grown" label="Растительное" {...a11yProps('capp')} />
            </Tabs>
          </Box>
        </Box>

        <Box margin={'10px auto'} sx={{ width: '90%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={size} onChange={handleSize} aria-label="basic tabs example">
              <Tab value="0.2" label="0.2л" {...a11yProps('all')} />
              <Tab value="0.4" label="0.4л" {...a11yProps('capp')} />
              <Tab value="0.6" label="0.6л" {...a11yProps('raf')} />
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
