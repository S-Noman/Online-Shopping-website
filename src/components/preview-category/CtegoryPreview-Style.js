import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const CategoryPreviewContainer= styled.div`
display: flex;
flex-direction: column;
margin-bottom: 80px;
text-align: center;
padding-right: 40px ;
padding-left: 40px ;
}
`
export const CategoryTitlePreview= styled(Link)`
font-size: 25px;
margin-bottom: 25px;
cursor: pointer;
font-family: 'Roboto Condensed';
border: 1px solid;
border-color: none;
padding: 7px;
background-color: black;
color: aliceblue;

  &:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
  }

`
 
export const Preview = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 20px;
`
   

    
