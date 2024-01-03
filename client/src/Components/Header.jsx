import React from "react";

const Header = () => {
  return (
    <>
      <section className="top border-bottom">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <i class="fa-regular fa-user"></i> |
              <i class="fa-brands fa-whatsapp ms-2"></i> |
              <i class="fa-brands fa-viber ms-2"></i>
              <a href="#">
                <span className="ms-2">9801855549</span>
              </a>
            </div>
            <div className="col-lg-6">
              <ul className="d-flex gap-5 justify-content-end mb-0">
                <li>Gyapu Rewards</li>
                <li>Sell Your Product</li>
                <li>
                  <a href="#">Login/Register</a>
                </li>
                <li>
                  <i class="fa-solid fa-mobile-screen"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <header>
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="logo">
                <img
                  src="https://www.gyapu.com/806b0f041fef60968c877fe5b54014cb.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-8">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div className="col-lg-2">
                <ul className="d-flex gap-3">
                    <li><a className="text-black-50" href="#">
                    <i class="fa-regular fa-heart me-2"></i>
                    <span>Wishlist</span>
                        </a></li>
                    <li><a className="text-black-50" href="#">
                    <i class="fa-solid fa-cart-shopping me-2"></i>
                    <span>Cart</span>
                        </a></li>
                </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;