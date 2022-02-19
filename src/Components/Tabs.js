
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../style/tabs.scss'
import { makeStyles } from "@material-ui/core/styles";
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import cartabs from '../images/Cartab.png'
import CarWash from './Carwash'
import Carservice from './Carservice';
import products from '../images/products.png';
import CellcarLists from './CellCar'
// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const useStyle = makeStyles({
  tabs:{
  "& .css-h0q0iv-MuiButtonBase-root-MuiTab-root.Mui-selected":{
    color: '#151C28'
  },
  "& .css-1aquho2-MuiTabs-indicator":{
    backgroundColor:'#151C28'
  }
 } })
function TabPanel(props) {
  const { children, value, index, ...other } = props;
const classes = useStyle();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className={classes.tabs}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
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
          <Tab label="Car wash" iconPosition="start" icon={ <img src={cartabs} className='tabimg tabs' alt=''/>} className='tabs-border' {...a11yProps(0)} />
          <Tab label="Car services/products" iconPosition="start" icon={ <img src={products} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(1)} />
          <Tab label="Buy/CellCar" iconPosition="start" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(2)} />
          <Tab label="Car wash" iconPosition="start" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(3)} />
          <Tab label="Car wash" iconPosition="start" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(4)} />
          <Tab label="Car wash" iconPosition="start" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(5)} />
          <Tab label="Car wash" iconPosition="start" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(6)} />
          <Tab label="Car wash" iconPosition="start" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(7)} />
          <Tab label="Car wash" iconPosition="start" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(8)} />
          <Tab label="Car wash" iconPosition="start" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(9)} />
          <Tab label="Car wash" iconPosition="start" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(10)} />
          <Tab label="Car wash" iconPosition="start" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(11)} />
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
       <CellcarLists />
        </Grid>
     
      </Grid>
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