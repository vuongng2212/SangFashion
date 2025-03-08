// src/pages/ShopPage.jsx
import { useState } from "react";
import styled from "styled-components";
import ShopSidebar from "../components/Shop/ShopSidebar";
import ShopProducts from "../components/Shop/ShopProducts";
import RecommendationWidget from "../components/widget/RecommendationWidget";
const ShopSection = styled.section`
  padding: 70px 0;
`;

const ShopPage = () => {
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    priceRange: "",
    size: "",
    color: "",
    sort: "newest",
  });

  return (
    <>

      {/* Breadcrumb Section */}
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h4>Sang's Fashion Shop</h4>
                <div className="breadcrumb__links">
                  <a href="/">Home</a>
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <ShopSection className="shop spad">
        <div className="container">
          <div className="row">
            {/* Sidebar Filters */}
            <div className="col-lg-3">
              <ShopSidebar filters={filters} setFilters={setFilters} />
            </div>

            {/* Product Grid */}
            <div className="col-lg-9">
              <ShopProducts filters={filters} />
            </div>
          </div>
        </div>
      </ShopSection>

      {/* Search Begin */}
      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">+</div>
          <form className="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
            />
          </form>
        </div>
      </div>
      {/* Search End */}
      <div>
        <RecommendationWidget />
      </div>
    </>
  );
};

export default ShopPage;
