import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const data = [
  {
    name: "CODE TO BANK",
    link: "https://code-to-bank.vercel.app/game/play",
    problem: "",
    solution: "",
    image: "/img/project1.jpg",
    flex: "row",
  },
  {
    name: "KINOX APPAREL",
    link: "https://kinoxoriginal.com",
    problem: "",
    solution: "",
    image: "/img/project2.jpg",
    styles: {
      flexDirection: "row-reverse",
    },
  },
  {
    name: "PECULIAR ESTATE",
    link: "https://real-estate-eta-seven.vercel.app/",
    problem: "",
    solution: "",
    image: "/img/project3.jpg",
    styles: "row"
  },
  {
    name: "MYRAGE",
    link: "https://myrage321.netlify.app",
    problem: "",
    solution: "",
    image: "/img/project4.jpg",
    styles: "row-reverse"
  },
  {
    name: "NETFLIX CLONE",
    link: "https://pecuflix.netlify.app/",
    problem: "",
    solution: "",
    image: "/img/project5.jpg",
    styles: "row"
  },
];

function Projects() {
  return (
    <Body>
      <div className="head">
        <h1>
          <span>{`</`}</span>ALL PROJECTS
          <span>{`>`}</span>
        </h1>
      </div>

      <div>
        {data.map((item, idx) => (
          <div  data-aos-duration="1000" data-aos="fade-right"  className="project_body" key={idx} flex1={item.styles} >
            <div className="image">
              <img src={item.image} alt="" />
            </div>

            <div className="text">
              <h1>{item.name}</h1>
              <p>
                <span>Problem:</span> Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Esse corporis molestiae, ducimus doloremque
                quaerat mollitia perferendis
              </p>
              <p>
                <span>Solution:</span> Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Esse corporis molestiae, ducimus doloremque
                quaerat mollitia perferendis
              </p>

              <div className="button_link">
                <a href={item.link}>
                  <button>VISIT SITES</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Body>
  );
}

export default Projects;

const Body = styled.div`
  padding-top: 10rem;
  color: white;

  .head {
    margin-left: 2rem;
    span {
      color: #10e956;
    }
  }

  .project_body {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-direction:  ${props => props.flex1};

    @media screen and (max-width: 1000px) {
       
flex-direction: column;

      }

    .image {
      width: 670px;
      height: 400px;
      border-radius: 15px;
      transform: perspective(800px) rotateY(20deg) scale(0.8) rotateX(10deg);
      transition: 0.6s ease-in-out;
      filter: grayscale(1);
      &:hover {
        transform: perspective(800px) rotateY(-15deg) scale(0.7) rotateX(-5deg);
      filter: grayscale(0);

      }

      @media screen and (max-width: 1000px) {
        width: 470px;
        height: 300px;


      }

      @media screen and (max-width: 500px) {
     width: 100%;
     height: 100%;

      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 15px;
        object-fit: cover;
      }
    }

    .text {

      width: 500px;

      
      @media screen and (max-width: 1000px) {
      padding-left:2rem;

     p{
        font-size: 0.6rem;
        text-align: left;
     }
      }

      
      @media screen and (max-width: 500px) {
     width: 100%;
      }
      p {
        font-size: 0.8rem;
        span {
          color: #10e956;
        }
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

        &:hover {
          box-shadow: rgba(20, 233, 86, 0.64) 0px 0px 60px;
          transform: translateY(-10%);
        }
      }
    }
  }
`;
