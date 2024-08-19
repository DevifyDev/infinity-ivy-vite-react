import { useState, useEffect } from 'react'

export default function Header() {
    const [isActive, setIsActive] = useState(false)
    
    const toggleActiveClass = () => {
      setIsActive(!isActive)
    }
   
    const removeActive = () => {
      setIsActive(false)
    }

    useEffect(() => {
      const handleScroll = () => {
          if (isActive) {
              removeActive()
          }
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
          window.removeEventListener('scroll', handleScroll)
      }
    }, [isActive])

    return (
        <header className="header">
          <nav className="navbar">
            <img src="/icons/infinity-ivy-logo.png" className="websiteName" />
            <ul className={`navMenu ${isActive ? 'active' : ''}`}>
              <li onClick={removeActive}>
                <a href="#news" className="navLink">News</a>
              </li>
              <li onClick={removeActive}>
                <a href="#collections" className="navLink">Collections</a>
              </li>
            </ul>
            <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleActiveClass}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </header>
    )
  }