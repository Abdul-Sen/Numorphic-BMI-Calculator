import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import Flexbox from './shared/flexbox';
import {useSelector } from 'react-redux';
import OptionTitle from "./shared/OptionTitle";
import * as RANGE from './range.json';
const Body = styled.div`
margin: 20px;
border-radius: 50%;
background: #e5eefc;
width: 200px;
height: 200px;
box-shadow:  7px 7px 17px #d0d9e5, 
             -7px -7px 17px #faffff;
display: flex;
align-items: center; 
justify-content: center;
text-align: center; 
`
const ResultFormat = styled.div`
font-family: roboto;
font-size: 3em;
color: #6d7b94;
`;

function Result(props) {
    const bmiState = useSelector((rootReducer)=> rootReducer.bmiReducer);
    const [comment, setComment] = useState('');
    const [bmi,setBmi] = useState(0);
    useEffect(()=>{
        calculateBMI();
    },[bmiState]);

    const calculateBMI = ()=>{
        let {height, weight} = bmiState;
        height = height/1000;
        setBmi((weight/(height*height))/100);
        calculateComment();
    }

    const calculateComment = ()=>{
        let index = null;
        index = RANGE.range.findIndex((element)=>{
            if(element.min <= bmiState.age && element.max >= bmiState.age)
            {
                return true;
            }
        });
        if(index != -1)
        {
            let commentBuilder = '';
            commentBuilder = `Ideal ${(bmiState.gender == true? "men":"women")} in age group of ${RANGE.range[index].min} to ${RANGE.range[index].max} have a BMI of ${(bmiState.gender == true? RANGE.range[index].male:RANGE.range[index].female)}`;
            setComment(commentBuilder);
        }
        else{
            setComment('');
        }
    }
    return (
        <Fragment>
            <Flexbox
                justify={"center"}
                spacing={2}
                flexDirection={"row"}
                alignItems={"center"}
            >
                <Body>
                    <ResultFormat>
                    {Math.round(bmi*10)/10}
                    </ResultFormat>
                </Body>
            </Flexbox>
            <OptionTitle style={{textAlign:"center"}} >{comment}</OptionTitle>
        </Fragment>
    )
}

export default Result;