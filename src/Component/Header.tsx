import React from "react";
import styled from "styled-components";

type head = {
  name: string;
};

function Header(props: head) {
  return (
    <HeaderBody>
      <div>
        <h2>{props.name}</h2>
      </div>
    </HeaderBody>
  );
}

export default Header;

const HeaderBody = styled.div`
  box-shadow: rgb(20, 233, 86) 0px 0px 4px 1px inset;
  height: 50px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;


  h2{
    font-size: 2rem;
    text-shadow: rgb(0, 0, 0) 3px 3px 0px, rgb(0, 0, 0) -1px -1px 0px, rgb(0, 0, 0) 1px -1px 0px, rgb(0, 0, 0) -1px 1px 0px, rgb(0, 0, 0) 1px 1px 0px;
  }
`;
