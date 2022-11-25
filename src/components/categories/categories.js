
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

    const [value, setValue] = React.useState("all");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    return (
        <Box sx={{ width: '590px' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab value="all" label="Все" {...a11yProps("all")} />
              <Tab value="capp" label="Капучино" {...a11yProps("capp")} />
              <Tab value="es" label="Эспрессо" {...a11yProps("es")} />
              <Tab value="moc" label="Мокко" {...a11yProps("moc")} />
              <Tab value="am" label="Американо" {...a11yProps("am")} />
              <Tab value="raf" label="Раф" {...a11yProps("raf")} />
            </Tabs>
          </Box>
    
        </Box>
      );
}

export default Categories