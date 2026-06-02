import SectionTitle from './SectionTitle'

const services = [
  ['🏋️', 'Weight Training', 'Muscle gain, strength basics, machines, dumbbells, and barbell guidance.', 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=80'],
  ['🚴', 'Cardio', 'Sweat-focused sessions using treadmills, cycles, intervals, and endurance drills.', 'https://images.unsplash.com/photo-1570829460005-c840387bb1ca?auto=format&fit=crop&w=700&q=80'],
  ['💪', 'Personal Training', 'One-to-one attention for form correction, routine planning, and accountability.', 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=700&q=80'],
  ['🧘', 'Yoga', 'Mobility, breathing, posture, stress relief, and beginner-friendly flexibility sessions.', 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=700&q=80'],
  ['🎵', 'Zumba', 'High-energy dance fitness for calorie burn, confidence, and group motivation.', 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80'],
  ['🔥', 'CrossFit', 'Functional strength, explosive workouts, conditioning, and athletic performance.', 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=700&q=80'],
]

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionTitle
          eyebrow="Services"
          title="Pick the workout that fits your mood"
          text="Train heavy, move fast, stretch deeply, or join a high-energy group session."
        />
        <div className="card-grid card-grid--three">
          {services.map(([icon, title, text, image]) => (
            <article className="service-card reveal" key={title}>
              <img src={image} alt={`${title} at PowerFit Gym`} loading="lazy" />
              <div className="service-card__icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#contact">Ask about {title}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
