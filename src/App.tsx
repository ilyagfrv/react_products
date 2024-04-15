import { Routes, Route } from 'react-router-dom'
import './App.css'

import MainLayout from 'layouts/MainLayout'
import { Main, Details, Favorite, Cart, NotFound } from 'pages'

export default function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path='products/:id' element={<Details />} />
          <Route path='favorite' element={<Favorite />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}
