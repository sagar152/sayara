import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import washcard from '../images/washcard.png';
import Right from '../images/right.png'
import '../style/Carservice.scss';
import Star from '../images/Star 1.png'
// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const Producttab = ()=>{
    return(
        <>
         <Grid container spacing={2} className='main1'>
         {/* <Grid item xs={12}>
          <div>
          <div className='btn-group'>
                  <div><button className='service-btn'>Services</button></div>
                  <div><button className='product-btn'>Products</button></div>
              </div>
          </div>
        </Grid> */}
        <Grid item  xs={12} md={4} xl={4}>
            <div>
              <div className='car-img-div1'>
                  <img src={washcard}  alt=''/>
              </div>
          </div>
        </Grid>
        <Grid item  xs={12} md={8} xl={8}>
          <div>
              <div className='card-heading1 '>
              <div className='card-main-heading1'>
                      <div>
                      <h1>Wheel Balance</h1>
                      </div>
                      <div className='add-div1'>
                          <p className='add-para1'>AED 100</p>
                          <p className='line1'>AED 100</p>
                      </div>
                  </div>
                  
                  <div className='card-ratings-withcontent1'>
                      <div>
                      <p>By Almjra car wash, Opposite EMC, Musaffah-5 | 2 kms</p>
                      </div>
                      <div className='ratings-div1'>
                         <div className='ratingswithcontent-div1'>
                             <div className='rate-flex1'> <img  src={Star} alt=''/></div>
                             <div><p className='rates1'>4</p></div>
                         </div>
                      </div>
                  </div>
                 
                  <div className='cardwash-list1'>
                      <div className='cardwash-listimgdiv1'>
                          <img src={Right}  alt=''/>
                      </div>
                      <div className='carwash-contentlist1'>
                        <p>Service at doorstep & workstation</p>
                      </div>
                  </div>
                  <div className='cardwash-list1'>
                      <div className='cardwash-listimgdiv1'>
                          <img src={Right}  alt=''/> 
                      </div>
                      <div className='carwash-contentlist1'>
                        <p>Packages are available</p>
                      </div>
                  </div>
                  <div className='cardwash-list1'>
                      <div className='cardwash-listimgdiv1'>
                          <img src={Right}  alt=''/>
                      </div>
                      <div className='carwash-contentlist1'>
                        <p>Complementary services</p>
                      </div>
                  </div>
              </div>
          </div>
         
        </Grid>
        
        <Grid item xs={12}>
        <div className='border1'>
        
        </div>
        </Grid>
        <Grid item  xs={12} md={4} xl={4}>
            <div>
              <div className='car-img-div1'>
                  <img src={washcard}  alt=''/>
              </div>
          </div>
        </Grid>
        <Grid item  xs={12} md={8} xl={8}>
          <div>
              <div className='card-heading1 '>
              <div className='card-main-heading1'>
                      <div>
                      <h1>Exterior Wash</h1>
                      </div>
                      <div className='add-div1'>
                          <p className='add-para1'>AED 100</p>
                          <p className='line1'>AED 100</p>
                      </div>
                  </div>
                  
                  <div className='card-ratings-withcontent1'>
                      <div>
                      <p>By Almjra car wash, Opposite EMC, Musaffah-5 | 2 kms</p>
                      </div>
                      <div className='ratings-div1'>
                         <div className='ratingswithcontent-div1'>
                             <div className='rate-flex1'> <img  src={Star} alt=''/></div>
                             <div><p className='rates1'>4</p></div>
                         </div>
                      </div>
                  </div>
                 
                  <div className='cardwash-list1'>
                      <div className='cardwash-listimgdiv1'>
                          <img src={Right}  alt=''/>
                      </div>
                      <div className='carwash-contentlist1'>
                        <p>Service at doorstep & workstation</p>
                      </div>
                  </div>
                  <div className='cardwash-list1'>
                      <div className='cardwash-listimgdiv1'>
                          <img src={Right}  alt=''/> 
                      </div>
                      <div className='carwash-contentlist1'>
                        <p>Packages are available</p>
                      </div>
                  </div>
                  <div className='cardwash-list1'>
                      <div className='cardwash-listimgdiv1'>
                          <img src={Right}  alt=''/>
                      </div>
                      <div className='carwash-contentlist1'>
                        <p>Complementary services</p>
                      </div>
                  </div>
              </div>
          </div>
         
        </Grid>
        
        <Grid item xs={12}>
        <div className='border'>
        
        </div>
        </Grid>
        <Grid item  xs={12} md={4} xl={4}>
            <div>
              <div className='car-img-div1'>
                  <img src={washcard} alt=''/>
              </div>
          </div>
        </Grid>
        <Grid item  xs={12} md={8} xl={8}>
          <div>
              <div className='card-heading1 '>
              <div className='card-main-heading1'>
                      <div>
                      <h1>Exterior Wash</h1>
                      </div>
                      <div className='add-div1'>
                          <p className='add-para1'>AED 100</p>
                          <p className='line1'>AED 100</p>
                      </div>
                  </div>
                  
                  <div className='card-ratings-withcontent1'>
                      <div>
                      <p>By Almjra car wash, Opposite EMC, Musaffah-5 | 2 kms</p>
                      </div>
                      <div className='ratings-div1'>
                         <div className='ratingswithcontent-div1'>
                             <div className='rate-flex1'> <img  src={Star} alt=''/></div>
                             <div><p className='rates1'>4</p></div>
                         </div>
                      </div>
                  </div>
                 
                  <div className='cardwash-list1'>
                      <div className='cardwash-listimgdiv1'>
                          <img src={Right}  alt=''/>
                      </div>
                      <div className='carwash-contentlist1'>
                        <p>Service at doorstep & workstation</p>
                      </div>
                  </div>
                  <div className='cardwash-list1'>
                      <div className='cardwash-listimgdiv1'>
                          <img src={Right}  alt=''/> 
                      </div>
                      <div className='carwash-contentlist1'>
                        <p>Packages are available</p>
                      </div>
                  </div>
                  <div className='cardwash-list1'>
                      <div className='cardwash-listimgdiv1'>
                          <img src={Right}  alt=''/>
                      </div>
                      <div className='carwash-contentlist1'>
                        <p>Complementary services</p>
                      </div>
                  </div>
              </div>
          </div>
         
        </Grid>
        
        <Grid item xs={12}>
        <div className='border'>
        
        </div>
        </Grid>
        <Grid item  xs={12} md={4} xl={4}>
            <div>
              <div className='car-img-div1'>
                  <img src={washcard} alt=''/>
              </div>
          </div>
        </Grid>
        <Grid item  xs={12} md={8} xl={8}>
          <div>
              <div className='card-heading1 '>
              <div className='card-main-heading1'>
                      <div>
                      <h1>Exterior Wash</h1>
                      </div>
                      <div className='add-div1'>
                          <p className='add-para1'>AED 100</p>
                          <p className='line1'>AED 100</p>
                      </div>
                  </div>
                  
                  <div className='card-ratings-withcontent1'>
                      <div>
                      <p>By Almjra car wash, Opposite EMC, Musaffah-5 | 2 kms</p>
                      </div>
                      <div className='ratings-div1'>
                         <div className='ratingswithcontent-div1'>
                             <div className='rate-flex1'> <img  src={Star} alt=''/></div>
                             <div><p className='rates1'>4</p></div>
                         </div>
                      </div>
                  </div>
                 
                  <div className='cardwash-list1'>
                      <div className='cardwash-listimgdiv1'>
                          <img src={Right} alt='' />
                      </div>
                      <div className='carwash-contentlist1'>
                        <p>Service at doorstep & workstation</p>
                      </div>
                  </div>
                  <div className='cardwash-list1'>
                      <div className='cardwash-listimgdiv1'>
                          <img src={Right}  alt=''/> 
                      </div>
                      <div className='carwash-contentlist1'>
                        <p>Packages are available</p>
                      </div>
                  </div>
                  <div className='cardwash-list1'>
                      <div className='cardwash-listimgdiv1'>
                          <img src={Right}  alt=''/>
                      </div>
                      <div className='carwash-contentlist1'>
                        <p>Complementary services</p>
                      </div>
                  </div>
              </div>
          </div>
         
        </Grid>
        
        <Grid item xs={12}>
        <div className='border'>
        
        </div>
        </Grid>
      </Grid>
     
        </>
    )
}

export default Producttab;