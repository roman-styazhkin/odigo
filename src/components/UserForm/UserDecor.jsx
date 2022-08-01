import styled from "styled-components";

const StyledUserDecor = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  background-color: #1B7DFF;
  width: 0;
`;

const UserDecor = () => {
  return <StyledUserDecor />
}

export default UserDecor;