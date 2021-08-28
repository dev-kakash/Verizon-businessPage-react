import React from "react";
import styled from "styled-components";
import { serviceData } from "../data";

const Services = () => {
  return (
    <ServicesStyle>
      <div className="title">
        <div className="left"></div>
        <div className="heading">
          <h1>Why Verizon ?</h1>
        </div>
        <div className="right"></div>
      </div>
      <div className="items">
        <div className="row">
          {serviceData.map((item, index) => {
            const { image, title, desc } = item;

            return (
              <div className="col-lg-6 col-md-6 col-sm-12" key={index}>
                <div className="row">
                  <div className="col-lg-2 col-md-2 col-sm-12 image">
                    <img src={image} alt={title} />
                  </div>
                  <div className="col-lg-10 col-md-10 col-sm-12 text">
                    <h5>{title}</h5>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ServicesStyle>
  );
};

export default Services;

const ServicesStyle = styled.div`
  padding: 20px 130px;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 120px;

    .left,
    .right {
      &::before {
        content: "";
        width: 400px;
        height: 2px;
        display: block;
        background-color: #a19c9c;
      }
    }
    h1 {
      color: #ff3a3a;
    }
  }
  .items {
    margin-top: 50px;
    .row {
      margin: 10px 0;
    }
    .image {
      padding-left: 10px;
      img {
        height: 180px;
      }
    }

    .text {
      h5 {
        font-size: 30px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 20px 20px;
    .title {
      gap: 20px;

      .left,
      .right {
        &::before {
          content: "";
          width: 80px;
          height: 2px;
          display: block;
          background-color: #a19c9c;
        }
      }
      h1 {
        font-size: 20px;
        color: #ff3a3a;
      }
    }
    .items {
      margin-top: 50px;
      .row {
        margin: 10px 0;
      }
      .image {
        display: flex;
        justify-content: center;
        img {
          height: 180px;
        }
      }

      .text {
        h5 {
          font-size: 20px;
        }
        p {
          font-size: 12px;
        }
      }
    }
  }
`;
