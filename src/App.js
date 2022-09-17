import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/Index/Index.jsx'
import '../src/App.css'
import SignIn from './pages/SignIn/SignIn.jsx'
import User from './pages/User/User.jsx'
// import { Provider } from "react-redux"
// import { store } from '../src/app/store'
import React from 'react'

export default function App() {
  return (
    // <Provider store = {store}>
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<User />} />
        <Route path="*" element={<div>Error404</div>} />
      </Routes>
    </Router>
    // </Provider>
  )
}
