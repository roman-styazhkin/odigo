import styled from "styled-components";

const StyledIntroTitle = styled.h1`
  color: #fff;
  font-weight: 500;
  font-size: 50px;
  line-height: 1.2;
  margin-bottom: 30px;
`;

const IntroTitle = (props) => {
  return <StyledIntroTitle {...props} className="anim-js" />
}

export default IntroTitle;