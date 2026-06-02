import SectionTitle from './SectionTitle'

const trainers = [
  ['Rahul Singh', 'Strength Coach', 'Weight training, posture correction, muscle gain', 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80'],
  ['Neha Kapoor', 'Yoga & Mobility Coach', 'Flexibility, stress relief, beginner yoga', 'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=600&q=80'],
  ['Vikram Rao', 'Fat Loss Coach', 'HIIT, cardio planning, lifestyle guidance', 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80'],
]

function Trainers() {
  return (
    <section className="section" id="trainers">
      <div className="container">
        <SectionTitle
          eyebrow="Our Trainers"
          title="Coaches who actually watch your form"
          text="Get help with technique, workout order, warmups, and small adjustments that make training safer."
        />
        <div className="trainer-grid">
          {trainers.map(([name, role, speciality, image]) => (
            <article className="trainer-card reveal" key={name}>
              <img
                className="trainer-card__photo"
                src={image}
                alt={`${name}, ${role}`}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src = 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80'
                }}
              />
              <p className="eyebrow">{role}</p>
              <h3>{name}</h3>
              <p>{speciality}</p>
            </article>
          ))}
        </div>
        <div className="cta-strip reveal">
          <div>
            <p className="eyebrow">Free Trial Visit</p>
            <h3>Walk in once, see the floor, and decide with confidence.</h3>
          </div>
          <a className="btn btn--primary" href="https://wa.me/919876543210?text=Hi%20PowerFit%20Gym%2C%20I%20want%20to%20book%20a%20free%20trial%20visit." target="_blank" rel="noreferrer">
            Book on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Trainers
