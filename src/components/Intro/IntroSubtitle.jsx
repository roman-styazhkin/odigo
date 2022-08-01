import styled from "styled-components";

const StyledIntroSubtitle = styled.div`
max-width: 550px;
margin-bottom: 50px;

&.scroll {
  transition: all .8s ease .2s;
}
`
const IntroSubtitle = (props) => {
  return <StyledIntroSubtitle {...props} className="anim-js" />
}

export default IntroSubtitle;