import styled from "styled-components";

const Card = styled.div`
  @media (max-width: 768px) {
    margin: 20px;
  }
  border-radius: 11px;
  background: ${props => props.theme.colors.background};
  min-width: 300px;
  min-height: 290px;
  box-shadow: 20px 20px 60px #c3cad6, -20px -20px 60px #ffffff;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export default Card;
