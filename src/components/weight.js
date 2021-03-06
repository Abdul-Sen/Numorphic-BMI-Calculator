import React, {Fragment } from "react";
import Card from "./shared/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import {
  CardTitle,
  ButtonContainer,
  CustomButton,
  Unit,
  CustomInput
} from "../styling";

// redux state
import {useSelector, useDispatch} from 'react-redux';
import {changeWeight} from '../actions/bmi';
import { withTheme } from "styled-components";


const Test = ({ weight, handler }) => (
  <div>
    <CustomInput maxLength={3} value={weight} onChange={handler} />
    <Unit>KG</Unit>
  </div>
);

function Weight(props) {

  const {weight} = useSelector((globalState)=> globalState.bmiReducer);
  const dispatch = useDispatch();

  const handleWeightChange = event => {
    let temp = Number(event.target.value);
    console.log(temp);
    let reg = new RegExp("^[0-9]+$");
    if (reg.test(temp)) {
      dispatch(changeWeight(temp));
    } else {
      console.log("This is not correct");
    }
  };

  const incrementWeight = () => {
    dispatch(changeWeight(Number(weight+1)));
  };

  const decrementWeight = () => {
    if (weight !== 0) {
      dispatch(changeWeight(Number(weight-1)));
    }
  };

  return (
    <Fragment>
      <Card>
        <CardTitle>Weight</CardTitle>
        <Test weight={weight} handler={handleWeightChange} />
        <ButtonContainer>
          <CustomButton onClick={decrementWeight}>
            <FontAwesomeIcon
              className={"male"}
              size={"2x"}
              icon={faMinus}
              color={props.theme.colors.fontcolor}
            />
          </CustomButton>
          <CustomButton onClick={incrementWeight}>
            <FontAwesomeIcon
              className={"male"}
              size={"2x"}
              icon={faPlus}
              color={props.theme.colors.fontcolor}
            />
          </CustomButton>
        </ButtonContainer>
      </Card>
    </Fragment>
  );
}

export default withTheme(Weight);