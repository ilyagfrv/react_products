import './App.css'

import { Header, Sidebar, Content } from 'components'

export default function App() {
  return (
    <div className='app'>
      <Header />

      <main className='main'>
        <Sidebar />
        <Content />
      </main>
    </div>
  )
}
