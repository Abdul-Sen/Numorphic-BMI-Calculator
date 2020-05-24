import styled from "styled-components";

const Card = styled.div`
  @media (max-width: 768px) {
    margin: 20px;
  }
  border-radius: 11px;
  background: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.themeName == "light"? "20px 20px 60px #c3cad6, -20px -20px 30px #ffffff":   "12px 12px 24px 0 rgba(0, 0, 0, 0.2), -12px -12px 24px 0 rgba(255, 255, 255, 0.5)"};
  min-width: 300px;
  min-height: 290px;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export default Card;