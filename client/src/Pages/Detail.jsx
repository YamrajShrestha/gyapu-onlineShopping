import React from "react";
import { useParams } from "react-router-dom";
import ProductData from "../DataCenter/ProductData";

const Detail = () => {
  let { did } = useParams();
  let qq = ProductData.find((e) => e.id == did);
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4">
            <img src={qq.thumbnail} alt="" className="w-100" />
          </div>
          <div className="col-lg-8">
            <h2>{qq.title}</h2>
            <p>Price: {qq.price}</p>
            <p>Brand: {qq.brand}</p>
            <p>Category: {qq.category}</p>
            <p>Description: {qq.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
