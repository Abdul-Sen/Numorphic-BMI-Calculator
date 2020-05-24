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