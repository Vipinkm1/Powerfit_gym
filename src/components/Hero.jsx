const heroImage =
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80'

const Hero = () => {
  return (
    <section className="hero section" id="home">
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />
      <div className="container hero__grid">
        <div className="hero__content reveal">
          <p className="eyebrow">PowerFit Gym • Since 2018</p>
          <h1>Transform Your Body, Transform Your Life</h1>
          <p className="hero__text">
            From your first rep to your strongest set, PowerFit gives you the
            space, coaching, and energy to show up consistently.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#plans">Join Now</a>
            <a className="btn btn--ghost" href="#contact">Contact Us</a>
          </div>
          <div className="hero__stats" aria-label="PowerFit Gym highlights">
            <span><strong>900+</strong>Members</span>
            <span><strong>12+</strong>Trainers</span>
            <span><strong>6 AM</strong>Opening</span>
          </div>
        </div>
        <div className="hero__visual reveal reveal--delay">
          <img src={heroImage} alt="Athlete training at PowerFit Gym" />
          <div className="hero__badge">
            <strong>Free BMI Check</strong>
            <span>Start your fitness journey today</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
