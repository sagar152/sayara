import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Star from '../images/star.png'
import '../style/secondhead.scss'
import HeadApps from '../images/head-app.png'
import HeadGoogle from '../images/head-google.png'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const SecondHead = ()=>{
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return (
        <>
         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} className='sechead-bg'>
        <Grid container spacing={2} className='secondhead'>
        <Grid item xs={8} md={8} xl={8}>
          <div className='second-headstar'>
              <div className='secondhead-img-div'>
                <img src={Star}  alt='star' className='head-img'/>
                
              </div>
              <div className='secondhead-content'>
              <h5 className='secondhead-content-h1'>Download The Sayaraa app & book your service now!</h5>
              </div>
          </div>
          </Grid>
          <Grid item  xs={12} md={4} xl={4} >

<div className='head-social'>
<div className='social-imgdiv1'>
      <img src={HeadGoogle}  alt='star' className='social-img1'/>
      </div>
      <div  className='social-imgdiv2'>

        <img className='social-img2'  src={HeadApps}  alt='star' />
       
      </div>
     
  </div>
</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
   <div className='main-container'>
   <Grid container>
       
       <Grid item  xs={12} md={3} xl={3} >
         <div>
         <h4 className='left-heading'>Get your free quotation...</h4>
         </div>
         <Grid container>
       
       <Grid item xs={12} >
         <div>
      <FormControl sx={{ m: 4, minWidth: 230 }} className='select1' >
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </div>
      </Grid>
      <Grid item xs={12} >
         <div>
      <FormControl sx={{ minWidth: 230 }} className='select2' >
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </div>
      </Grid>
   
    </Grid>
       </Grid>
       {/* <Grid item xs={9}>
         <Item>xs=8</Item>
       </Grid> */}
      
     </Grid>
   </div>
        </>
    )
}

export default SecondHead;