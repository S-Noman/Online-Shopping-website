import {BaseButton, GoogleSignInButton, InvertedButton} from './button-Style';


export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: "inverted",
};

//to take the buttonstring and return one of the button components: (if none is passed use the base button):

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,

  }[buttonType]
)


const Button = ({ children, buttonType, ...otherProps }) => {
  const CutomButton = getButton(buttonType);
  return (
    <CutomButton  {...otherProps}>
      {children}
    </CutomButton>
  );
};
export default Button;
