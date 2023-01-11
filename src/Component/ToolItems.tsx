import React from "react";
import styled from "styled-components";

type arr = {
  item: {
    name: string;
    image: string;
  };
};

function ToolItems({ item }: arr) {
  return (
    <Body>
      <div className="image">
        <img src={item.image} alt="" />
      </div>
      <div>
        <h3>{item.name}</h3>
      </div>
    </Body>
  );
}

export default ToolItems;

const Body = styled.div`
  box-shadow: rgb(20, 233, 86) 0px 0px 4px 1px inset;

  width: 150px;
  height: 60px;
  display: flex;
  gap: 10px;
  justify-items: center;
  align-items: center;
  border-radius: 10px;
  padding-left: 5px;

  @media screen and (max-width: 700px) {
    width: 130px;
    height: 50px;
    gap: 11px;
  }

  .image {
    width: 40px;
    height: 40px;
    @media screen and (max-width: 700px) {
      width: 30px;
      height: 30px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-color: white;
      border-radius: 100px;
    }
  }

  h3 {
    font-size: 0.8rem;
  }
`;
