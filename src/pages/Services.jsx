import PageMeta from '../components/PageMeta';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';
import { pageMeta, services } from '../config/siteData';

export default function Services() {
  return (
    <>
      <PageMeta {...pageMeta.services} />

      <section className="page page-hero" aria-labelledby="services-page-heading">
        <div className="container">
          <span className="page-hero__eyebrow">Our Services</span>
          <h1 id="services-page-heading">Staffing Solutions for Growing Organizations</h1>
          <p>
            Explore flexible workforce models designed to support project demand and permanent
            hiring needs.
          </p>
        </div>
      </section>

      <AnimatedSection className="section" aria-labelledby="services-grid-heading">
        <div className="container">
          <SectionHeading
            title="Choose the Engagement That Fits"
            description="Each service can stand alone or complement a broader talent strategy."
            align="center"
          />
          <h2 id="services-grid-heading" className="sr-only">
            Choose the Engagement That Fits
          </h2>
          <div className="grid-2" style={{ alignItems: 'stretch' }}>
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTASection
        title="Not sure which model is right?"
        description="Tell us about your roles and timelines—we’ll help you choose a practical path forward."
        primaryLabel="Discuss Your Hiring Needs"
        secondaryLabel={null}
      />
    </>
  );
}
