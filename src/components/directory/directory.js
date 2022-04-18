import DirectoryItem from '../directory-item/DirectoryItem'
import {DirectoryContainer} from './Directory-Style';

const categories = [
    {
      id: 1,
      title: `Men's`,
      imageUrl: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      route: `shop/men's`
    },
    {
      id: 2,
      title: `Women's`,
      imageUrl: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
      route: `shop/women's`

    },
    {
      id: 3,
      title: `Jewelery`,
      imageUrl: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
      route: 'shop/jewelery'

    },
    {
      id: 4,
      title: `electronics`,
      imageUrl: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      route: 'shop/electronics'

    },
  ]


const Directory =()=>{
    return(
        <DirectoryContainer>
        {categories.map((category) => (<DirectoryItem key={category.id} category={category}/>))}
        </DirectoryContainer>
    )
   
}

export default Directory;