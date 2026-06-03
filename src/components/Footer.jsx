import { FacebookIcon, InstagramIcon, YoutubeIcon } from './Icons'

const quickLinks = ['Home', 'About', 'Services', 'Plans', 'Gallery', 'Contact']

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <a className="logo" href="#home"><span>PF</span>PowerFit Gym</a>
          <p>Modern local fitness for strength, confidence, and community.</p>
          <div className="footer__socials">
            <a className="footer__social footer__social--instagram" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="PowerFit Gym Instagram">
              <InstagramIcon />
            </a>
            <a className="footer__social footer__social--facebook" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="PowerFit Gym Facebook">
              <FacebookIcon />
            </a>
            <a className="footer__social footer__social--youtube" href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="PowerFit Gym YouTube">
              <YoutubeIcon />
            </a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          {quickLinks.map((link) => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}
        </div>
        <div>
          <h3>Contact</h3>
          <p>+91 98765 43210</p>
          <p>hello@powerfitgym.com</p>
          <p>Main Road, Your City, India</p>
        </div>
      </div>
      <p className="footer__bottom">© {new Date().getFullYear()} PowerFit Gym. All rights reserved.</p>
    </footer>
  )
}

export default Footer
