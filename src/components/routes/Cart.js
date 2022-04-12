import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Cart=() =>{
  const product = useSelector((state) => state.product);
  return (
    <div>
      <h3>
        Your shopping cart is empty
      </h3>
    </div>
  )
}

export default Cart