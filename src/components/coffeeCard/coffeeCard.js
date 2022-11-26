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

    const [value, setValue] = React.useState("all");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (

        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography textAlign={"center"} gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography> */}

            <Box margin={"0 auto"} sx={{ width: '70%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs fontSize={"5px"} value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab value="all" label="Все" {...a11yProps("all")} />
                        <Tab value="capp" label="Капучино" {...a11yProps("capp")} />
                    </Tabs>
                </Box>
            </Box>

            <Box margin={"10px auto"} sx={{ width: '90%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab value="all" label="Все" {...a11yProps("all")} />
                        <Tab value="capp" label="Капучино" {...a11yProps("capp")} />
                        <Tab value="raf" label="Раф" {...a11yProps("raf")} />
                    </Tabs>
                </Box>
            </Box>

          </CardContent>
        </CardActionArea>
        <CardActions>


          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>

    )
}

export default CoffeeCard