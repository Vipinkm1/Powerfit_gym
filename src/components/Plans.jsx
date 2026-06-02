import SectionTitle from './SectionTitle'

const plans = [
  {
    name: 'Monthly Plan',
    price: '₹1,499',
    note: 'Best for trying the gym',
    features: ['Gym access', 'Cardio zone', 'Locker access', 'BMI check'],
  },
  {
    name: 'Quarterly Plan',
    price: '₹3,999',
    note: 'Most balanced choice',
    featured: true,
    features: ['Everything monthly', 'Trainer guidance', 'Diet tips', 'Progress review'],
  },
  {
    name: 'Yearly Plan',
    price: '₹13,999',
    note: 'Lowest monthly value',
    features: ['Best value access', 'Personal roadmap', 'Priority support', 'Free renewal assessment'],
  },
]

function Plans() {
  return (
    <section className="section section--soft" id="plans">
      <div className="container">
        <SectionTitle
          eyebrow="Membership"
          title="Simple memberships, no confusing tiers"
          text="Choose based on how long you want to commit. Message us to confirm latest local offers."
        />
        <div className="card-grid card-grid--three">
          {plans.map((plan) => (
            <article className={`plan-card reveal ${plan.featured ? 'plan-card--featured' : ''}`} key={plan.name}>
              {plan.featured && <span className="plan-card__tag">Most Popular</span>}
              <h3>{plan.name}</h3>
              <p className="plan-card__price">{plan.price}<span>/ plan</span></p>
              <p className="plan-card__note">{plan.note}</p>
              <ul>
                {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <a className="btn btn--primary" href="#contact">Join Now</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plans
