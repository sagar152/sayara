import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import washcard from '../images/washcard.png';
import Right from '../images/right.png'
import '../style/Carwash.scss';
import Star from '../images/Star 1.png'
// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const CarWash = ()=>{
    return(
        <>
         <Grid container spacing={2} className='main'>
        <Grid item  xs={12} md={4} xl={4}>
          <div>
              <div className='car-img-div'>
                  <img src={washcard} alt=''/>
              </div>
          </div>
        </Grid>
        <Grid item  xs={12} md={8} xl={8}>
          <div>
              <div className='card-heading '>
                  <h1>Exterior Wash</h1>
                  <div className='card-ratings-withcontent'>
                      <div>
                      <p>By Almjra car wash, Opposite EMC, Musaffah-5 | 2 kms</p>
                      </div>
                      <div className='ratings-div'>
                          <img  src={Star} alt=''/>
                      </div>
                  </div>
                 
                  <div className='cardwash-list'>
                      <div className='cardwash-listimgdiv'>
                          <img src={Right} alt=''/>
                      </div>
                      <div className='carwash-contentlist'>
                        <p>Service at doorstep & workstation</p>
                      </div>
                  </div>
                  <div className='cardwash-list'>
                      <div className='cardwash-listimgdiv'>
                          <img src={Right} alt=''/> 
                      </div>
                      <div className='carwash-contentlist'>
                        <p>Packages are available</p>
                      </div>
                  </div>
                  <div className='cardwash-list'>
                      <div className='cardwash-listimgdiv'>
                          <img src={Right} alt=''/>
                      </div>
                      <div className='carwash-contentlist'>
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
       

        <Grid item xs={12} md={4} xl={4}>
          <div>
              <div className='car-img-div'>
                  <img src={washcard} alt=''/>
              </div>
          </div>
        </Grid>
        <Grid item xs={12} md={8} xl={8}>
          <div>
              <div className='card-heading '>
                  <h1>Exterior Wash</h1>
                  <div className='card-ratings-withcontent'>
                      <div>
                      <p>By Almjra car wash, Opposite EMC, Musaffah-5 | 2 kms</p>
                      </div>
                      <div className='ratings-div'>
                          <img  src={Star} alt=''/>
                      </div>
                  </div>
                 
                  <div className='cardwash-list'>
                      <div className='cardwash-listimgdiv'>
                          <img src={Right} alt=''/>
                      </div>
                      <div className='carwash-contentlist'>
                        <p>Service at doorstep & workstation</p>
                      </div>
                  </div>
                  <div className='cardwash-list'>
                      <div className='cardwash-listimgdiv'>
                          <img src={Right} alt=''/> 
                      </div>
                      <div className='carwash-contentlist'>
                        <p>Packages are available</p>
                      </div>
                  </div>
                  <div className='cardwash-list'>
                      <div className='cardwash-listimgdiv'>
                          <img src={Right} alt=''/>
                      </div>
                      <div className='carwash-contentlist'>
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

        <Grid item xs={12} md={4} xl={4}>
          <div>
              <div className='car-img-div'>
                  <img src={washcard} alt=''/>
              </div>
          </div>
        </Grid>
        <Grid item xs={12} md={8} xl={8}>
          <div>
              <div className='card-heading '>
                  <h1>Exterior Wash</h1>
                  <div className='card-ratings-withcontent'>
                      <div>
                      <p>By Almjra car wash, Opposite EMC, Musaffah-5 | 2 kms</p>
                      </div>
                      <div className='ratings-div'>
                          <img  src={Star} alt=''/>
                      </div>
                  </div>
                 
                  <div className='cardwash-list'>
                      <div className='cardwash-listimgdiv'>
                          <img src={Right} alt=''/>
                      </div>
                      <div className='carwash-contentlist'>
                        <p>Service at doorstep & workstation</p>
                      </div>
                  </div>
                  <div className='cardwash-list'>
                      <div className='cardwash-listimgdiv'>
                          <img src={Right} alt=''/> 
                      </div>
                      <div className='carwash-contentlist'>
                        <p>Packages are available</p>
                      </div>
                  </div>
                  <div className='cardwash-list'>
                      <div className='cardwash-listimgdiv'>
                          <img src={Right} alt=''/>
                      </div>
                      <div className='carwash-contentlist'>
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

        <Grid item xs={12} md={4} xl={4}>
          <div>
              <div className='car-img-div'>
                  <img src={washcard} alt=''/>
              </div>
          </div>
        </Grid>
        <Grid item xs={12} md={8} xl={8}>
          <div>
              <div className='card-heading '>
                  <h1>Exterior Wash</h1>
                  <div className='card-ratings-withcontent'>
                      <div>
                      <p>By Almjra car wash, Opposite EMC, Musaffah-5 | 2 kms</p>
                      </div>
                      <div className='ratings-div'>
                          <img  src={Star} alt=''/>
                      </div>
                  </div>
                 
                  <div className='cardwash-list'>
                      <div className='cardwash-listimgdiv'>
                          <img src={Right} alt=''/>
                      </div>
                      <div className='carwash-contentlist'>
                        <p>Service at doorstep & workstation</p>
                      </div>
                  </div>
                  <div className='cardwash-list'>
                      <div className='cardwash-listimgdiv'>
                          <img src={Right} alt=''/> 
                      </div>
                      <div className='carwash-contentlist'>
                        <p>Packages are available</p>
                      </div>
                  </div>
                  <div className='cardwash-list'>
                      <div className='cardwash-listimgdiv'>
                          <img src={Right} alt=''/>
                      </div>
                      <div className='carwash-contentlist'>
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

export default CarWash;