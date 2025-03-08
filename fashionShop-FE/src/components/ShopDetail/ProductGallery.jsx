import { useState, useEffect } from "react";
import styled from "styled-components";

const GalleryContainer = styled.div`
  .product__thumb__pic {
    height: 100px;
    width: 100%;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    margin-bottom: 15px;
    border: 2px solid transparent;
    transition: all 0.3s;
  }

  .active .product__thumb__pic {
    border-color: #e53637;
  }

  .product__details__pic__item {
    position: relative;
    overflow: hidden;
    border-radius: 4px;

    img {
      width: 100%;
      height: auto;
      transition: transform 0.3s;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }
`;

const ProductGallery = ({ product }) => {
  const initialImage = product?.images?.[0] || ""; // Kiểm tra có ảnh hay không
  const [selectedImage, setSelectedImage] = useState(initialImage);

  useEffect(() => {
    if (product?.images?.length > 0) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  if (!product || !product.images || !product.thumbnails) {
    return <p>Loading...</p>;
  }

  console.log("Product Data:", product);
  console.log("Selected Image:", selectedImage);

  return (
    <GalleryContainer className="row">
      {/* Danh sách ảnh nhỏ */}
      <div className="col-lg-3 col-md-3">
        <ul className="nav nav-tabs" role="tablist">
          {product.thumbnails.map((thumb, index) => {
            const isActive = selectedImage === thumb;

            return (
              <li key={index} className="nav-item">
                <button
                  className={`nav-link ${isActive ? "active" : ""}`}
                  onClick={() => setSelectedImage(thumb)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`product-tab-${index}`}
                  id={`product-thumb-${index}`}
                  tabIndex={0}
                >
                  <div
                    className="product__thumb__pic"
                    style={{ backgroundImage: `url(${thumb})` }}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Hiển thị ảnh chính */}
      <div className="col-lg-6 col-md-9">
        <div className="product__details__pic__item">
          {selectedImage ? (
            <img src={selectedImage} alt="Main Product" />
          ) : (
            <p>Image not available</p>
          )}
        </div>
      </div>
    </GalleryContainer>
  );
};

export default ProductGallery;
