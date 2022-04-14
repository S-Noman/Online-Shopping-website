import SignUpForm from '../sign-up/SignUpForm'
import SignInForm from "../sign-in/SignInForm";
import { AuthenticationContainer } from './Authentication-Style'

const Authentication = () => {
   
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};
export default Authentication;
