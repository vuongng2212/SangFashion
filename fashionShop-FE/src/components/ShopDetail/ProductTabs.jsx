const ProductTabs = ({ product }) => {
  const description = product.description;
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="product__details__tab">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#tabs-5"
                role="tab"
              >
                Description
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#tabs-6"
                role="tab"
              >
                Customer Reviews (5)
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#tabs-7"
                role="tab"
              >
                Additional Information
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" id="tabs-5" role="tabpanel">
              <div className="product__details__tab__content">
                <p className="note">{description}</p>
                <div className="product__details__tab__content__item">
                  <h5>Product Information</h5>
                  <p>
                    A Pocket PC is a handheld computer, which features many of
                    the same capabilities as a modern PC. These handy little
                    devices allow individuals to retrieve and store e-mail
                    messages, create a contact file, coordinate appointments,
                    surf the internet, exchange text messages, and more.
                  </p>
                </div>
                <div className="product__details__tab__content__item">
                  <h5>Materials Used</h5>
                  <p>
                    Polyester is deemed lower quality due to its synthetic
                    nature. Made from synthetic materials, not natural like
                    wool. Polyester suits become creased easily and are known
                    for not being breathable.
                  </p>
                </div>
              </div>
            </div>
            {/* Additional tabs content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
