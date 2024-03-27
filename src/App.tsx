import './App.css'

import { Header } from 'components'
import image from './assets/icons/icon.svg'

export default function App() {
  return (
    <div className='app'>
      <Header />

      <main className='main'>
        <aside className='sidebar'>
          <nav>
            <ul>
              <li>dairy</li>
              <li>dairy</li>
              <li>dairy</li>
              <li>dairy</li>
            </ul>
          </nav>
        </aside>

        <section className='content'>
          <ul className='products'>
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
