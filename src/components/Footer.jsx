import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.logo}>
            <span>🏆</span>
            <span className={styles.logoText}>CuppingCare</span>
          </div>
          <p className={styles.copy}>
            © {year} Cupping Therapy Home Visit. All rights reserved.
          </p>
          <p className={styles.tagline}>Made with ❤️ for your wellness</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
