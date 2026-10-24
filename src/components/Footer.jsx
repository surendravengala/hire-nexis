import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { services, siteConfig } from '../config/siteData';
import { InstagramIcon, LinkedInIcon, YouTubeIcon } from './SocialIcons';
import logo from '../assets/logo/hire-nexis-logo.png';
import '../styles/footer.css';

const socialLinks = [
  {
    label: 'Hire Nexis on LinkedIn',
    href: siteConfig.social.linkedin,
    Icon: LinkedInIcon,
  },
  {
    label: 'Hire Nexis on Instagram',
    href: siteConfig.social.instagram,
    Icon: InstagramIcon,
  },
  {
    label: 'Hire Nexis on YouTube',
    href: siteConfig.social.youtube,
    Icon: YouTubeIcon,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Link to="/" className="site-logo site-logo--footer" aria-label={`${siteConfig.name} home`}>
            <img src={logo} alt={siteConfig.name} width={240} height={96} />
          </Link>
          <p>
            A staffing and recruitment partner helping organizations build stronger teams through
            flexible workforce solutions.
          </p>
          <div className="site-footer__social">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="site-footer__title">Quick Links</h2>
          <ul className="site-footer__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/clients">Our Clients</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="site-footer__title">Our Services</h2>
          <ul className="site-footer__links">
            {services.map((service) => (
              <li key={service.id}>
                <Link to={service.path}>{service.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="site-footer__title">Contact</h2>
          <ul className="site-footer__contact">
            <li>
              <Mail size={18} aria-hidden="true" />
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            </li>
            <li>
              <Phone size={18} aria-hidden="true" />
              <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
            </li>
            <li>
              <MapPin size={18} aria-hidden="true" />
              <span>
                {siteConfig.contact.address}
                <br />
                {siteConfig.contact.city}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <div className="site-footer__legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
