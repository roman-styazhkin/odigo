import styled from "styled-components";
import introBg from "../../img/intro-bg.jpg";

const StyledIntroContent = styled.div`
  position: relative;
  padding-top: 400px;
  min-height: 100vh;
  background-image: url(${(props) => props.bgImage});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  z-index: 1;
  padding-bottom: 250px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(53, 66, 103, 0.0001) 0%, #151824 95.04%);
    z-index: -1;
  }
`;

const IntroContent = (props) => {
  return <StyledIntroContent {...props} bgImage={introBg} />
}

export default IntroContent;