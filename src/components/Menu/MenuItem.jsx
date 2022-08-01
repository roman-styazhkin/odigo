import styled from "styled-components";

const StyledMenuItem = styled.li`
  color: #fff;

  &:not(:last-child) {
    margin-right: 80px;
  }
`;

const MenuItem = (props) => {
  return <StyledMenuItem {...props} />
}

export default MenuItem;