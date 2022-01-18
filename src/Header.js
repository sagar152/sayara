import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import HeaderRoutes from './HeaderRoutes';
import "./style/landing/header.scss";
import Avatar from '@mui/material/Avatar';
import Fram7 from '../src/images/Frame 7.png'
import Logo from './Logo'
export default function Nav() {
  const [toggleState, setToggleState] = useState(false);
console.log('dsfjlsf',HeaderRoutes.anonymous[0].name)
  const toggle = () => {
    setToggleState(toggleState === false ? true : false);
  };

  return (
   <div style={{width:'100%',background:'#fff',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
      <header style={{maxWidth: '1200px', margin:'0 auto'}}>
      
      <div className="logo" onClick={toggle}>
        <Logo />
      </div>

      <nav>
        <i className="fa fa-bars" aria-hidden="true" onClick={toggle} />
        <ul className={`collapsed ${toggleState ? "is-expanded" : ""}`} >
          {HeaderRoutes.anonymous.map((route) => {
            // debugger
            return (
             

                <li key=''>
              <NavLink active className="active" onClick={toggle} to={route.link}>
               {route.name}
                </NavLink></li>
              
            );
          })}
          
          <li >  <NavLink className="Login-btn"  activeClassName="active" onClick={toggle} to='/' >
         
          Log in &nbsp; <Avatar style={{ width:'30px',height:'30px'}}><img src={Fram7} /></Avatar>
                 
                </NavLink> </li>
          {/* <NavLink activeClassName="active" to="/about" onClick={toggle}>
            <li>about</li>
          </NavLink>
          <NavLink activeClassName="active" to="/contact" onClick={toggle}>
            <li>contact</li>
          </NavLink> */}
        </ul>
      </nav>
    </header>
   </div>
  );
}
