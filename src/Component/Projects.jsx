import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const data = [
  {
    name: "CODE TO BANK",
    link: "https://code-to-bank.vercel.app/game/play",
    git: "https://github.com/djemmydon/code-to-bank",
    problem: "A Job Applying Website, where user will solve a computational game before having access to apply for a job",
    solution: "React.js,Styled-Component, and AOS ",
    image: "/img/project1.jpg",
    flex: "row",
  },
  {
    name: "KINOX APPAREL",
    link: "https://kinoxoriginal.com",
    git: "https://github.com/djemmydon/kinox-frontend",
    problem: "An Ecommerce website where user can make a order of the brand clothes",
    solution: "Javascript, React.js, Next.js, Sanity CMS, SASS, Payment Gateway",
    image: "/img/project2.jpg",
    styles: {
      flexDirection: "row-reverse",
    },
  },
  {
    name: "PECULIAR ESTATE",
    link: "https://real-estate-eta-seven.vercel.app/",
    git: "https://github.com/djemmydon/real-estate",
    problem: "It a clone website for estate management",
    solution: "Next.js, React.js, Javascript, Tailwindcss",
    image: "/img/project3.jpg",
    styles: "row"
  },
  {
    name: "MYRAGE",
    link: "https://myrage321.netlify.app",
    git: "https://github.com/djemmydon/business_web",
    problem: "My Rage is a crypto website where user can keep track of their crypto currency",
    solution: "React.js,Css,",
    image: "/img/project4.jpg",
    styles: "row-reverse"
  },
  {
    name: "NETFLIX CLONE",
    link: "https://pecuflix.netlify.app/",
    git: "https://github.com/djemmydon/netflix-clone-2022",
    problem: "Netflix Clone it's a website where you can find a netflix movie",
    solution: "React.js,Css, TMDB",
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
                <span>Problem:</span> {item.problem}
              </p>
              <p>
                <span>Stack:</span> {item.solution}
              </p>

              <div className="button_link">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <button>LIVE</button>
                        </a>
                    
                <a  href={item.git} target="_blank" rel="noreferrer" >
                  <button className="github">Github</button>
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
  padding-bottom: 5rem;
  color: white;
  button{
    cursor: pointer;
  }

  .head {
    margin-left: 2rem;

    @media screen and (max-width:600px) {
    margin-left: 0.7rem;
    margin-bottom:2rem;

    h1{
        font-size: 1rem;
    }
        
    }
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
        margin: 0.8rem 0;
        span {
          color: #10e956;
        }
      }

      h1{
        color: #10e956;
        border: 2px solid #10e956;
        margin: 1rem 0;
       letter-spacing: 10px;
       font-weight: 600;
       padding-left: 0.4rem;
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
        margin-right: 1rem;

        &:hover {
          box-shadow: rgba(20, 233, 86, 0.64) 0px 0px 60px;
          transform: translateY(-10%);
        }
      }

      .github{
        background-color: white;
      }
    }
  }
`;
