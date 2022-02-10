
import React from "react";
import axios from "axios";
import {
    CAR_WASH_REQUEST,
    CAR_WASH_SUCCESS,
    CAR_WASH_ERROR,
  } from "../Constant";
const CarwashRequest = () => {
  return {
    type: CAR_WASH_REQUEST,
  };
};

const CarwashSuccess = (Carwashlist) => {
  return {
    type: CAR_WASH_SUCCESS,
    payload: Carwashlist,
  };
};
const CarwashError = (error) => {
  return {
    type: CAR_WASH_ERROR,
    payload: error,
  };
};

export const FetchdataCarlist = () => {
  return async (dispatch) => {
    dispatch(CarwashRequest());

    await axios.get("https://sayaraagroup.com/beta/WebsiteApi/carwash_list")
      .then((response) => {
        const Carwashlist = response.data;
        console.log(Carwashlist, "Carwashlist");
        dispatch(CarwashSuccess(Carwashlist));
      })
      .catch((err) => {
        dispatch(CarwashError(err.message));
        console.log(err.message);
      });
  };
};


