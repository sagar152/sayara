import React, { createRef,useState } from "react";
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../style/Login.scss'
import leftimag from '../images/SIde image.png';
import loginlogo from '../images/loginlogo.png'
import PhoneInput from "react-phone-number-input";
import MuiField from "./MuiField";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import "react-phone-number-input/style.css";
import {Link} from 'react-router-dom'
import { GoogleLogin , GoogleLogout} from 'react-google-login';

// import Googlesign from './Googlelogin'
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width:'80%',
    height:'500px',
    margin:'0 auto',
    transform: 'translate(-50%, -50%)',
  },
};

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');
const ref = createRef();
const Login = () => {
  const ClientId = "358857275498-plkjtsfsdmn3vs15coufspn49lugtkgs.apps.googleusercontent.com"
const [showLoginButton , setShowLoginButton] = useState(true)
const [signoutButton , setSignoutButton] = useState(false)

const onLoginSuccess = (res)=>{
         console.log(res.profileObj,'login sucesses');
         setShowLoginButton(false);
         setSignoutButton(true);
}
const onFailure = (res)=>{
    console.log('failure res',res)
  
}
const onSignOut =()=>{
alert("you have Been sign out sucesessfuly")
setShowLoginButton(true);
setSignoutButton(false);
}
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  const formik = useFormik({
    initialValues: {
      phone: ""
    }
  });
  const { setFieldValue } = formik;
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='login-container'>
        <div className='login-left'>
          <div className='login-img-div'><img src={leftimag} /></div>
        </div>
        <div className='login-right'>sfsdfjdlfd</div>
        </div>
        
      </Modal> */}
    
    <a href="#demo-modal" id='ab'>Open Demo Modal</a>


<div id="demo-modal" class="modal">
    <div class="modal__content">
       {/* <div className='login-container'> */}
         <div className='login-left'>
           <img src={leftimag} className='login-img'/>
           </div>
         <div className='login-right'>
           <div className='login-logodiv'>
             <img  src={loginlogo} className='loginlogo-img'/>
           </div>
           <div className='login-head-div'>
             <h1 className='login-heading'>Welcome to Sayaraa!</h1>

             <form>
      <Box py={3} px={5}>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12}>
        <PhoneInput
          // inputComponent={MuiField}
          international
  defaultCountry="IN"
  addInternationalOption='false'
          className='phone'
          name="phone"
          onChange={(value) => setFieldValue("phone", value)}
          ref={ref}
        />
        </Grid>
        <Grid xs={12}>
       <div className='login-btn'> <Stack spacing={2} >
      <Button variant="contained" className="btn" style={{backgroundColor:'#FB7E15'}}>Get OTP</Button>
   
    </Stack></div>

    <div>
      <p className='signup'>Want to become a partner ? <Link to='signup'>Sign up here</Link></p>
    </div>

    <div className='google-group'>
    {showLoginButton ?  <GoogleLogin
    clientId={ClientId}
    buttonText="Login With Google"
    onSuccess={onLoginSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
    className='login'
  /> : null}

  {signoutButton ? <GoogleLogout
      clientId={ClientId}
      buttonText="Logout"
      onLogoutSuccess={onSignOut}
    >
    </GoogleLogout> : null}
    </div>
        </Grid>
      </Grid>
       
      </Box>
    </form>
           </div>
         </div>
       {/* </div> */}

        <a href="#" class="modal__close">&times;</a>
    </div>
</div>
    </div>
  );
}
export default Login;