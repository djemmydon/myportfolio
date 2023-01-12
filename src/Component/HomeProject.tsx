import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function HomeProject() {
  return (
      <Body data-aos="flip-left" data-aos-duration="1000">
          
          <div className="header">
          <Header name="PROJECTS" />
              
          </div>
      <div className="card">
        <div>
          <img src="/img/project1.jpg" alt="" />
        </div>

        <div className="text">
          <h2>CODE TO BANK</h2>
          <p>
            A bank job applying website, you have to play technical game to have
            access to the website. It is own by Sterlin bank Nigeria
          </p>

          <a href="https://code-to-bank.vercel.app/game/play">
            <button>Visit</button>
          </a>
        </div>
      </div>

      <div className="button_link">
        <Link to="/work">
          <button>ALL PROJECT DETAILS</button>
        </Link>
      </div>

      <div className="backgroung">
        <img src="/img/project1.jpg" alt="" />
      </div>
    </Body>
  );
}

export default HomeProject;

const Body = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin: 1rem 0;

  a{
    cursor: pointer;
  }
  button{
    cursor: pointer;
  }

  .backgroung {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    filter: blur(8px);
  overflow: hidden;


    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .card {
    /* height: 398px; */
    width: 500px;
    border-radius: 10px;
    position: relative;
    z-index: 10;
    background-color: white;

    @media screen and (max-width: 500px) {
    width: 100%;
    margin: 0 10px;

}

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }

    h2 {
      color: #10e956;
      font-size: 2rem;
      text-shadow: rgb(0, 0, 0) 3px 3px 0px, rgb(0, 0, 0) -1px -1px 0px,
        rgb(0, 0, 0) 1px -1px 0px, rgb(0, 0, 0) -1px 1px 0px,
        rgb(0, 0, 0) 1px 1px 0px;
        margin: 10px 0;
    }

    button {
      border: 2px solid black;
      padding: 5px 18px;
      font-size: 1rem;
      border-radius: 100px;
      margin-top: 10px;
    }

    .text {
      margin: 22.32px 1rem;
    }
  }

  .button_link {
    margin-top: 40px;
    button {
      background-color: #10e956;
      position: relative;
      z-index: 100;
      padding: 13px 24px;
      border: none;
      border-radius: 10px;
      transition: 0.4s;

      &:hover{
        box-shadow: rgba(20, 233, 86, 0.64) 0px 0px 60px;
        transform: translateY(-10%);
      }
  
    }
  }


  .header{
    position: relative;
    z-index: 10;
    color: white;
    margin: 3rem 0;
  }
`;
