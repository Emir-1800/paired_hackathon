import React from "react";
import "./Footer.css";
import paymentImg from "../../Components/Image/payment.png";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>
              {" "}
              Bazar <i className="fas fa-shopping-basket"></i>{" "}
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              saepe.
            </p>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>

          <div className="box">
            <h3>Contact info</h3>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-phone"></i> +996-456-7890{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-phone"></i> +996-222-3333{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-envelope"></i> bishkek@gmail.com{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-map-marker-alt"></i> Bishkek, Kyrgyzstan -
              312{" "}
            </a>
          </div>

          <div className="box">
            <h3>Quick links</h3>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-arrow-right"></i> home{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-arrow-right"></i> features{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-arrow-right"></i> products{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-arrow-right"></i> categories{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-arrow-right"></i> review{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-arrow-right"></i> blogs{" "}
            </a>
          </div>

          <div className="box">
            <h3>Newsletter</h3>
            <p>subscribe for latest updates</p>
            <input type="email" placeholder="your email" className="email" />
            <input type="submit" value="subscribe" className="btn" />
            <img src={paymentImg} className="payment-img" alt="Payment Image" />
          </div>
        </div>

        <div className="credit">
          {" "}
          created by <span> Emir & Nurislam </span> | all rights reserved{" "}
        </div>
      </section>
    </div>
  );
};

export default Footer;
