import SignUpForm from "./sign-up/SignUpForm";
import SignInForm from "./sign-in/SignInForm";
import './Authentication.scss'

const Authentication =()=> {
   
    return(
        <div className="authentication-container">
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}
export default Authentication