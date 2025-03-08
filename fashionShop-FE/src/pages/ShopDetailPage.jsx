import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import ProductGallery from "../components/ShopDetail/ProductGallery";
import ProductInfo from "../components/ShopDetail/ProductInfo";
import ProductTabs from "../components/ShopDetail/ProductTabs";
import RelatedProducts from "../components/ShopDetail/RelatedProducts";
import RecommendationWidget from "../components/widget/RecommendationWidget";
const ShopDetailSection = styled.section`
  padding-top: 100px;
  padding-bottom: 50px;
`;

const ShopDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const productResponse = await axios.get(
          `http://localhost:8080/api/v1/products/getAllProducts`
        );
        const productData = productResponse.data.find(
          (p) => p.id === parseInt(id)
        );

        if (!productData) {
          throw new Error("Product not found");
        }

        const imagesResponse = await axios.get(
          `http://localhost:8080/api/v1/productImages/getImagesByProductId/${id}`
        );

        // Xử lý ảnh từ Imgur
        const processImgurUrl = (url) =>
          url ? `https://i.imgur.com/${url.split("/").pop()}.jpg` : null;

        const allImages = imagesResponse.data;
        const mainImages = allImages
          .filter((img) => !img.thumbnail)
          .map((img) => processImgurUrl(img.imgUrl))
          .filter(Boolean);

        const thumbnailImages = allImages
          .filter((img) => img.thumbnail)
          .map((img) => processImgurUrl(img.imgUrl))
          .filter(Boolean);

        const firstImage = processImgurUrl(allImages[0]?.imgUrl);

        setProduct({
          ...productData,
          images: mainImages.length > 0 ? mainImages : [firstImage],
          thumbnails:
            thumbnailImages.length > 0 ? thumbnailImages : [firstImage],
          colors: ["c-1", "c-2", "c-3", "c-4", "c-9"],
          sizes: ["xxl", "xl", "l", "s"],
          tags: productData.tags || ["Clothes", "Fashion"],
          oldPrice: productData.oldPrice || productData.price * 1.2,
        });
      } catch (err) {
        console.error("Error fetching product details:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProductDetails();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning" role="alert">
          Product not found
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="shop-details">
        <div className="product__details__pic">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="product__details__breadcrumb">
                  <a href="/">Home</a>
                  <a href="/">Shop</a>
                  <span>Product Details</span>
                </div>
              </div>
            </div>

            {/* Hiển thị ảnh sản phẩm */}
            <ProductGallery product={product} />
          </div>
        </div>

        {/* Thông tin sản phẩm */}
        <div className="product__details__content">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <ProductInfo product={product} />
              </div>
            </div>

            {/* Tabs mô tả, đánh giá */}
            <ProductTabs product={product} />
          </div>
        </div>
      </section>

      {/* Sản phẩm liên quan */}
      <RelatedProducts />
      <RecommendationWidget />
    </>
  );
};

export default ShopDetailPage;
