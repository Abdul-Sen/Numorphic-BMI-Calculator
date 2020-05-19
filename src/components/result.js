import React, { Fragment } from 'react';
import styled from 'styled-components';
import Flexbox from './shared/flexbox';

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
function Result(props) {
    return (
        <Fragment>
            <Flexbox
                justify={"center"}
                spacing={2}
                flexDirection={"row"}
                alignItems={"center"}
            >
                <Body>
                    test
                </Body>
            </Flexbox>
        </Fragment>
    )
}

export default Result;