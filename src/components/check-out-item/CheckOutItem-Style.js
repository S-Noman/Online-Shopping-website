import styled from "styled-components";

export const CheckOutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const CheckOutItemImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  object-fit: contain;
`;

export const CheckOutItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CheckOutItemNamePrice = styled.span`
  width: 23%;
`;

export const CheckOutItemQuantity = styled.span`
  width: 23%;
  display: flex;

`;
export const RemoveItemIcon = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export const Arrow = styled.div`
  cursor: pointer;
  display: flex;
`;

export const CartValue = styled.span`
  margin: 0 10px;
  display: flex;
`;

