import Logo from "../Logo/Logo";
import styled from "styled-components";
import HeaderInner from "./HeaderInner";
import Container from "../Container";
import Navigation from "../Navigation/Navigation";

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 100;
  padding: 30px 0;
`

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderInner>
          <Logo />
          <Navigation />
        </HeaderInner>
      </Container>
    </StyledHeader>
  )
};

export default Header;