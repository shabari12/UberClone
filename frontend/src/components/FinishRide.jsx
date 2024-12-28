import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setConfirmridePopupPannel(false);
        }}
        className="p-1 text-center w-[93%] absolute top-0 "
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 ">Finish This Ride</h3>
      <div className="flex items-center justify-between p-3 bg-yellow-300 rounded-xl mt-4">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw9GFcYYBlO9bXtNf0FEnaHPuyU8zwtyMgDg&s"
            alt=""
          />
          <h2 className="text-xl font-medium">dubuku</h2>
        </div>
        <h5 className="tedxt-lg font-semibold">2.2km</h5>
      </div>
      <div className="flex gap-2 flex-col justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg  ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11/A</h3>
              <p className="text-sm -mt-1 text-gray-600">Anna Nagar,Madurai</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 ">
            <i className="text-lg  ri-map-pin-add-fill"></i>
            <div>
              <h3 className="text-lg font-medium">35/7</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Keelavasal Nagar,Madurai
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg  ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">$60</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-2 w-full">
          <Link
            to='/captain-home'
            className="w-full flex justify-center mt-3 bg-green-600 text-white font-semibold p-3 rounded-lg"
          >
            Finish Ride
          </Link>
          <p className="text-xs text-center mt-6 ">click on finish ride if you have completed the payment.</p>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;