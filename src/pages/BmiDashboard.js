import React, { Fragment } from "react";
import styled from "styled-components";
import Gender from "../components/gender";
import Slider from "../components/heightSlider";
import CardSection from "../sections/cardSection";
import Result from '../components/result';
function BmiDashboard() {
  return (
    <Fragment>
      <DashboardCard>
        <AppTitle>Neomorphic BMI Calculator</AppTitle>
        <Flexbox>
          <Result />
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
  background: #e5eefc;
  box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2),
    -12px -12px 24px 0 rgba(255, 255, 255, 0.5);
  max-width: 800px;
  padding: 25px;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 50px;
  padding-bottom: 60px;
  margin-bottom: 60px;
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
