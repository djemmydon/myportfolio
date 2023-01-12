import React from "react";
import styled from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function Hero() {
  
  AOS.init()
  
  return (
    <Body>
      <div className="hero_section">
        <div data-aos-duration="1000" data-aos="fade-right"  className="text_side">
          <div className="hi_their">
            <p>Hi There I'm Chukwuemeka</p>
          </div>

          <div className="head_text">
            <h1>
              A <span>FrontEnd Developer and Designer</span>. I have 3 years of
              Experience
            </h1>
          </div>
          <div className="head_text">
            <p>
              i am a software engineer with more than three years of experience.
              recognized as a practical and effective developer, experienced in
              leading cross-functional teams in a time-pressured setting to
              complete projects on schedule and within budget.
            </p>
          </div>
        </div>

        <div data-aos-duration="1000" data-aos="fade-left"   className="image">
          <img src="/img/gif3.gif" alt="" />
        </div>
      </div>

      <div className="overlay"></div>
    </Body>
  );
}

export default Hero;

const Body = styled.div`
  background-image: url(/img/background.gif);
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media screen and (max-width: 700px) {
    margin-top: 4rem;
    }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000c7;
  }

  .hero_section {
    position: relative;
    height: 100%;
    display: flex;
    /* align-items: center; */

    @media screen and (max-width: 700px) {
      flex-direction: column;
    }

    color: white;
    z-index: 10;

    .text_side {
      width: 50%;
      height: 100%;

      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 10px;
      margin: 10px 3rem;

      h1 {
        font-size: 3rem;

        span{
            color: #10e956;
            
        }
      }

      p{
        font-size: 13px;
        text-transform: capitalize;
      }

      @media screen and (max-width: 700px) {
      gap: 18px;

        width: 100%;
      margin: 10px;

      h1{
        font-size: 2rem;
      }

      }


     

      .hi_their{
        background: #14e95871;
        width:200px;
        padding: 10px ;
        border-radius: 10px;
      }

      @media screen and (max-width: 400px) {
      h1{
        font-size: 1.5rem;
      }
      p{
        font-size: 0.6rem;
      }

      .hi_their{
        width: 150px;
      }
    }
    }

    .image {
      height: 100%;
      width: 50%;
      @media screen and (max-width: 700px) {
        width: 100%;
      }
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;
