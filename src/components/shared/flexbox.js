import styled from "styled-components";
import PropTypes from "prop-types";

const Flexbox = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justify};
  align-items: ${props => props.alignItems};
  align-content: ${props => props.alignContent};

  > * {
    padding: ${props => 10 * props.spacing + "px"};
  }
`;

Flexbox.propTypes = {
  flexDirection: PropTypes.oneOf(["row", "column"]),
  justify: PropTypes.string,
  alignItems: PropTypes.string,
  alignContent: PropTypes.string,
  spacing: PropTypes.number
};

export default Flexbox;
