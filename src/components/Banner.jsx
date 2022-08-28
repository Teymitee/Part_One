import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faSearch, faMessage } from "@fortawesome/free-solid-svg-icons";

const Banner = () => (
  <div className="container-fluid pt-sm-5 pb-sm-5 banner">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6  pe-md-5">
          <h1 className="display-3 pt-5 ">
            Delicious meals at your convenience
          </h1>
          <p className="lead">
            Order your meals from us and we will have it delivered at your
            doorstep
          </p>
          <div className="d-grid col-sm-12 col-8 pt-sm-4 pb-sm-4">
            <button className="btn btn-danger rounded-pill col-8 py-3 hide-on-mobile">
              Get Started
            </button>
          </div>
        </div>
        <div className="col d-lg-none d-md-none d-sm-block">
          <p className="pt-sm-5 d-lg-none d-md-none">Instant Order</p>
          <span className="position-relative">
            <FontAwesomeIcon
              icon={faSearch}
              size="2x"
              className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"
            />
            <input
              type="text"
              className="rounded  border border-none py-3 shadow-lg mb-5 form-control mx-auto"
            />
          </span>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 py-sm-2">
          <div className="text-center ">
            <img
              className="img-fluid rounded-circle d-block mx-auto border border-danger p-lg-3 mt-sm-5"
              src="https://kwickmeals.com/wp-content/uploads/2021/12/jollof-and-chicken-400x400-1.jpg"
              alt="pic of food"
            ></img>
          </div>
        </div>
      </div>
    </div>
    <div className="d-flex pe-5 ">
      <FontAwesomeIcon icon={faMessage} className="btn ms-auto p-4 bg-danger shadow rounded-circle border border-none text-light bg-sm-none" size="2x"/>
    </div>
  </div>
);

export default Banner;
