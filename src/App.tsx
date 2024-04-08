import { Routes, Route } from 'react-router-dom'
import './App.css'

import { Header } from 'components'
import { Home, Cart, Favorite, NotFound } from 'pages'

export default function App() {
  return (
    <div className='app'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
