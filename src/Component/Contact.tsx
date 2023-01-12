import React from "react";
import styled from "styled-components";
import Header from "./Header";

const data = [
  {
    name: "Github",
    image: "/img/icons/github.png",
    link: "https://github.com/djemmydon",
  },
  {
    name: "Twitter",
    image: "/img/icons/twitter.png",
    link: "https://twitter.com/peculiardj",
  },
  {
    name: "LinkedIn",
    image: "/img/icons/linkedin.png",
    link: "https://www.linkedin.com/in/okinopatrick/",
  },
];

function Contact() {
  return (
      <Body>
          
          <div className="header">
        <Header name="Contact"/>              
          </div>
      <div className="contact">
        {data.map((item) => (
          <a href={item.link} className="contact_items" target="_blank" rel="noreferrer">
            <div className="text">
              <h1>{item.name}</h1>
            </div>
            <div className="image">
              <img src={item.image} alt="" />
            </div>
          </a>
        ))}
          </div>
          
    
    </Body>
  );
}

export default Contact;

const Body = styled.div`
  width: 100%;
  height: 100%;
  margin: 1rem 0;
  
  .header{
       margin: 2rem auto;
       width: 100%;
       display: flex;
       justify-content: center;
       color: white;
        
    }
  .contact {
    display: flex;
    flex-direction: row;
    width: 100%;

    @media screen and (max-width: 700px) {
      flex-wrap: wrap;
    }

    .contact_items {
      width: 100%;
      height: 100px;
      background-color: blue;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      cursor: pointer;

      :hover {
      }

      :nth-child(1) {
        background-color: black;
        color: white;

        :hover {
          background-color: #1b1b1b;
        }
      }
      :nth-child(2) {
        background-color: #00acee;
        color: black;

        :hover {
          background-color: #6fd3fb;
        }
      }
      :nth-child(3) {
        background-color: #0077b5;
        color: black;

        :hover {
          background-color: #3bafed;
        }
      }

      .image {
        height: 70px;
        img {
          height: 100%;
        }
      }
    }
  }
`;
