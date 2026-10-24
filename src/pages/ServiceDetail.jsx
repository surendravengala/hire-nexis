import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';
import { images, siteConfig } from '../config/siteData';

const imageMap = {
  'contract-staffing': images.contract,
  'permanent-staffing': images.permanent,
};

export default function ServiceDetail({ service }) {
  if (!service) return null;

  const image = imageMap[service.id] || images.intro;

  return (
    <>
      <PageMeta
        title={`${service.title} | Hire Nexis`}
        description={service.summary}
      />

      <section className="page page-hero" aria-labelledby="service-hero-heading">
        <div className="container">
          <span className="page-hero__eyebrow">Our Services</span>
          <h1 id="service-hero-heading">{service.title}</h1>
          <p>{service.heroDescription}</p>
          <div className="btn-group" style={{ marginTop: '1.5rem' }}>
            <Link to="/contact" className="btn btn--primary">
              Discuss Your Hiring Needs
            </Link>
            <Link to="/services" className="btn btn--secondary">
              All Services
            </Link>
          </div>
        </div>
      </section>

      <AnimatedSection className="section" aria-labelledby="service-overview-heading">
        <div className="container service-detail__grid">
          <div>
            <h2 id="service-overview-heading">Service Overview</h2>
            <p>{service.summary}</p>
            <p>
              {service.title} from Hire Nexis is designed to give hiring leaders a clear process,
              responsive communication, and candidates aligned to the realities of the role—not
              just a keyword match.
            </p>
          </div>
          <div className="media-frame">
            <img
              src={image}
              alt={`${service.title} — professional workplace context`}
              width={800}
              height={600}
              loading="lazy"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section section--soft" aria-labelledby="challenges-heading">
        <div className="container">
          <h2 id="challenges-heading">Business Challenges This Service Addresses</h2>
          <ul className="challenge-list" style={{ marginTop: '1.25rem' }}>
            {service.challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section" aria-labelledby="how-heading">
        <div className="container service-detail__grid">
          <div>
            <h2 id="how-heading">How It Works</h2>
            <ol className="steps-list" style={{ marginTop: '1.25rem' }}>
              {service.howItWorks.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h2>Key Benefits</h2>
            <ul className="list-check" style={{ marginTop: '1.25rem' }}>
              {service.benefits.map((benefit) => (
                <li key={benefit}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section section--soft" aria-labelledby="scenarios-heading">
        <div className="container">
          <h2 id="scenarios-heading">Where This Service Fits</h2>
          <div className="grid-3" style={{ marginTop: '1.25rem' }}>
            {service.scenarios.map((scenario) => (
              <article key={scenario} className="card">
                <p style={{ margin: 0, color: 'var(--color-dark)', fontWeight: 600 }}>
                  {scenario}
                </p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: '1.75rem' }}>
            Prefer to speak with someone directly? Email{' '}
            <a className="text-link" href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>{' '}
            or visit our contact page.
          </p>
          <Link to="/contact" className="text-link" style={{ marginTop: '0.75rem' }}>
            Go to Contact Us <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </AnimatedSection>

      <CTASection
        title="Discuss Your Hiring Needs"
        description={`Learn how ${service.shortTitle} can support your next hire or team expansion.`}
        primaryLabel="Talk to Our Team"
        secondaryLabel="Explore Other Services"
        secondaryTo="/services"
      />
    </>
  );
}
