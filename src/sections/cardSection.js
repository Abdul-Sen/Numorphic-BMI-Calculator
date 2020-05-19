import React, { Fragment } from "react";
import styled from "styled-components";
import Weight from "../components/weight";
import Age from "../components/age";

const Styles = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
  flex-wrap: wrap;
`;

function CardSection(props) {
  return (
    <Fragment>
      <Styles>
        <Weight />
        <Age />
      </Styles>
    </Fragment>
  );
}

export default CardSection;
