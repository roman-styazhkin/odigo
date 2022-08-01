import styled from "styled-components";

const StyledSubmit = styled.button`
border: 1px solid #fff;
background-color: transparent;
color: #2EA0F3;
text-align: center;
border-radius: 20px;
max-width: 150px;
width: 100%;
padding: 8px;
font-size: 18px;
cursor: pointer;
color: #fff;

&.anim-js {
  transform: translateY(0);
}

&:hover {
  background-color: #fff;
  color: black;
}

&.scroll {
  transition: transform .8s ease 1.1s, opacity .8s ease 1.1s;
}
`;

const Submit = (props) => {
  return <StyledSubmit {...props} />
}

export default Submit;