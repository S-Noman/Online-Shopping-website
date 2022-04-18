import styled from "styled-components";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button-Style";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  padding-bottom: 35px;

  &:hover {
    img {
      opacity: 0.8;
    }

    ${BaseButton}
${GoogleSignInButton}
${InvertedButton} {
      opacity: 0.85;
      display: flex;
    }
  }


`;
export const ProductCardImage = styled.img`
  width: 100%;
  height: 95%;
  // object-fit: cover;
  margin-bottom: 5px;
  object-fit: contain;
`;


export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Title = styled.span`
  width: 70%;
  padding-left: 10px;
  margin-top: 10px;
`;

export const Price = styled.span`
  width: 10%;
  padding-bottom: 30px;
  margin-top: 10px;
`;
