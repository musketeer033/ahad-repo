import { useEffect, useRef } from 'react'
import styles from './Benefits.module.css'

const benefits = [
  {
    id: 'fire-cupping-benefits',
    emoji: '🔥',
    title: 'Fire Cupping Benefits',
    color: '#e85d2f',
    items: [
      'Relieves muscle pain',
      'Improves blood circulation',
      'Reduces stiffness',
      'Helps in faster recovery',
      'Promotes relaxation',
    ],
  },
  {
    id: 'detox-benefits',
    emoji: '🪄',
    title: 'Detox Therapy Benefits',
    color: '#3b82f6',
    items: [
      'Removes toxins from body',
      'Boosts immunity',
      'Improves energy levels',
      'Enhances overall wellness',
      'Supports better metabolism',
    ],
  },
  {
    id: 'face-benefits',
    emoji: '🐿️',
    title: 'Face Therapy Benefits',
    color: '#10b981',
    items: [
      'Improves facial blood flow',
      'Reduces wrinkles & fine lines',
      'Natural glow & brightness',
      'Helps acne & dark spots',
      'Relieves stress & tension',
    ],
  },
  {
    id: 'sports-benefits',
    emoji: '💪',
    title: 'Sports & Gym Benefits',
    color: '#f59e0b',
    items: [
      'Faster muscle recovery',
      'Reduces soreness',
      'Improves flexibility',
      'Prevents injuries',
      'Boosts performance',
    ],
  },
]

function BenefitCard({ benefit, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(styles.visible)
          }, index * 100)
        }
      },
      { threshold: 0.1 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <article
      className={styles.card}
      ref={cardRef}
      id={`benefit-${benefit.id}`}
      style={{ '--accent': benefit.color }}
    >
      <div className={styles.cardHeader}>
        <span className={styles.emoji}>{benefit.emoji}</span>
        <h3 className={styles.cardTitle}>{benefit.title}</h3>
      </div>
      <ul className={styles.list}>
        {benefit.items.map((item, i) => (
          <li key={i} className={styles.listItem}>
            <span className={styles.dot}></span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}

function Benefits() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible)
        }
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} id="benefits" aria-label="Therapy Benefits" ref={sectionRef}>
      <div className={styles.bgDecor}></div>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Why Choose Us</span>
          <h2 className={styles.sectionTitle}>Therapy Benefits</h2>
          <p className={styles.sectionSubtitle}>
            Scientifically-backed therapies that target your body's natural healing mechanisms
          </p>
        </div>
        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.id} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
