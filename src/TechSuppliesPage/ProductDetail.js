import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import lpImage from "../TechSuppliesPage/laptopImg.jpg"
import cameraImg from "../TechSuppliesPage/cameraImg.jpg"
import ipad from "../TechSuppliesPage/ipad.JPG"
import mobile from "../TechSuppliesPage/mobileImg.JPG"
import "../TechSuppliesPage/ProductDetails.css"
import { PayPalButton } from './PayPalButton';
import axios from 'axios';
const ProductDetail = () => {
    const  images= [
                cameraImg,
             ]
  const { id } = useParams();
  const paypalRef = useRef(null);
  //const [product, setProduct] = useState(null);
  //Dummy product data
  const product = {
    id: '123456789',
    name: 'BLACK CAMERA - DIGITAL SLR',
    description: 'With the latest sensor and image processor, the Black Camera can consecutively shoot thousands of high-definition photos. Built-in capabilities include time-lapse recording, autofocus, and subject tracking in all kinds of lighting conditions. More than just a performance powerhouse, the Black Camera has an attractive profile, and is comfortable to hold.',
    price: '$300',
    images: [
        cameraImg,
    ],
  };
  const handlePayPalClick = () => {
    alert('Dummy PayPal transaction completed!');
  };

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/products/${id}`);
//         setProduct({
           
//               "products":[{id: "123456789",
//                 name: "BLACK CAMERA - DIGITAL SLR",
//                 description: "With the latest sensor and image processor, the Black Camera can consecutively shoot thousands of high-definition photos. Built-in capabilities include time-lapse recording, autofocus, and subject tracking in all kinds of lighting conditions. More than just a performance powerhouse, the Black Camera has an attractive profile, and is comfortable to hold.",
//               price: "300.00",
//                 images: [
//                   "https://via.placeholder.com/500",
//                   "https://via.placeholder.com/150",
//                   "https://via.placeholder.com/150",
//                   "https://via.placeholder.com/150",
//                   "https://via.placeholder.com/150"
//                 ]}]  
//           });
//       } catch (error) {
//         console.error('Error fetching product data:', error);
//       }
//     };

//     fetchProduct();
//   }, [id]);


  useEffect(() => {
    if (product) {
      const loadPaypalScript = async () => {
        try {
          const script = document.createElement('script');
          script.src = 'https://www.paypal.com/sdk/js?client-id=test&components=buttons,messages';
          script.async = true;
          script.onload = () => {
            if (paypalRef.current) {
              window.paypal.Buttons({
                createOrder: (data, actions) => {
                  return actions.order.create({
                    purchase_units: [{
                      amount: {
                        value: product.price // Use product price
                      }
                    }],
                    "payment_source": { "paypal": { "experience_context": { "payment_method_preference": "IMMEDIATE_PAYMENT_REQUIRED", "brand_name": "EXAMPLE INC", "locale": "en-US", "landing_page": "LOGIN", "shipping_preference": "SET_PROVIDED_ADDRESS", "user_action": "PAY_NOW", "return_url": "https://example.com/returnUrl", "cancel_url": "https://example.com/cancelUrl" } } }

                  });
                },
                onApprove: (data, actions) => {
                  return actions.order.capture().then(details => {
                    alert('Transaction completed by ' + details.payer.name.given_name);
                  });
                },
                onError: (err) => {
                  console.error('PayPal Buttons Error:', err);
                  alert('An error occurred with PayPal. Please try again later.');
                }
              }).render(paypalRef.current);
            }
          };
          script.onerror = () => {
            console.error('PayPal SDK Script Error');
            alert('Failed to load PayPal SDK. Please try again later.');
          };
          document.body.appendChild(script);
        } catch (err) {
          console.error('Error loading PayPal script:', err);
          alert('An error occurred. Please try again later.');
        }
      };

      loadPaypalScript();
    }
  }, [product]);


  return (
    <div className="product-detail">
      <div className="images">
        <img src={images[0]} alt={product.name} />
        <div className="thumbnails">
          {product.images.slice(1).map((image, index) => (
            <img key={index} src={image} alt={`Thumbnail ${index}`} />
          ))}
        </div>
      </div>
      <div className="details">
        <h1>{product.name}</h1>
        <h2>with 18-55mm Zoom Lens</h2>
        <div className="price">${product.price}</div>
        <div className="product-id">Product ID: {product.id}</div>
        <div className="paypal-banner">
          <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" alt="PayPal" />
          <span>Pay in 4 interest-free payments of ${(product.price / 4).toFixed(2)}. <a href="#">Learn more</a></span>
        </div>
        <div className="description">{product.description}</div>
        <div className="actions">
          <button className="button">Go to Next Step</button>
          <button className="button">Add to Cart</button>
        </div>
        <div ref={paypalRef} className="paypal-button-container"></div>
      </div>
    </div>
  );
};

export default ProductDetail;
