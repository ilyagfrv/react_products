import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import MainLayout from 'layouts/MainLayout'
import { Main, NotFound } from 'pages'

const Details = lazy(() => import('./pages/Details'))
const Favorite = lazy(() => import('./pages/Favorite'))
const Cart = lazy(() => import('./pages/Cart'))

export default function App() {
  return (
    <div className='app'>
      <Suspense>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Main />} />
            <Route path='products/:id' element={<Details />} />
            <Route path='favorite' element={<Favorite />} />
            <Route path='cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  )
}
