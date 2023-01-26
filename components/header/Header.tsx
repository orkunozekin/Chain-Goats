import React from 'react'
import './Header.css'
const nav__links = [
  {
    path: '#home',
    display: 'Home',
  },

  {
    path: '#learn',
    display: 'Learn',
  },

  {
    path: '#coaching',
    display: 'Coaching',
  },

  {
    path: '#training',
    display: 'Training',
  },

  {
    path: '#blogs',
    display: 'Blogs',
  },
]

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>CHAIN GOATS</h2>
          </div>
          {/*---Navigation---*/}
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li key={index} className="menu__item">
                  <a href={item.path} className="menu__link">
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/*---Light mode---*/}
          <div className="light__mode">
            <span>
              <i className="ri-sun-line"> Light Mode</i>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
