import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Container = (props) => {
  return <StyledContainer {...props} />
}

export default Container;