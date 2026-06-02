import { PhoneIcon, WhatsAppIcon } from './Icons'

function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Quick contact actions">
      <a className="floating-actions__whatsapp" href="https://wa.me/919876543210" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><WhatsAppIcon /></a>
      <a className="floating-actions__call" href="tel:+919876543210" aria-label="Call PowerFit Gym"><PhoneIcon /></a>
    </div>
  )
}

export default FloatingActions
