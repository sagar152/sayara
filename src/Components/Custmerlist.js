import React from "react";
import { connect } from "react-redux";
import { FetchdataReviewlist } from "../Service";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/banner.scss";
import StarIcon from "@mui/icons-material/Star";
const Custmerlist = ({ FetchdataReviewlist, CustomerRevielist }) => {

  const [imageslides, setSlides] = React.useState([]);

  React.useEffect(() => {
    FetchdataReviewlist();
  }, []);
  React.useEffect(() => {
    if (CustomerRevielist && CustomerRevielist.CustomerRevielist.data) {
      setSlides(CustomerRevielist.CustomerRevielist.data);
    }
  }, [CustomerRevielist]);


  const Reviewlists = () =>
    imageslides.map((list, i) => (
      //   console.log('reeeeeeeeeeeeee',list)
      <div className="card" key={i}>
        <div className="card-header"></div>
        <div className="card-body">
          {/* <span className="tag tag-teal" style={{color:'black'}}>Technology</span> */}
          <h4 className="custmer-card-heading">{list.heading}</h4>
          <p className="custmer-card-para">{list.description}</p>
          <div className="user">
            <img src={`https://sayaraagroup.com/${list.image}`} alt="user" />
            <div className="user-info">
              <h5 className="user-name">{list.name}</h5>
              <div className="ratings-group">
                <StarIcon style={{ color: "#FDB62F" }} />{" "}
                <p className="user-rating">{list.rating}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <div>
      <div className="custmer-card-main">{Reviewlists()}</div>
    </div>
  );
};
const mapstate = (state) => {
  return {
    CustomerRevielist: state.CustmerReviewlist,
  };
};
console.log("flsjflsdjlfjls", mapstate);
const mapDispatchprops = (dispatch) => {
  return {
    FetchdataReviewlist: () => {
      dispatch(FetchdataReviewlist());
    },
  };
};

export default connect(mapstate, mapDispatchprops)(Custmerlist);
