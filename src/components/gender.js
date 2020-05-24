import React, { Fragment } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Flexbox from "./shared/flexbox";
import OptionTitle from "./shared/OptionTitle";
import { withTheme } from 'styled-components';


// get our fontawesome imports
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";

// redux state
import {useSelector, useDispatch} from 'react-redux';
import {changeGender} from '../actions/bmi';

function Gender(props) {
  console.log(`---> ${props.theme.themeName}`);

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
              <FontAwesomeIcon className={"male"} size={"2x"} icon={faMars} color={props.theme.themeName === "light"? "#4b5669":"#6b6a6a"}/>
            </GenderBtn>
            <GenderBtn className={"female"} onClick={handleClick}>
              <FontAwesomeIcon
                className={"female"}
                size={"2x"}
                icon={faVenus}
                color={props.theme.colors.fontcolor}
              />
            </GenderBtn>
          </Fragment>
        ) : (
          <Fragment>
            <GenderBtn className={"male"} onClick={handleClick}>
              <FontAwesomeIcon className={"male"} size={"2x"} icon={faMars} color={props.theme.colors.fontcolor} />
            </GenderBtn>
            <GenderBtn className={"female"} selected onClick={handleClick}>
              <FontAwesomeIcon
                className={"female"}
                size={"2x"}
                icon={faVenus}
                color={props.theme.themeName === "light"? "#4b5669": "#6b6a6a"}
              />
            </GenderBtn>
          </Fragment>
        )}
      </Flexbox>
    </Fragment>
  );
}

export default withTheme(Gender);

const GenderBtn = styled.div`
  margin: 20px;
  border-radius: 20px;

  background: ${props => {
    switch(props.theme.themeName)
    {
      case "light":
        if(props.selected)
        {
          return "linear-gradient(145deg, #ced6e3, #f5ffff)";
        }
        return "linear-gradient(145deg, #f5ffff, #ced6e3)";
      case "dark":
        if(props.selected)
        {
          return "linear-gradient(120deg,  rgba(32,33,47,1) 100%, rgba(60,63,98,1) 0%)";
        }
        return "linear-gradient(120deg, rgba(60,63,98,1) 0%, rgba(32,33,47,1) 100%)";
        default:
          //todo
    }
  }};
  box-shadow : ${
    props =>{
      if(!props.selected && props.theme.themeName == "light")
      {
        return "12px 12px 24px #c2d4e1, -12px -12px 24px #eeffff";
      }
      else if (!props.selected && props.theme.themeName == "dark")
      {
        return "7px 7px 14px #d0d9e5, -7px -7px 14px #faffff";
      }
    }
  };
  `;