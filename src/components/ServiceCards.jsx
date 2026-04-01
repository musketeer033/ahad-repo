import { useEffect, useRef } from 'react'
import styles from './ServiceCards.module.css'

const services = [
  {
    id: 'fire-cupping',
    emoji: '🔥',
    title: 'Fire Cupping',
    price: '₹1000',
    tagline: 'Pain relief & recovery',
    color: '#e85d2f',
    features: ['Muscle pain relief', 'Blood circulation', 'Deep tissue therapy'],
  },
  {
    id: 'detox-therapy',
    emoji: '🪄',
    title: 'Detox Therapy',
    price: '₹1500',
    tagline: 'Full body detox',
    color: '#3b82f6',
    features: ['Toxin elimination', 'Immunity boost', 'Energy levels'],
  },
  {
    id: 'face-therapy',
    emoji: '🐿️',
    title: 'Face Therapy',
    price: '₹1500',
    tagline: 'Glow & skin care',
    color: '#10b981',
    features: ['Natural glow', 'Anti-wrinkle', 'Acne treatment'],
  },
]

function ServiceCard({ service, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(styles.visible)
          }, index * 120)
        }
      },
      { threshold: 0.15 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <article
      className={styles.card}
      ref={cardRef}
      id={`service-${service.id}`}
      style={{ '--accent': service.color }}
    >
      <div className={styles.cardTop}>
        <span className={styles.emoji}>{service.emoji}</span>
        <div className={styles.badge} style={{ background: `${service.color}1a`, color: service.color }}>
          Popular
        </div>
      </div>

      <h3 className={styles.cardTitle}>{service.title}</h3>
      <div className={styles.price}>{service.price}</div>
      <p className={styles.tagline}>{service.tagline}</p>

      <div className={styles.divider}></div>

      <ul className={styles.features}>
        {service.features.map((f, i) => (
          <li key={i} className={styles.featureItem}>
            <span className={styles.check}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#book"
        className={styles.cardBtn}
        id={`book-${service.id}`}
        style={{ background: service.color }}
      >
        Book Now
      </a>
    </article>
  )
}

function ServiceCards() {
  return (
    <section className={styles.section} id="services" aria-label="Our Services">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>What We Offer</span>
          <h2 className={styles.sectionTitle}>Our Therapy Services</h2>
          <p className={styles.sectionSubtitle}>
            Professional therapy delivered at your doorstep by certified therapists
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceCards
