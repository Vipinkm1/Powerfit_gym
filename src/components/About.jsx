import SectionTitle from './SectionTitle'

const highlights = [
  {
    title: 'Strength Zone',
    text: 'Dedicated areas for machines, dumbbells, benches, and controlled lifting.',
  },
  {
    title: 'Guided Workouts',
    text: 'Trainers help with form, exercise selection, and safe workout flow.',
  },
  {
    title: 'Member Comfort',
    text: 'Spacious layout, clear workout zones, and a welcoming floor atmosphere.',
  },
  {
    title: 'Fresh Facility',
    text: 'Regular cleaning, organized equipment, and hygiene-focused daily upkeep.',
  },
]

function About() {
  return (
    <section className="section section--soft" id="about">
      <div className="container about">
        <div className="about__intro">
          <SectionTitle
            eyebrow="About PowerFit"
            title="A focused space for daily discipline"
            text="PowerFit Gym is designed for people who want a serious workout environment without confusion, pressure, or unnecessary complexity."
          />
          <div className="about__photos reveal">
            <img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=700&q=80"
              alt="PowerFit style gym strength training area"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=700&q=80"
              alt="Trainer helping member with workout"
              loading="lazy"
            />
          </div>
        </div>
        <div className="about__grid reveal">
          {highlights.map((item, index) => (
            <article className="feature-card" key={item.title}>
              <span>{`0${index + 1}`}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
