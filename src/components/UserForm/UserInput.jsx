import styled from "styled-components";

const StyledUserInput = styled.input`
  outline: none;
  padding: 0 20px;
  font-weight: 500;
  font-size: 18px;
  display: block;
  border: none;
  background-color: transparent;
  color: #fff;
  padding-bottom: 20px;
  max-width: 300px;
  width: 100%;
  border-bottom: 2px solid rgba(255, 255, 255, 0.7);

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 400;
  }

  &:hover::placeholder {
    color: #fff;
  }

  &:not(:last-child) {
    margin-right: 30px;
  }

  &:focus + div {
    width: 100%;
    transition: width 0.2s ease-out;
  }
`;

const UserInput = (props) => {
  return (
    <StyledUserInput
      type="text"
      autoComplete="off"
      {...props} />
  )
}

export default UserInput;