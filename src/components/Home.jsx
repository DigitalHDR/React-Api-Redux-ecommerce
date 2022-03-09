import React from 'react'
import Products from './Products'

export default function Home() {
  return (
    <div className='hero'>
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          style={{ objectFit: 'contain' }}
          alt="Background"
          height='650px'
          width='600px'
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0" >
              Moda da semana
            </h5>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  )
}
