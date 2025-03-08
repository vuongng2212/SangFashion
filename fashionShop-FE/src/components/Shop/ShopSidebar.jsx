// src/components/Shop/ShopSidebar.jsx
import styled from "styled-components";

const SidebarSearch = styled.div`
  margin-bottom: 35px;

  form {
    position: relative;
  }

  input {
    width: 100%;
    height: 45px;
    font-size: 15px;
    color: #b7b7b7;
    padding-left: 20px;
    border: 1px solid #e5e5e5;
    border-radius: 0;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    padding: 0 15px;
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

const ShopSidebar = ({ filters, setFilters }) => {
  return (
    <div className="shop__sidebar">
      {/* Search */}
      <SidebarSearch className="shop__sidebar__search">
        <form>
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <span className="icon_search"></span>
          </button>
        </form>
      </SidebarSearch>

      {/* Categories */}
      <div className="shop__sidebar__accordion">
        <div className="accordion" id="accordionExample">
          {/* Categories */}
          <div className="card">
            <div className="card-heading">
              <a data-toggle="collapse" data-target="#collapseOne">
                Categories
              </a>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <div className="shop__sidebar__categories">
                  <ul className="nice-scroll">
                    <li>
                      <a href="#">Men (20)</a>
                    </li>
                    <li>
                      <a href="#">Women (20)</a>
                    </li>
                    <li>
                      <a href="#">Bags (20)</a>
                    </li>
                    <li>
                      <a href="#">Clothing (20)</a>
                    </li>
                    <li>
                      <a href="#">Shoes (20)</a>
                    </li>
                    <li>
                      <a href="#">Accessories (20)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Branding */}
          <div className="card">
            <div className="card-heading">
              <a data-toggle="collapse" data-target="#collapseTwo">
                Branding
              </a>
            </div>
            <div
              id="collapseTwo"
              className="collapse show"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <div className="shop__sidebar__brand">
                  <ul>
                    <li>
                      <a href="#">Louis Vuitton</a>
                    </li>
                    <li>
                      <a href="#">Chanel</a>
                    </li>
                    <li>
                      <a href="#">Hermes</a>
                    </li>
                    <li>
                      <a href="#">Gucci</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Price Range */}
          <div className="card">
            <div className="card-heading">
              <a data-toggle="collapse" data-target="#collapseThree">
                Filter Price
              </a>
            </div>
            <div
              id="collapseThree"
              className="collapse show"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <div className="shop__sidebar__price">
                  <ul>
                    <li>
                      <a href="#">$0.00 - $50.00</a>
                    </li>
                    <li>
                      <a href="#">$50.00 - $100.00</a>
                    </li>
                    <li>
                      <a href="#">$100.00 - $150.00</a>
                    </li>
                    <li>
                      <a href="#">$150.00 - $200.00</a>
                    </li>
                    <li>
                      <a href="#">$200.00 - $250.00</a>
                    </li>
                    <li>
                      <a href="#">250.00+</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Size */}
          <div className="card">
            <div className="card-heading">
              <a data-toggle="collapse" data-target="#collapseFour">
                Size
              </a>
            </div>
            <div
              id="collapseFour"
              className="collapse show"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <div className="shop__sidebar__size">
                  {["xs", "s", "m", "l", "xl", "2xl", "3xl"].map((size) => (
                    <label key={size} htmlFor={size}>
                      {size}
                      <input type="radio" id={size} />
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Colors */}
          <div className="card">
            <div className="card-heading">
              <a data-toggle="collapse" data-target="#collapseFive">
                Colors
              </a>
            </div>
            <div
              id="collapseFive"
              className="collapse show"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <div className="shop__sidebar__color">
                  {["black", "blue", "yellow", "green", "pink"].map(
                    (color, index) => (
                      <label
                        key={color}
                        className={`c-${index + 1}`}
                        htmlFor={`sp-${index + 1}`}
                      >
                        <input type="radio" id={`sp-${index + 1}`} />
                      </label>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;
