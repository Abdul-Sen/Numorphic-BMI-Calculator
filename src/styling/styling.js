import styled from "styled-components";

export const Unit = styled.h4`
  display: inline-block;
  margin: 0;
  font-size: 15px;
  color: ${props => props.theme.colors.fontcolor};
  font-family: roboto;
  margin: 5px;
`;

export const CustomInput = styled.input`
  background-color: transparent;
  border: none;
  display: inline-block;
  margin: 0;
  width: ${props=> props.width? props.width :  "120px"};
  font-size: ${props=> props.fontSize? props.fontSize: "65px"};
  color:  ${props => props.theme.colors.fontcolor};
  font-family: roboto;
  font-weight: 300;
`;
export const CardTitle = styled.h2`
  color: ${props => props.theme.colors.fontcolor};
  font-family: roboto;
  font-weight: 300;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: 40px;
  align-content: space-around;
  width: 100%;
  justify-content: center;
`;


//12px 12px 24px 0 rgba(0, 0, 0, 0.2), -12px -12px 24px 0 rgba(255, 255, 255, 0.5);
export const CustomButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  box-shadow:${props => props.theme.themeName == "light"? "8px 8px 15px #c3cad6, -8px -8px 15px #ffffff":"12px 12px 12px 0 rgba(0, 0, 0, 0.2), -2px -2px 5px 0 rgba(255, 255, 255, 0.5)"};
  background-color: transparent;
  border: none;

  margin-left: 15px;
  margin-right: 15px;

  &:active {
    background: linear-gradient(145deg, #ced6e3, #f5ffff);
  }
`;
