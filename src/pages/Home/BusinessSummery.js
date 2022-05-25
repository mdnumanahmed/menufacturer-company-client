import React from "react";

const BusinessSummery = () => {
  return (
    <div className="bg-secondary py-10  ">
      <div>
        <h2 className="text-5xl text-accent text-center font-bold mb-7">About us in Number</h2>
      </div>
      <div className="flex justify-center">
        <div className="stats stats-vertical lg:stats-horizontal shadow">
          <div className="stat place-items-center">
            <div className="stat-title">Happy Clients</div>
            <div className="stat-value">510</div>
            <div className="stat-desc">Jan 2022 - Apr 2022</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Exported Tools</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">in 1 Month</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Business Country</div>
            <div className="stat-value">20</div>
            <div className="stat-desc">in 1 Month</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Order Pending</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">Deadline June 20</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
