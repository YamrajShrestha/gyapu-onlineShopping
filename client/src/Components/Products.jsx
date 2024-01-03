import React from "react";
import ProductData from "../DataCenter/ProductData";
import { Link } from "react-router-dom";

const Products = (props) => {
  let dd = ProductData.filter((e) => e.category == props.tt);
  return (
    <>
      <div className="container py-5">
        <h4 className="fw-bold text-uppercase">{props.tt}</h4>
        <div className="row">
          {dd.slice(0, 4).map((e) => (
            <>
              <div className="col-lg-3">
                <Link to={`/detail/${e.id}`}>
                    <div className="bg-light shadow p-3">
                      <img className="thumb w-100" src={e.thumbnail} alt="" />
                      <p className="fw-bold py-2">{e.title}</p>
                    </div>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;