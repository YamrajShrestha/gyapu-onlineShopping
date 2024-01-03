import React from "react";
import Banner from "../Components/Banner";
import Products from "../Components/Products";

const Home = () => {
  return (
    <>
      <Banner />
      <Products tt="smartphones" />
      <Products tt="laptops" />
      <Products tt="fragrances" />
      <Products tt="skincare" />
      <Products tt="groceries" />
      <Products tt="home-decoration" />
    </>
  );
};

export default Home;