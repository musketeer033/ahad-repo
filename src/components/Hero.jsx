import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible)
        }
      },
      { threshold: 0.1 }
    )
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.hero} ref={heroRef} id="home" aria-label="Hero section">
      <div className={styles.bgGradient}></div>
      <div className={styles.bgParticles}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className={styles.particle} style={{ '--i': i }}></div>
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          Professional Home Visit Service
        </div>

        <h1 className={styles.title}>
          <span className={styles.trophy}>🏆</span>
          <span className={styles.titleText}>Cupping Therapy</span>
          <span className={styles.titleAccent}>Home Visit</span>
        </h1>

        <p className={styles.subtitle}>
          Male &amp; Female Therapist Available
        </p>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>500+</span>
            <span className={styles.statLabel}>Clients Served</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>4</span>
            <span className={styles.statLabel}>Therapy Types</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Certified</span>
          </div>
        </div>

        <div className={styles.ctas}>
          <a href="#book" className={styles.ctaPrimary} id="hero-book-btn">
            Book a Session
          </a>
          <a href="#services" className={styles.ctaSecondary} id="hero-services-btn">
            View Services
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollDot}></span>
        <span className={styles.scrollText}>Scroll to explore</span>
      </div>
    </section>
  )
}

export default Hero
