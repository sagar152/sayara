import * as React from "react";
import Footer from "../Footer";
import {connect} from 'react-redux'
import {Fetchdata} from '../Service'
import Custmerlist from '../Components/Custmerlist'
import car from "../../src/images/download.png";
import Partnerslider  from '../Components/Partnerslider'
import MobilePartnerslider from '../Components/Partnermobslider'
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { NavLink } from "react-router-dom";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Branddropdown from '../Components/Branddropdown'
import CustmerMobilelist from '../Components/Custmermobile'
import SelectSearch from 'react-select-search';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/banner.scss";
import carwashicon from '../images/icons/Car wash.png';
import producticon from '../images/icons/product-icon.png';
import caricons from '../images/icons/car-icon.png';
import drivingicon from '../images/icons/driving-icon.png'
import keyicon from '../images/icons/key-icon.png';
import frame from '../images/icons/fram-icon.png'
import Slider from "react-slick";
import Mobile from "../../src/images/mobile.png";
import engine from "../../src/images/Frame 895.png";
import car1 from "../../src/images/Frame 896.png";
import car2 from "../../src/images/Frame 897.png";
import car3 from "../../src/images/Frame 898.png";
import workmobile from "../../src/images/Group 1007.png";
import btnIcon from "../../src/images/btn-icon.png";
// import { margin, width } from "@mui/system";
import RightArrow from "../../src/images/Arrow - Right.png";
import DblMobile from "../../src/images/dbl-mob.png";
import appstore from "../../src/images/appstore.png";
import googleplay from "../../src/images/googleplay.png";
import Header from "../Header";
import Searchinput from '../Components/Searchinput'
// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char =
    props.type === "next" ? (
      <img src={btnIcon} style={{ width: "50px", height: "50px" }} alt="" />
    ) : (
      // <img src={btnIcon} style={{ width: "50px", height: "50px" }} alt="" /> 
      ''
    );
  return (
    <>
      <div>
        <span className={className} onClick={props.onClick}>
          {char}
        </span>
      </div>
    </>
  );
}
const Home = ({Fetchdata, CustomerRevielist,...ImageSlider}) => {
 const [imageslide,setSlide] = React.useState([]);
 const [age, setAge] = React.useState("");
 const [Brand, setBrand] = React.useState("");
  React.useEffect(()=>{
  Fetchdata();

  },[])
  
  React.useEffect(()=>{
    if(ImageSlider && ImageSlider.ImageSlider.ImageSlider.data ){
      setSlide(ImageSlider.ImageSlider.ImageSlider.data)
    }
    
  },[ImageSlider])
  const handleChange1 = (event) => {
    setBrand(event.target.value);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  var settingsweb = {
    dots: true,
    arrows: true,
    prevArrow: <Arrow type="prev" />,
    nextArrow: <Arrow type="next" />,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  var settingsmob = {
    dots: true,
    arrows: true,
    prevArrow: <Arrow type="prev" />,
    nextArrow: <Arrow type="next" />,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderSlides = () =>
  imageslide.map((num, i) => (
      <div className="cards-list" key={i}>
        <div className="card 1">
          <img src={`https://sayaraagroup.com/${num.image}`} className='slider-images'/>
          <div className="card_heading heading-white">
            <p>{num.title}</p>
          </div>
          <div className="card_title title-white">
            <p>
              Get an{" "}
              <span style={{ fontWeight: "bold" }}>instant discount</span>{" "}
              <br /> of{" "}
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                AED 10
              </span>{" "}
              for the <br />
              <br />{" "}
             
            </p>
            <div style={{  backgroundColor: "yellow",
                  padding: "8px 8px",
                  borderTopLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  width: '257px'}}>
            <p
                style={{
                
                  fontSize: "18px",
                  color: "black",
                  lineHeight:'27px'
                }}
              >
                {/* Express gold wash */}
                {num.company_name}
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    ));

    const imagesicon = [
      // {
      //   image:carwashicon,
      //   text:'Car Wash'
      // },
      {
        image:producticon,
        text:'Car Services or Products'
      },
      {
        image:caricons,
        text:'Buy or Sell Car'
      },
      {
        image:keyicon,
        text:'Rent a Car'
      },
      {
        image:frame,
        text:'Emergency Services'
      },
      {
        image:drivingicon,
        text:'Driving Instructor'
      },
  
    ]
    const homeiconcard = ()=>
    imagesicon.map((data,index)=>(
      <div className="car-setting" key={index}>
      <div className='icon-maindiv-home'>
      <div className='icon-div-homeicon'><img src={data.image} className='icon-images-home' /></div>

      <div className='icon-maindiv-heading'><h1 className='car-headings-icon'>{data.text}</h1></div>
    </div>
    </div>
    ))

    const [visibility, setVisibility] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState("");
    const [search, setSearch] = React.useState("");
    const options = [
      "Andaman and Nicobar Islands",
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chandigarh",
      "Chhattisgarh",
      "Dadra and Nagar Haveli",
      "Daman and Diu",
      "Delhi",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jammu and Kashmir",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Lakshadweep",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Orissa",
      "Pondicherry",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Tripura",
      "Uttaranchal",
      "Uttar Pradesh",
      "West Bengal"
    ];
  
  return (
    <div style={{ maxWidth: "100%" }}>
      <Header />
      <div className="main">
        <div className="flexdiv">
          <div className="container-home banner-container">
            <div className="banner-left-container">
              <h1>Explore The Best Car Services in Abu Dhabi</h1>
              <p>
                Lorem Which Are car services are top rated in Abu dhabi. we'll
                you get istant qutation in minute.
              </p>
            </div>
            <div className="dropdown-group">
             <Branddropdown />
     
  <Searchinput />
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Button variant="contained" className="button-getfree" >
                Get Free Quotation
              </Button>
          
            </div>
          </div>
        </div>
        <div className="flexdiv">
          <div style={{ width: "95%", margin: "0 auto" }}>
            <div className="img-div">
              <img
                src={car}
                style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="slider webslider">
        <Slider dots={true} {...settingsweb}>
          {renderSlides()}
        </Slider>
      </div>
      <div className="slider mobslider">
        <Slider dots={true} {...settingsmob}>
          {renderSlides()}
        </Slider>
      </div>
      <div className="about-background" id="/about">
        <div className="about">
          <div className="about-img-flex">
            <div className="about-img-div">
              <img src={Mobile} className="about-mobile" alt="" />
            </div>
          </div>

          <div className="about-content-flex">
            <div className="about-info">
              <div className="content-head-left">
                <h1>About Sayara</h1>
                <p>
                  Sayaraa is here to make your life simple, search car prices,
                  book service oppointments and even enquire with your mechanic,
                  all from just one tap.
                </p>
              </div>
              <div className="content-head-right">
                <NavLink className="about-link" to="/">
                  Read More
                  <img src={RightArrow} className="about-link-icon" alt="" />
                </NavLink>
              </div>
              <div className="about-images">
                <img src={engine} alt="" />
              </div>
              <div className="about-images">
                <img src={car1} alt="" />
              </div>
              <div className="about-images">
                <img src={car2} alt="" />
              </div>
              <div className="about-images">
                <img src={car3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sayara work */}
      <div className="sayara-work-background" id="/ouroffering">
        <div className="offering">
          <div className="offering-info-flex">
            <div>
              <h1 className="sayara-offer-heading">Our Offerings</h1>
              <p className="sayara-offer-p">
                We take pride in giving personalized services and ensure that
                when you leave, you get the best experience possible.
              </p>
            </div>
            <div className="sayara-btngroup" style={{marginTop:'23px'}}>
              <a
                href="http://toappsto.re/sayaraa" target="_blank"
                className="sayara-download-btn"
              >
                Download the App
              </a>
              <Button
                variant="contained"
                sx={{ mt: 2, ml: 3 }}
                className="sayara-download-btn1"
              >
               <NavLink className="about-link" to="/offering">
                  Read More
                  <img src={RightArrow} className="about-links" alt="" />
                </NavLink>
                {/* <a href="/">Learn more</a> */}
              </Button>
            </div>
          </div>
          <div className="sayara-offering-card-flex">
            <div className="sayara-offering-pkg">
              <div className="car-setting">
                <div className='icon-home-div'>
                  <h1 className='icon-heading-home'>Packages available</h1>
                  </div>
                  <div className='icon-maindiv-home'>
                    <div className='icon-div-homeicon'><img src={carwashicon} className='icon-images-home' /></div>

                    <div className='icon-maindiv-heading'><h1 >Car Wash</h1></div>
                  </div>
                  </div>
             
             {homeiconcard()}
              
              {/* <div className="car-setting"></div>
              <div className="car-setting"></div>
              <div className="car-setting"></div>
              <div className="car-setting"> </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* sayara works */}
      <div className="sayara-work-background" id="/work">
        <div className="sayara-works-div">
          <div className="sayara-works-flex-content">
            <div className="rt-containe">
              <div className="col-rt-12">
                <div className="rt-heading">
                  <h1 className="sayara-work-headings">How sayaraa works</h1>
                </div>
              </div>
            </div>
            <section>
              <div className="rt-containe">
                <div className="col-rt-12">
                  <div className="Scriptcontent">
                    {/* <!-- Stepper HTML --> */}
                    <div className="step">
                      <div>
                        <div className="circle">1</div>
                      </div>
                      <div>
                        <div className="title">Choose the Service You Want</div>
                        <div className="caption">
                          Choose from a variety of customised services with best
                          offerse to meet your specific needs
                        </div>
                      </div>
                    </div>
                    <div className="step step-active">
                      <div>
                        <div className="circle">2</div>
                      </div>
                      <div>
                        <div className="title">Schedule an Appointment</div>
                        <div className="caption">
                          Continue with your details and book your service after
                          you've selected the service.
                        </div>
                      </div>
                    </div>
                    <div className="step">
                      <div>
                        <div className="circle">3</div>
                      </div>
                      <div>
                        <div className="title">Select a Method of Payment</div>
                        <div className="caption">
                          Continue with payment after you've chosen a service.
                          Payment options include both online and offline
                          options
                        </div>
                      </div>
                    </div>

                    <div className="step">
                      <div>
                        <div className="circle">4</div>
                      </div>
                      <div>
                        <div className="title">Booking Confirmation</div>
                        <div className="caption">
                          Once the vendor has approved your service request,
                          your booking will be confirmed.
                        </div>
                      </div>
                    </div>

                    <div className="step">
                      <div>
                        <div className="circle">5</div>
                      </div>
                      <div>
                        <div className="title">Sit Back & Relax</div>
                        <div className="caption">
                          Now all you need to do is relax while we take care of
                          all your needs.
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Stepper HTML --> */}
                  </div>
                </div>
              </div>
            </section>
            <div></div>
          </div>
          <div className="sayara-work-image-flex">
            <div>
              <img src={workmobile} className="sayara-work-image" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* our coustomers */}
      <div className="our-custmers-background">
        <div className="our-custmers-info">
          <div className="our-custmers-content">
            <h1 className="custmer-heading">Hear from our Customers</h1>
            <p className="custmer-para">
              Don't just take our word, see what our customers says
            </p>
          </div>
        </div>
        <div >
        <div className="ourbackbone-sliderweb">
        <Custmerlist />
        </div>
        <div className="ourbackbone-sliderphone">
        <CustmerMobilelist />
        </div>
       
       
        </div>
      </div>

      {/* our backbone */}
      <div className="our-backbone-background">
        <div className="our-backbone">
          <div className="our-backbone-flex">
            <div className="our-heading-para-group">
              <h1 className="our-backbone-heading">
                Our Partners are our Backbone
              </h1>
              <p className="our-backbone-para">
                We've teamed up with the best! Take a look at some of our
                amazing vendors
              </p>
            </div>
            <div></div>
          </div>
          <div className="our-backbone-btn">
            {/* <Button variant="contained" sx={{ mt: 2}} className='download-btn' >Download the App</Button> */}
            <Button
              variant="contained"
              sx={{ mt: 2, ml: 2 }}
              className="our-backbone-btn1"
            >
              {" "}
              <a href="/" style={{ color: "#EC7735" }}>
                Learn more{" "}
                <img
                  src={RightArrow}
                  className="our-backbone-right-arrow"
                  alt=""
                />
              </a>
            </Button>
          </div>
        </div>
        <div className="ourbackbone-sliderweb">
         <Partnerslider />
        </div>
        <div className="ourbackbone-sliderphone">
        <MobilePartnerslider />
        </div>
      </div>
      {/* sayara work */}
      <div className="social-app-background">
        <div className="sayara-app">
          <div className="sayara-app-info">
            <div>
              <img src={DblMobile} className="sayara-img-app" alt="" />
            </div>
          </div>
          <div className="sayara-app-content ">
            <div className="sayara-app-heading-group">
              <h1 className="sayara-app-heading">Get Sayaraa App</h1>
              <p className="sayara-app-para">
                Download the app & enjoy our services
              </p>
            </div>
            <div className="social-app-login">
              <div className="social-flex1">
                <div>
                <a  href='https://play.google.com/store/apps/details?id=com.sjainpune.sayaraa&hl=en' target="_blank"> <img src={googleplay} alt="" /></a>
                </div>
              </div>
              <div className="social-flex2">
                <div>
                <a  href='https://apps.apple.com/in/app/sayaraa/id1491527366' target="_blank"><img src={appstore} alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

const mapstate = state=>{
  return{
    ImageSlider:state.HomeImgSlider,
  }
  
}
const mapDispatchprops = (dispatch)=>{
  return{
    Fetchdata:()=>{
          dispatch(Fetchdata());
      }
  }
}

export default connect(mapstate,mapDispatchprops)(Home);

