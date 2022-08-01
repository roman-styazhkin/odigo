import styled from "styled-components";

const StyledHeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const HeaderInner = (props) => {
  return <StyledHeaderInner {...props} />
}

export default HeaderInner;