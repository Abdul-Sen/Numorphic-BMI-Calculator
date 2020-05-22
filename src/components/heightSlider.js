import React, { useState } from "react";
import styled from "styled-components";
import Flexbox from "./shared/flexbox";
import OptionTitle from "./shared/OptionTitle";

// state
import {useSelector, useDispatch} from 'react-redux';
import { changeHeight } from '../actions/bmi';



const sliderThumbStyle = props => `
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: black;
  box-shadow: 12px 12px 24px #c2d4e1, -12px -12px 24px #eeffff;
  

`;

const Styles = styled.div`
  margin-left: 25px;
  /* margin: 20px; */
  display: flex;
  flex-direction: column;
  align-items: center;

  .value {
    font-family: roboto;
    font-size: 1.5em;
  }

  .slider {
    border-radius: 15px;
    -webkit-appearance: none;
    height: 5px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${props => sliderThumbStyle(props)}
    }

    &::-moz-range-thumb {
      ${props => sliderThumbStyle(props)}
    }

    width: 100%;
    background-color: black;
  }
`;

const SliderInputText = styled.input`
  border: none;
  width: 40px;
  margin-bottom: 20px;
  background: transparent;
  font-family: roboto;
  font-size: 1.5em;
`;
function Slider(props) {
  const {height} = useSelector((globalState)=> globalState.bmiReducer);
  const dispatch = useDispatch();

  const handleValueChange = e => {
    let newVal = e.target.value;
    dispatch(changeHeight(newVal));
  };

  return (
    <Flexbox
      justify={"center"}
      spacing={2}
      flexDirection={"row"}
      alignItems={"center"}
    >
      <OptionTitle>Height (cm)</OptionTitle>
      <Styles>
        <SliderInputText type={"text"} maxLength={3} value={height} onChange={handleValueChange} />
        <input
          className={"slider"}
          onChange={handleValueChange}
          value={height}
          type={"range"}
          min={100}
          max={400}
        />
      </Styles>
    </Flexbox>
  );
}

export default Slider;
