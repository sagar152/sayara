import {
  HOME_IMAGE_SLIDER_REQUEST,
  HOME_IMAGE_SLIDER_SUCCESS,
  HOME_IMAGE_SLIDER_ERROR,

  CUSTOMER_REVIEW_LIST_REQUEST,
  CUSTOMER_REVIEW_LIST_SUCCESS,
  CUSTOMER_REVIEW_LIST_ERROR,

  CAR_WASH_REQUEST,
  CAR_WASH_SUCCESS,
  CAR_WASH_ERROR
} from "../Constant";

const initialState = {
  loading: false,
  ImageSlider: [],
  error: "",
};
const customerState = {
  loading: false,
  CustomerRevielist: [],
  error: "",
};

const carwashState ={
  loading: false,
  CarwashList: [],
  error: "",
}
const HomeImgSlider = (state = initialState, action) => {
  console.log(action, "gjghgjgjhgjh");
  switch (action.type) {
    case HOME_IMAGE_SLIDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case HOME_IMAGE_SLIDER_SUCCESS:
      return {
        loading: false,
        ImageSlider: action.payload,
        error: "",
      };
    case HOME_IMAGE_SLIDER_ERROR:
      return {
        loader: false,
        ImageSlider: [],
        error: action.error,
      };
    default:
      return state;
  }
};


export const CustmerReviewlist = (state = customerState, action) => {
  console.log(action, "rrrrrrrrrrrrrrrrrrrgjghgjgjhgjh");
  switch (action.type) {
    case CUSTOMER_REVIEW_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CUSTOMER_REVIEW_LIST_SUCCESS:
      return {
        loading: false,
        CustomerRevielist: action.payload,
        error: "",
      };
    case CUSTOMER_REVIEW_LIST_ERROR:
      return {
        loader: false,
        CustomerRevielist: [],
        error: action.error,
      };
    default:
      return state;
  }
};


export const CarwashList = (state = carwashState, action) => {
  console.log(action, "rrrrrrrrrrrrrrrrrrrgjghgjgjhgjh");
  switch (action.type) {
    case CAR_WASH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CAR_WASH_SUCCESS:
      return {
        loading: false,
        CarwashList: action.payload,
        error: "",
      };
    case CAR_WASH_ERROR:
      return {
        loader: false,
        CarwashList: [],
        error: action.error,
      };
    default:
      return state;
  }
};
export default HomeImgSlider;
