import React, {useState} from "react";
import styled from "styled-components";
import { Turn as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false)
  return (
    <Body>
      <div className="nav">
        <div>
          <h1>Logo</h1>
        </div>

        <div>
          <Hamburger toggled={open} toggle={setOpen} />
        </div>
      </div>

      <div className="nav_items">
        <div className={open ? "image active" : "image"} ></div>

        <div className={open ? "list_item active" : "list_item"}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Resume</Link>
            </li>
            <li>
              <Link to="/">Work</Link>
            </li>
            <li>
              <Link to="/">Writing</Link>
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
  position: relative;

  .nav {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }

  .nav_items {
    display: flex;
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 11;


    .list_item {
      width: 50%;
      background-color: #10e956;
      padding: 2.5rem 2rem 0;

      transition: 0.5s;
      transform: translateY(-100%);
    

  

      ul{
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-items: space-around;
        gap: 1rem;


        li{
            font-size: 3rem;
            
        }

      }
    }

    .list_item.active{
      transform: translateY(0);

    }

    .image {
      background-color: red;
      width: 50%;
      transition: 0.5s;
      transform: translate(-100%);
    }

    .image.active{
      transform: translate(0);

    }
  }
`;
