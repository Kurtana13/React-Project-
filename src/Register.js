import React, { useState } from 'react'
import './css/Register.css'

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [price, setPrice] = useState('')
  const [barbers, setBarber] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (firstName && email && email && address && price) {
      const newBarber = { firstName, lastName, email, address, price }
      setBarber((berbers) => {
        return [...barbers, newBarber]
      })
      setFirstName('')
      setLastName('')
      setEmail('')
      setAddress('')
      setPrice('')
    } else {
    }
  }

  return (
    <div>
      <div className='registerBox'>
        <h1>REGISTRATION</h1>
        <article>
          <form className='form' onSubmit={handleSubmit}>
            <div className='formBox'>
              <label htmlFor='firstName'>Name: </label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className='formBox'>
              <label htmlFor='lastName'>Last Name: </label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className='formBox'>
              <label htmlFor='email'>Email: </label>
              <input
                type='text'
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='formBox'>
              <label htmlFor='address'>Address: </label>
              <input
                type='text'
                id='address'
                name='address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className='formBox'>
              <label htmlFor='price'>Price: </label>
              <input
                type='text'
                id='price'
                name='price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <button type='submit'>Register</button>
          </form>
        </article>
      </div>
      <div className='registerBox'>
        {barbers.map((barber) => {
          const { firstName, lastName, email, address, price } = barber
          return (
            <div className='item'>
              <p>{firstName}</p>
              <p>{lastName}</p>
              <p>{email}</p>
              <p>{address}</p>
              <p>{price}</p>
              <p>--------</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Register
