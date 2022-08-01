import styled from "styled-components";

const StyledMenuList = styled.ul`
  display: flex;
  align-items: center;
`;

const MenuList = (props) => {
  return <StyledMenuList {...props} />
}

export default MenuList;