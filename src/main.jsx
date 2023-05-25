import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { LoginPage } from './pages/login/LoginPage'
import styles from './styles/main.module.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Link to="/"></Link>
            <Link to="/login"></Link>

            <Routes>
                <Route path="/" element={<LoginPage />}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
            </Routes>
        </Router>
   </React.StrictMode>,
  )
  