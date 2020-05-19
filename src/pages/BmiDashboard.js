import React, { Fragment } from "react";
import styled from "styled-components";
import Gender from "../components/gender";
import Slider from "../components/heightSlider";
import CardSection from "../sections/cardSection";

function BmiDashboard() {
  return (
    <Fragment>
      <DashboardCard>
        <AppTitle>Neomorphic BMI Calculator</AppTitle>
        <Flexbox>
          <Gender />
          <Slider />
          <CardSection />
          {/* <p>item 1</p> */}
        </Flexbox>
      </DashboardCard>
    </Fragment>
  );
}

export default BmiDashboard;

const DashboardCard = styled.div`
  border-radius: 50px;
  /* background: linear-gradient(145deg, #e7ffff, #bed8e9); */
  background: #e5eefc;
  /* box-shadow: 20px 20px 60px #b8cad6, -20px -20px 60px #f8ffff; */
  box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2),
    -12px -12px 24px 0 rgba(255, 255, 255, 0.5);

  max-width: 800px;
  padding: 25px;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 50px;
  padding-bottom: 100px;
`;

const AppTitle = styled.h2`
  font-family: roboto;
  text-align: center;
  color: #6d7b94;
`;

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
`;
