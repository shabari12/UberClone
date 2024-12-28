import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.waitingForDriver(false);
        }}
        className="p-1 text-center w-[93%] absolute top-0 "
      ></h5>
      <div className="flex items-center justify-between">
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png"
          alt=""
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">Shabari</h2>
          <h4 className="text-xl font-semibold -mt 1 -mb-1">TN 67 BS 0321</h4>
          <p className="text-sm text-gray-600">Swift Dzire</p>
        </div>
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
      </div>
    </div>
  );
};

export default WaitingForDriver;
