import SectionTitle from './SectionTitle'

const testimonials = [
  ['Aarav Sharma', 'Clean gym, helpful trainers, and a very motivating environment.', 5],
  ['Priya Mehta', 'The personal training plan helped me stay consistent for the first time.', 5],
  ['Rohan Patel', 'Great equipment and friendly people. Perfect local gym vibe.', 5],
]

function Testimonials() {
  return (
    <section className="section section--soft">
      <div className="container">
        <SectionTitle
          eyebrow="Testimonials"
          title="What members notice first"
        />
        <div className="card-grid card-grid--three">
          {testimonials.map(([name, review, rating]) => (
            <article className="testimonial-card reveal" key={name}>
              <div className="stars" aria-label={`${rating} star rating`}>
                {'★'.repeat(rating)}
              </div>
              <p>“{review}”</p>
              <h3>{name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
