import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { delCart } from '../redux/action'  //################################### caso de erro no caminho coloque '../redux/action/index'

export default function Cart() {
  const state = useSelector((state) => state.handleCart)
  const dispatch = useDispatch()

  const handleClose = (item) => {
    dispatch(delCart(item))
  }

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            className="btn-close float-end" aria-label='Close'
            onClick={() => handleClose(cartItem)}
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={cartItem.image} alt={cartItem.title} height='200px' width='200px' />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className='lead fw-bold'>R$ {cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="container py-4">
          <div className="row text-center">
            <h3>Carrinho está vazio</h3>
          </div>
        </div>
      </div>
    )
  }

  const button = () => {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-3">
            <NavLink
              to="/checkout"
              className='btn btn-outline-dark'>
              Fazer a comprar
            </NavLink>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </div>
  )
}
