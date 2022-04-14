import styled from 'styled-components'
import {BaseButton, GoogleSignInButton, InvertedButton} from '../button/button-Style'


export const CartDrodownContainer = styled.div`
position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 40px;
z-index: 5;


${BaseButton}
${GoogleSignInButton}
${InvertedButton}
 {
    margin-top: auto;
}
`;

//in the above code I was able to target the nested components inside the main conatiner//

export const EmptyMsg = styled.span`
font-size: 18px;
  margin: 50px auto;
`
  
export const CartItmesStyle = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }
` 
