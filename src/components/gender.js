import React, { Fragment } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Flexbox from "./shared/flexbox";
import OptionTitle from "./shared/OptionTitle";

// get our fontawesome imports
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";

// redux state
import {useSelector, useDispatch} from 'react-redux';
import {changeGender} from '../actions/bmi';

function Gender() {

  const {gender: selectedMale} = useSelector((globalState)=> globalState.bmiReducer);
  const dispatch = useDispatch();

  const handleClick = event => {
    console.log(`button clicked ${event.target.classList.contains("female")}`);

    if (event.target.classList.contains("male")) {
      dispatch(changeGender(true));
    } else {
      dispatch(changeGender(false));
    }
  };

  return (
    <Fragment>
      <Flexbox
        justify={"center"}
        spacing={2}
        flexDirection={"row"}
        alignItems={"center"}
      >
        <OptionTitle>Gender</OptionTitle>
        {selectedMale ? (
          <Fragment>
            <GenderBtn className={"male"} selected onClick={handleClick}>
              <FontAwesomeIcon className={"male"} size={"2x"} icon={faMars} />
            </GenderBtn>
            <GenderBtn className={"female"} onClick={handleClick}>
              <FontAwesomeIcon
                className={"female"}
                size={"2x"}
                icon={faVenus}
              />
            </GenderBtn>
          </Fragment>
        ) : (
          <Fragment>
            <GenderBtn className={"male"} onClick={handleClick}>
              <FontAwesomeIcon className={"male"} size={"2x"} icon={faMars} />
            </GenderBtn>
            <GenderBtn className={"female"} selected onClick={handleClick}>
              <FontAwesomeIcon
                className={"female"}
                size={"2x"}
                icon={faVenus}
              />
            </GenderBtn>
          </Fragment>
        )}
      </Flexbox>
    </Fragment>
  );
}

export default Gender;

const GenderBtn = styled.div`
  margin: 20px;
  border-radius: 20px;
  background: ${props =>
    props.selected
      ? "linear-gradient(145deg, #ced6e3, #f5ffff)"
      : "linear-gradient(145deg, #f5ffff, #ced6e3)"};
  box-shadow: ${props =>
    props.selected ? "" : "12px 12px 24px #c2d4e1, -12px -12px 24px #eeffff"};
`;
