import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Register from './Register'

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)
