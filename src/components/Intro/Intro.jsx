import Container from "../Container";
import UserForm from "../UserForm/UserForm";
import IntroContent from "./IntroContent";
import IntroSubtitle from "./IntroSubtitle";
import IntroTitle from "./IntroTitle";

const Intro = () => {
  return (
    <IntroContent>
      <Container>
        <IntroTitle>Discover Amazing places in Japan</IntroTitle>
        <IntroSubtitle>
          Jump off balcony, onto stranger's head.
          Chase ball of string hide when guests come over.
          Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door,
        </IntroSubtitle>
        <UserForm />
      </Container>
    </IntroContent>
  )
};

export default Intro;