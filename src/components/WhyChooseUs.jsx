import SectionTitle from './SectionTitle'

const reasons = [
  {
    title: 'Beginner-Friendly Coaching',
    text: 'New members learn basic movements, machine setup, and gym etiquette without feeling lost.',
  },
  {
    title: 'Flexible Gym Timings',
    text: 'Early mornings and late evenings help students, professionals, and families fit training into real schedules.',
  },
  {
    title: 'Practical Fitness Roadmap',
    text: 'Members get simple direction for fat loss, strength gain, stamina, or general fitness.',
  },
]

function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container why">
        <SectionTitle
          eyebrow="Why Choose Us"
          title="More than machines and mirrors"
          text="The difference is in how easy it becomes to start, ask questions, and keep coming back."
        />
        <div className="why__content">
          <div className="why__panel reveal">
            <p className="eyebrow">Open Daily</p>
            <h3>6:00 AM – 10:00 PM</h3>
            <p>Drop in before work, after college, or in the evening rush. The floor stays active all day.</p>
            <a className="btn btn--primary" href="#contact">Book a Free Visit</a>
          </div>
          <div className="why__list">
            {reasons.map((reason, index) => (
              <article className="why-card reveal" key={reason.title}>
                <span>{index + 1}</span>
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
