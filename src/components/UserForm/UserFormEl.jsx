import styled from "styled-components";

const StyledUserFormEl = styled.div`
  position: relative;

  &.anim-js {
    transform: translateY(0);
  }

  &.scroll {
    transition: transform .8s ease .5s, opacity .8s ease .5s;
  }

  &:nth-child(2).scroll {
    transition: transform .8s ease .8s, opacity .8s ease .8s;
  }

  &:not(:last-child) {
    margin-right: 60px;
  }

  &:hover .user-form__input {
    border-bottom-color:#fff;
  }
`;

const UserFormEl = (props) => {
  return <StyledUserFormEl {...props} className={"anim-js"} />
}

export default UserFormEl;