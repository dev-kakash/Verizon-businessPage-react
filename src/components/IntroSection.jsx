import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import { introData } from "../data";

const IntroSection = () => {
  return (
    <IntroStyle className="container-fluid">
      <div className="title">
        <div className="heading-bg">
          <h1>Three steps to learn a Language</h1>
        </div>

        <h4>
          with <span> Verizon</span>
        </h4>
      </div>

      <div className="item-wrapper">
        <div className="row mx-0 row-wrapper">
          {introData.map((item, index) => {
            const { image, title, desc, banner } = item;
            return (
              <div className="col-lg-3 mx-3 card-item">
                <div className="image">
                  <img src={image} className="img-fluid" alt="title images" />
                </div>
                <div className="desc">
                  <h5>{title}</h5>
                  <p>{desc}</p>
                  <img className="img-fluid" src={banner} alt={title} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </IntroStyle>
  );
};

export default IntroSection;
const IntroStyle = styled.div`
  padding: 20px 130px;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    .heading-bg {
      padding: 0px 140px;
      background-color: #ff3a3a;
      h1 {
        color: white;
      }
    }
    h4 {
      span {
        color: #ff3a3a;
      }
    }
  }
  .item-wrapper {
    width: 100%;
    .row-wrapper {
      width: fit-content;

      display: flex;
      justify-content: center;
      .card-item {
        padding: 25px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        text-align: center;
        .image {
          img {
            height: 220px;
          }
        }
        h5 {
          color: #ff3a3a;
        }
        border-radius: 5px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 20px 20px;
    .title {
      margin-bottom: 10px;
      .heading-bg {
        padding: 0px 14px;
        background-color: #ff3a3a;
        h1 {
          color: white;
          font-size: 20px;
        }
      }
      h4 {
        font-size: 10px;
        span {
          color: #ff3a3a;
        }
      }
    }
  }
`;
