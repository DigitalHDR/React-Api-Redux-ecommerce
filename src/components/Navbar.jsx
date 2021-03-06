import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const state = useSelector((state) => state.handleCart)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand" rel="noreferrer noopener" to="/">Ecommerce React</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" rel="noreferrer noopener" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" rel="noreferrer noopener" to="/products">Produtos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" rel="noreferrer noopener" to="/about">Sobre</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" rel="noreferrer noopener" to="/contact">Contato</NavLink>
              </li>
            </ul>
            <div className="buttons">
              <button className="btn">
                <NavLink to="/login" rel="noreferrer noopener" className="btn btn-outline-dark">
                  <i className="fa fa-sign-in me-1"></i>
                  Logar
                </NavLink>
                <NavLink to="/register" rel="noreferrer noopener" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-user-plus me-1"></i>
                  Registrar
                </NavLink>
                <NavLink to="/cart" rel="noreferrer noopener" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-cart-arrow-down me-1"></i>
                  ({state.length})
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
