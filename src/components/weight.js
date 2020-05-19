import React, { useState, Fragment } from "react";
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

const Test = ({ weight, handler }) => (
  <div>
    {/* <CardValue>{weight}</CardValue> */}
    <CustomInput maxLength={3} value={weight} onChange={handler} />
    <Unit>KG</Unit>
  </div>
);

function Weight(props) {
  const [weight, setWeight] = useState(90);

  const handleWeightChange = event => {
    let temp = Number(event.target.value);
    console.log(temp);
    let reg = new RegExp("^[0-9]+$");
    if (reg.test(temp)) {
      setWeight(temp);
    } else {
      console.log("This is not correct");
    }
  };

  const incrementWeight = () => {
    setWeight(Number(weight) + 1);
  };

  const decrementWeight = () => {
    if (weight !== 0) {
      setWeight(weight - 1);
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
              color={"#6d7b94"}
            />
          </CustomButton>
          <CustomButton onClick={incrementWeight}>
            <FontAwesomeIcon
              className={"male"}
              size={"2x"}
              icon={faPlus}
              color={"#6d7b94"}
            />
          </CustomButton>
        </ButtonContainer>
      </Card>
    </Fragment>
  );
}

export default Weight;
