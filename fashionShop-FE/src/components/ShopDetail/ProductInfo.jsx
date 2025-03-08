import { useState } from "react";

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("xl");
  const [selectedColor, setSelectedColor] = useState("c-1");

  return (
    <div className="product__details__text">
      <h4>{product.name}</h4>
      <div className="rating">
        {[...Array(5)].map((_, index) => (
          <i
            key={index}
            className={`fa fa-star${index < product.rating ? "" : "-o"}`}
          ></i>
        ))}
        <span> - {product.reviews} Reviews</span>
      </div>
      <h3>
        ${product.price.toFixed(2)} <span>${product.oldPrice.toFixed(2)}</span>
      </h3>
      <p>{product.description}</p>

      <div className="product__details__option">
        <div className="product__details__option__size">
          <span>Size:</span>
          {product.sizes.map((size) => (
            <label
              key={size}
              className={selectedSize === size ? "active" : ""}
              htmlFor={size}
            >
              {size}
              <input
                type="radio"
                id={size}
                checked={selectedSize === size}
                onChange={() => setSelectedSize(size)}
              />
            </label>
          ))}
        </div>
        <div className="product__details__option__color">
          <span>Color:</span>
          {product.colors.map((color) => (
            <label
              key={color}
              className={`${color} ${selectedColor === color ? "active" : ""}`}
              htmlFor={`sp-${color}`}
            >
              <input
                type="radio"
                id={`sp-${color}`}
                checked={selectedColor === color}
                onChange={() => setSelectedColor(color)}
              />
            </label>
          ))}
        </div>
      </div>

      <div className="product__details__cart__option">
        <div className="quantity">
          <div className="pro-qty">
            <input
              type="number"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value)))
              }
            />
          </div>
        </div>
        <a href="#" className="primary-btn">
          add to cart
        </a>
      </div>

      <div className="product__details__btns__option">
        <a href="#">
          <i className="fa fa-heart"></i> add to wishlist
        </a>
        <a href="#">
          <i className="fa fa-exchange"></i> Add To Compare
        </a>
      </div>

      <div className="product__details__last__option">
        <h5>
          <span>Guaranteed Safe Checkout</span>
        </h5>
        <img src="img/shop-details/details-payment.png" alt="" />
        <ul>
          <li>
            <span>SKU:</span> {product.sku}
          </li>
          <li>
            <span>Categories:</span> {product.categories}
          </li>
          <li>
            <span>Tag:</span> {product.tags.join(", ")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
