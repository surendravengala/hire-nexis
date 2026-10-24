import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';
import ClientLogoGrid from '../components/ClientLogoGrid';
import { getIcon } from '../components/icons';
import { images, industries, pageMeta } from '../config/siteData';

export default function Clients() {
  return (
    <>
      <PageMeta {...pageMeta.clients} />

      <section className="page page-hero" aria-labelledby="clients-hero-heading">
        <div className="container">
          <span className="page-hero__eyebrow">Our Clients</span>
          <h1 id="clients-hero-heading">Partnerships Built on Trust and Clarity</h1>
          <p>
            Hire Nexis partners with organizations across industries. Explore the companies in our
            partner network below.
          </p>
        </div>
      </section>

      <AnimatedSection className="section" aria-labelledby="logo-grid-heading">
        <div className="container">
          <SectionHeading
            id="logo-grid-heading"
            title="Our Partner Network"
            description="A selection of organizations Hire Nexis works alongside."
            align="center"
          />
          <ClientLogoGrid labelledBy="logo-grid-heading" />
        </div>
      </AnimatedSection>

      <AnimatedSection className="section section--soft" aria-labelledby="client-industries-heading">
        <div className="container">
          <SectionHeading
            id="client-industries-heading"
            title="Industries Served"
            description="A flexible set of proposed categories that can be updated as Hire Nexis specializes further."
            align="center"
          />
          <div className="grid-3">
            {industries.map((industry) => {
              const Icon = getIcon(industry.icon);
              return (
                <article key={industry.id} className="card industry-card">
                  <div className="icon-badge" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3>{industry.title}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section" aria-labelledby="partnership-heading">
        <div className="container grid-2">
          <div>
            <SectionHeading id="partnership-heading" title="Our Partnership Approach" as="h2" />
            <p>
              We treat client engagement as a working relationship. That means understanding your
              hiring context, aligning on expectations early, and staying available as needs evolve.
            </p>
            <p>
              Whether you need short-term capacity, permanent search support, or a scalable
              recruitment process, our goal is consistent: introduce qualified professionals and
              make the hiring experience clear for everyone involved.
            </p>
            <Link to="/contact" className="btn btn--primary" style={{ marginTop: '0.5rem' }}>
              Become a Client
            </Link>
          </div>
          <div className="media-frame">
            <img
              src={images.clients}
              alt="Modern office interior representing a professional client environment"
              width={900}
              height={675}
              loading="lazy"
            />
          </div>
        </div>
      </AnimatedSection>

      <CTASection
        title="Ready to partner with Hire Nexis?"
        description="Share your hiring goals and we’ll outline a practical next step for your organization."
        primaryLabel="Become a Client"
        secondaryLabel="Explore Services"
      />
    </>
  );
}
