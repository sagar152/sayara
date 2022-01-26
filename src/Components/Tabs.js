// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import car from "../../src/images/download.png";
// import '../style/tabs.scss'
// import tabs from '../images/tabs.png'
// import cartabs from '../images/Cartab.png'
// const Offeringtabs =() => {
//   const [value, setValue] = React.useState(0);
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Tabs
//         onChange={handleChange}
//         value={value}
//         aria-label="Tabs where selection follows focus"
//         selectionFollowsFocus
//         variant="scrollable"
//         scrollButtons
//         aria-label="visible arrows tabs example"

        
//       >
//         <Tab label="Car wash" icon={ <img src={cartabs} className='tabimg'/>} className='tabs-border'/>
//         <Tab label="Car services/products" icon={ <img src={cartabs} className='tabimg'/>}  className='tabs-border'/>
//         <Tab label="Buy/sell car" icon={ <img src={cartabs} className='tabimg'/>} className='tabs-border'/>
//         <Tab label="Rent a car" icon={ <img src={cartabs} className='tabimg'/>} className='tabs-border'/>
//         <Tab label="Emergency services" icon={ <img src={cartabs} className='tabimg'/>}className='tabs-border'/>
//         <Tab label="Item Three" icon={ <img src={cartabs} className='tabimg'/>} className='tabs-border'/>
//         <Tab label="Item One" icon={ <img src={cartabs} className='tabimg'/>} className='tabs-border'/>
//         <Tab label="Item Two" icon={ <img src={cartabs} className='tabimg'/>} className='tabs-border'/>
//         <Tab label="Item Three" icon={ <img src={cartabs} className='tabimg'/>} className='tabs-border'/>
//         <Tab label="Item One" icon={ <img src={cartabs} className='tabimg'/>} className='tabs-border'/>
//         <Tab label="Item Two" icon={ <img src={cartabs} className='tabimg'/>} className='tabs-border'/>
//         <Tab label="Item Three" icon={ <img src={cartabs} className='tabimg'/>} className='tabs-border'/>
//         <Tab label="Item One" icon={ <img src={cartabs} className='tabimg'/>} className='tabs-border'/>
//         <Tab label="Item Two" icon={ <img src={cartabs} className='tabimg'/>} className='tabs-border'/>
//         <Tab label="Item Three" icon={ <img src={cartabs} className='tabimg'/>} className='tabs-border'/>
//         <Tab label="Item One" icon={ <img src={cartabs} className='tabimg'/>} className='tabs-border'/>
//         <Tab label="Item Two" icon={ <img src={cartabs} className='tabimg'/>} className='tabs-border'/>
//         <Tab label="Item Three" icon={ <img src={cartabs} className='tabimg'/>} className='tabs-border'/>
//       </Tabs>
//     </Box>
//   );
// }
// export default Offeringtabs

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../style/tabs.scss'
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import cartabs from '../images/Cartab.png'
import CarWash from './Carwash'
import Carservice from './Carservice';
import products from '../images/products.png';

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" 
          selectionFollowsFocus
                  variant="scrollable"
                  scrollButtons
        >
          <Tab label="Car wash" icon={ <img src={cartabs} className='tabimg tabs' alt=''/>} className='tabs-border' {...a11yProps(0)} />
          <Tab label="Car services/products" icon={ <img src={products} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(1)} />
          <Tab label="Car wash" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(2)} />
          <Tab label="Car wash" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(3)} />
          <Tab label="Car wash" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(4)} />
          <Tab label="Car wash" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(5)} />
          <Tab label="Car wash" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(6)} />
          <Tab label="Car wash" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(7)} />
          <Tab label="Car wash" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(8)} />
          <Tab label="Car wash" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(9)} />
          <Tab label="Car wash" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(10)} />
          <Tab label="Car wash" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(11)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
       <CarWash />
        </Grid>
        {/* <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid> */}
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
       <Carservice />
        </Grid>
     
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={8}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={9}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={10}>
        Item Two
      </TabPanel>
    </Box>
  );
}