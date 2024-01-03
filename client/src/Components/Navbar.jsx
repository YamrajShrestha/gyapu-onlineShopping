import React from "react";
import CatData from "../DataCenter/CatData";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import Detail from "../Pages/Detail";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5 text-uppercase">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {CatData.slice(0, 6).map((e) => (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to={`/cat/${e}`}>
                      {e}
                    </Link>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:cid" element={<Category />} />
        <Route path="/detail/:did" element={<Detail />} />
      </Routes>
    </>
  );
};

export default Navbar;