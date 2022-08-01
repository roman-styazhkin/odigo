import styled from "styled-components";

const StyledMenuLink = styled.a`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background-color: #fff;
    left: 0;
    bottom: -10px;
  }

  &:hover::before {
    width: 100%;
    opacity: 1;
    background-color: #fff;
    transition: width 0.2s linear;
  }
`;

const MenuLink = (props) => {
  return <StyledMenuLink {...props} />
}

export default MenuLink;