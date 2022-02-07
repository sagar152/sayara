import * as React from "react";
import Footer from "../Footer";
import car from "../../src/images/download.png";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { NavLink } from "react-router-dom";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/banner.scss";
import StarIcon from "@mui/icons-material/Star";
import Slider from "react-slick";
import Mobile from "../../src/images/mobile.png";
import engine from "../../src/images/Frame 895.png";
import car1 from "../../src/images/Frame 896.png";
import car2 from "../../src/images/Frame 897.png";
import car3 from "../../src/images/Frame 898.png";
import workmobile from "../../src/images/Group 1007.png";
import image1 from "../../src/images/image 1.png";
import image2 from "../../src/images/image2.png";
import image3 from "../../src/images/image3.png";
import image4 from "../../src/images/imag34.png";
import btnIcon from "../../src/images/btn-icon.png";
// import { margin, width } from "@mui/system";
import RightArrow from "../../src/images/Arrow - Right.png";
import DblMobile from "../../src/images/dbl-mob.png";
import appstore from "../../src/images/appstore.png";
import googleplay from "../../src/images/googleplay.png";
import Header from "../Header";

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
const Home = () => {
  const [age, setAge] = React.useState("");
  var cardArray = [
    {
      image: car,
      title: "Express car wash",
    },
    {
      image: car,
      title: "Express car wash",
    },
    {
      image: car,
      title: "Express car wash",
    },
    {
      image: car,
      title: "Express car wash",
    },
    {
      image: car,
      title: "Express car wash",
    },
    {
      image: car,
      title: "Express car wash",
    },
    {
      image: car,
      title: "Express car wash",
    },
    {
      image: car,
      title: "Express car wash",
    },
  ];
  var backbone = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
    {
      image: image4,
    },
    {
      image: image1,
    },
    {
      image: image1,
    },
    {
      image: image1,
    },
    {
      image: image1,
    },
  ];
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
  var settings1 = {
    dots: false,
    arrows: true,
    prevArrow: <Arrow type="prev" />,
    nextArrow: <Arrow type="next" />,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  var settings2 = {
    dots: false,
    arrows: true,
    prevArrow: <Arrow type="prev" />,
    nextArrow: <Arrow type="next" />,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const backcard = () =>
    backbone.map((num, i) => (
      <div className="cards-list" key={i}>
        <div className="card2">
          <div style={{ width: "100%", height: "100%" }}>
            <img
              src={num.image}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </div>
        </div>
      </div>
    ));
  const renderSlides = () =>
    cardArray.map((num, i) => (
      <div className="cards-list" key={i}>
        <div className="card 1">
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
              <span
                style={{
                  backgroundColor: "yellow",
                  padding: "8px 8px",
                  borderTopLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  fontSize: "18px",
                  color: "black",
                }}
              >
                Express gold wash
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    ));
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
              <FormControl sx={{ m: 1, ml: 0, mt: 2, minWidth: 220 }}>
                <Select
                  style={{ height: "44px" }}
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, ml: 0, mt: 2, minWidth: 220 }}>
                <Select
                  style={{ height: "44px" }}
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
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
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Button variant="contained" className="button-getfree">
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
              <NavLink
                to='/'
                className="sayara-download-btn"
              >
                Download the App
              </NavLink>
              <Button
                variant="contained"
                sx={{ mt: 2, ml: 3 }}
                className="sayara-download-btn1"
              >
               <NavLink className="about-link" to="/">
                  Read More
                  <img src={RightArrow} className="about-links" alt="" />
                </NavLink>
                {/* <a href="/">Learn more</a> */}
              </Button>
            </div>
          </div>
          <div className="sayara-offering-card-flex">
            <div className="sayara-offering-pkg">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
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
        <div className="custmer-main-div">
          <div className="custmer-card-main">
            <div className="card">
              <div className="card-header"></div>
              <div className="card-body">
                {/* <span className="tag tag-teal" style={{color:'black'}}>Technology</span> */}
                <h4 className="custmer-card-heading">
                  Best car service in Abu Dhabi
                </h4>
                <p className="custmer-card-para">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <div className="user">
                  <img
                    src="https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                    alt="user"
                  />
                  <div className="user-info">
                    <h5 className="user-name">Veer Shrivastava</h5>
                    <div className="ratings-group">
                      <StarIcon style={{ color: "#FDB62F" }} />{" "}
                      <p className="user-rating">5/5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header"></div>
              <div className="card-body">
                {/* <span className="tag tag-teal" style={{color:'black'}}>Technology</span> */}
                <h4 className="custmer-card-heading">
                  Best car service in Abu Dhabi
                </h4>
                <p className="custmer-card-para">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <div className="user">
                  <img
                    src="https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                    alt="user"
                  />
                  <div className="user-info">
                    <h5 className="user-name">Veer Shrivastava</h5>
                    <div className="ratings-group">
                      <StarIcon style={{ color: "#FDB62F" }} />{" "}
                      <p className="user-rating">5/5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header"></div>
              <div className="card-body">
                {/* <span className="tag tag-teal" style={{color:'black'}}>Technology</span> */}
                <h4 className="custmer-card-heading">
                  Best car service in Abu Dhabi
                </h4>
                <p className="custmer-card-para">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <div className="user">
                  <img
                    src="https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                    alt="user"
                  />
                  <div className="user-info">
                    <h5 className="user-name">Veer Shrivastava</h5>
                    <div className="ratings-group">
                      <StarIcon style={{ color: "#FDB62F" }} />{" "}
                      <p className="user-rating">5/5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          <Slider
            {...settings1}
            slidesToShow={4}
            slidesToScroll={2}
            autoplaySpeed={3000}
          >
            {backcard()}
          </Slider>
        </div>
        <div className="ourbackbone-sliderphone">
          <Slider
            {...settings2}
            slidesToShow={1}
            slidesToScroll={1}
            autoplaySpeed={3000}
          >
            {backcard()}
          </Slider>
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
export default Home;
