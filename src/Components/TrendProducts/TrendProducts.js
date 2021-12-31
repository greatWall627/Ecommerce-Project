import React from "react";
import "./trendproducts.css";
import { TrendItems } from "../Helpers/TrendItems";
import trendImage from "../../images/trendProduct.jpg";
import trendImage1 from "../../images/trendProduct1.jpg";
import trendImage2 from "../../images/trendProduct2.jpg";
import { BsArrowRight } from "react-icons/bs";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { SaleTrend } from "./SaleTrend";
export const TrendProducts = () => {
  const [currentMove, setCurrentMove] = React.useState(0);
  const moveBar = () => {
    if (currentMove === 0) {
      setCurrentMove(-1325);
    } else if (currentMove === -1325) {
      setCurrentMove(-2650);
    } else if (currentMove === -2650) {
      return currentMove;
    } else {
      return currentMove;
    }
  };
  const prevMoveBar = () => {
    if (currentMove === 0) {
      return currentMove;
    } else if (currentMove === -1325) {
      setCurrentMove(0);
    } else if (currentMove === -2650) {
      setCurrentMove(-1325);
    }
  };

  return (
    <section id="trendProduct">
      <div className="container-xxl">
        <div className="trend-area">
          <div className="trend-header-area d-flex justify-content-between align-items-center">
            <span className="trend-header">Hot Trend Products</span>
            <a href="/" className="show-more">
              Show More <BsArrowRight color="#263c97" />
            </a>
          </div>
          <div className="trends-main py-2">
            <div
              style={{ transform: `translateX(${currentMove}px)` }}
              className="trend-inner  d-flex align-items-center"
            >
              {TrendItems.map((products) => {
                return (
                  <article key={products.id} className="product-box">
                    <div className="product-img">
                      <a href="/">
                        <img
                          className="img-fluid"
                          src={products.imgProduct}
                          alt="Loading..."
                        />
                        <div className="show-product">
                          <FaRegEye
                            color="#E91E63"
                            size={30}
                            className="eye-icon"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="product-titles text-center">
                      <span className="product-title">{products.title}</span>
                    </div>
                    <div className="product-price my-3 w-100 d-flex justify-content-between align-items-center">
                      <span className="price mx-2">{products.price}</span>
                      <button className="buy-btn mx-2">BUY</button>
                    </div>
                  </article>
                );
              })}
            </div>

            <span
              onClick={prevMoveBar}
              className={`show left${
                currentMove === 0 ? " hidden-indicator" : " "
              }`}
            >
              <IoIosArrowDropleftCircle size={55} className="indicator-arrow" />
            </span>
            <span
              onClick={moveBar}
              className={`show right${
                currentMove === -2650 ? " hidden-indicator" : " "
              }`}
            >
              <IoIosArrowDroprightCircle
                size={55}
                className="indicator-arrow"
              />
            </span>
          </div>
        </div>
        <div className="sale-trend">
          <div className="sale-trend-inner">
            <div className="row g-4 justify-content-center align-items-center">
              <SaleTrend
                imageMain={trendImage}
                header={"Microsoft Surface Laptop 14"}
                title="Up To -30%"
                trendLink="/"
              />
              <SaleTrend
                imageMain={trendImage1}
                header="Cameras Best Sport Edition"
                title="Up To -20%"
                trendLink="/"
              />
              <SaleTrend
                imageMain={trendImage2}
                header="Sneaker Nike Air Max 90"
                title="Up To -60%"
                trendLink="/"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
