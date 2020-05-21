import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import Flexbox from './shared/flexbox';
import {useSelector } from 'react-redux';

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
    const [bmi,setBmi] = useState(0);
    useEffect(()=>{
        calculateBMI();
    },[bmiState]);

    const calculateBMI = ()=>{
        let {height, weight} = bmiState;
        height = height/1000;
        setBmi((weight/(height*height))/100);
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
        </Fragment>
    )
}

export default Result;