import { useState } from 'react'

const navLinks = ['Home', 'About', 'Services', 'Plans', 'Gallery', 'Contact']

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="navbar">
      <nav className="container navbar__inner" aria-label="Main navigation">
        <a className="logo" href="#home" onClick={closeMenu}>
          <span>PF</span>
          PowerFit Gym
        </a>
        <button
          className="navbar__toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={closeMenu}>
              {link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
