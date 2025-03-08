// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  .spad {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .shop__sidebar__categories {
    margin-bottom: 30px;
  }

  .shop__sidebar__categories ul,
  .shop__sidebar__brand ul,
  .shop__sidebar__price ul {
    list-style: none;
    padding: 0;
  }

  .shop__sidebar__categories ul li,
  .shop__sidebar__brand ul li,
  .shop__sidebar__price ul li {
    margin-bottom: 10px;
  }

  .shop__sidebar__size label {
    display: inline-block;
    padding: 8px 15px;
    border: 1px solid #e5e5e5;
    margin-right: 5px;
    margin-bottom: 5px;
    cursor: pointer;
    text-transform: uppercase;
  }

  .shop__sidebar__color label {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 5px;
    margin-bottom: 5px;
    cursor: pointer;
    position: relative;
  }

  .product__item {
    margin-bottom: 30px;
  }

  .product__item__pic {
    position: relative;
    padding-top: 100%;
    overflow: hidden;
  }

  .product__item__pic img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product__pagination {
    text-align: center;
    margin-top: 30px;
  }

  .product__pagination a {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #e5e5e5;
    margin: 0 3px;
  }

  .product__pagination a.active {
    background: #111111;
    color: #ffffff;
    border-color: #111111;
  }
`;

export default GlobalStyles;
