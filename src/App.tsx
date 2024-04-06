import { Routes, Route } from 'react-router-dom'
import './App.css'

import { Header } from 'components'
import { Home, NotFound } from 'pages'

export default function App() {
  return (
    <div className='app'>
      <Header />

      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
