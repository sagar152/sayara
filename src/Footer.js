import React from "react";
import '../src/style/banner.scss'
import footer1 from '../src/images/footer1.png'
import footer2 from '../src/images/footer2.png'
import footer3 from '../src/images/footer3.png'
import footerbtn from '../src/images/footerbtn.png'
import footerapps from '../src/images/footerapps.png'
import footergoogle from '../src/images/footergoogle.png'
import facebook from '../src/images/facebook.png'
import twiter from '../src/images/twitter.png'
import instagram from '../src/images/instagram.png'
import linkedin from '../src/images/linkedin.png'
import Logofooter from '../src/images/logofooter.png'
import { NavLink, Link } from "react-router-dom";
const Footer =()=>{
    return (
        <>
         {/*footer */}
         <div className='footer-background'>
        <div className="footer">
          <div
            className="footer-flex1"
          >
           <div className='footer-logo-div'>
             <img src={Logofooter} className='footer-logo' alt=''/>
           </div>
          
           <div className='footer-icon-main'>
           <div className='footer-logo-social'>
           <img className='social-logo-infooter' src={facebook}  alt=''/></div>
           <div className='footer-logo-social1'>
           <img className='social-logo-infooter' src={twiter}  alt=''/></div>
           <div className='footer-logo-social1'>
           <img className='social-logo-infooter' src={instagram}  alt=''/></div>
           <div className='footer-logo-social1'>
           <img className='social-logo-infooter' src={linkedin}  alt='' /></div>
           </div>
           <div>
           </div>
          </div>
          <div
            className="footer-content"
          >
           <div>
           <div> <Link className='footer-links' >About</Link></div>
           <div> <Link className='footer-links' >Our offerings</Link></div>
           <div> <Link className='footer-links' >Contact us</Link></div>
            
           </div>
           <div>
           </div>
          </div>
          <div
            className="footer-content-flex1"
          >
          <div>
           <div> <Link className='footer-links'>Blog</Link></div>
           <div> <Link className='footer-links' >How it works</Link></div>
           <div> <Link className='footer-links' >Terms & Conditions</Link></div>
            
           </div>
          </div>
          <div
            className="footer-content-flex1"
          >
          <div>
           <div> <Link className='footer-links' >Become Partner</Link></div>
           <div> <Link className='footer-links' >Customer Log in</Link></div> 
           </div>
          </div>
          <div
            className="footer-contents-flex2"
          >
          <div>
           <div> <Link className='offer-heading'><img src={footergoogle} style={{width:'100%',height:'auto'}} alt=''/></Link></div>
           <div> <Link className='offer-heading'><img src={footerapps} style={{width:'100%',height:'auto'}} alt=''/></Link></div>
            
           </div>
          </div>
          <div
            className="footer-contents-flex2"
          >
          <div style={{width:'60px',margin:'2rem'}}>
           <div> <Link className='offer-heading'><img src={footerbtn} style={{width:'100%',height:'auto'}} alt=''/></Link></div>
            
           </div>
          </div>
        
        </div>
        
        <div className='footers'>
        <div className='footers-flex'>
<div className='footer-linkswithgooggle1' ><img src={footer1} style={{width:'100%',height:'auto'}} alt=''/></div>
<div className='footer-linkswithgooggle'><img src={footer2} style={{width:'100%',height:'auto'}} alt=''/></div>
<div className='footer-linkswithgooggle'><img src={footer3} style={{width:'100%',height:'auto'}} alt=''/></div>
        </div>
         <div className='footer-copy-flex'>
       
<div><p classdName='footer-copy'>Sayaraa Group FZC © 2020 All Rights Reserved</p></div>
        
        </div>
     
         </div>
      </div>
        </>
    )
}

export default Footer;