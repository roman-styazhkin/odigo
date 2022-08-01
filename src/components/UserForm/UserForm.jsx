import Submit from "../Submit";
import UserDecor from "./UserDecor";
import UserFormEl from "./UserFormEl";
import UserFormItem from "./UserFormItem";
import UserInput from "./UserInput";

const UserForm = () => {

  return (
    <UserFormItem>

      <UserFormEl>
        <UserInput
          name="user-like-to-do"
          placeholder="What would you like to do? " />
        <UserDecor />
      </UserFormEl>

      <UserFormEl>
        <UserInput
          name="user-like-to-go"
          placeholder="Where would you like to go? " />
        <UserDecor />
      </UserFormEl>

      <Submit type="submit" className="anim-js">submit</Submit>
    </UserFormItem>
  )
}


export default UserForm;