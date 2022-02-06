import React from 'react';
import Footer from '../Footer'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../style/Contactus.scss';
import Location from '../images/Location.png';
import Call from '../images/Call.png';
import Message from '../images/Message.png'
import Header from '../HomeHeader'


const Contactus = ()=>{
    return(
        <>
        
        <div className='contactus-main'>
          <Header />
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12} md={4} lg={4} xl={4} mt={10}>
         <div>
             <div className='contact-content'>
             <h1 className='contact-heading'>Contact us</h1>
          <br/>
          <p className='contact-para'>If you have any questions simply use the following contact details. We’re available 24x7.</p>
          <div className='address-div'>
              <div>
<div><img src={Location} className='contact-icon' alt=''/></div>
              </div>
              <div>
                 <div>
                 <p className='location-para'>
                Sayaraa Group FZC 
                 <br />
                <span className='location-span'>Business center, Sharjah Publishing City <br /> Free Zone </span>
                <br />
                <span className='location-span'>Sharjah, United Arab Emirates </span></p>
                 </div>
              </div>
          </div>

          <div className='address-div'>
              <div>
<div><img src={Call} className='contact-icon' alt=''/></div>
              </div>
              <div>
                 <div>
                 <p className='location-para'>
                 +971-504073436
                 </p>
                 </div>
              </div>
          </div>

          <div className='address-div'>
              <div>
<div><img src={Message} className='contact-icon' alt=''/></div>
              </div>
              <div>
                 <div>
                 <p className='location-para'>
                 info@sayaraagroup.com
                 </p>
                 </div>
              </div>
          </div>
             </div>
         </div>
        </Grid>
        <Grid item  xs={10} md={6} lg={6} xl={6} mt={10}>
         <div>
             <div className='conractform-div'>
               <div><h1 className='form-head'>Write us!</h1></div>

               <div className='contact-input-div forminput'><input type='text' placehoder='Please enter your name' className='input1'  placeholder='Full Name'/></div>

               <div className='contact-input-div forminput'><input type='text' placehoder='Please enter your name' className='input1' placeholder='Email ID' /></div>

               <div className='contact-input-div forminput'><input type='text' placehoder='Please enter your name' className='input1' placeholder='Mobile Number'/></div>

               <div className='contact-input-div forminput'><input type='text' placehoder='Please enter your name' className='input1'  placeholder='Subject'/></div>

               <div className='textarea-div forminput'><textarea type='text' placehoder='Please enter your name' className='input1'  placeholder='Message'/></div>

               <div className='contactbtn-div'><button type='submit' className='contactform-btn'>Submit</button></div>
             </div>
         </div>
        </Grid>
      </Grid>
    </Box>
        </div>
        <Footer />
        </>
    )
}

export default Contactus;