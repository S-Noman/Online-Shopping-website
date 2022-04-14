import './Directory.scss'
import DirectoryItem from '../directory-item/DirectoryItem'

const categories = [
    {
      id: 1,
      title: `Men's`,
      imageUrl: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      route: `shop/mens`
    },
    {
      id: 2,
      title: `Women's`,
      imageUrl: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
      route: 'shop/womens'

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
        <div className="categories-container">
        {categories.map((category) => (<DirectoryItem key={category.id} category={category}/>))}
        </div>
    )
   
}

export default Directory;