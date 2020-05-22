import React, { Fragment } from "react";
import Card from "./shared/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import {
  CardTitle,
  ButtonContainer,
  CustomButton,
  CustomInput
} from "../styling";

// redux state
import {useSelector, useDispatch} from 'react-redux';
import {changeAge} from '../actions/bmi';


const Test = ({ age, handler }) => (
  <div>
    <CustomInput width={"90px"} maxLength={2} value={age} onChange={handler} />
  </div>
);

function Age(props) {

  const {age} = useSelector((globalState)=> globalState.bmiReducer);
  const dispatch = useDispatch();

  // const [age, setAge] = useState(23);

  const handleAgeChange = event => {
    let temp = Number(event.target.value);
    console.log(temp);
    let reg = new RegExp("^[0-9]+$");
    if (reg.test(temp)) {
      // setAge(temp);
      dispatch(changeAge(temp));
    } else {
      console.log("This is not correct");
    }
  };

  const incrementAge = () => {
    dispatch(changeAge(Number(age)+1));
  };

  const decrementAge = () => {
    if (age !== 0) {
      dispatch(changeAge(Number(age)-1));

    }
  };

  return (
    <Fragment>
      <Card>
        <CardTitle>Age</CardTitle>
        <Test age={age} handler={handleAgeChange} />
        <ButtonContainer>
          <CustomButton onClick={decrementAge}>
            <FontAwesomeIcon
              className={"male"}
              size={"2x"}
              icon={faMinus}
              color={"#6d7b94"}
            />
          </CustomButton>
          <CustomButton onClick={incrementAge}>
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

export default Age;
