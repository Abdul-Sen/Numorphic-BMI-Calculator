import React, { useState } from "react";
import styled from "styled-components";
import Flexbox from "./shared/flexbox";
import OptionTitle from "./shared/OptionTitle";

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
function Slider(props) {
  const [sliderValue, setSliderValue] = useState(250);

  const handleValueChange = e => {
    console.log(e.target.value);
    let newVal = e.target.value;

    setSliderValue(newVal);
  };

  return (
    <Flexbox
      justify={"center"}
      spacing={2}
      flexDirection={"row"}
      alignItems={"center"}
    >
      <OptionTitle>Height</OptionTitle>

      <Styles>
        <p className={"value"}>{sliderValue}</p>
        <input
          className={"slider"}
          onChange={handleValueChange}
          value={sliderValue}
          type={"range"}
          min={100}
          max={400}
        />
      </Styles>
    </Flexbox>
  );
}

export default Slider;
