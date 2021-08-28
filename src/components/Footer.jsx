import React from "react";
import styled from "styled-components";
import Wave from "../images/wave.png";
import Button from "./Button";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaSnapchatSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterStyle>
      <img src={Wave} alt="" className="wave" />
      <div className="footer">
        <div className="heading">
          <h1>Learn a language</h1>
          <Button text="Try Verizon free" color="green" />
        </div>
        <div className="items">
          <div className="social">
            <h6>Follow us:</h6>
            <FaFacebookSquare />
            <FaTwitterSquare />
            <FaInstagramSquare />
            <FaSnapchatSquare />
          </div>
          <div className="language">
            <h6>Languages</h6>
            <p>Japanese</p>
            <p>English</p>
          </div>
          <div className="learn">
            <h6>Learn</h6>
            <p>Get Started</p>
            <p>Process</p>
            <p>Pricing</p>
            <p>FAQ</p>
          </div>
          <div className="company">
            <h6>Company</h6>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>

        <div className="copyright">
          <p>@Copyright 2021- K.AKASH - All Rights Reserved</p>
          <h6>Privacy Policy . Terms of service</h6>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
const FooterStyle = styled.div`
  margin-top: -100px;
  .footer {
    padding: 20px 130px;
    background-color: #ff3a3a;
    .heading {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        color: white;
      }
    }
    .items {
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      line-height: 10px;
      color: white;
      h6 {
        margin-bottom: 20px;
      }
      p {
        color: white;
        &:hover {
          color: #19eb06;
        }
      }
      svg {
        width: 20px;
        height: 20px;
        margin-right: 10px;

        &:hover {
          color: #19eb06;
        }
      }
    }
    .copyright {
      line-height: 5px;
      p {
        color: white;
      }
      h6 {
        color: #e5ff00;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    margin-top: -50px;
    .wave {
      max-width: 400px;
    }
    .footer {
      padding: 20px 20px;
      .items {
        display: block;
        text-align: center;
        h6 {
          margin-top: 40px;
        }
      }
      .copyright {
        margin-top: 50px;
        line-height: 0;
        text-align: center;
        p,
        h6 {
          font-size: 10px;
        }
      }
    }
  }
`;
