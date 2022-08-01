import styled from "styled-components";

const StyledUserFormItem = styled.form`
  display: flex;
  align-items: flex-end;
`;

const UserFormItem = (props) => {
  const onFormSubmit = (e) => {
    e.preventDefault();
  }

  return <StyledUserFormItem {...props} onSubmit={onFormSubmit} />
}

export default UserFormItem;