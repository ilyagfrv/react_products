import './App.css'

import { Header, Sidebar } from 'components'
import image from './assets/icons/lemon.svg'

export default function App() {
  return (
    <div className='app'>
      <Header />

      <main className='main'>
        <Sidebar />

        <section className='content'>
          <ul className='products'>
            <li className='product__item'>
              <img src={image} alt='' />
              <div>
                <h4>lor</h4>
                <h4>1000 rub</h4>
              </div>
              <button>add to cart</button>
            </li>
            <li className='product__item'>
              <img src={image} alt='' />
              <div>
                <h4>name</h4>
                <h4>1000 rub</h4>
              </div>
              <button>add to cart</button>
            </li>
            <li className='product__item'>
              <img src={image} alt='' />
              <div>
                <h4>name</h4>
                <h4>1000 rub</h4>
              </div>
              <button>add to cart</button>
            </li>
            <li className='product__item'>
              <img src={image} alt='' />
              <div>
                <h4>name</h4>
                <h4>1000 rub</h4>
              </div>
              <button>add to cart</button>
            </li>
            <li className='product__item'>
              <img src={image} alt='' />
              <div>
                <h4>name</h4>
                <h4>1000 rub</h4>
              </div>
              <button>add to cart</button>
            </li>
            <li className='product__item'>
              <img src={image} alt='' />
              <div>
                <h4>name</h4>
                <h4>1000 rub</h4>
              </div>
              <button>add to cart</button>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
