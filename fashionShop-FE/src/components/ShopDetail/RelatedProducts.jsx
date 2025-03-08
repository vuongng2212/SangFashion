const RelatedProducts = () => {
  return (
    <section className="related spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="related-title">Related Product</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="product__item">
              <div
                className="product__item__pic set-bg"
                data-setbg="img/product/product-1.jpg"
              >
                <span className="label">New</span>
                <ul className="product__hover">
                  <li>
                    <a href="#">
                      <img src="img/icon/heart.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon/compare.png" alt="" />{" "}
                      <span>Compare</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon/search.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>Piqué Biker Jacket</h6>
                <a href="#" className="add-cart">
                  + Add To Cart
                </a>
                <div className="rating">
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                </div>
                <h5>$67.24</h5>
                <div className="product__color__select">
                  <label htmlFor="pc-1">
                    <input type="radio" id="pc-1" />
                  </label>
                  <label className="active black" htmlFor="pc-2">
                    <input type="radio" id="pc-2" />
                  </label>
                  <label className="grey" htmlFor="pc-3">
                    <input type="radio" id="pc-3" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Thêm các sản phẩm liên quan khác tương tự */}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
