import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../images/logo.png";
import Button from "./Button";
import { MdMenu, MdClose } from "react-icons/md";

const NavMenu = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavStyle>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <nav className="nav-wrapper">
        <div className="image">
          <img src={Logo} alt="Versel" />{" "}
        </div>
        <div className="right">
          <ul className={!showNav ? "navItems hide_item" : "navItems"}>
            <div
              className="closeNavIcon"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              <MdClose />
            </div>
            <div className="list">
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
            </div>
            <div className="button">
              <Button text="Start Course" />
            </div>
          </ul>
        </div>
      </nav>
    </NavStyle>
  );
};

export default NavMenu;

const NavStyle = styled.div`
  padding: 20px 130px;
  .nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 150px;
    }
    .right {
      ul {
        display: flex;
        align-items: center;
        padding: 0px;
        margin: 0px;

        li {
          display: inline;
          padding-right: 55px;
          cursor: pointer;
          font-weight: 500;
        }
      }
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    svg {
      color: #ff3a3a;
    }
    * {
      pointer-events: none;
    }
  }
  .closeNavIcon {
    position: absolute;
    right: 0rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
  }

  @media only screen and (max-width: 768px) {
    padding: 20px 20px;
    .nav-wrapper {
      img {
        width: 80px;
      }
      .right {
        ul {
          display: flex;
          align-items: left;
          padding: 0px;
          margin: 0px;
          flex-direction: column;
          justify-content: center;
          background-color: aliceblue;
          padding: 20px 30px;

          li {
            display: block;
            padding: 0;
            cursor: pointer;
            font-weight: 500;
            font-size: 20px;
          }
          .button {
            margin-top: 10px;
          }
        }
      }
      .navItems {
        --top: 1rem;
        transition: 0.3s ease transform;
        background-color: #ff3a3a;
        padding: 2rem;
        width: 90%;
        max-height: 400px;
        max-width: 300px;
        border-radius: 5px;
        position: absolute;
        right: 1rem;
        top: var(--top);
        .closeNavIcon {
          margin: 0 0 0 auto;
          width: 4rem;
          cursor: pointer;
          display: block;
          svg {
            color: black;
          }
          * {
            pointer-events: none;
          }
        }
      }
    }
    .hide_item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
  }
`;
