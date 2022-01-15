import React , { useContext,useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";
import vector from '../src/images/Vector.png'
// import Link from "next/link";
// import LogoIcon from "images/logo.svg";
// import LogoRoutes from "./Logopath";
// import { UserContext } from "hooks/UseUser";
// import { useRouter } from "next/router";
const Logo = () => {
  // console.log('role',LogoRoutes[role][0].link)

  // useEffect(() => {
  //   if (!document) return;
  //   const logoCol = document.getElementById('app-logo');
  //   document.addEventListener('scroll', function(e) {
    
  //   const top = document.documentElement.scrollTop;
  //     const scrollTop = (20 - top);
  //     if (Math.abs(scrollTop) < 20) {
  //       console.log(scrollTop)
  //       logoCol.style.marginTop = top + "px";
  //     }
  //   })
  // } , []);
  return (
    <div className="logo-col" id="app-logo" style={{ cursor: "pointer" }}>
      {/* <Link href="/" passHref={true}>
        <img src={LogoIcon} alt="logoicon-img"/>
      </Link> */}
      {/* {HeaderRoutes[role][0].link === role ?  console.log('roles4646464ss',HeaderRoutes[role][0]):'fjdsfjsdjf'} */}
         
          <NavLink activeClassName="active" style={{width:'13.32px',height:'14.45px',color:'#0A202F', display: 'flex',
flexDirection: 'row',


alignItems: 'center'}}   to='/'>
           <img src={vector} alt="logoicon-img" style={{width:'17.99px',height:'29.88px'}}/>&nbsp;SAYARA
           </NavLink>

           </div>
)
};

export default Logo;