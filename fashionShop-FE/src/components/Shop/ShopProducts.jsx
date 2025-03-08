// src/components/Shop/ShopProducts.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const ProductOption = styled.div`
  margin-bottom: 30px;
`;

const ProductItem = styled.div`
  cursor: pointer;
`;

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: "Piqué Biker Jacket",
    price: 67.24,
    image: "/src/assets/img/product/product-2.jpg",
    rating: 0,
    colors: ["default", "black", "grey"],
    isNew: false,
  },
  {
    id: 2,
    name: "Multi-pocket Chest Bag",
    price: 43.48,
    image: "/src/assets/img/product/product-3.jpg",
    rating: 4,
    colors: ["default", "black", "grey"],
    isNew: true,
  },
  // ... Thêm các sản phẩm mẫu khác
];

const ShopProducts = ({ filters }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("newest");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/api/v1/products/getAllProducts');
        const productsData = response.data;
        
        // Fetch thumbnail images for each product
        const productsWithImages = await Promise.all(
          productsData.map(async (product) => {
            try {
              const imageResponse = await axios.get(
                `http://localhost:8080/api/v1/productImages/getImagesByProductId/${product.id}`
              );
              // Find thumbnail image or use first image
              const thumbnailImage = imageResponse.data.find(img => img.thumbnail === true);
              // Convert Imgur URL to direct image URL
              const processImgurUrl = (url) => {
                if (!url) return null;
                // Extract the Imgur ID and add .jpg extension
                const imgurId = url.split('/').pop();
                return `https://i.imgur.com/${imgurId}.jpg`;
              };

              const imageUrl = thumbnailImage ? thumbnailImage.imgUrl : imageResponse.data[0]?.imgUrl;
              const processedImageUrl = processImgurUrl(imageUrl);
              
              if (!processedImageUrl) {
                throw new Error('No image found');
              }

              return {
                ...product,
                image: processedImageUrl,
                colors: ["default", "black", "grey"], // Default colors
                isNew: product.new || false,
                rating: product.rating || 0
              };
            } catch (error) {
              console.error(`Error fetching images for product ${product.id}:`, error);
              return {
                ...product,
                image: "/img/product/product-1.jpg", // Fallback image
                colors: ["default", "black", "grey"],
                isNew: product.new || false,
                rating: product.rating || 0
              };
            }
          })
        );
        
        setProducts(productsWithImages.filter(product => product.image));
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/shop/${productId}`);
  };

  const handleAddToCart = (e, productId) => {
    e.stopPropagation();
    console.log("Add to cart:", productId);
  };

  const handleActionClick = (e, action, productId) => {
    e.stopPropagation();
    console.log(action, productId);
  };

  return (
    <>
      <ProductOption className="shop__product__option">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="shop__product__option__left">
              <p>Showing 1–12 of 126 results</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="shop__product__option__right">
              <p>Sort by Price:</p>
              <select onChange={(e) => setSortBy(e.target.value)}>
                <option value="newest">Newest</option>
                <option value="low-high">Low To High</option>
                <option value="high-low">High To Low</option>
              </select>
            </div>
          </div>
        </div>
      </ProductOption>

      {/* Product Grid */}
      <div className="row">
        {loading ? (
          <div className="col-12 text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : products.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 col-sm-6">
            <ProductItem
              className="product__item"
              onClick={() => handleProductClick(product.id)}
            >
              <div
                className="product__item__pic set-bg"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                {product.isNew && <span className="label">New</span>}
                <ul className="product__hover">
                  <li>
                    <a
                      href="#"
                      onClick={(e) =>
                        handleActionClick(e, "wishlist", product.id)
                      }
                    >
                      <img src="/img/icon/heart.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) =>
                        handleActionClick(e, "compare", product.id)
                      }
                    >
                      <img src="/img/icon/compare.png" alt="" />
                      <span>Compare</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) =>
                        handleActionClick(e, "quickview", product.id)
                      }
                    >
                      <img src="/img/icon/search.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>{product.name}</h6>
                <a
                  href="#"
                  className="add-cart"
                  onClick={(e) => handleAddToCart(e, product.id)}
                >
                  + Add To Cart
                </a>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fa fa-star${i < product.rating ? "" : "-o"}`}
                    />
                  ))}
                </div>
                <h5>${product.price}</h5>
                <div className="product__color__select">
                  {product.colors.map((color, index) => (
                    <label
                      key={index}
                      className={color}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input type="radio" />
                    </label>
                  ))}
                </div>
              </div>
            </ProductItem>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="row">
        <div className="col-lg-12">
          <div className="product__pagination">
            <a className="active" href="#">
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <span>...</span>
            <a href="#">21</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopProducts;
