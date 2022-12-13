import React from "react";

const CustomerSection = () => {
  return (
    <section className="customer-info">
      <div className="row">
        <div className="col customer-info-box">
          <div className="rounded-icon">
            <i className="customer-info-icon fa-regular fa-xl fa-phone"></i>
          </div>
          <h4 className="customer-title">Customer Support</h4>
          <p className="customer-paragraph">
          Village did removed enjoyed explain talking.
          </p>
        </div>
        <div className="col customer-info-box">
          <div className="rounded-icon">
            <i className="customer-info-icon fa-regular fa-xl fa-credit-card"></i>
          </div>
          <h4 className="customer-title">Secured Payment</h4>
          <p className="customer-paragraph">
          Village did removed enjoyed explain talking.
          </p>
        </div>
        <div className="col customer-info-box">
          <div className="rounded-icon">
            <i className="customer-info-icon fa-regular fa-xl fa-truck"></i>
          </div>
          <h4 className="customer-title">Free Home Delivery</h4>
          <p className="customer-paragraph">
          Village did removed enjoyed explain talking.
          </p>
        </div>
        <div className="col customer-info-box">
          <div className="rounded-icon">
            <i className="customer-info-icon fa-regular fa-xl fa-truck"></i>
          </div>
          <h4 className="customer-title">30 Day Reuters</h4>
          <p className="customer-paragraph">
          Village did removed enjoyed explain talking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
