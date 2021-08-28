import React from "react";
import styled from "styled-components";
import Hero from "../images/hero.png";
import Button from "./Button";

const HeroSection = () => {
  return (
    <HeroStyle>
      <div className="row hero-wrapper">
        <div className="col-lg-6 col-md-6 col-sm-12 left">
          <h1>
            A new way to <span>learn Japanese</span> using audio-based lessons
          </h1>
          <p className="text-1">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore.
          </p>
          <p className="text-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            <span>"nonumy eirmod"</span> tempor invidunt.
          </p>
          <Button text="Start Learning" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 right">
          <img src={Hero} alt="Hero illustration" />
        </div>
      </div>
    </HeroStyle>
  );
};

export default HeroSection;

const HeroStyle = styled.div`
  padding: 20px 130px;
  font-weight: 500;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    line-height: 15px;
    h1 {
      width: 80%;
      color: #707070;
      span {
        color: #ff3a3a;
      }
    }
    .text-1 {
      width: 75%;
      color: #707070;
    }
    .text-2 {
      width: 70%;
      color: #b9b6b6;
      span {
        color: #ff3a3a;
      }
    }
  }
  .right {
    img {
      width: 800px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 20px 20px;
    .hero-wrapper {
      gap: 10px;
    }
    .left {
      order: 2;
      line-height: 10px;

      h1 {
        width: 100%;
        font-size: 18px;
      }
      .text-1 {
        width: 100%;
        font-size: 10px;
      }
      .text-2 {
        margin-top: -10px;
        width: 100%;
        font-size: 10px;
      }
    }
    .right {
      order: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 230px;
      }
    }
  }
`;
