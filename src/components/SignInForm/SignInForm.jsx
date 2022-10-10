import { login } from '../../actions/loginAction'
import { useNavigate } from 'react-router'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './SignInForm.css'

export default function SignInForm() {

  let dispatch = useDispatch()
  let navigate = useNavigate()

  const { token } = useSelector((state) => state.userLogin)

  useEffect(() => {
    if (token) {
      navigate('/profile')
    }
  }, [token, navigate])


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" type="submit" name="Login">
          Sign In
        </button>

      </form>
    </section>
  )
}
