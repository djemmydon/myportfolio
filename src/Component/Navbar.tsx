import React, { useState } from "react";
import styled from "styled-components";
import { Turn as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open)
  }
  return (
    <Body>
      <div className="nav">
        <div className="logo">
          <h1>{` </PECULIAR>`}</h1>
        </div>

        <div>
          <Hamburger toggled={open} toggle={setOpen} size={20} />
        </div>
      </div>

      <div onClick={handleClose} className={open ? "nav_items active" : "nav_items"}>
        {/* <div className={open ? "image active" : "image"} ></div> */}

        <div className={open ? "list_item active" : "list_item"}>
          <ul>
            <li onClick={handleClose}>
              <Link to="/">Home</Link>
            </li>
            
            <li onClick={handleClose}>
              <Link to="/work">Work</Link>
            </li>
            <li onClick={handleClose}>
              <a href="https://drive.google.com/file/d/1Enm9JvQ95UimZTP9jsufsb5VHTh1dFV8/view?usp=share_link">Resume</a>
            </li>
            <li onClick={handleClose}>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </Body>
  );
}

export default Navbar;

const Body = styled.nav`
  background-color: #10e956;
  width: 100%;
  height: 70px;
  margin: 0;
  padding: 0;
  position: fixed;
  z-index: 100;

  .logo{


    h1{
      font-size: 1rem;
    }
  }

  .nav {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }

  .nav_items.active {
    transform: scaleX(1);
    opacity: 1;
  }
  .nav_items {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 11;
    transition: 0.5s;
    transform: translate(-100%);
    opacity: 0;
    right: 0;

    .list_item {
      width: 300px;
      background-color: #10e956;
      padding: 2.5rem 2rem 0;

      transition: 0.5s;
      transform: translate(100%);
      @media screen and (max-width: 500px) {
        width: 100%;
      }

      ul {
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-items: space-around;
        gap: 1rem;

        li {
          font-size: 3rem;
          position: relative;
          transition: 0.3s;
          :hover{
            transform: translate(-10%);
            color: white;
          }

          a{
            transition: 0.3s;
            color: black;

          :hover{
            transform: translate(-20%);
            color: white;
          }
          }
          /* ::before{
            content: " ";
            position: absolute;
            width: 0;
            left: 0;
            top: 4rem;
            height: 0;
      background-color: #10e956;
           
          transition: 0.5s;

          
          }
          :hover ::before{
            content: " ";
            position: absolute;
            width: 100%;
            left: 0;
            top: 4rem;
            height: 2px;
      background-color: #10e956;
           
            transition: 0.5s;
          
          } */
          a {
            cursor: pointer;
          }
        }
      }
    }

    .list_item.active {
      transform: translate(0);
    }

    .image {
      background-color: #10e956;
     
      width: 50%;
      transition: 0.5s;
      transform: translate(-100%);

      @media screen and (max-width: 500px) {
        width: 0%;
      }
    }

    .image.active {
      transform: translate(0);
    }
  }
`;
