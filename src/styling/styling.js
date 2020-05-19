import styled from "styled-components";

export const Unit = styled.h4`
  display: inline-block;
  margin: 0;
  font-size: 15px;
  color: #6d7b94;
  font-family: roboto;
  margin: 5px;
  /* font-weight: 300; */
`;

export const CustomInput = styled.input`
  background-color: transparent;
  border: none;
  display: inline-block;
  margin: 0;
  width: 120px;
  font-size: 65px;
  color: #6d7b94;
  font-family: roboto;
  font-weight: 300;
`;
export const CardTitle = styled.h2`
  color: #6d7b94;
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

export const CustomButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  box-shadow: 8px 8px 15px #c3cad6, -8px -8px 15px #ffffff;
  background-color: transparent;
  border: none;

  margin-left: 15px;
  margin-right: 15px;

  &:active {
    background: linear-gradient(145deg, #ced6e3, #f5ffff);
  }
`;
