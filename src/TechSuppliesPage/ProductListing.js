import React from 'react';
import lpImage from "../TechSuppliesPage/laptopImg.jpg"
import cameraImg from "../TechSuppliesPage/cameraImg.jpg"
import ipad from "../TechSuppliesPage/ipad.JPG"
import mobile from "../TechSuppliesPage/mobileImg.JPG"
import { Link } from 'react-router-dom';
import "../TechSuppliesPage/index.css"
const ProductListing = () => {
  return (
    <div>
      <div className="header">
        <div className="bnpl-banner">
          <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" alt="PayPal" />
          <div>
            <p><strong>Buy now, pay later.</strong> <a href="#">Learn more</a></p>
          </div>
        </div>
       
      </div>
      <h2>Top Selling Items This Week</h2>
      <div className="products">
      <div className="product">
          <img src={cameraImg} alt="Camera" />
          <h3>Camera</h3>
          <p>$199</p>
          <Link to="products/123456789">
            <button className="button">Buy Now, Pay Later</button>
          </Link>
        </div>
        <div className="product">
          <img src={lpImage} alt="Laptop" />
          <h3>Laptop</h3>
          <p>$299</p>
          <Link to="products/2">
            <button className="button">Buy Now, Pay Later</button>
          </Link>
        </div>
  
        <div className="product">
          <img src={ipad} alt="Ipad" />
          <h3>Ipad</h3>
          <p>$129</p>
        </div>
        <div className="product">
          <img src={mobile} alt="Mobile" />
          <h3>Mobile</h3>
          <p>$499</p>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
