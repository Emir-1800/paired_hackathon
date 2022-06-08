import React from "react";
import "./Features.css";
import featImg1 from "../../Components/Image/feature-img-1.png";
import featImg2 from "../../Components/Image/feature-img-2.png";
import featImg3 from "../../Components/Image/feature-img-3.png";

const Features = () => {
  return (
    <div>
      <section className="features" id="features">
        <h1 className="heading">
          {" "}
          Our <span>Features</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={featImg1} alt="Features Image" />
            <h3>Fresh and Organic</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, earum!
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>

          <div className="box">
            <img src={featImg2} alt="Features Image" />
            <h3>Free Delivery</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, earum!
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>

          <div className="box">
            <img src={featImg3} alt="Features Image" />
            <h3>Easy Payments</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, earum!
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
