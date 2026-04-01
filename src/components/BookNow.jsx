import { useRef, useEffect } from 'react'
import styles from './BookNow.module.css'

function BookNow() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible)
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} id="book" aria-label="Book a Session" ref={sectionRef}>
      <div className={styles.bgOrbs}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
      </div>

      <div className="container">
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <span className={styles.sectionLabel}>Ready to Heal?</span>
            <h2 className={styles.title}>Book Now</h2>
            <p className={styles.subtitle}>
              Experience professional cupping therapy from the comfort of your home.
              Our certified therapists come to you — no travel needed.
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <span className={styles.highlightIcon}>🏠</span>
                <span>Home Visit</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightIcon}>👨‍⚕️</span>
                <span>Male &amp; Female Therapists</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightIcon}>✅</span>
                <span>Certified Professionals</span>
              </div>
            </div>
          </div>

          <div className={styles.contactBlock}>
            <a
              href="tel:7024870062"
              className={styles.callBtn}
              id="call-now-btn"
              aria-label="Call to book a session"
            >
              <span className={styles.callIcon}>📞</span>
              <div className={styles.callText}>
                <span className={styles.callLabel}>Call to Book</span>
                <span className={styles.callNumber}>7024870062</span>
              </div>
            </a>

            <div className={styles.orDivider}>
              <span className={styles.orLine}></span>
              <span className={styles.orText}>or reach us on</span>
              <span className={styles.orLine}></span>
            </div>

            <a
              href="https://wa.me/919111266793?text=Hi!%20I%20am%20interested%20in%20booking%20a%20cupping%20therapy%20session."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
              id="whatsapp-btn"
              aria-label="Chat on WhatsApp"
            >
              <span className={styles.whatsappIcon}>💬</span>
              <div className={styles.whatsappText}>
                <span className={styles.whatsappLabel}>Chat on WhatsApp</span>
                <span className={styles.whatsappNumber}>+91 91112 66793</span>
              </div>
            </a>

            <div className={styles.orDivider}>
              <span className={styles.orLine}></span>
              <span className={styles.orText}>or follow us on</span>
              <span className={styles.orLine}></span>
            </div>

            <a
              href="https://instagram.com/_cupping_at_home_"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instaBtn}
              id="instagram-btn"
              aria-label="Visit our Instagram page"
            >
              <span className={styles.instaIcon}>📸</span>
              <span className={styles.instaHandle}>@_cupping_at_home_</span>
            </a>

            <p className={styles.note}>
              Available 7 days a week · 9 AM – 9 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookNow
