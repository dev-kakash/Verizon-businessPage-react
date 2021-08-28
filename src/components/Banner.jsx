import React from "react";
import styled from "styled-components";
import BannerPic from "../images/Group 537.png";

const Banner = () => {
  return (
    <BannerStyle>
      <h1>
        Lorem ipsum dolor sit amet, <span>"con setetur sadipscing"</span> elitr
      </h1>

      <img src={BannerPic} alt="banner pic" />
    </BannerStyle>
  );
};

export default Banner;
const BannerStyle = styled.div`
  padding: 0px 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 40px;
    span {
      color: #ff3a3a;
    }
  }
  img {
    width: 800px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0px 20px;
    h1 {
      font-size: 20px;
      text-align: center;
    }
    img {
      width: 300px;
    }
  }
`;
