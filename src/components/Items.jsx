import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { AiFillRead } from "react-icons/ai";
import { GiWhiteTower } from "react-icons/gi";
import { RiUserVoiceFill } from "react-icons/ri";

const Items = () => {
  return (
    <ItemsStyle>
      <div className="item-wrapper">
        <div className="row">
          <div className="col-lg-4 col-md-4 heading">
            <h2>Whats holding you back?</h2>
            <p>Try Verizon </p>
            <Button text="Check Courses" color="green" />
          </div>
          <div className="col-lg-8 box">
            <div className="row box-item">
              <div className="col-lg-3 col-md-3 col-sm-12 item-icon">
                <div className="icon">
                  <AiFillRead />
                </div>
                <div className="card-item">
                  <p>
                    I studied for months but <span>I'm not comfortable</span>{" "}
                    speaking yet
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 item-icon">
                <div className="icon">
                  <GiWhiteTower />
                </div>
                <div className="card-item">
                  <p>
                    I studied for months but <span>I'm not comfortable </span>
                    speaking yet
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 item-icon">
                <div className="icon">
                  <RiUserVoiceFill />
                </div>
                <div className="card-item">
                  <p>
                    I studied for months but <span>I'm not comfortable </span>
                    speaking yet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ItemsStyle>
  );
};

export default Items;

const ItemsStyle = styled.div`
  background-color: #ff3a3a;
  .item-wrapper {
    padding: 100px 130px;

    .heading {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      h2,
      p {
        color: white;
      }
    }
    .box-item {
      justify-content: flex-end;
      align-items: center;
      gap: 50px;
      .item-icon {
        position: relative;
        padding: 0;
        margin: 15px;
        width: 200px;
        .icon {
          background-color: #cccccc;
          width: 80px;
          height: 80px;
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10000;
          border: 1px solid white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;

          svg {
            color: #ff3a3a;
            width: 30px;
            height: 30px;
          }
        }
      }
      .card-item {
        background-color: white;
        width: 200px;
        height: 200px;
        padding: 10px;
        position: relative;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        p {
          font-size: 20px;
          position: absolute;
          width: 150px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;

          span {
            color: #ff3a3a;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .item-wrapper {
      padding: 20px 20px;
      .heading {
        justify-content: center;
        align-items: center;
      }

      .row {
        gap: 50px;
      }
      .box-item {
        justify-content: center;
        align-items: center;
        gap: 50px;
      }
    }
  }
`;
