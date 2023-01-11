import React from "react";
import styled from "styled-components";
import Header from "./Header";
import ToolItems from "./ToolItems";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const data = [
  {
    name: "HTML",
    image: "/img/icons/html.png",
  },
  {
    name: "CSS",
    image: "/img/icons/css.png",
  },
  {
    name: "SASS",
    image: "/img/icons/sass.png",
  },
  {
    name: "JAVSCRIPT",
    image: "/img/icons/html.png",
  },
  {
    name: "GIT",
    image: "/img/icons/git.png",
  },
  {
    name: "PHOTOSHOP",
    image: "/img/icons/adobe-photoshop.png",
  },
  {
    name: "REACT",
    image: "/img/icons/react.png",
  },
  {
    name: "NODE",
    image: "/img/icons/nodejs.png",
  },
  {
    name: "TYPESCRIPT",
    image: "/img/icons/typescript.png",
  },
];

function Tools() {
  return (
    <Body>
      <div data-aos-duration="1000" data-aos="flip-left">
        <Header name="Tool" />
      </div>

      <div
        className="style-card"
        data-aos="fade-up"
        data-aos-anchor-placement="center"
      >
        {data.map((item) => (
          <ToolItems item={item} />
        ))}
      </div>
    </Body>
  );
}

export default Tools;

const Body = styled.div`
  width: 100%;
  color: white;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  margin: 10rem 0;
  overflow: hidden;

  .style-card {
    width: 700px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 20px 0 20px 20px;

    box-shadow: rgb(20, 233, 86) 0px 0px 4px 1px inset;
    border-radius: 10px;

    @media screen and (max-width: 700px) {
      width: 300px;
    }
  }
`;
