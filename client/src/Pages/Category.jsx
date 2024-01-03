import React from "react";
import { Link, useParams } from "react-router-dom";
import ProductData from "../DataCenter/ProductData";

const Category = () => {
  let { cid } = useParams();
  let dd = ProductData.filter((e) => e.category == cid);
  return (
    <>
      <div className="container py-5">
        <h3 className="text-uppercase py-2">{cid}</h3>
        <div className="row">
          {dd.map((v) => (
            <>
              <div className="col-lg-4">
                <Link to={`/detail/${v.id}`}>
                  <img src={v.thumbnail} alt="" className="w-100 thumb" />
                  <p className="fw-bold py-2">{v.title}</p>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;