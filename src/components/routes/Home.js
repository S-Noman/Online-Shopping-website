import * as React from 'react';
import Directory from '../directory/directory';

const Home =()=> {
  const categories = [
    {
      id: 1,
      title: `Men's clothing`,
      imageUrl: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    },
    {
      id: 2,
      title: `Women's clothing`,
      imageUrl: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
    },
    {
      id: 3,
      title: `Jwellery`,
      imageUrl: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    },
    {
      id: 4,
      title: `Electronics`,
      imageUrl: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    },
  ]
  return (
    <div>
      <Directory categories={categories}/>
    </div>
     
  );
}

export default Home;
