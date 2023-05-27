import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { LoginPage } from './pages/login/LoginPage'
import { Home } from './pages/home/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Link to="/"></Link>
            <Link to="/login"></Link>
            <Link to="/home"></Link>

            <Routes>
                <Route path="/" element={<LoginPage />}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/home" element={<Home />}></Route>
            </Routes>
        </Router>
   </React.StrictMode>,
  )
  