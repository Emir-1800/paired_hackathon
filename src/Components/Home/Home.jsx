import React from "react";
import Features from "../Features/Features";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="content">
          <h3>
            Fresh And <span>Organic</span> Products For Your
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            libero nostrum veniam facere tempore nisi.
          </p>
          <a href="#" className="btn">
            shop now
          </a>
        </div>
      </section>
      <Features />
    </div>
  );
};

export default Home;
