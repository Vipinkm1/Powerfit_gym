import SectionTitle from './SectionTitle'
import { ClockIcon, LocationIcon, MailIcon, PhoneIcon, WhatsAppIcon } from './Icons'

const phone = '+91 98765 43210'
const whatsappLink = 'https://wa.me/919876543210?text=Hi%20PowerFit%20Gym%2C%20I%20want%20to%20know%20about%20membership%20plans.'

function Contact() {
  return (
    <section className="section section--soft" id="contact">
      <div className="container">
        <SectionTitle
          eyebrow="Contact"
          title="Visit, call, or message us today"
          text="Reach PowerFit Gym instantly through phone or WhatsApp. No form, no waiting."
        />
        <div className="contact reveal">
          <div className="contact__content">
            <div className="contact__hero">
              <p className="eyebrow">Start Today</p>
              <h3>Ready for your first workout?</h3>
              <p>
                Call us or send a WhatsApp message. We will help you choose the
                right plan, timing, and training style.
              </p>
              <div className="contact__actions">
                <a className="btn btn--primary" href={whatsappLink} target="_blank" rel="noreferrer"><WhatsAppIcon />WhatsApp Now</a>
                <a className="btn btn--ghost" href="tel:+919876543210"><PhoneIcon />Call Gym</a>
              </div>
            </div>
            <div className="contact__cards">
              <a className="contact-card" href="tel:+919876543210">
                <span><PhoneIcon /></span>
                <div>
                  <strong>Phone</strong>
                  <p className="contact-card__value contact-card__value--nowrap">{phone}</p>
                </div>
              </a>
              <a className="contact-card" href="mailto:hello@powerfitgym.com">
                <span><MailIcon /></span>
                <div>
                  <strong>Email</strong>
                  <p>hello@powerfitgym.com</p>
                </div>
              </a>
              <div className="contact-card">
                <span><ClockIcon /></span>
                <div>
                  <strong>Timings</strong>
                  <p className="contact-card__value">Mon–Sun, 6:00 AM – 10:00 PM</p>
                </div>
              </div>
              <div className="contact-card">
                <span><LocationIcon /></span>
                <div>
                  <strong>Address</strong>
                  <p>PowerFit Gym, Main Road, Your City, India</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact__map">
            <iframe
              title="PowerFit Gym map"
              src="https://www.google.com/maps?q=gym&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
