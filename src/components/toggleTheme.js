import React, {Fragment, useState} from 'react';
import { withTheme } from 'styled-components';
import styled from 'styled-components';
import { CustomButton } from '../styling';

const Styles = styled.div`
text-align: right;
max-width: 90%;
color: ${props => props.theme.colors.fontcolor};

`;

const ExtendedBtn = styled(CustomButton)`
color: ${props => props.theme.colors.fontcolor};
margin: 0px 0px 0px 4px;
border-radius: 10px;
background: ${props => props.theme.themeName=='light'? 'linear-gradient(145deg, #ced6e3, #f5ffff)': 'linear-gradient(135deg,#626f85), rgba(32,33,47,1)'}
`;
function ToggleTheme(props)
{
    return (
        <Styles>
            use <ExtendedBtn onClick={props.handler} >{props.theme.themeName == 'light'? 'dark' :'light'} </ExtendedBtn> theme
        </Styles>
    )
}

export default withTheme(ToggleTheme);