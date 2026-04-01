import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Main navigation">
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🏆</span>
          <span className={styles.logoText}>CuppingCare</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#services" className={styles.navLink}>Services</a>
          <a href="#benefits" className={styles.navLink}>Benefits</a>
          <a href="#book" className={styles.bookBtn} id="navbar-book-btn">Book Now</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
