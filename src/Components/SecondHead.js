import React,{useState} from "react";
// import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
// import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Star from "../images/star.png";
import "../style/secondhead.scss";
import HeadApps from "../images/head-app.png";
import HeadGoogle from "../images/head-google.png";
import { FetchdataBrandList } from "../Service";
import {FetchdataModallist} from '../Service'
// import {FetchdataGetquotation} from '../Service'
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Offeringtabs from "../Components/Tabs";
import Select from "@mui/material/Select";
// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const SecondHead = () => {
  const [inputValues, setInputValue] = useState({
    brand_name: "",
    model_name: "",
  });
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  const [brandlist, setBrandlist] = React.useState([]);
  const brandList = useSelector((state) => state);
  console.log("brandList123", brandList);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(FetchdataBrandList());
  },[]);
  React.useEffect(() => {
    if (brandList && brandList.BrandList.BrandList.data) {
      setBrandlist(brandList.BrandList.BrandList.data);
    }
  }, [brandList]);
  // React.useEffect(()=>{
  //   FetchdataModallist();
  // },[])
  // const onSubmited = e => {
  //   e.preventDefault();

  // const newUser = {
  // 	contact_name: contact_name,
  // 	contactEmail: contactEmail,
  // 	brand_name: brand_name,
  // 	contactPhone: contactPhone,
  //   model_name:model_name
  // };
  //   dispatch(FetchdataGetquotation(inputValues));
  //   console.log(inputValues,'inputValues');
  // };
 
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }
  // React.useEffect(() => {
  //   Fetchdata();
  // }, []);

  // React.useEffect(() => {
  //   if (ImageSlider && ImageSlider.ImageSlider.ImageSlider.data) {
  //     setSlide(ImageSlider.ImageSlider.ImageSlider.data);
  //   }
  // }, [ImageSlider]);

   // console.log('sdfldsflsflsf',ModalList.ModalList.data)
   const [modallist,setModallist] = React.useState([])
   // const [age, setAge] = React.useState("");
   React.useEffect(()=>{
       dispatch(FetchdataModallist()) ;
   },[])
   React.useEffect(()=>{
       if(brandList && brandList.ModalList.ModalList.data){
           setModallist(brandList.ModalList.ModalList.data)
       }
   },[brandList])

   console.log('modallist',modallist)
   // const handleChange = (event) => {
   //     setAge(event.target.value);
   //   };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{background:"red"}}>
        <Grid container spacing={2}>
          <Grid item xs={12} className="sechead-bg">
            <Grid container spacing={2} className="secondhead" p={2}>
              <Grid item xs={8} md={8} xl={8}>
                <div className="second-headstar">
                  <div className="secondhead-img-div">
                    <img src={Star} alt="star" className="head-img" />
                  </div>
                  <div className="offeringhead-content">
                    <h5 className="offeringsecondhead-content-h1">
                      Download The Sayaraa app & book your service now!
                    </h5>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} xl={4}>
                <div className="head-social">
                  <div className="social-imgdiv1">
                  <a  href='https://play.google.com/store/apps/details?id=com.sjainpune.sayaraa&hl=en' target="_blank"><img src={HeadGoogle} alt="star" className="social-img1" /></a>
                  </div>
                  <div className="social-imgdiv2">
                  <a  href='https://apps.apple.com/in/app/sayaraa/id1491527366' target="_blank"><img className="social-img2" src={HeadApps} alt="star" /></a>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <div className="main-container">
        <Grid container justifyContent="space-between">
          <Grid item xs={12} md={3} xl={3}>
            <div>
              <h4 className="left-heading">Get your free quotation...</h4>
            </div>
            <Grid container>
              <Grid item xs={12}>
                <div>
                <FormControl sx={{ m: 1, ml: 0, mt: 2, minWidth: 220 }}>
                <Select
                  style={{ height: "44px",display: "flex" }}
                  name="brand_name" 
                  value={inputValues.brand_name}
                  onChange={(e) => handleChange(e)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                 
                >
                  <MenuItem value="">
                    <em>Select Brand Name</em>
                  </MenuItem>
                 
                  {brandlist.map((num, i) => (
                    <MenuItem value={num.brand_name} key={i}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <div style={{ widht: "40%" }}>
                          <em>{num.brand_name}</em>
                        </div>{" "}
                        <div style={{ width: "40%" }}>
                          <div style={{ width: "40px", height: "auto" }}>
                            <img
                              src={`https://sayaraagroup.com/${num.brand_image}`}
                              style={{ width: "100%", height: "100%" }} alt=''
                            />
                          </div>
                        </div>
                      </div>
                    </MenuItem>
                  ))}

                  {/* <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div>
                <FormControl sx={{ m: 1, ml: 0, mt: 2, minWidth: 220 }}>
                <Select
                  style={{ height: "44px",display:'flex' }}
                  value={inputValues.model_name}
                  onChange={(e) => handleChange(e)}
                  displayEmpty
                  name="model_name" 
                  inputProps={{ "aria-label": "Without label" }}
            
                >
                  <MenuItem value="">
                    <em>Select Modal Name</em>
                  </MenuItem>
                
                  {modallist.map((num,i)=>(
                    <MenuItem value={num.model_name} key={i}><div style={{display:'flex',justifyContent:'space-around'}}>
                        <div style={{widht:'40%'}}><em>{num.model_name}</em></div>  <div style={{width:'40%'}}><div style={{width:'40px',height:'auto'}}><img src={`https://sayaraagroup.com/${num.model_image}`} alt='' style={{width:'100%',height:'100%'}} /></div></div>
                        </div></MenuItem>
                  ))}
                  
                  {/* <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item mt={0} xs={12} md={9} xl={9}>
            <Grid container spacing={2}>
              {/* <Grid item xs={12} md={8} xl={8}>
                <div>
                  <h1 className="explore-heading">Explore Our Offerings</h1>
                </div>
              </Grid>
              <Grid item xs={12} md={4} xl={4}>
                <div className="search-container">
                  <Searchbar />
                </div>
              </Grid> */}
              <Grid item xs={12}>
                <Offeringtabs />
              </Grid>
              {/* <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default SecondHead;
