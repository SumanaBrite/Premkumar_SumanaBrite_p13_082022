import './Navigation.css'
import logo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/logoutAction'
import React from 'react'

export default function Navigation() {
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.userLogin)
  const { firstName } = useSelector((state) => state.userProfile)

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {token ? (
            <div>
              <Link className="main-nav-item" to="/profile">
                <i className="fa fa-user-circle"></i>
                {firstName}
              </Link>
              <Link onClick={logoutHandler} className="main-nav-item" to="/">
                <i className="fa fa-sign-out"></i>
                Sign Out
              </Link>
            </div>
          ) : (
            <Link className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}

        </div>
      </nav>

    </>
  )
}