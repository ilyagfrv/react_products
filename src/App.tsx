import { Routes, Route } from 'react-router-dom'
import './App.css'

import { Header } from 'components'
import { Main, Details, Favorite, Cart, NotFound } from 'pages'

export default function App() {
  return (
    <div className='app'>
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/products/:id' element={<Details />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
